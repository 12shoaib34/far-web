import { RecruiterDetails } from "@/components";
import RecruiterPagination from "@/components/RecruiterPagination";
import { getRecruiters } from "@/queries/recruiters";
import Image from "next/image";

export default async function Page(props) {
  const searchParams = await props.searchParams;
  const filters = {
    pageNumber: +searchParams?.page || 1,
    search: searchParams?.search || "undefined",
  };

  const data = await getRecruiters(filters);

  return (
    <div>
      <div className="far-container py-12">
        <h1 className="text-lg font-medium mb-8">{`${data?.count || 0} Recruiters found`}</h1>

        {data?.data?.map((agency, index) => (
          <RecruiterDetails data={agency} key={index} />
        ))}

        {data?.count > 1 && <RecruiterPagination totalPages={data?.pages} totalCount={data?.count} />}
      </div>
    </div>
  );
}
