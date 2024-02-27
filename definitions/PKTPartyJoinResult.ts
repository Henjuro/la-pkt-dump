// Auto Generated, do not edit.
import { Read } from "../../stream";
export type PKTPartyJoinResult = {
  unk0: boolean;
  unk1: number;
  unk2: number;
  unk3: number;
  unk4: string;
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTPartyJoinResult;
  data.unk0 = reader.bool();
  data.unk1 = reader.u32();
  data.unk2 = reader.u32();
  data.unk3 = reader.u8();
  data.unk4 = reader.string(20);
  return data;
}
export const name = "PKTPartyJoinResult";
export const opcode = 42751;
