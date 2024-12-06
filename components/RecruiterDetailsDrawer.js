import Drawer from "./Drawer";
import Image from "next/image";
import { RiUser6Line } from "react-icons/ri";
import RecruiterIndustries from "./RecruiterIndustries";

const RecruiterDetailsDrawer = (props) => {
  const { data = {}, open, onClose } = props;

  return (
    <Drawer title={data?.name} open={open} onClose={onClose}>
      <div className="flex-grow overflow-auto">
        <div className="p-4 flex flex-col gap-6">
          {/* Recruiter Details */}
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              {data?.logo ? (
                <div className="relative h-10 w-10 overflow-hidden rounded-full bg-gray-100">
                  <Image className="object-contain" priority src={data?.logo} alt={`Logo of ${data?.name}`} layout="fill" />
                </div>
              ) : (
                <div className="h-10 w-10 rounded-full bg-gray-100 border flex items-center justify-center text-3xl text-gray-400">
                  <RiUser6Line />
                </div>
              )}
              <div className="leading-none">
                <h2 className="relative line-clamp-3 leading-1 font-semibold text-xs mb-0">{data?.name}</h2>
                <span className="text-xs text-gray-600 font-medium">Agency</span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <a href={data?.website} target="_blank">
                <Image height={24} width={24} src="/icons/website.svg" alt="website" />
              </a>
              <button className="far-btn-link primary min-w-max">Claim this profile</button>
            </div>
          </div>

          {/* Description */}
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat placeat in aliquam animi nostrum ad ducimus quod odit, et neque,
            cumque dolores eveniet odio assumenda accusantium ipsa repellat labore laboriosam?
          </p>

          {/* Details */}
          <div className="border rounded-lg p-4 flex flex-col gap-4">
            {/* Business */}
            <div>
              <h2 className="text-base mb-2 font-medium">Business</h2>
              <div className="flex gap-4 flex-wrap items-center">
                <div className="flex items-center gap-1">
                  <Image src="/icons/map-marker-primary.svg" alt="location" width={20} height={20} />
                  <span>{data?.area}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Image src="/icons/peoples-primary.svg" alt="employees" width={20} height={20} />
                  <span>5 employees</span>
                </div>
              </div>
            </div>
            {/* Recruitment */}
            <div>
              <h2 className="text-base mb-2 font-medium">Recruitment</h2>
              <div className="flex gap-4 flex-wrap items-center">
                <div className="flex items-center gap-1">
                  <Image src="/icons/briefcase-primary.svg" alt="employees" width={20} height={20} />
                  <span>Non-exclusive</span>
                </div>
                <div className="flex items-center gap-1">
                  <Image src="/icons/dollar-primary.svg" alt="employees" width={20} height={20} />
                  <span>Variable fees</span>
                </div>
              </div>
            </div>
            {/* Industry Specialisations */}
            {data?.IndustrySpecialisationOnExtractedRecruiter?.length > 0 && (
              <div>
                <h2 className="text-base mb-2 font-medium">Industry Specialisations</h2>
                <RecruiterIndustries industries={data?.IndustrySpecialisationOnExtractedRecruiter} />
              </div>
            )}
          </div>

          {/* Contacts */}
          <div className="border rounded-lg p-4 flex flex-col gap-4">
            <div>
              <h2 className="text-base mb-2 font-medium">Primary contact</h2>
              <div>
                <h3 className="text-sm font-medium">Samanta Smith</h3>
                <span className="text-sm text-gray-400">Consultant</span>
              </div>
            </div>
            <button className="border py-2 text-base font-medium text-gray-500 w-full rounded-lg">Reveal contact details</button>
          </div>

          {/* Additional information */}
          <div className="border rounded-lg p-4 flex flex-col gap-4">
            <div>
              <h2 className="text-base mb-2 font-medium">Additional information</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat placeat in aliquam animi nostrum ad ducimus quod odit, et
                neque, cumque dolores eveniet odio assumenda accusantium ipsa repellat labore laboriosam?
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="shadow-drawer-footer-shadow flex p-4">
        <button className="far-btn primary w-full">Request a quote</button>
      </div>
    </Drawer>
  );
};

export default RecruiterDetailsDrawer;
