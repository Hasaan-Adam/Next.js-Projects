import Image from "next/image";
import { containerShip2 } from "../../lib/constants";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Switch } from "../ui/switch";

export const ShipmentTracking = () => {
  return (
    <section className="space-y-20">
      <div className="max-w-[90%] mx-auto space-y-20">
        <h1 className="text-6xl font-medium">
          Find Locations To Buy, Sell
          <br />
          Or Lease Containers
        </h1>
        <div className="relative overflow-hidden aspect-[5/2] rounded-[4rem]">
          <Image
            src={containerShip2}
            alt=""
            className="size-full absolute object-cover object-center -z-10 grayscale brightness-[70%]"
          />
          <div className="p-12 h-full flex items-center justify-between">
            <div className="text-start px-12 py-16 gap-4 text-white space-y-16 h-full">
              <h1 className="text-6xl font-medium">
                Track or Calculate
                <br />
                your Shipments
              </h1>
              <div className="flex items-center space-x-8">
                <Label htmlFor="airplane-mode">Shipment Tracking</Label>
                <Switch
                  id="airplane-mode"
                  className="*:bg-theme-orange scale-220"
                />
                <Label htmlFor="airplane-mode">Shipment Rate</Label>
              </div>
              <div />
            </div>
            <div className="h-full w-3/10 bg-white rounded-[3rem] px-10 py-8 flex flex-col gap-8">
              <h1 className="text-3xl font-medium">
                Quickly Track your Shipments
              </h1>
              <div className="grid grid-rows-3 gap-8 w-full grow">
                <div className="row-span-2 h-full w-full grid grid-rows-2 gap-4">
                  <Input
                    type="email"
                    placeholder="Enter your shipment code"
                    className="w-full !h-full bg-theme-orange/5 border-0 placeholder:text-sm placeholder:font-bold placeholder:text-primary px-8 focus-visible:border-theme-orange/25 focus-visible:ring-theme-orange/50"
                  />
                  <Select>
                    <SelectTrigger className="px-8 w-full !h-full data-[placeholder]:text-primary data-[placeholder]:font-bold [&>svg]:size-6 [&>svg]:stroke-2 [&>svg]:!text-primary [&>svg]:opacity-100 bg-theme-orange/5 border-0 focus-visible:border-theme-orange/25 focus-visible:ring-theme-orange/50">
                      <SelectValue placeholder="Select a fruit" className="" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Fruits</SelectLabel>
                        <SelectItem value="apple">Apple</SelectItem>
                        <SelectItem value="banana">Banana</SelectItem>
                        <SelectItem value="blueberry">Blueberry</SelectItem>
                        <SelectItem value="grapes">Grapes</SelectItem>
                        <SelectItem value="pineapple">Pineapple</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
                <Button
                  variant={"theme"}
                  size={"lg"}
                  asChild
                  className="!h-full"
                >
                  <a href="">Track Now</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
