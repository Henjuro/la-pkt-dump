// Auto Generated, do not edit.
import { Read } from "../../stream";
import * as EquipItemData from "../structures/EquipItemData";
export type PKTEquipChangeNotify = {
  equipItemDataList: EquipItemData.EquipItemData[];
  objectId: bigint;
  unk_1: number;
  unk0: number;
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTEquipChangeNotify;
  data.equipItemDataList = reader.array(reader.u16(), () => EquipItemData.read(reader), 33);
  data.objectId = reader.u64();
  data.unk_1 = reader.f32();
  data.unk0 = reader.f32();
  return data;
}
export const name = "PKTEquipChangeNotify";
export const opcode = 46264;
