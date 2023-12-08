import LayoutWithSidebar from "@/components/rozet/LayoutWithSidebar";
// import HomePage from "@/components/HomePage";
import StHomePage from "@/components/mstan/StHomePage";
import OurProducts from "@/app/(shop)/product/OurProducts";
import Promotion from "@/app/(shop)/product/Promotion";
// import Promotions from "@/components/mstan/Promotions";

export default function Home() {
  return (
    <main className="border border-2 px-0 ">
      {/* <main className="m-0 mx-0 my-auto p-0"> */}
      {/* <LayoutWithSidebar /> */}
      {/* <StHomePage /> */}
      <OurProducts />
      {/* <Promotion /> */}
    </main>
  );
}
