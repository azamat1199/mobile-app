"use clinet";
import React, { useEffect, useState } from "react";
import {
  Coordinates,
  CalculationMethod,
  PrayerTimes,
  SunnahTimes,
  Prayer,
} from "adhan";
import moment from "moment-timezone";

export default function About() {
  const [date, setDate] = useState(new Date());

  const coordinates = new Coordinates(41.345063, 69.234673);
  const params = CalculationMethod.MoonsightingCommittee();
  const newDate = new Date();
  const prayerTimes = new PrayerTimes(coordinates, newDate, params);
  const sunnahTimes = new SunnahTimes(prayerTimes);

  function prayerName(prayer: string) {
    if (prayer === Prayer.Fajr) {
      return "Fajr";
    } else if (prayer === Prayer.Sunrise) {
      return "Sunrise";
    } else if (prayer === Prayer.Dhuhr) {
      return "Dhuhr";
    } else if (prayer === Prayer.Asr) {
      return "Asr";
    } else if (prayer === Prayer.Maghrib) {
      return "Maghrib";
    } else if (prayer === Prayer.Isha) {
      return "Isha";
    } else if (prayer === Prayer.None) {
      return "None";
    }
  }
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
    <div className="gap-3 flex flex-col">
      <div className="flex flex-col items-center flex-wrap">
        <span className="welcome text-[#088157] font-medium text-base  font-sans">
          Добро пожаловать!
        </span>
        <span className="text-[#000] font-sans text-[17px] font-bold tracking-[-0.4px] leading-normal">
          {time}
        </span>
      </div>
      <div>
        <div className="flex flex-col flex-wrap gap-3">
          <div className="flex gap-1 flex-col items-center">
            <span className="font-sans font-medium text-[#000]">Бомдод</span>
            <span className="font-sans text-[#000] font-normal leading-[18px]">
              {moment(prayerTimes.fajr)
                .tz("Turkey")
                .format("MMMM DD, YYYY h:mm A")}
            </span>
          </div>
          <div className="flex gap-1 flex-col items-center">
            <span className="font-sans font-medium text-[#000]">Куеш</span>
            <span  className="font-sans text-[#000] font-normal leading-[18px]">
              {moment(prayerTimes.sunrise)
                .tz("Turkey")
                .format("MMMM DD, YYYY h:mm A")}
            </span>
          </div>
          <div className="flex gap-1 flex-col items-center">
            <span className="font-sans font-medium text-[#000]">Пешин</span>
            <span  className="font-sans text-[#000] font-normal leading-[18px]">
              {moment(prayerTimes.dhuhr)
                .tz("Turkey")
                .format("MMMM DD, YYYY h:mm A")}
            </span>
          </div>
          <div className="flex gap-1 flex-col items-center">
            <span className="font-sans font-medium text-[#000]">Аср</span>
            <span  className="font-sans text-[#000] font-normal leading-[18px]">
              {moment(prayerTimes.asr)
                .tz("Turkey")
                .format("MMMM DD, YYYY h:mm A")}
            </span>
          </div>
          <div className="flex gap-1 flex-col items-center">
            <span className="font-sans font-medium text-[#000]">Шом</span>
            <span  className="font-sans text-[#000] font-normal leading-[18px]">
              {moment(prayerTimes.maghrib)
                .tz("Turkey")
                .format("MMMM DD, YYYY h:mm A")}
            </span>
          </div>
          <div className="flex gap-1 flex-col items-center">
            <span className="font-sans font-medium text-[#000]">Хуфтон</span>
            <span  className="font-sans text-[#000] font-normal leading-[18px]">
              {moment(prayerTimes.isha)
                .tz("Turkey")
                .format("MMMM DD, YYYY h:mm A")}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
