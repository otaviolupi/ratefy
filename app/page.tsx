'use client';

import Image from "next/image";
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Home() {
  return (
    <div>
      <div className="p-8 bg-[#f1f5f9] h-[90vh] flex items-center">
        <div className="max-w-[60%] px-[79px]">
          <h1 className="text-[79px] font-extrabold text-[#151515] mb-[16px] leading-[84px]">Everything you are. In one, simple link in bio.</h1>
          <p className="text-[24px] text-[#151515] mb-[32px]">Join 35M+ people using Linktree for their link in bio. One link to help you share everything you create, curate and sell from your Instagram, TikTok, Twitter, YouTube and other social media profiles.</p>
          <div className="flex w-full max-w-md items-center space-x-2">
            <Input type="email" placeholder="Email" />
            <Button className="rounded-full w-[230px] bg-[#E8354D] hover:bg-[#E8354D]" type="submit">Claim your Singly</Button>
          </div>
        </div>
        <div>
          <Image src="/avatar.gif" width={650} height={400} alt="" />
        </div>
      </div>
      <div className="h-[100vh]">

      </div>
    </div>
    
  )
}
