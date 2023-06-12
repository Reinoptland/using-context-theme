import "@/styles/globals.css";
import type { AppProps } from "next/app";
import ThemeProviderComponent from "@/contexts/ThemeContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProviderComponent>
      <Component {...pageProps} />
    </ThemeProviderComponent>
  );
}
