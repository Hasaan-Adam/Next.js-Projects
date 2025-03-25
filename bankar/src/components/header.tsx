import Image from "next/image";
import { Button } from "./ui/button";
import { mainLogo } from "@/lib/constants";

export const Header = () => {
  return (
    <header className="flex items-center justify-between max-w-[90%] mx-auto py-8">
      <Image src={mainLogo} alt="" className="max-h-10 w-auto" />
      <div className="space-x-4">
        {["track package", "services", "locations", "reviews"].map((item) => (
          <Button
            key={item}
            variant={"link"}
            className="font-medium text-base capitalize"
          >
            <a>{item}</a>
          </Button>
        ))}
        <Button variant={"theme"} size={"lg"} asChild className="h-14 !px-10">
          <a href="">Contact Us</a>
        </Button>
      </div>
    </header>
  );
};
