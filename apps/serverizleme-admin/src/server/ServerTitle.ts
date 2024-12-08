import { Server as TServer } from "../api/server/Server";

export const SERVER_TITLE_FIELD = "name";

export const ServerTitle = (record: TServer): string => {
  return record.name?.toString() || String(record.id);
};
