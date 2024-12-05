import { UniversalSearch } from "@/components";
import { getRecruiters } from "@/queries/recruiters";

export default async function Home(props) {
  const searchParams = await props.searchParams;
  const filters = {
    search: searchParams?.search || "undefined",
  };

  const data = await getRecruiters(filters);

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="far-container py-12">
        <UniversalSearch data={data} />
      </div>
      ;
    </div>
  );
}
