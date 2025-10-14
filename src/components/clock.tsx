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

  const formattedDate = time.toLocaleString("en-US", {
    month: "short",
    day: "numeric",
  });
  const formattedTime = time.toLocaleTimeString("en-US", { hour12: false });

  if (!isMounted) {
    return <time>...</time>;
  }

  return (
    <time dateTime={time.toISOString()}>
      {formattedDate}, {formattedTime}
    </time>
  );
}
