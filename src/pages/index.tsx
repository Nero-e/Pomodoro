import { useState, useEffect } from "react";

import Head from "next/head";
// Fonts & Styles
// import { Inter } from "@next/font/google";
// const inter = Inter({ subsets: ["latin"] });
// import styles from "@/styles/Home.module.css";

// Components
import List from "@/components/List";
import Clock from "@/components/Clock";
import Button from "@/components/Button";
import Container from "@/components/Container";

// Hooks
import { useTimer } from "@/hooks/useTimer";
import { time } from "console";

export default function Home() {
  const [change, setChange] = useState(false);

  const handleStart = () => {
    setChange(!change);
  };

  let timer = useTimer({
    change,
    initialTime: 900,
  });

  const handleReset = () => {
    setChange(false);
  };

  return (
    <>
      <Head>
        <title>Pomodoro</title>
      </Head>
      <Container>
        {/* options list */}
        <List/>
        {/* Clock */}
        <Clock time={timer}/>
        {/* Button */}
        <Button onClick={handleStart} change={change}>
          {change &&  (
            <button
              onClick={handleReset}
              className="bg-electric-violet-100 rounded-full py-4 px-4 m-3 font-gotham"
            >
              Reset
            </button>
          )}
        </Button>
      </Container>
    </>
  );
}
