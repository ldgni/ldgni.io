"use client";

import dayjs from "dayjs";
import { useEffect, useState } from "react";

export default function Time() {
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      setTime(dayjs().format("MMM D, HH:mm:ss"));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  return <>{time}</>;
}
