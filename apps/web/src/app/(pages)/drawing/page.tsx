"use client";

import React, { useState, useEffect } from "react";
import Draggable from "react-draggable";
import {
  calculateBrowserCoordinates,
  getRandomPointInRange,
} from "../../_utils/calculate";
import { BrowserCoordinates } from "../../_type/BrowserCoordinates";

const DrawingPage = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const trackPos = (data: any) => {
    setPosition({ x: data.x, y: data.y });
  };
  const [browserCoordinates, setBrowserCoordinates] =
    useState<BrowserCoordinates>({
      minX: 0,
      minY: 0,
      maxX: 0,
      maxY: 0,
    });

  useEffect(() => {
    const updateBrowserCoordinates = () => {
      const browserWidth = window.innerWidth;
      const browserHeight = window.innerHeight;
      const coordinates = calculateBrowserCoordinates(
        browserWidth,
        browserHeight
      );
      setBrowserCoordinates(coordinates);

      const randomPoint = getRandomPointInRange(
        coordinates.minX,
        coordinates.minY,
        coordinates.maxX,
        coordinates.maxY
      );
      console.log("Random Point (x, y):", randomPoint.x, randomPoint.y);
      setPosition({ x: randomPoint.x, y: randomPoint.y });
      // setDefaultPosition({ x: randomPoint.x, y: randomPoint.y }); // defaultPosition 업데이트
    };

    updateBrowserCoordinates();
    window.addEventListener("resize", updateBrowserCoordinates);

    return () => {
      window.removeEventListener("resize", updateBrowserCoordinates);
    };
  }, []);

  useEffect(() => {
    console.log("Position after state update:", position);
  }, [position]);

  return (
    <>
      <div className="flex items-center justify-center py-[120px]">
        <img src="/images/drawing_title.png" alt="drawing" />
      </div>
      <div className="flex justify-center">
        <Draggable
          onDrag={(e, data) => trackPos(data)}
          position={position}
        >
          <div className="w-[20%] aspect-[1/1] bg-gray-300">
            x: {position.x.toFixed(0)}, y: {position.y.toFixed(0)}
          </div>
        </Draggable>
      </div>
    </>
  );
};

export default DrawingPage;
