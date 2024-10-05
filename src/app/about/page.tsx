import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Page | Free Next.js Template for Startup and SaaS",
  description: "This is About Page for Startup Nextjs Template",
  // other metadata
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="About Page"
        description="Featurize is a platformbuilt by MIT, Princeton, and Columbia students that empowers developers to directly impact the digital products they love while building their portfolios and earning rewards. Simultaneously, we enable companies to continuously improve their offerings by tapping into global talent, receiving direct feedback from users, and enhancing their products without straining internal resources."
      />
      <AboutSectionOne />
      <AboutSectionTwo />
    </>
  );
};

export default AboutPage;
