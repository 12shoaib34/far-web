"use client";

import Image from "next/image";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React from "react";

const RecruiterDetails = (props) => {
  const { data } = props;

  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { push, replace } = useRouter();

  const onView = (data) => {
    const params = new URLSearchParams(searchParams);
    params.set("area", data?.area);
    params.set("name", data?.name);
    params.set("id", data?.id);

    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="grid grid-cols-8 gap-12 items-start mb-6">
      <div className="flex items-center gap-2 col-span-3">
        <Image
          className="object-cover rounded-full"
          src={
            data?.image ||
            "https://i0.wp.com/digitalhealthskills.com/wp-content/uploads/2022/11/3da39-no-user-image-icon-27.png?fit=500%2C500&ssl=1"
          }
          alt={`Logo of ${data?.name}`}
          width={36}
          height={36}
        />
        <div className="leading-none">
          <h2 className="relative line-clamp-3 leading-1 font-semibold text-sm mb-0">{data?.name}</h2>
          <span className="text-xs text-gray-600 font-medium">Agency</span>
        </div>
      </div>
      <div className="flex items-center gap-1 col-span-2">
        <Image src={"/icons/map-marker-primary.svg"} alt="location" width={20} height={20} />
        {data?.area}
      </div>
      <div className="flex items-center gap-1 col-span-2">
        <Image src={"/icons/peoples-primary.svg"} alt="employees" width={20} height={20} />5 employees
      </div>
      <div className="ml-auto">
        <button onClick={() => onView(data)} className="far-btn md font-medium outline-tertiary">
          View
        </button>
      </div>
    </div>
  );
};

export default RecruiterDetails;
