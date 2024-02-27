// Auto Generated, do not edit.
import { Read } from "../../stream";
export type PKTMigrationExecute = {
  serverAddr: string;
  account_CharacterId1: bigint;
  unk_1: number;
  account_CharacterId2: bigint;
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTMigrationExecute;
  data.serverAddr = reader.string(256);
  data.account_CharacterId1 = reader.u64();
  data.unk_1 = reader.u32();
  data.account_CharacterId2 = reader.u64();
  return data;
}
export const name = "PKTMigrationExecute";
export const opcode = 1461;
