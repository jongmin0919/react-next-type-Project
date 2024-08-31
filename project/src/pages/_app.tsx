import { AppProps } from "next/app";
import React from "react";

// MyApp 컴포넌트 정의
function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

// 컴포넌트를 기본 내보내기로 설정
export default MyApp;
