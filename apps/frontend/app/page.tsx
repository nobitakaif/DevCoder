"use client"
import { Content } from "@/components/content";
import { Navbar } from "@/components/navbar";
import { treaty } from "@elysiajs/eden";
import { App } from "@repo/be";
import { useEffect } from "react";

const app = treaty<App>('http://localhost:8001')

export default function Home() {

  useEffect(()=>{
    const res = app.auth.signup.post({email : "nobita@gmail.com", password : "nobitakaif", name : "nobita"})
    console.log(res)
  },[])
  
  return (
    <div className="bg-[#f0f8ff] h-screen w-full ">
      <Navbar/>
      <Content/>
    </div>
  );
}
