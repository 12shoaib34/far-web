"use client";

import Image from "next/image";
import { useState } from "react";
import { RiUser6Line } from "react-icons/ri";
import RecruiterDetailsDrawer from "./RecruiterDetailsDrawer";

const RecruiterDetails = (props) => {
  const { data } = props;

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const toggleDrawer = () => setIsDrawerOpen(!isDrawerOpen);

  return (
    <>
      <tr className="border-b last:border-none">
        <td className="py-2">
          <div className="flex items-center gap-2 col-span-3">
            {data?.logo ? (
              <div className="relative h-14 w-14 overflow-hidden rounded-full bg-gray-100">
                <Image className="object-contain" priority src={data?.logo} alt={`Logo of ${data?.name}`} layout="fill" />
              </div>
            ) : (
              <div className="h-14 w-14 rounded-full bg-gray-100 border flex items-center justify-center text-3xl text-gray-400">
                <RiUser6Line />
              </div>
            )}
            <div className="leading-none">
              <h2 className="relative line-clamp-3 leading-1 font-semibold text-sm mb-0">{data?.name}</h2>
              <span className="text-xs text-gray-600 font-medium">Agency</span>
            </div>
          </div>
        </td>
        <td className="py-2">
          <div className="flex items-center gap-1 col-span-2">
            <Image src={"/icons/map-marker-primary.svg"} alt="location" width={20} height={20} />
            {data?.area}
          </div>
        </td>
        <td className="py-2">
          <div className="flex items-center gap-1 col-span-2">
            <Image src={"/icons/peoples-primary.svg"} alt="employees" width={20} height={20} />5 employees
          </div>
        </td>
        <td className="py-2">
          <div className="flex justify-end">
            <button onClick={toggleDrawer} className="far-btn md font-medium outline-tertiary">
              View
            </button>
          </div>
          <RecruiterDetailsDrawer data={data} open={isDrawerOpen} onClose={toggleDrawer} />
        </td>
      </tr>
    </>
  );
};

export default RecruiterDetails;
