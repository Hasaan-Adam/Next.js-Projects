"use client";

import { ArrowDownRight } from "phosphor-react";
import {
  containerPlane,
  containerShip2,
  ContainerTrain,
} from "../../lib/constants";
import Image from "next/image";

export const ShippingServices = () => {
  return (
    <section className="space-y-20">
      <div className="max-w-[90%] mx-auto space-y-20">
        <h1 className="text-6xl font-medium">
          Shipping & Logistics
          <br />
          Services
        </h1>
        <div className="flex gap-4 *:flex-1 *:grow">
          <div className="aspect-[8/9] rounded-[4rem] overflow-hidden relative">
            <Image
              src={containerShip2}
              alt=""
              className="size-full object-cover brightness-60"
            />
            <div className="absolute bottom-0 w-full p-8 z-50 text-white flex items-center justify-between">
              <h1 className="text-3xl">Sea Shipping</h1>
              <div className="border border-white p-3 rounded-full">
                <ArrowDownRight size={32} weight="bold" />
              </div>
            </div>
          </div>
          <div className="aspect-[8/9] rounded-[4rem] overflow-hidden relative">
            <Image
              src={containerPlane}
              alt=""
              className="size-full object-cover object-top brightness-60"
            />
            <div className="absolute bottom-0 w-full p-8 z-50 text-white flex items-center justify-between">
              <h1 className="text-3xl">Air Shipping</h1>
              <div className="border border-white p-3 rounded-full">
                <ArrowDownRight size={32} weight="bold" />
              </div>
            </div>
          </div>
          <div className="aspect-[8/9] rounded-[4rem] overflow-hidden relative">
            <Image
              src={ContainerTrain}
              alt=""
              className="size-full object-cover object-right brightness-60 "
            />
            <div className="absolute bottom-0 w-full p-8 z-50 text-white flex items-center justify-between">
              <h1 className="text-3xl">Train Shipping</h1>
              <div className="border border-white p-3 rounded-full">
                <ArrowDownRight size={32} weight="bold" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
