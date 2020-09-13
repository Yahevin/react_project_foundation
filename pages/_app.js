import React from "react";
import "@/global-styles/reset.css";
import "@/global-styles/base.css";
export default function MyApp({ Component, pageProps }) {
    return <Component {...pageProps} />
}