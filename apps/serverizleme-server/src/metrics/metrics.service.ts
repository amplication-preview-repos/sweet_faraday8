import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { MetricsServiceBase } from "./base/metrics.service.base";

@Injectable()
export class MetricsService extends MetricsServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
