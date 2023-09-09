"use client";

import React, { useState, useEffect } from "react";
import Draggable from "react-draggable";
import {
  calculateBrowserCoordinates,
  getRandomPointInRange,
} from "../../_utils/calculate";
import { BrowserCoordinates } from "../../_type/browser-coordinates";
import useDrawing from "../../_hooks/use-drawing";
import { Position } from "../../_type/position";
import Image from "next/image";

const DrawingPage = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const { drawings } = useDrawing();
  const [positionList, setPositionList] = useState<Position[]>([]);

  const trackPos = (data: any) => {
    const newPositionList = [...positionList, { x: data.x, y: data.y }];
    setPositionList(newPositionList);
  };

  const [browserCoordinates, setBrowserCoordinates] =
    useState<BrowserCoordinates>({
      minX: 0,
      minY: 0,
      maxX: 0,
      maxY: 0,
    });

  useEffect(() => {
    if (!drawings) return;
    
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
        coordinates.minY + 300,
        coordinates.maxX,
        coordinates.maxY
      );
      // setPosition({ x: randomPoint.x, y: randomPoint.y });
      for (let i = 0; i <= drawings?.length; i++) {
        const newPosition: Position = { x: randomPoint.x, y: randomPoint.y };
        console.log('newPosition', newPosition);
        
        setPositionList((prevPositionList) => [...prevPositionList, newPosition]);
      }
      console.log('positionList', positionList);
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
        {drawings && positionList.map((data, index) => (
          <div className="" key={index}>
            
              <Draggable
                onDrag={(e, data) => trackPos(data)}
                position={data[index]}
              >
                <Image
                  className="lg:w-[20%] w-[40%] aspect-[1/1] bg-gray-300"
                  src={drawings[index]?.thumbnailImageUrl}
                  alt=""
                  width={300}
                  height={300}
                />
              </Draggable>
            
          </div>
        ))}
      </div>
    </>
  );
};

export default DrawingPage;
