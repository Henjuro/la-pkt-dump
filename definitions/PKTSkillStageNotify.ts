// Auto Generated, do not edit.
import { Read } from "../../stream";
export type PKTSkillStageNotify = {
  unk_0: bigint;
  skillId: number;
  sourceId: bigint;
  stage: number;
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTSkillStageNotify;
  data.unk_0 = reader.u64();
  data.skillId = reader.u32();
  data.sourceId = reader.u64();
  reader.skip(6);
  data.stage = reader.u8();
  reader.skip(25);
  return data;
}
export const name = "PKTSkillStageNotify";
export const opcode = 30803;
