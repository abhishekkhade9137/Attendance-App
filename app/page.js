"use client"
import { Button } from "@/components/ui/button";

import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen flex flex-col bg-white text-black">
      <div className="text-center font-extrabold fixed top-0 w-full p-4 border-b border-black text-xl">
        ATTENDANCE APP
      </div>
      <div className="flex-1 flex flex-col justify-center items-center gap-6">
        <h1 className="text-5xl font-black">Welcome</h1>
        <Button className="bg-black text-white hover:bg-black/80 font-bold px-8 py-4 text-lg rounded-none border border-black">
          <a href="http://localhost:3000/dashboard">Go to Dashboard</a>
        </Button>
      </div>
    </div>
  );
}