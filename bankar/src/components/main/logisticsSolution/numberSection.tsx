export const NumbersSection = () => {
  return (
    <div className="max-w-[70%] mx-auto pb-16 ">
      <div className="flex justify-between">
        <div className="text-center relative">
          <span className="text-8xl">
            30
            <sup className="text-4xl font-medium top-2 absolute ml-2">k</sup>
          </span>
          <p className="text-base">Active Customers Worldwide</p>
        </div>
        <div className="text-center">
          <span className="text-8xl relative">
            <sup className="text-4xl font-medium top-4 -left-8 absolute">$</sup>
            20B
          </span>
          <p className="text-base">Total Revenue Earned By Bankar</p>
        </div>
        <div className="text-center">
          <span className="text-8xl relative">
            <sup className="text-4xl font-medium top-4 -left-8 absolute">$</sup>
            300M
          </span>
          <p className="text-base">Total Percale Delivered By Bankar</p>
        </div>
      </div>
    </div>
  );
};
