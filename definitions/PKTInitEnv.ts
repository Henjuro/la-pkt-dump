// Auto Generated, do not edit.
import { Read } from "../../stream";
import * as LostArkDateTime from "../../common/LostArkDateTime";
export type PKTInitEnv = {
  lostArkDateTime: LostArkDateTime.LostArkDateTime;
  unk0: number;
  unk1: boolean;
  playerId: bigint;
  unk2: number;
  unk3: bigint;
  struct_31: { struct_559: string; versionString: string; struct_575: string }[];
  struct_575: string;
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTInitEnv;
  data.lostArkDateTime = LostArkDateTime.read(reader);
  data.unk0 = reader.u32();
  data.unk1 = reader.bool();
  data.playerId = reader.u64();
  data.unk2 = reader.u32();
  data.unk3 = reader.u64();
  data.struct_31 = reader.array(
    reader.u16(),
    () => {
      const i = {} as { struct_559: string; versionString: string; struct_575: string };
      i.versionString = reader.string(64);
      i.struct_559 = reader.string(32);
      i.struct_575 = reader.string(128);
      return i;
    },
    64
  );
  data.struct_575 = reader.string(128);
  return data;
}
export const name = "PKTInitEnv";
export const opcode = 43544;
