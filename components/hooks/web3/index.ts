/*
 * @Author: CoderDgx 1181571719@qq.com
 * @Date: 2022-09-30 16:06:12
 * @LastEditors: CoderDgx 1181571719@qq.com
 * @LastEditTime: 2022-09-30 16:12:32
 * @FilePath: /nft-market/components/hooks/web3/index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { useHooks } from "components/provider/web3";

export const useAccount = () => {
  const hooks = useHooks();
  const swrRes = hooks.useAccount("");
  return {
    account: swrRes,
  };
};
