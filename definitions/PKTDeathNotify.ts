// Auto Generated, do not edit.
import { Read } from "../../stream";
export type PKTDeathNotify = {
  unk0: bigint;
  unk1?: number;
  targetId: bigint;
  unk2: number;
  unk3: number;
  unk4: boolean;
  sourceId: bigint;
  unk5?: number;
  unk6: number;
  unk7?: number;
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTDeathNotify;
  data.unk0 = reader.u64();
  if (reader.bool()) data.unk1 = reader.u8();
  data.targetId = reader.u64();
  data.unk2 = reader.u32();
  data.unk3 = reader.u32();
  data.unk4 = reader.bool();
  data.sourceId = reader.u64();
  if (reader.bool()) data.unk5 = reader.u8();
  data.unk6 = reader.u16();
  if (reader.bool()) data.unk7 = reader.u8();
  return data;
}
export const name = "PKTDeathNotify";
export const opcode = 20789;
