import { Test } from "@nestjs/testing";
import {
  INestApplication,
  HttpStatus,
  ExecutionContext,
  CallHandler,
} from "@nestjs/common";
import request from "supertest";
import { ACGuard } from "nest-access-control";
import { DefaultAuthGuard } from "../../auth/defaultAuth.guard";
import { ACLModule } from "../../auth/acl.module";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { map } from "rxjs";
import { MetricsController } from "../metrics.controller";
import { MetricsService } from "../metrics.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  cpuPercentage: 42.42,
  cpuUsage: 42.42,
  createdAt: new Date(),
  dateTime: new Date(),
  id: "exampleId",
  numberOfUsers: 42,
  outboundGb: 42.42,
  ramPercentage: 42.42,
  updatedAt: new Date(),
  usedRam: 42.42,
};
const CREATE_RESULT = {
  cpuPercentage: 42.42,
  cpuUsage: 42.42,
  createdAt: new Date(),
  dateTime: new Date(),
  id: "exampleId",
  numberOfUsers: 42,
  outboundGb: 42.42,
  ramPercentage: 42.42,
  updatedAt: new Date(),
  usedRam: 42.42,
};
const FIND_MANY_RESULT = [
  {
    cpuPercentage: 42.42,
    cpuUsage: 42.42,
    createdAt: new Date(),
    dateTime: new Date(),
    id: "exampleId",
    numberOfUsers: 42,
    outboundGb: 42.42,
    ramPercentage: 42.42,
    updatedAt: new Date(),
    usedRam: 42.42,
  },
];
const FIND_ONE_RESULT = {
  cpuPercentage: 42.42,
  cpuUsage: 42.42,
  createdAt: new Date(),
  dateTime: new Date(),
  id: "exampleId",
  numberOfUsers: 42,
  outboundGb: 42.42,
  ramPercentage: 42.42,
  updatedAt: new Date(),
  usedRam: 42.42,
};

const service = {
  createMetrics() {
    return CREATE_RESULT;
  },
  metricsItems: () => FIND_MANY_RESULT,
  metrics: ({ where }: { where: { id: string } }) => {
    switch (where.id) {
      case existingId:
        return FIND_ONE_RESULT;
      case nonExistingId:
        return null;
    }
  },
};

const basicAuthGuard = {
  canActivate: (context: ExecutionContext) => {
    const argumentHost = context.switchToHttp();
    const request = argumentHost.getRequest();
    request.user = {
      roles: ["user"],
    };
    return true;
  },
};

const acGuard = {
  canActivate: () => {
    return true;
  },
};

const aclFilterResponseInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle().pipe(
      map((data) => {
        return data;
      })
    );
  },
};
const aclValidateRequestInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle();
  },
};

describe("Metrics", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: MetricsService,
          useValue: service,
        },
      ],
      controllers: [MetricsController],
      imports: [ACLModule],
    })
      .overrideGuard(DefaultAuthGuard)
      .useValue(basicAuthGuard)
      .overrideGuard(ACGuard)
      .useValue(acGuard)
      .overrideInterceptor(AclFilterResponseInterceptor)
      .useValue(aclFilterResponseInterceptor)
      .overrideInterceptor(AclValidateRequestInterceptor)
      .useValue(aclValidateRequestInterceptor)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  test("POST /metrics", async () => {
    await request(app.getHttpServer())
      .post("/metrics")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        dateTime: CREATE_RESULT.dateTime.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /metrics", async () => {
    await request(app.getHttpServer())
      .get("/metrics")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          dateTime: FIND_MANY_RESULT[0].dateTime.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /metrics/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/metrics"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /metrics/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/metrics"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        dateTime: FIND_ONE_RESULT.dateTime.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /metrics existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/metrics")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        dateTime: CREATE_RESULT.dateTime.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/metrics")
          .send(CREATE_INPUT)
          .expect(HttpStatus.CONFLICT)
          .expect({
            statusCode: HttpStatus.CONFLICT,
          });
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
