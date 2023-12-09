"use client";

import { ReactElement, ReactNode, useEffect } from "react";
import type { AppProps } from "next/app";
import { NextPage } from "next/types";
import "../styles/slick.css";
import "../styles/tailwind.css";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { RainbowKitProvider, lightTheme } from "@rainbow-me/rainbowkit";
import "@rainbow-me/rainbowkit/styles.css";
import { Analytics } from "@vercel/analytics/react";
import NextNProgress from "nextjs-progressbar";
import { Toaster } from "react-hot-toast";
import { WagmiConfig } from "wagmi";
import BaseHeader from "~~/components/Layout/BaseHeader";
import { BlockieAvatar } from "~~/components/scaffold-eth";
// import { Footer } from "~~/components/Footer";
// import { Header } from "~~/components/Header";
import { useNativeCurrencyPrice } from "~~/hooks/scaffold-eth";
import { useGlobalState } from "~~/services/store/store";
import { wagmiConfig } from "~~/services/web3/wagmiConfig";
import { appChains } from "~~/services/web3/wagmiConnectors";
// import kit from "~~/services/web3/face-wallet-init";
import "~~/styles/globals.css";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const ScaffoldEthApp = ({ Component, pageProps }: AppPropsWithLayout) => {
  const price = useNativeCurrencyPrice();
  const setNativeCurrencyPrice = useGlobalState(state => state.setNativeCurrencyPrice);
  const getLayout = Component.getLayout ?? (page => <BaseHeader>{page}</BaseHeader>);
  // This variable is required for initial client side rendering of correct theme for RainbowKit
  // const [isDarkTheme, setIsDarkTheme] = useState(true);
  // const { isDarkMode } = useDarkMode();

  useEffect(() => {
    if (price > 0) {
      setNativeCurrencyPrice(price);
    }
  }, [setNativeCurrencyPrice, price]);

  // useEffect(() => {
  //   setIsDarkTheme(isDarkMode);
  // }, [isDarkMode]);
  return (
    <WagmiConfig config={wagmiConfig}>
      <NextNProgress />
      <RainbowKitProvider chains={appChains.chains} avatar={BlockieAvatar} theme={lightTheme()}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          {getLayout(<Component {...pageProps} />)}
        </LocalizationProvider>
        <Toaster />
        <Analytics />
      </RainbowKitProvider>
    </WagmiConfig>
  );
};

export default ScaffoldEthApp;
