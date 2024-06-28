/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { Metrics } from "./Metrics";
import { MetricsCountArgs } from "./MetricsCountArgs";
import { MetricsFindManyArgs } from "./MetricsFindManyArgs";
import { MetricsFindUniqueArgs } from "./MetricsFindUniqueArgs";
import { CreateMetricsArgs } from "./CreateMetricsArgs";
import { UpdateMetricsArgs } from "./UpdateMetricsArgs";
import { DeleteMetricsArgs } from "./DeleteMetricsArgs";
import { Server } from "../../server/base/Server";
import { MetricsService } from "../metrics.service";
@graphql.Resolver(() => Metrics)
export class MetricsResolverBase {
  constructor(protected readonly service: MetricsService) {}

  async _metricsItemsMeta(
    @graphql.Args() args: MetricsCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Metrics])
  async metricsItems(
    @graphql.Args() args: MetricsFindManyArgs
  ): Promise<Metrics[]> {
    return this.service.metricsItems(args);
  }

  @graphql.Query(() => Metrics, { nullable: true })
  async metrics(
    @graphql.Args() args: MetricsFindUniqueArgs
  ): Promise<Metrics | null> {
    const result = await this.service.metrics(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Metrics)
  async createMetrics(
    @graphql.Args() args: CreateMetricsArgs
  ): Promise<Metrics> {
    return await this.service.createMetrics({
      ...args,
      data: {
        ...args.data,

        server: args.data.server
          ? {
              connect: args.data.server,
            }
          : undefined,
      },
    });
  }

  @graphql.Mutation(() => Metrics)
  async updateMetrics(
    @graphql.Args() args: UpdateMetricsArgs
  ): Promise<Metrics | null> {
    try {
      return await this.service.updateMetrics({
        ...args,
        data: {
          ...args.data,

          server: args.data.server
            ? {
                connect: args.data.server,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Metrics)
  async deleteMetrics(
    @graphql.Args() args: DeleteMetricsArgs
  ): Promise<Metrics | null> {
    try {
      return await this.service.deleteMetrics(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => Server, {
    nullable: true,
    name: "server",
  })
  async getServer(@graphql.Parent() parent: Metrics): Promise<Server | null> {
    const result = await this.service.getServer(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}