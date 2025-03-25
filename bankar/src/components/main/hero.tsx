"use client";

import { Globe, MagnifyingGlass, MapPin } from "phosphor-react";
import { Button } from "../ui/button";

export const Hero = () => {
  return (
    <section className="space-y-2">
      <div className="flex flex-col items-center justify-center pt-16 py-6 space-y-3">
        <h1 className="text-8xl font-medium">Delivering Your Cargo</h1>
        <div className="flex items-center gap-4">
          <span className="bg-theme-orange/15 p-4 rounded-full">
            <Globe size={48} className="text-theme-orange" />
          </span>
          <h1 className="text-8xl font-medium text-theme-orange">Worldwide</h1>
        </div>
      </div>
      <div className="flex align-middle justify-center gap-2">
        <Button
          variant={"outline"}
          className="text-base h-14 !px-4 border-primary"
        >
          <MapPin className="!size-5" />
          Enter pickup location
        </Button>
        <Button
          variant={"outline"}
          className="text-base h-14 !px-4 border-primary"
        >
          <MapPin className="!size-5" />
          Enter destination location
        </Button>
        <Button variant={"default"} className=" h-14 !px-4">
          <MagnifyingGlass className="!size-6" />
        </Button>
      </div>
    </section>
  );
};
