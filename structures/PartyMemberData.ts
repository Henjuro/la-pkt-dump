// Auto Generated, do not edit.
import type { Read } from "../../stream";
import * as ReadNBytesInt64 from "../../common/ReadNBytesInt64";
import * as Vector3F from "../../common/Vector3F";
export type PartyMemberData = {
  name: string;
  worldId: number;
  auths: number;
  position: Vector3F.Vector3F;
  zoneInstId: bigint;
  classId: number;
  unk0: number;
  transitIndex: number;
  unk1: number;
  unk2: number;
  unk3: number;
  unk4: number;
  maxHp: bigint;
  partyMemberNumber: number;
  gearLevel: number;
  unk5: number;
  curHp: bigint;
  characterId: bigint;
  zoneId: number;
  characterLevel: number;
};
export function read(reader: Read) {
  const data = {} as PartyMemberData;
  data.name = reader.string(20);
  data.worldId = reader.u8();
  data.auths = reader.u8();
  data.position = Vector3F.read(reader);
  data.zoneInstId = reader.u64();
  data.classId = reader.u16();
  data.unk0 = reader.u8();
  data.transitIndex = reader.u32();
  data.unk1 = reader.u16();
  data.unk2 = reader.u8();
  data.unk3 = reader.u8();
  data.unk4 = reader.u8();
  data.maxHp = ReadNBytesInt64.read(reader);
  data.partyMemberNumber = reader.u8();
  data.gearLevel = reader.f32();
  data.unk5 = reader.u8();
  data.curHp = ReadNBytesInt64.read(reader);
  data.characterId = reader.u64();
  data.zoneId = reader.u32();
  data.characterLevel = reader.u16();
  return data;
}
