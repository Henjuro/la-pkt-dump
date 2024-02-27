// Auto Generated, do not edit.
import type { Read } from "../../stream";
export type Struct_731 = {
  unk0?: Buffer;
  unk1: number;
  unk2: number;
  unk3?: number;
  unk4: number;
};
export function read(reader: Read) {
  const data = {} as Struct_731;
  if (reader.bool()) data.unk0 = reader.bytes(9);
  data.unk1 = reader.u32();
  data.unk2 = reader.u32();
  if (reader.bool()) data.unk3 = reader.u32();
  data.unk4 = reader.u32();
  return data;
}
