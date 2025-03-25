import { Button } from "../ui/button";

export const CargoDeliveryComponent = () => {
  return (
    <section className="space-y-20">
      <div className="max-w-[90%] mx-auto space-y-20">
        <div className="flex flex-col items-center justify-center space-y-14">
          <h1 className="text-6xl font-medium">
            Let Us Deliver Your Package
            <br />
            To Its Destination
          </h1>
          <div className="flex items-center gap-4">
            <Button variant={"theme"} className="text-base h-16 !px-14">
              Track Parcel
            </Button>
            <Button
              variant={"outline"}
              className="text-base h-16 !px-12 border-primary"
            >
              Download App
            </Button>
          </div>
        </div>
        <div></div>
      </div>
    </section>
  );
};
