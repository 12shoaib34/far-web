"use client";

import Image from "next/image";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { LuSearch } from "react-icons/lu";
import { RiUser6Line } from "react-icons/ri";

const UniversalSearch = (props) => {
  const { data } = props;

  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace, push } = useRouter();

  const search = searchParams?.get("search");

  const handleSearch = (e) => {
    const params = new URLSearchParams(searchParams);
    params.set("search", e.target.value);
    replace(`${pathname}?${params.toString()}`);
  };

  const onPush = (data) => {
    push(`/recruiters/${data?.route}`);
  };

  return (
    <div className="rounded-3xl shadow-lg bg-white overflow-hidden">
      <input
        onChange={handleSearch}
        type="text"
        className="rounded-3xl w-full h-12 outline-none px-4 text-base"
        placeholder="Search recruiters"
      />
      {data?.data?.length > 0 && (
        <div className="bg-white">
          {data?.data?.map((item, index) => (
            <div onClick={() => onPush(item)} key={index} className="py-4 cursor-pointer px-6 border-b border-gray-200 hover:bg-gray-100">
              <div className="flex items-center gap-2">
                <LuSearch className="text-xl text-gray-300" />

                <div className="flex gap-4 items-center">
                  {item?.logo ? (
                    <div className="relative h-8 w-8 overflow-hidden rounded-full bg-gray-100">
                      <Image className="object-contain" priority src={item?.logo} alt={`Logo of ${item?.name}`} layout="fill" />
                    </div>
                  ) : (
                    <div className="h-8 w-8 rounded-full bg-gray-100 border flex items-center justify-center text-3xl text-gray-400">
                      <RiUser6Line />
                    </div>
                  )}
                  <span>{[item?.name, item?.area].join(", ")}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default UniversalSearch;
3;
