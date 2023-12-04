import LayoutWithSidebar from "@/components/rozet/LayoutWithSidebar";
// import HomePage from "@/components/HomePage";
import StHomePage from "@/components/mstan/StHomePage";
import ProductsVeg from "@/app/(shop)/components/ProductsVeg";
// import Promotions from "@/components/mstan/Promotions";

export default function Home() {
  return (
    // <main className="  mx-auto border border-2 px-0 xl:px-8">
    <main className="m-0 mx-auto my-auto p-0">
      {/* <LayoutWithSidebar /> */}
      <StHomePage />
      <ProductsVeg />
      {/* <Promotions /> */}
    </main>
  );
}
