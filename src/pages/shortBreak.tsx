import { useState } from "react";
import Head from "next/head";

// Components
import List from "@/components/List";
import Clock from "@/components/Clock";
import Button from "@/components/Button";
import Container from "@/components/Container";

// Hooks
import { useTimer } from "@/hooks/useTimer";

const shortBreak = () => {

  const [change, setChange] = useState(false);

  const handleStart = () => {
    setChange(!change);
  };

  const timer = useTimer ({
    change,
    initialTime: 300,
  })

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
        <List />
        {/* Clock */}
        <Clock time={timer} />
        {/* Button */}
        <Button onClick={handleStart} change={change}>
          {change && (
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
};

export default shortBreak;
