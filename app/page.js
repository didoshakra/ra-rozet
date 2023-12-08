import LayoutWithSidebar from "@/components/rozet/LayoutWithSidebar";
// import HomePage from "@/components/HomePage";
import StHomePage from "@/components/mstan/StHomePage";
import OurProducts from "@/app/(shop)/product/OurProducts";
import Promotion from "@/app/(shop)/product/Promotion";
// import Promotions from "@/components/mstan/Promotions";

export default function Home() {
  return (
    <main className="mx-auto px-1 mt-48 min-h-screen max-w-7xl">
      <LayoutWithSidebar />
      {/* <StHomePage /> */}
      {/* <OurProducts /> */}
      {/* <Promotion /> */}
    </main>
  );
}
