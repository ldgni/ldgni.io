"use client";

import { useEffect, useState } from "react";

export default function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <time dateTime={time.toISOString()} suppressHydrationWarning>
      {time.toLocaleString("en-US", { month: "short", day: "numeric" })},{" "}
      {time.toLocaleTimeString("en-US", { hour12: false })}
    </time>
  );
}
