'use client'

import { useStore } from "react-redux";
import { Button } from "@/components/ui/button";

export default function Home() {
  const test = useStore();
  console.log( test.getState() );

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      test
    </div>
  );
}
