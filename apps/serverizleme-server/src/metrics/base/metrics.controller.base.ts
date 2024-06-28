/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { MetricsService } from "../metrics.service";
import { MetricsCreateInput } from "./MetricsCreateInput";
import { Metrics } from "./Metrics";
import { MetricsFindManyArgs } from "./MetricsFindManyArgs";
import { MetricsWhereUniqueInput } from "./MetricsWhereUniqueInput";
import { MetricsUpdateInput } from "./MetricsUpdateInput";

export class MetricsControllerBase {
  constructor(protected readonly service: MetricsService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Metrics })
  async createMetrics(
    @common.Body() data: MetricsCreateInput
  ): Promise<Metrics> {
    return await this.service.createMetrics({
      data: {
        ...data,

        server: data.server
          ? {
              connect: data.server,
            }
          : undefined,
      },
      select: {
        cpuPercentage: true,
        cpuUsage: true,
        createdAt: true,
        dateTime: true,
        id: true,
        numberOfUsers: true,
        outboundGb: true,
        ramPercentage: true,

        server: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
        usedRam: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Metrics] })
  @ApiNestedQuery(MetricsFindManyArgs)
  async metricsItems(@common.Req() request: Request): Promise<Metrics[]> {
    const args = plainToClass(MetricsFindManyArgs, request.query);
    return this.service.metricsItems({
      ...args,
      select: {
        cpuPercentage: true,
        cpuUsage: true,
        createdAt: true,
        dateTime: true,
        id: true,
        numberOfUsers: true,
        outboundGb: true,
        ramPercentage: true,

        server: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
        usedRam: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Metrics })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async metrics(
    @common.Param() params: MetricsWhereUniqueInput
  ): Promise<Metrics | null> {
    const result = await this.service.metrics({
      where: params,
      select: {
        cpuPercentage: true,
        cpuUsage: true,
        createdAt: true,
        dateTime: true,
        id: true,
        numberOfUsers: true,
        outboundGb: true,
        ramPercentage: true,

        server: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
        usedRam: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Metrics })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateMetrics(
    @common.Param() params: MetricsWhereUniqueInput,
    @common.Body() data: MetricsUpdateInput
  ): Promise<Metrics | null> {
    try {
      return await this.service.updateMetrics({
        where: params,
        data: {
          ...data,

          server: data.server
            ? {
                connect: data.server,
              }
            : undefined,
        },
        select: {
          cpuPercentage: true,
          cpuUsage: true,
          createdAt: true,
          dateTime: true,
          id: true,
          numberOfUsers: true,
          outboundGb: true,
          ramPercentage: true,

          server: {
            select: {
              id: true,
            },
          },

          updatedAt: true,
          usedRam: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Metrics })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteMetrics(
    @common.Param() params: MetricsWhereUniqueInput
  ): Promise<Metrics | null> {
    try {
      return await this.service.deleteMetrics({
        where: params,
        select: {
          cpuPercentage: true,
          cpuUsage: true,
          createdAt: true,
          dateTime: true,
          id: true,
          numberOfUsers: true,
          outboundGb: true,
          ramPercentage: true,

          server: {
            select: {
              id: true,
            },
          },

          updatedAt: true,
          usedRam: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}