import { BrowserCoordinates } from "../_type/browser-coordinates";

export const calculateBrowserCoordinates = (
  browserWidth: number,
  browserHeight: number
): BrowserCoordinates => {
  const minX = -browserWidth / 2;
  const minY = -browserHeight / 2;
  const maxX = browserWidth / 2;
  const maxY = browserHeight / 2;

  return {
    minX,
    minY,
    maxX,
    maxY,
  };
};

interface RandomPoint {
  x: number;
  y: number;
}

export const getRandomInt = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const getRandomPointInRange = (
  minX: number,
  minY: number,
  maxX: number,
  maxY: number
): RandomPoint => {
  const randomX = getRandomInt(minX, maxX);
  const randomY = getRandomInt(minY, maxY);

  return {
    x: randomX,
    y: randomY,
  };
};
