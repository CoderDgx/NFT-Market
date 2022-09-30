import { CryptoHookFactory } from "@_types/hooks";
import useSWR from "swr";

type AccountHookFactory = CryptoHookFactory<string, string>;

export type UseAccountHook = ReturnType<AccountHookFactory>;

export const hookFactory: CryptoHookFactory<string, string> =
  (deps) => (params) => {
    const swrRes = useSWR("web3/useAccount", () => {
      return "Hello User";
    });

    return swrRes;
  };
