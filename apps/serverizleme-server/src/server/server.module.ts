import { Module } from "@nestjs/common";
import { ServerModuleBase } from "./base/server.module.base";
import { ServerService } from "./server.service";
import { ServerController } from "./server.controller";
import { ServerResolver } from "./server.resolver";

@Module({
  imports: [ServerModuleBase],
  controllers: [ServerController],
  providers: [ServerService, ServerResolver],
  exports: [ServerService],
})
export class ServerModule {}
