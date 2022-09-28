/*
 * @Author: CoderDgx 1181571719@qq.com
 * @Date: 2022-09-28 11:44:32
 * @LastEditors: CoderDgx 1181571719@qq.com
 * @LastEditTime: 2022-09-28 14:06:24
 * @FilePath: /nft-market/components/provider/web3/utils.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { MetaMaskInpageProvider } from "@metamask/providers";
import { Contract, providers } from "ethers";

declare global {
  interface Window {
    ethereum: MetaMaskInpageProvider;
  }
}

export interface Web3Params {
  ethereum: MetaMaskInpageProvider | null;
  provider: providers.Web3Provider | null;
  contract: Contract | null;
}

export type Web3State = {
  isLoading: boolean;
} & Web3Params;

export const createDefaultState = () => {
  return {
    isLoading: true,
    ethereum: null,
    provider: null,
    contract: null,
  };
};
