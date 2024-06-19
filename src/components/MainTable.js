import Image from "next/image";
import React from "react";

export default function MainTable() {
  return (
    <>
      <div className="h-[151.8px] w-[165.59px]"></div>
      <div className="h-[151.8px] w-[165.59px]">
        <div className="mx-auto h-[95px] w-[90px] text-white">
          <p className="text-3xl">
            Free
            <span className="block text-xs font-semibold">for everyone</span>
          </p>
        </div>
        <button className="h-[56.8px] w-full rounded-lg bg-[#F2F2F2] text-sm font-bold text-[#0A0517]">
          Sign up today
        </button>
      </div>
      <div className="h-[151.8px] w-[165.59px]">
        <div className="mx-auto h-[95px] w-[90px] text-white">
          <p className="text-3xl">
            $10
            <span className="block text-xs font-semibold">per user/month</span>
            <span className="block text-xs font-semibold opacity-50">
              billed monthly
            </span>
          </p>
        </div>
        <button className="h-[56.8px] w-full rounded-lg bg-[#70FF88] text-sm font-bold text-[#0A0517]">
          Sign up today
        </button>
      </div>
      <div className="h-[151.8px] w-[165.59px]">
        <div className="mx-auto h-[95px] w-[90px] text-white">
          <p className="text-3xl">
            $18
            <span className="block text-xs font-semibold">per user/month</span>
            <span className="block text-xs font-semibold opacity-50">
              billed monthly
            </span>
          </p>
        </div>
        <button className="h-[56.8px] w-full rounded-lg bg-[#75EFFF] text-sm font-bold text-[#0A0517]">
          Sign up today
        </button>
      </div>
      <div className="h-[151.8px] w-[165.59px]">
        <div className="mx-auto h-[95px] w-[110px] text-white">
          <Image
            src="/imgs/ic-letter.png"
            alt="ic-letter"
            width={25}
            height={36}
            objectFit="cover"
            className="mx-auto"
          />
          <p className="mt-4 block text-xs font-semibold">
            Contact for pricing
          </p>
        </div>
        <button className="h-[56.8px] w-full rounded-lg bg-[#FEB445] text-sm font-bold text-[#0A0517]">
          Contact Sales
        </button>
      </div>
    </>
  );
}
