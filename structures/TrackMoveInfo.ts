// Auto Generated, do not edit.
import type { Read } from "../../stream";
export type TrackMoveInfo = {
  unk0?: Buffer;
  unk1: Buffer;
  unk2: number;
  unk3: number;
};
export function read(reader: Read) {
  const data = {} as TrackMoveInfo;
  if (reader.bool()) data.unk0 = reader.bytes(12);
  data.unk1 = reader.bytes(12);
  data.unk2 = reader.u32();
  data.unk3 = reader.u32();
  return data;
}
