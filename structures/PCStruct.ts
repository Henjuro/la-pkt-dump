// Auto Generated, do not edit.
import type { Read } from "../../stream";
import * as Angle from "../../common/Angle";
import * as Vector3F from "../../common/Vector3F";
import * as ReadNBytesInt64 from "../../common/ReadNBytesInt64";
import * as EquipItemData from "../structures/EquipItemData";
import * as StatusEffectData from "../structures/StatusEffectData";
import * as PeriodUpdateStatData from "../structures/PeriodUpdateStatData";
export type PCStruct = {
  unk0: number;
  periodUpdateStatDataList: PeriodUpdateStatData.PeriodUpdateStatData[];
  statPair: { value: bigint; statType: number }[];
  maxItemLevel: number;
  characterId: bigint;
  grabbedData?: Buffer;
  heading: Angle.Angle;
  unk1: number;
  name: string;
  statusEffectDatas: StatusEffectData.StatusEffectData[];
  position: Vector3F.Vector3F;
  avgItemLevel: number;
  pedId: number;
  unk2: number;
  unk3: number;
  unk4: number;
  equipItemDataList: EquipItemData.EquipItemData[];
  unk5: number;
  equipLifeToolDataList: EquipItemData.EquipItemData[];
  secondHonorTitleId: number;
  unk6: bigint;
  unk7: number;
  unk8: number;
  lookData: Buffer;
  unk9: Buffer;
  worldId: number;
  guildId: bigint;
  firstHonorTitleId: number;
  avatarHide: number;
  unk10: number;
  addonFeatureIdList: Buffer;
  unk11: number;
  unk12: number;
  rvRLevel: number;
  unk13: number;
  guildName: string;
  addonSkillFeatureList: { addonSkillFeatureIdList: number[]; skillId: number }[];
  unk14: number;
  unk15: number;
  unk16: number;
  unk17: number;
  unk18: number;
  classId: number;
  level: number;
  identityData: Buffer;
  playerId: bigint;
};
export function read(reader: Read) {
  const data = {} as PCStruct;
  data.unk0 = reader.u32();
  data.periodUpdateStatDataList = reader.array(reader.u16(), () => PeriodUpdateStatData.read(reader), 5);
  data.statPair = reader.array(
    reader.u16(),
    () => {
      const k = {} as { value: bigint; statType: number };
      k.value = ReadNBytesInt64.read(reader);
      k.statType = reader.u8();
      return k;
    },
    153
  );
  data.maxItemLevel = reader.f32();
  data.characterId = reader.u64();
  if (reader.bool()) data.grabbedData = reader.bytes(12);
  data.heading = Angle.read(reader);
  data.unk1 = reader.u8();
  data.name = reader.string(20);
  data.statusEffectDatas = reader.array(reader.u16(), () => StatusEffectData.read(reader), 80);
  data.position = Vector3F.read(reader);
  data.avgItemLevel = reader.f32();
  data.pedId = reader.u32();
  data.unk2 = reader.u8();
  data.unk3 = reader.u32();
  data.unk4 = reader.u8();
  data.equipItemDataList = reader.array(reader.u16(), () => EquipItemData.read(reader), 33);
  data.unk5 = reader.u8();
  data.equipLifeToolDataList = reader.array(reader.u16(), () => EquipItemData.read(reader), 9);
  data.secondHonorTitleId = reader.u16();
  data.unk6 = reader.u64();
  data.unk7 = reader.u32();
  data.unk8 = reader.u8();
  data.lookData = reader.bytes(reader.u32(), 512);
  data.unk9 = reader.bytes(5);
  data.worldId = reader.u8();
  data.guildId = reader.u64();
  data.firstHonorTitleId = reader.u16();
  data.avatarHide = reader.u8();
  data.unk10 = reader.u32();
  data.addonFeatureIdList = reader.bytes(reader.u16(), 200, 4);
  data.unk11 = reader.u8();
  data.unk12 = reader.u8();
  data.rvRLevel = reader.u16();
  data.unk13 = reader.u32();
  data.guildName = reader.string(20);
  data.addonSkillFeatureList = reader.array(
    reader.u16(),
    () => {
      const L = {} as { addonSkillFeatureIdList: number[]; skillId: number };
      L.skillId = reader.u32();
      L.addonSkillFeatureIdList = reader.array(reader.u16(), () => reader.u32(), 5);
      return L;
    },
    200
  );
  data.unk14 = reader.u32();
  data.unk15 = reader.u32();
  data.unk16 = reader.u8();
  data.unk17 = reader.u8();
  data.unk18 = reader.u8();
  data.classId = reader.u16();
  data.level = reader.u16();
  data.identityData = reader.bytes(25);
  data.playerId = reader.u64();
  return data;
}
