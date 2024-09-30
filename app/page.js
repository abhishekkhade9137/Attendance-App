"use client"
import { Button } from "@/components/ui/button";

import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="text-center font-extrabold fixed top-0 w-full">Welcome to home page</div>
      <div className="flex-1 flex justify-center items-center">
        <Button className="Button">
          <a href="http://localhost:3000/dashboard">go to dashboard</a>
        </Button>
      </div>
    </div>
  );
}