import { RecruiterDetails } from "@/components";
import RecruiterPagination from "@/components/RecruiterPagination";
import { getRecruitersByRoute } from "@/queries/recruiterByRoute";
import { getRecruiters } from "@/queries/recruiters";

export default async function Page(props) {
  const { params } = await props.params;

  const route = `${params?.[0]}/${params?.[1]}`;
  const data = await getRecruitersByRoute({ route });

  return (
    <div>
      <div className="far-container py-12">
        <table className="w-full">
          <tbody className="w-full">
            <RecruiterDetails data={data} />
          </tbody>
        </table>
        {data?.count > 1 && <RecruiterPagination totalPages={data?.pages} totalCount={data?.count} />}
      </div>
    </div>
  );
}
