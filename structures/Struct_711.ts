// Auto Generated, do not edit.
import type { Read } from "../../stream";
import * as EquipItemData from "../structures/EquipItemData";
export type Struct_711 = {
  lostArkString: string;
  unk0: number;
  lookData: Buffer;
  unk1: bigint;
  unk2: number;
  equipItemDataList: EquipItemData.EquipItemData[];
  unk3: number;
  unk4: bigint;
  unk5: number;
};
export function read(reader: Read) {
  const data = {} as Struct_711;
  data.lostArkString = reader.string(20);
  data.unk0 = reader.u8();
  data.lookData = reader.bytes(reader.u32(), 512);
  data.unk1 = reader.u64();
  data.unk2 = reader.u8();
  data.equipItemDataList = reader.array(reader.u16(), () => EquipItemData.read(reader), 33);
  data.unk3 = reader.u8();
  data.unk4 = reader.u64();
  data.unk5 = reader.u16();
  return data;
}
