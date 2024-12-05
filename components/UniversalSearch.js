"use client";

import { usePathname, useSearchParams, useRouter } from "next/navigation";

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
    <div className="rounded-3xl bg-white overflow-hidden">
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
                <span>{item?.name}</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default UniversalSearch;
