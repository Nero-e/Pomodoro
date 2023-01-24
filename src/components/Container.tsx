import React from "react";

interface containerProps {
  children: React.ReactNode;
}
const Container = (props: containerProps) => {
  const { children } = props;

  return (
    <>
      <main className="w-full h-screen">
        <div className={`w-screen h-screen flex justify-center items-center px-1 bg-amber`} >
          <div className="flex flex-col w-full h-4/5 py-3 items-center ease-in duration-300 bg-white rounded-2xl shadow-lg">
            {children}
          </div>
        </div>
      </main>
    </>
  );
};

export default Container;
