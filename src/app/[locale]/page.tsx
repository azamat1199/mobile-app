"use client";
import React, { useEffect, useState } from "react";
import About from "@/components/about";
import dynamic from "next/dynamic";
// const About = dynamic(() => import('../../components/about'), { ssr: false })

export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center p-20 justify-center">
      <About/>
    </main>
  );
}
