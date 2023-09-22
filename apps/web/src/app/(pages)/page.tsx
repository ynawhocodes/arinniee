"use client";

import Header from "../(components)/common/Header";
import { useState } from "react";

export default function Home() {
  const [onToggle, setOnToggle] = useState(false);
  return (
    <div className="h-full">
      {onToggle ? (
          <div className="flex items-center justify-center h-full">
            <img
              className="animate-fade-in w-[44%] max-w-[210px]"
              src="/images/main.png"
              alt="main"
            />
          </div>
      ) : (
        <div className="h-full" onClick={() => setOnToggle(true)}>
          <div className="fixed top-0 z-50 h-10 p-4 bg-white">
            <img className="w-[20px]" src="/images/bar_3x.png" alt="bar" />
          </div>
          <div className="flex items-center justify-center h-full">
            <div>
              <img className="w-[90px]" src="/images/logo_3x.png" alt="arinniee logo" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
