import { Goerli } from "@usedapp/core";

export const ROUTER_ADDRESS = "0x0e3fA3E2dD343F46a916fffdc61f4aF951a0C4e3";

export const DAPP_CONFIG = {
  readOnlyChainId: Goerli.chainId,
  readOnlyUrls: {
    [Goerli.chainId]:
      "https://eth-goerli.g.alchemy.com/v2/9wUDb0F6CC_sKQK0AsBaNlCpY7QTA3kH",
  },
};
