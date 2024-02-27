// Auto Generated, do not edit.
import { Read } from "../../stream";
import * as TrapData from "../structures/TrapData";
export type PKTNewTrap = {
  unk0: boolean;
  trapData: TrapData.TrapData;
  publishReason: number;
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTNewTrap;
  data.unk0 = reader.bool();
  data.trapData = TrapData.read(reader);
  data.publishReason = reader.u8();
  return data;
}
export const name = "PKTNewTrap";
export const opcode = 59491;
