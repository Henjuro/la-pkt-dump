// Auto Generated, do not edit.
import { Read } from "../../stream";
import * as ReadNBytesInt64 from "../../common/ReadNBytesInt64";
export type PKTRaidResult = {
  struct_52: { unk0: number; unk1: bigint; unk2: bigint; struct_517: Buffer }[];
  unk0: bigint;
  unk1: bigint;
  unk2: boolean;
  unk3: boolean;
  unk4: bigint;
  raidResult: number;
  unk5: bigint;
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTRaidResult;
  data.struct_52 = reader.array(
    reader.u16(),
    () => {
      const X = {} as { unk0: number; unk1: bigint; unk2: bigint; struct_517: Buffer };
      X.unk1 = ReadNBytesInt64.read(reader);
      X.unk0 = reader.u32();
      X.unk2 = ReadNBytesInt64.read(reader);
      X.struct_517 = reader.bytes(reader.u16(), 3);
      return X;
    },
    3
  );
  data.unk0 = reader.u64();
  data.unk1 = reader.u64();
  data.unk2 = reader.bool();
  data.unk3 = reader.bool();
  data.unk4 = reader.u64();
  data.raidResult = reader.u8();
  data.unk5 = reader.u64();
  return data;
}
export const name = "PKTRaidResult";
export const opcode = 23056;
