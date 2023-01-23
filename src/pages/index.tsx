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

export default function Home() {
  const [change, setChange] = useState(false);
  const [time, setTime] = useState(900);

  const handleStart = () => {
    setChange(!change);
  };

  useEffect(() => {
    if (change && time > 0) {
      const interval = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [change, time]);

  return (
    <>
      <Head>
        <title>Pomodoro</title>
      </Head>
      <main className="w-full h-screen bg-electric-violet-500">
        <div className="w-screen h-screen flex justify-center items-center px-1">
          <div className="flex flex-col w-full h-1/2 py-3 bg-electric-violet-200 items-center">
            {/* options list */}
            <List />
            {/* Clock */}
            <Clock time={time}/>
            {/* Button */}
            <Button onClick={handleStart} change={change} />
          </div>
        </div>
      </main>
    </>
  );
}
