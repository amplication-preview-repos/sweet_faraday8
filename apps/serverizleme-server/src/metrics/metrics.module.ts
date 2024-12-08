import { Module } from "@nestjs/common";
import { MetricsModuleBase } from "./base/metrics.module.base";
import { MetricsService } from "./metrics.service";
import { MetricsController } from "./metrics.controller";
import { MetricsResolver } from "./metrics.resolver";

@Module({
  imports: [MetricsModuleBase],
  controllers: [MetricsController],
  providers: [MetricsService, MetricsResolver],
  exports: [MetricsService],
})
export class MetricsModule {}
