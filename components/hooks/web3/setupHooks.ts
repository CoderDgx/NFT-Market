import { Web3Dependencies } from "@_types/hooks";
import { hookFactory as createAccountHook, UseAccountHook } from "./useAccount";

export interface Web3Hooks {
  useAccount: UseAccountHook;
}

export interface SetupHooks {
  (deps: Web3Dependencies): Web3Hooks;
}

export const setupHooks: SetupHooks = (deps) => {
  return {
    useAccount: createAccountHook(deps),
  };
};
