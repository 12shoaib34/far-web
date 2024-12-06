import { RecruiterDetails } from "@/components";
import { getRecruitersByRoute } from "@/queries/recruiterByRoute";

export default async function Page(props) {
  const { params } = await props.params;

  const route = `${params?.[0]}/${params?.[1]}`;
  const data = await getRecruitersByRoute({ route });

  console.log(data);

  return (
    <div>
      <div className="far-container py-12">
        <table className="w-full">
          <tbody className="w-full">
            <RecruiterDetails data={data} />
          </tbody>
        </table>
      </div>
    </div>
  );
}

export async function generateMetadata({ params, searchParams }, parent) {
  const getPrams = await params?.params;
  const route = `${getPrams?.[0]}/${getPrams?.[1]}`;
  const data = await getRecruitersByRoute({ route });

  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: data?.metaTitle || data?.name,
    description: data?.metaDescription || "",
    openGraph: {
      images: [data?.logo, ...previousImages],
    },
  };
}
