"use client";

import { useEffect, useState } from "react";

export default function Clock() {
  const [time, setTime] = useState<Date | null>(null);

  useEffect(() => {
    setTime(new Date());
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  if (!time) return "...";

  const formattedDate = time.toLocaleString("en-US", {
    month: "short",
    day: "numeric",
  });
  const formattedTime = time.toLocaleTimeString("en-US", { hour12: false });

  return (
    <time dateTime={time.toISOString()}>
      {formattedDate}, {formattedTime}
    </time>
  );
}
