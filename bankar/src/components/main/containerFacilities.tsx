"use client";

import { ShoppingCartSimple } from "phosphor-react";
import {
  eightyFootContainer,
  fourtyFootContainer,
  twentyFootContainer,
} from "../../lib/constants";
import { Button } from "../ui/button";
import Image from "next/image";

export const ContainerFacilities = () => {
  return (
    <section className="space-y-20">
      <div className="max-w-[90%] mx-auto space-y-20">
        <div className="flex justify-between items-end">
          <h1 className="text-6xl font-medium text-start">
            Explore all containers
            <br />
            facilities
          </h1>
          <Button
            variant={"outline"}
            className="text-base h-16 !px-12 border-primary"
          >
            Explore All
          </Button>
        </div>
        <div className="flex gap-4 *:flex-1 *:grow">
          <div>
            <div className="aspect-square">
              <Image
                src={fourtyFootContainer}
                alt=""
                className="size-full object-cover rounded-[4rem] "
              />
            </div>
            <div className="mt-8 text-start flex justify-between items-center">
              <div className="text-3xl text-primary font-medium">
                <h1>40 Foot Container</h1>
                <p>
                  $2,400 <span className="text-lg">/Per year</span>
                </p>
              </div>
              <div className="bg-theme-orange/5 p-3 rounded-full flex items-center justify-center mr-6 hover:bg-theme-orange hover:text-white">
                <ShoppingCartSimple size={24} weight="fill" />
              </div>
            </div>
          </div>
          <div>
            <div className="aspect-square ">
              <Image
                src={eightyFootContainer}
                alt=""
                className="size-full object-cover rounded-[4rem]"
              />
            </div>
            <div className="mt-8 text-start flex justify-between items-center">
              <div className="text-3xl text-primary font-medium">
                <h1>80 Foot Container</h1>
                <p>
                  $2,400 <span className="text-lg">/Per year</span>
                </p>
              </div>
              <div className="bg-theme-orange/5 p-3 rounded-full flex items-center justify-center mr-6 hover:bg-theme-orange hover:text-white">
                <ShoppingCartSimple size={24} weight="fill" />
              </div>
            </div>
          </div>
          {/* <div className="aspect-square flex items-start justify-center rounded-[4rem] overflow-hidden "> */}
          <div>
            <div className="aspect-square flex items-start justify-center rounded-[4rem] overflow-hidden ">
              <Image
                src={twentyFootContainer}
                alt=""
                // className="h-full min-w-[170%] object-cover object-bottom"
                className="h-full min-w-[170%] object-cover rounded-[4rem] object-bottom"
              />
            </div>
            <div className="mt-8 text-start flex justify-between items-center">
              <div className="text-3xl text-primary font-medium">
                <h1>20 Foot Container</h1>
                <p>
                  $2,400 <span className="text-lg">/Per year</span>
                </p>
              </div>
              <div className="bg-theme-orange/5 p-3 rounded-full flex items-center justify-center mr-6 hover:bg-theme-orange hover:text-white">
                <ShoppingCartSimple size={24} weight="fill" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
