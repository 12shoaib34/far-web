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
        <h1 className="text-center mb-4 font-medium">Find A Recruiter</h1>
        <UniversalSearch data={data} />
      </div>
      ;
    </div>
  );
}
