"use client";

import Header from "./(components)/common/Header";
import { useState } from "react";

export default function Home() {
  const [onToggle, setOnToggle] = useState(false);
  return (
    <>
      {onToggle ? (
        <>
          <Header />
          <div className="flex items-center justify-center h-screen">
            <img
              className="animate-fade-in w-1/3 max-w-[200px]"
              src="/images/main.png"
              alt="main"
            />
          </div>
        </>
      ) : (
        <div onClick={() => setOnToggle(true)}>
          <div className="fixed top-0 h-10 p-4">
            <img src="/images/bar.png" alt="bar" />
          </div>
          <div className="flex items-center justify-center h-screen">
            <div>
              <img src="/images/logo.png" alt="arinniee logo" />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
