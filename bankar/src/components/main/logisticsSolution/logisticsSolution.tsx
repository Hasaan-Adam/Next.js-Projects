"use client";

import { ClientLogos } from "./clientLogos";
import { CardSection } from "./cardSection";
import { NumbersSection } from "./numberSection";

export const LogisticsSolution = () => {
  return (
    <section className="space-y-20 bg-theme-orange/5 !pt-0">
      <div className="bg-zinc-900 rounded-4xl text-white">
        <div className="max-w-[90%] mx-auto py-20 space-y-20">
          <ClientLogos />
          <CardSection />
        </div>
      </div>
      <NumbersSection />
    </section>
  );
};
