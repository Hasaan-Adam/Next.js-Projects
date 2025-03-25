"use client";

import { Headset, Monitor, WifiMedium } from "phosphor-react";
import { Separator } from "../ui/separator";
import { container2 } from "../../lib/constants";
import Image from "next/image";

export const LogisticsOverview = () => {
  return (
    <section className="space-y-20">
      <div className="max-w-[90%] mx-auto space-y-20">
        <div className="grid grid-cols-2 gap-32 items-center">
          <div className="text-start space-y-6">
            <h1 className="text-6xl font-medium">
              Powering logistics
              <br />
              across business
            </h1>
            <p>
              Delight your customers, scale operations, and boost efficiency
              with our advanced logistics platform. we`&apos;`re here to
              supercharge your supply chain.
            </p>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <span className="bg-theme-orange/15 rounded-full size-16 items-center justify-center flex">
                  <WifiMedium className="text-theme-orange text-4xl" />
                </span>
                <p className="font-medium text-2xl">
                  Nationwide carrier network
                </p>
              </div>
              <Separator className="bg-primary !h-[1.5px]" />
              <div className="flex items-center gap-4">
                <span className="bg-theme-orange/15 rounded-full size-16 items-center justify-center flex">
                  <Monitor className="text-theme-orange text-4xl" />
                </span>
                <p className="font-medium text-2xl">
                  Fully-featured logistics software
                </p>
              </div>
              <Separator className="bg-primary !h-[1.5px]" />
              <div className="flex items-center gap-4">
                <span className="bg-theme-orange/15 rounded-full size-16 items-center justify-center flex">
                  <Headset className="text-theme-orange text-4xl" />
                </span>
                <p className="font-medium text-2xl">
                  Exception tracing & live support
                </p>
              </div>
              <Separator className="bg-primary !h-[1.5px]" />
            </div>
          </div>
          <div className="aspect-[1/1.1] rounded-[4rem] relative">
            <div className="size-48 absolute -top-8 -left-8 blur-3xl bg-theme-orange/60 -z-10"></div>
            <Image
              src={container2}
              alt=""
              className="size-full object-cover object-bottom rounded-[4rem]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
