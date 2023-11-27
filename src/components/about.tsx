"use clinet";
import React, { useEffect, useState } from "react";

export default function About() {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setDate(new Date()), 1000);

    return function cleanup() {
      clearInterval(timer);
    };
  }, []);

  const time = date
    .toLocaleTimeString(undefined, {
      hour12: false,
    })
    .slice(0, -3);

  return (
    <div>
      <div className="flex flex-col items-center flex-wrap">
        <span className="welcome text-[#088157] font-medium text-base  font-sans">
          {" "}
          Добро пожаловать!
        </span>
        <span className="text-[#000] font-sans text-[17px] font-bold tracking-[-0.4px] leading-normal">
          {time}
        </span>
      </div>
    </div>
  );
}
