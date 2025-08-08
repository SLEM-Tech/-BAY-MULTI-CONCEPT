import AppLayout from "@src/components/AppLayout";
import AllCategorySection from "@src/components/PageFragments/AllCategorySection";
import SortedProducts from "./(Home)/_components/SortedProducts";
import { SEODATA } from "@constants/seoContants";
import { Metadata } from "next";
import CustomPage from "@src/components/CustomPage";
import FeaturesSection from "@src/components/FeaturesSection";

const { description, title } = SEODATA.home;
export const metadata: Metadata = {
  title: title,
  description: description,
  icons: SEODATA.defaultOGImage,
  openGraph: {
    images: [
      {
        url: SEODATA.defaultOGImage,
      },
    ],
  },
};

const page = () => {
  return (
    <AppLayout className="className='pt-10 mx-auto max-w-[1256px] mt-20 max-sm:mt-22">
      <CustomPage />
      {/* <AllCategorySection /> */}
      <div className="my-4 sm:my-16 lg:my-20 py-12 mx-auto">
        <SortedProducts />
      </div>

      <FeaturesSection/>
    </AppLayout>
  );
};

export default page;
