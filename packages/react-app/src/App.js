import React from "react";
import { useEthers } from "@usedapp/core";

import { usePools } from "./hooks";
import styles from "./styles";
import { uniswapLogo } from "./assets";
import { Exchange, Loader, WalletButton } from "./components";

const App = () => {
  const { account } = useEthers();

  const [loading, pools] = usePools();

  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <header className={styles.header}>
          <img
            src={uniswapLogo}
            alt="uniswap logo"
            className="w-16 h-16 object-contain"
          />
          <WalletButton />
        </header>
        <div className={styles.exchangeContainer}>
          <h1 className={styles.headTitle}>Uniswap Clone</h1>
          <p className={styles.subTitle}>Exchange tokens!</p>
          <div className={styles.exchangeBoxWrapper}>
            <div className={styles.exchangeBox}>
              <div className="pink_gradient" />
              <div className={styles.exchange}>
                {account ? (
                  loading ? (
                    <Loader title="Loading pools, please wait!" />
                  ) : (
                    <Exchange pools={pools} />
                  )
                ) : (
                  <Loader title="Please connect your wallet" />
                )}
              </div>
              <div className="blue_gradient" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;

{
  /*
This is the contract that I am working with. I got it from CRANQ

   0x0e3fA3E2dD343F46a916fffdc61f4aF951a0C4e3 
   */
}
