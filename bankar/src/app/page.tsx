import { Header } from "@/components/header";
import { Separator } from "@/components/ui/separator";
import { Hero } from "@/components/main/hero";
import { LogisticsSolution } from "@/components/main/logisticsSolution/logisticsSolution";
import { ShippingServices } from "@/components/main/shippingServices";
import { LogisticsOverview } from "@/components/main/logisticsOverview";
import { ShipmentTracking } from "@/components/main/shipmentTracking";
import { ContainerFacilities } from "@/components/main/containerFacilities";
import { CargoDeliveryComponent } from "@/components/main/cargoDeliveryComponent";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="mx-auto">
      <Header />
      <Separator className="bg-primary !h-[1.5px] max-w-[90%] mx-auto" />
      <main className="mt-5 *:p-12 *:mx-auto space-y-16">
        <Hero />
        <LogisticsSolution />
        <ShippingServices />
        <LogisticsOverview />
        <ShipmentTracking />
        <ContainerFacilities />
        <CargoDeliveryComponent />
      </main>
      <Footer />
    </div>
  );
}
