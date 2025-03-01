"use client";

import { useEffect, useState } from "react";

export default function Clock() {
  const [time, setTime] = useState(new Date());
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  if (!isMounted) {
    return <time>...</time>; // Or return null or a skeleton
  }

  return (
    <time dateTime={time.toISOString()}>
      {time.toLocaleString("en-US", { month: "short", day: "numeric" })},{" "}
      {time.toLocaleTimeString("en-US", { hour12: false })}
    </time>
  );
}
