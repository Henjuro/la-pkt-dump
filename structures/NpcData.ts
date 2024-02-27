// Auto Generated, do not edit.
import type { Read } from "../../stream";
import * as Struct_711 from "../structures/Struct_711";
import * as Angle from "../../common/Angle";
import * as Vector3F from "../../common/Vector3F";
import * as ReadNBytesInt64 from "../../common/ReadNBytesInt64";
import * as StatusEffectData from "../structures/StatusEffectData";
import * as PeriodUpdateStatData from "../structures/PeriodUpdateStatData";
export type NpcData = {
  objectId: bigint;
  unk0: boolean;
  unk1?: number;
  unk2?: number;
  statusEffectDatas: StatusEffectData.StatusEffectData[];
  unk3?: number;
  balanceLevel?: number;
  unk4?: number;
  periodUpdateStatDataList: PeriodUpdateStatData.PeriodUpdateStatData[];
  unk5: number;
  unk6: boolean;
  struct_711?: Struct_711.Struct_711;
  unk7?: bigint;
  struct_333?: Buffer;
  typeId: number;
  unk8?: number;
  unk9?: number;
  unk10: number;
  unk11?: number;
  transitIndex?: number;
  unk12?: number;
  unk13: number;
  unk14?: number;
  statPair: { value: bigint; statType: number }[];
  level: number;
  directionYaw: Angle.Angle;
  position: Vector3F.Vector3F;
  struct_267?: Buffer;
  unk15?: number;
  spawnIndex: number;
  unk16?: number;
  unk17?: number;
  unk18: number;
};
export function read(reader: Read) {
  const data = {} as NpcData;
  data.objectId = reader.u64();
  data.unk0 = reader.bool();
  if (reader.bool()) data.unk1 = reader.u8();
  if (reader.bool()) data.unk2 = reader.u32();
  data.statusEffectDatas = reader.array(reader.u16(), () => StatusEffectData.read(reader), 80);
  if (reader.bool()) data.unk3 = reader.u8();
  if (reader.bool()) data.balanceLevel = reader.u16();
  if (reader.bool()) data.unk4 = reader.u8();
  data.periodUpdateStatDataList = reader.array(reader.u16(), () => PeriodUpdateStatData.read(reader), 5);
  data.unk5 = reader.u8();
  data.unk6 = reader.bool();
  if (reader.bool()) data.struct_711 = Struct_711.read(reader);
  if (reader.bool()) data.unk7 = reader.u64();
  if (reader.bool()) data.struct_333 = reader.bytes(reader.u16(), 11, 9);
  data.typeId = reader.u32();
  if (reader.bool()) data.unk8 = reader.u8();
  if (reader.bool()) data.unk9 = reader.u16();
  data.unk10 = reader.u8();
  if (reader.bool()) data.unk11 = reader.u8();
  if (reader.bool()) data.transitIndex = reader.u32();
  if (reader.bool()) data.unk12 = reader.u8();
  data.unk13 = reader.u8();
  if (reader.bool()) data.unk14 = reader.u32();
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
  data.level = reader.u16();
  data.directionYaw = Angle.read(reader);
  data.position = Vector3F.read(reader);
  if (reader.bool()) data.struct_267 = reader.bytes(reader.u16(), 12, 12);
  if (reader.bool()) data.unk15 = reader.u8();
  data.spawnIndex = reader.u32();
  if (reader.bool()) data.unk16 = reader.u32();
  if (reader.bool()) data.unk17 = reader.u32();
  data.unk18 = reader.u8();
  return data;
}
