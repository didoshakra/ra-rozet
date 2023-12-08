import LayoutWithSidebar from "@/components/rozet/LayoutWithSidebar";
// import HomePage from "@/components/HomePage";
import StHomePage from "@/components/mstan/StHomePage";
import OurProducts from "@/app/(shop)/product/OurProducts";
import Promotion from "@/app/(shop)/product/Promotion";
// import Promotions from "@/components/mstan/Promotions";

export default function Home() {
  return (
    <main className="mx-auto mt-48 min-h-screen w-screen px-1">
      {/* <LayoutWithSidebar /> */}
      <StHomePage />
      {/* <OurProducts /> */}
      {/* <Promotion /> */}
    </main>
  );
}
