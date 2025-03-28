"use client";

import Image from "next/image";
import {
  ArrowDownRight,
  FacebookLogo,
  InstagramLogo,
  LinkedinLogo,
  TwitterLogo,
} from "phosphor-react";
import { footerBackground, mainLogo } from "../lib/constants";
import { Input } from "./ui/input";

export const Footer = () => {
  return (
    <footer className="px-12 ">
      <div className="bg-zinc-900 rounded-t-[6rem] text-muted-foreground">
        <div className="max-w-[90%] mx-auto pt-24 pb-12 space-y-20">
          <div className="grid grid-cols-6 gap-24">
            <div className="text-start space-y-6 col-span-2">
              <Image src={mainLogo} alt="" className="max-h-10 w-auto invert" />
              <p className="text-sm">
                The faster, easier way to book and manage your international
                shipment
              </p>
            </div>
            <div className="text-start space-y-8">
              <h1 className="text-2xl text-white">Company</h1>
              <ul className="space-y-6 text-sm">
                <li>About us</li>
                <li>Contact Us</li>
                <li>License`&apos;`s</li>
                <li>Careers</li>
                <li>Privacy Policy</li>
              </ul>
            </div>
            <div className="text-start space-y-8">
              <h1 className="text-2xl text-white">Products</h1>
              <ul className="space-y-6 text-sm">
                <li>Container Leasing</li>
                <li>Container Trading</li>
                <li>Ocean Freight</li>
                <li>Container Control</li>
                <li>Container Tracking</li>
              </ul>
            </div>
            <div className="text-start space-y-6 col-span-2">
              <h1 className="text-2xl text-white">Join our newsletter</h1>
              <div className="flex items-center border-0 px-8 border-b-2 focus-within:border-b-theme-orange">
                <Input
                  type="email"
                  placeholder="Enter email address"
                  className="h-12 border-0 rounded-none placeholder:text-sm placeholder:font-medium placeholder:text-white focus-visible:ring-0"
                />
                <ArrowDownRight size={32} className="text-theme-orange" />
              </div>
              <div className="flex items-center gap-4 text-white mt-16">
                <span className="border-2 border-white p-2 rounded-full hover:border-theme-orange hover:text-theme-orange">
                  <TwitterLogo size={28} weight="fill" />
                </span>
                <span className="border-2 border-white p-2 rounded-full hover:border-theme-orange hover:text-theme-orange">
                  <InstagramLogo size={28} />
                </span>
                <span className="border-2 border-white p-2 rounded-full hover:border-theme-orange hover:text-theme-orange">
                  <LinkedinLogo size={28} />
                </span>
                <span className="border-2 border-white p-2 rounded-full hover:border-theme-orange hover:text-theme-orange">
                  <FacebookLogo size={28} />
                </span>
              </div>
            </div>
          </div>
        </div>
        <div>
          <Image
            src={footerBackground}
            alt=""
            className="w-full object-cover h-[50vh] object-top brightness-60"
          />
        </div>
      </div>
    </footer>
  );
};
