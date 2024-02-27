// Auto Generated, do not edit.
import type { Read } from "../../stream";
import * as Vector3F from "../../common/Vector3F";
export type TrapData = {
  skillEffect: number;
  unk0: number;
  position: Vector3F.Vector3F;
  unk1: number;
  objectId: bigint;
  skillId: number;
  unk3: number;
  unk4: number;
  ownerId: bigint;
  unk_6: number;
  struct_333?: Buffer;
  unk5: number;
  unk_0: number;
};
export function read(reader: Read) {
  const data = {} as TrapData;
  data.skillEffect = reader.u32();
  data.unk0 = reader.u8();
  data.position = Vector3F.read(reader);
  data.unk1 = reader.u8();
  data.objectId = reader.u64();
  data.skillId = reader.u32();
  data.unk3 = reader.u32();
  data.unk4 = reader.u8();
  data.ownerId = reader.u64();
  data.unk_6 = reader.u32();
  if (reader.bool()) data.struct_333 = reader.bytes(reader.u16(), 11, 9);
  data.unk5 = reader.u32();
  data.unk_0 = reader.u16();
  return data;
}
