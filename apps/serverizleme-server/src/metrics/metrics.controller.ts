import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { MetricsService } from "./metrics.service";
import { MetricsControllerBase } from "./base/metrics.controller.base";

@swagger.ApiTags("metrics")
@common.Controller("metrics")
export class MetricsController extends MetricsControllerBase {
  constructor(protected readonly service: MetricsService) {
    super(service);
  }
}
