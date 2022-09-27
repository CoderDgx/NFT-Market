/*
 * @Author: CoderDgx 1181571719@qq.com
 * @Date: 2022-09-26 03:35:05
 * @LastEditors: CoderDgx 1181571719@qq.com
 * @LastEditTime: 2022-09-26 18:04:20
 * @FilePath: /nft-market/pages/_app.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { NavBar } from "../components";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
