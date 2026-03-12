"use client"
import { Content } from "@/components/content";
import { Navbar } from "@/components/navbar";
import { treaty } from "@elysiajs/eden";
import { App } from "@repo/be";
import { useEffect } from "react";

const app = treaty<App>('http://localhost:8001')

export default function Home() {

  
  return (
    <div className="bg-[#f0f8ff] h-screen w-full ">
      <Navbar/>
      <Content/>
    </div>
  );
}
