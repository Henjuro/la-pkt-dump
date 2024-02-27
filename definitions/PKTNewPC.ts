// Auto Generated, do not edit.
import { Read } from "../../stream";
import * as PCStruct from "../structures/PCStruct";
import * as TrackMoveInfo from "../structures/TrackMoveInfo";
export type PKTNewPC = {
  unk0?: Buffer;
  unk1?: number;
  trackMoveInfo?: TrackMoveInfo.TrackMoveInfo;
  unk2?: Buffer;
  itemLookInfoList?: { itemTint: Buffer; unk1_0_1: number; unk1_0_2: bigint }[];
  unk3: number;
  pcStruct: PCStruct.PCStruct;
  itemLookInfo?:  { itemTint: Buffer; unk1_0_1: number; unk1_0_2: bigint };
  unk4: boolean;
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTNewPC;
  if (reader.bool()) data.unk0 = reader.bytes(20);
  if (reader.bool()) data.unk1 = reader.u32();
  if (reader.bool()) data.trackMoveInfo = TrackMoveInfo.read(reader);
  if (reader.bool()) data.unk2 = reader.bytes(12);
  if (reader.bool()) {
    data.itemLookInfoList = reader.array(
      reader.u16(),
      () => {
        const L = {} as { itemTint: Buffer; unk1_0_1: number; unk1_0_2: bigint };
        L.itemTint = reader.bytes(reader.u16(), 5, 14);
        L.unk1_0_1 = reader.u32();
        L.unk1_0_2 = reader.u64();
        return L;
      },
      5
    );
  }
  data.unk3 = reader.u8();
  data.pcStruct = PCStruct.read(reader);
  if (reader.bool()) {
    data.itemLookInfo = {} as { itemTint: Buffer; unk1_0_1: number; unk1_0_2: bigint };
    data.itemLookInfo.unk1_0_1 = reader.u32();
    data.itemLookInfo.itemTint = reader.bytes(reader.u16(), 5, 14);
    data.itemLookInfo.unk1_0_2 = reader.u64();
  }

  data.unk4 = reader.bool();
  return data;
}
export const name = "PKTNewPC";
export const opcode = 33762;
