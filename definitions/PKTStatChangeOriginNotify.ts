// Auto Generated, do not edit.
import { Read } from "../../stream";
import * as ReadNBytesInt64 from "../../common/ReadNBytesInt64";
export type PKTStatChangeOriginNotify = {
  statPair1: { value: bigint; statType: number }[];
  unk_3: bigint;
  unk_2?: number;
  statPair2: { value: bigint; statType: number }[];
  unk_1: number;
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTStatChangeOriginNotify;
  data.statPair1 = reader.array(
    reader.u16(),
    () => {
      const k = {} as { value: bigint; statType: number };
      k.value = ReadNBytesInt64.read(reader);
      k.statType = reader.u8();
      return k;
    },
    153
  );
  data.unk_3 = reader.u64();
  if (reader.bool()) data.unk_2 = reader.u32();
  data.statPair2 = reader.array(
    reader.u16(),
    () => {
      const k = {} as { value: bigint; statType: number };
      k.value = ReadNBytesInt64.read(reader);
      k.statType = reader.u8();
      return k;
    },
    153
  );
  data.unk_1 = reader.u8();
  return data;
}
export const name = "PKTStatChangeOriginNotify";
export const opcode = 2349;
