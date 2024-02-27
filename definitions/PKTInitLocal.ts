// Auto Generated, do not edit.
import { Read } from "../../stream";
import * as StatusEffectData from "../structures/StatusEffectData";
import * as AbilityData from "../structures/AbilityData";
import * as ReadNBytesInt64 from "../../common/ReadNBytesInt64";
import * as Struct_731 from "../structures/Struct_731";
export type PKTInitLocal = {
  struct_337: Buffer;
  addonFeatureIdList: Buffer;
  addonSkillFeatureList: { addonSkillFeatureIdList: number[]; skillId: number }[];
  unk0: number;
  statusEffectDatas: StatusEffectData.StatusEffectData[];
  struct_416: Struct_731.Struct_731[];
  unk1?: number;
  struct_135: Buffer;
  unk2: number;
  unk3: bigint;
  unk4: number;
  abilityDataList: AbilityData.AbilityData[];
  unk5: number;
  unk6: bigint;
  struct_222: Buffer;
  statPair: { value: bigint; statType: number }[];
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTInitLocal;
  data.struct_337 = reader.bytes(reader.u16(), 104, 30);
  data.addonFeatureIdList = reader.bytes(reader.u16(), 200, 4);
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
  data.unk0 = reader.u8();
  data.statusEffectDatas = reader.array(reader.u16(), () => StatusEffectData.read(reader), 80);
  data.struct_416 = reader.array(reader.u16(), () => Struct_731.read(reader), 300);
  if (reader.bool()) data.unk1 = reader.u32();
  data.struct_135 = reader.bytes(reader.u16(), 353, 48);
  data.unk2 = reader.u32();
  data.unk3 = reader.u64();
  data.unk4 = reader.u8();
  data.abilityDataList = reader.array(reader.u16(), () => AbilityData.read(reader), 100);
  data.unk5 = reader.u8();
  data.unk6 = reader.u64();
  data.struct_222 = reader.bytes(reader.u16(), 3, 17);
  data.statPair = reader.array(
    reader.u16(),
    () => {
      const k = {} as { value: bigint; statType: number };
      k.value = ReadNBytesInt64.read(reader);
      k.statType = reader.u8();
      return k;
    },
    152
  );
  return data;
}
export const name = "PKTInitLocal";
export const opcode = 24890;
