import { Asterisk } from "phosphor-react";
import { cn } from "../../../lib/utils";
import { Button } from "../../ui/button";
import { containerShip1 } from "../../../lib/constants";
import Image from "next/image";

export const CardSection = () => {
  return (
    <div className="grid grid-cols-2 gap-32 items-center">
      <div className="space-y-4">
        <div
          className={cn(
            "w-full rounded-[4rem] overflow-hidden aspect-[5/4]",
            "bg-[url('/assets/images/containers/container_1.jpg')] bg-cover bg-[center_-12rem]"
          )}
        ></div>
        <div className="grid grid-cols-4 gap-4">
          <div className="rounded-4xl overflow-hidden col-span-3 h-32">
            <Image
              src={containerShip1}
              alt=""
              className="size-full object-cover grayscale"
            />
          </div>
          <div className="rounded-4xl bg-[#FFE8DD] flex items-center justify-center aspect-square h-32">
            <Asterisk className="w-16 h-16 stroke-3  text-theme-orange" />
          </div>
        </div>
      </div>
      <div className="space-y-8">
        <div className="space-y-6">
          <h1 className="text-6xl font-medium leading-tight text-left">
            <span className=" text-theme-orange">#1</span> Nationwide
            <br />
            Delivery Logistics
            <br />
            Solution
          </h1>
          <p className="text-gray-400 text-sm leading-relaxed text-left max-w-4/5">
            It is a swiss international cargo company established in the year
            1970. with a buying spree of the new and old vessels, msc added
            almost 100 ships to its fleet in the last year, having a vessel
            line-up of over 645 container ship
          </p>
        </div>
        <div className="flex gap-4">
          <Button variant={"theme"} size={"lg"} className="h-14 !px-10">
            Get a Quote
          </Button>
          <Button
            variant={"outline"}
            size={"lg"}
            className="h-14 !px-10 bg-transparent"
          >
            Learn More
          </Button>
        </div>
      </div>
    </div>
  );
};
