import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-tertiary py-12">
      <div className="far-container">
        <div>
          <Image src="/logo.svg" alt="logo" width={140} height={38} priority />
        </div>
        <p className="my-6">
          Find A Recruiter is an all-in-one, three-sided platform for Employers, Recruiters and Job Seekers. We provide a directory to link
          Employers with Recruiters with specialised skillsets within particular industries.
        </p>
        <div className="flex">
          <a target="_blank" href="https://instagram.com/findarecruiter_anz">
            <img src="https://far-assets.s3.us-east-2.amazonaws.com/Instagram.png" alt="" />
          </a>
          <a target="_blank" href="https://www.facebook.com/findarecruiter">
            <img src="https://far-assets.s3.us-east-2.amazonaws.com/Facebook.png" alt="" />
          </a>
          <a target="_blank" href="https://www.linkedin.com/company/find-a-recruiter/">
            <img src="https://far-assets.s3.us-east-2.amazonaws.com/Linkedin.png" alt="" />
          </a>
        </div>
        <div className="border-t pt-6 mt-6 text-gray-500">
          <p className="mb-2">© 2023 Find a Recruiter Pty Ltd. All rights reserved</p>

          <p className="mb-2">ABN 38 611 846 407</p>

          <a href="#" className="underline">
            Unsubscribe
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
