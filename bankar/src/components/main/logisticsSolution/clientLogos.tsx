import Image from "next/image";
import {
  dt_Global_Client,
  ferguson_Client,
  moved_Client,
  nayba_client,
  oxfam_client,
  winsupply_Client,
} from "../../../lib/constants";

export const ClientLogos = () => {
  return (
    <div className="flex justify-between items-center space-x-4 px-16">
      {[
        dt_Global_Client,
        ferguson_Client,
        moved_Client,
        nayba_client,
        oxfam_client,
        winsupply_Client,
      ].map((client, index) => (
        <Image
          key={index}
          src={client}
          alt=""
          className="w-32 aspect-[3/2] object-contain grayscale-100 opacity-50"
        />
      ))}
    </div>
  );
};
