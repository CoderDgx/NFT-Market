/*
 * @Author: CoderDgx 1181571719@qq.com
 * @Date: 2022-09-29 16:39:20
 * @LastEditors: CoderDgx 1181571719@qq.com
 * @LastEditTime: 2022-09-30 11:04:11
 * @FilePath: /nft-market/types/hooks.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { Contract, providers } from "ethers";
import { MetaMaskInpageProvider } from "@metamask/providers";
import { SWRResponse } from "swr";

export interface Web3Dependencies {
  provider: providers.Web3Provider;
  contract: Contract;
  ethereum: MetaMaskInpageProvider;
}

export interface CryptoHookFactory<D = any, P = any> {
  (dep: Partial<Web3Dependencies>): (params: P) => SWRResponse<D>;
}
