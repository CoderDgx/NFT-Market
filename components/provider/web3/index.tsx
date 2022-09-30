/*
 * @Author: CoderDgx 1181571719@qq.com
 * @Date: 2022-09-27 16:38:13
 * @LastEditors: CoderDgx 1181571719@qq.com
 * @LastEditTime: 2022-09-30 15:55:16
 * @FilePath: /nft-market/components/provider/web3/index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import {
  createContext,
  FC,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import {
  createDefaultState,
  createWeb3State,
  loadContract,
  Web3State,
} from "./utils";
import { ethers } from "ethers";
import { setupHooks } from "@hooks/web3/setupHooks";

const Web3Context = createContext<Web3State>(createDefaultState());

const Web3Provider: FC<{ children: ReactNode }> = ({ children }) => {
  const [web3Api, setWeb3Api] = useState<Web3State>(createDefaultState());

  useEffect(() => {
    async function initWeb3() {
      const provider = new ethers.providers.Web3Provider(
        window.ethereum as any
      );
      const contract = await loadContract("NftMarket", provider);

      setWeb3Api(
        createWeb3State({
          ethereum: window.ethereum,
          provider,
          contract,
          isLoading: false,
        })
      );
    }
    initWeb3();
  }, []);

  return (
    <Web3Context.Provider value={web3Api}>{children}</Web3Context.Provider>
  );
};

export function useWeb3() {
  return useContext(Web3Context);
}

export function useHooks() {
  const { hooks } = useWeb3();
  return hooks;
}

export default Web3Provider;
