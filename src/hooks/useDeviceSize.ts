import { useState, useEffect } from "react";

interface IDeviceSize {
  width: number;
  height: number;
  isMobile: boolean;
}
const w = window;
const defaultSize = {
  width: w.innerWidth,
  height: w.innerHeight,
  isMobile: w.innerWidth < 600 ? true : false,
};
export default function useDeviceSize(): IDeviceSize {
  let [deviceSize, setDeviceSize] = useState<IDeviceSize>(defaultSize);
  useEffect(() => {
    const resizeEventHandler = () => {
      setDeviceSize(defaultSize);
    };
    w.addEventListener("resize", resizeEventHandler);
    return () => {
      window.removeEventListener("resize", resizeEventHandler);
    };
  }, []);
  return deviceSize;
}
