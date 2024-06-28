import * as graphql from "@nestjs/graphql";
import { MetricsResolverBase } from "./base/metrics.resolver.base";
import { Metrics } from "./base/Metrics";
import { MetricsService } from "./metrics.service";

@graphql.Resolver(() => Metrics)
export class MetricsResolver extends MetricsResolverBase {
  constructor(protected readonly service: MetricsService) {
    super(service);
  }
}
