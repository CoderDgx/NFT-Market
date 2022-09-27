/*
 * @Author: CoderDgx 1181571719@qq.com
 * @Date: 2022-09-27 11:37:59
 * @LastEditors: CoderDgx 1181571719@qq.com
 * @LastEditTime: 2022-09-27 13:51:40
 * @FilePath: /nft-market/components/nft/list/index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { FC } from "react";
import { NftMeta } from "../../../types/nft";
import NftItem from "../item";

interface NftListProps {
  nfts: NftMeta[];
}

const NftList: FC<NftListProps> = (porps) => {
  const { nfts } = porps;
  return (
    <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
      {nfts.map((nft) => (
        <div
          key={nft.image}
          className="flex flex-col rounded-lg shadow-lg overflow-hidden"
        >
          <NftItem nft={nft} />
        </div>
      ))}
    </div>
  );
};

export default NftList;
