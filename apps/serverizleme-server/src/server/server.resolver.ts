import * as graphql from "@nestjs/graphql";
import { ServerResolverBase } from "./base/server.resolver.base";
import { Server } from "./base/Server";
import { ServerService } from "./server.service";

@graphql.Resolver(() => Server)
export class ServerResolver extends ServerResolverBase {
  constructor(protected readonly service: ServerService) {
    super(service);
  }
}
