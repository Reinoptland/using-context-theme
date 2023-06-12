import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Navbar from "@/components/atoms/Navbar";
import CardContainer from "@/components/CardContainer/CardContainer";
import { useContext, useState } from "react";
import { Theme } from "@/entities/theme";
import { createContext } from "react";

const inter = Inter({ subsets: ["latin"] });

export const ThemeContext = createContext<{ theme: Theme }>({ theme: "Light" });
export const useTheme = () => useContext(ThemeContext);

export default function Home() {
  const [theme, setTheme] = useState<Theme>("Light");
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ThemeContext.Provider value={{ theme: theme }}>
        <main className={`${styles.main} ${inter.className}`}>
          <Navbar theme={theme}>
            <button
              onClick={() => {
                setTheme(theme === "Light" ? "Dark" : "Light");
              }}
            >
              {theme}
            </button>
          </Navbar>
          <CardContainer />
        </main>
      </ThemeContext.Provider>
    </>
  );
}
