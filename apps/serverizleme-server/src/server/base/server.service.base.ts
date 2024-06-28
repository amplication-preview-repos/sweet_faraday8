/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import {
  Prisma,
  Server as PrismaServer,
  Metrics as PrismaMetrics,
} from "@prisma/client";

export class ServerServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.ServerCountArgs, "select">): Promise<number> {
    return this.prisma.server.count(args);
  }

  async servers(args: Prisma.ServerFindManyArgs): Promise<PrismaServer[]> {
    return this.prisma.server.findMany(args);
  }
  async server(
    args: Prisma.ServerFindUniqueArgs
  ): Promise<PrismaServer | null> {
    return this.prisma.server.findUnique(args);
  }
  async createServer(args: Prisma.ServerCreateArgs): Promise<PrismaServer> {
    return this.prisma.server.create(args);
  }
  async updateServer(args: Prisma.ServerUpdateArgs): Promise<PrismaServer> {
    return this.prisma.server.update(args);
  }
  async deleteServer(args: Prisma.ServerDeleteArgs): Promise<PrismaServer> {
    return this.prisma.server.delete(args);
  }

  async findMetricsItems(
    parentId: string,
    args: Prisma.MetricsFindManyArgs
  ): Promise<PrismaMetrics[]> {
    return this.prisma.server
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .metricsItems(args);
  }
}
