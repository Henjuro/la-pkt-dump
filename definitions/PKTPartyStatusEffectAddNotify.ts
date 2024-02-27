// Auto Generated, do not edit.
import { Read } from "../../stream";
import * as StatusEffectData from "../structures/StatusEffectData";
export type PKTPartyStatusEffectAddNotify = {
  statusEffectDatas: StatusEffectData.StatusEffectData[];
  playerIdOnRefresh: bigint;
  unk_4: boolean;
  characterId: bigint;
  unk_0: bigint;
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTPartyStatusEffectAddNotify;
  data.statusEffectDatas = reader.array(reader.u16(), () => StatusEffectData.read(reader), 80);
  data.playerIdOnRefresh = reader.u64();
  data.unk_4 = reader.bool();
  data.characterId = reader.u64();
  data.unk_0 = reader.u64();
  return data;
}
export const name = "PKTPartyStatusEffectAddNotify";
export const opcode = 25859;
