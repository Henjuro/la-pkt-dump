// Auto Generated, do not edit.
import type { Read } from "../../stream";
import * as SkillMoveOptionData from "../../common/SkillMoveOptionData";
import * as SkillDamageEvent from "../structures/SkillDamageEvent";
import * as Vector3F from "../../common/Vector3F";
export type SkillDamageAbnormalMoveEvent = {
  unk0: bigint;
  skillDamageEvent: SkillDamageEvent.SkillDamageEvent;
  unk1: number;
  destination: Vector3F.Vector3F;
  unk2: number;
  skillMoveOptionData: SkillMoveOptionData.SkillMoveOptionData;
  unk3: number;
  unk4: number;
  position: Vector3F.Vector3F;
};
export function read(reader: Read) {
  const data = {} as SkillDamageAbnormalMoveEvent;
  data.unk0 = reader.u64();
  data.skillDamageEvent = SkillDamageEvent.read(reader);
  data.unk1 = reader.u16();
  data.destination = Vector3F.read(reader);
  data.unk2 = reader.u16();
  data.skillMoveOptionData = SkillMoveOptionData.read(reader);
  data.unk3 = reader.u8();
  data.unk4 = reader.u16();
  data.position = Vector3F.read(reader);
  return data;
}
