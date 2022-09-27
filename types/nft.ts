/*
 * @Author: CoderDgx 1181571719@qq.com
 * @Date: 2022-09-27 13:48:00
 * @LastEditors: CoderDgx 1181571719@qq.com
 * @LastEditTime: 2022-09-27 13:51:03
 * @FilePath: /nft-market/types/nft.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
export type Trait = "attack" | "health" | "speed";

export interface NftAttribute {
  trait_type: Trait;
  value: string;
}

export interface NftMeta {
  name: string;
  description: string;
  image: string;
  attributes: NftAttribute[];
}
