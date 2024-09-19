"use client"
import { Button } from "@/components/ui/button";

import Image from "next/image";

export default function Home() {
  return (
    <div>
      Welcome to home page
      <Button className="Button"><a href ="http://localhost:3000/dashboard">go to dashboard</a></Button>
    </div>
  );
}
