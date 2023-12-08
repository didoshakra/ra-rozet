import Product from "@/app/(shop)/product/Product";
import { getAllProducts } from "@/app/(shop)/product/data/data";

export const metadata = {
  title: "Продукти",
  description: "Продукти харчування",
};

export default async function Home() {
  const products = await getAllProducts();
  return (
    // <main className="min-h-screen max-w-7xl mx-auto px-8 xl:px-0 mt-48">
    // <main className="container mx-auto">
    <section className="text-center flex-col flex space-y-2 pt-5 pb-5 text-hText dark:text-hTextD">
      <h1 className=" text-4xl font-bold">ПРОПОЗИЦІЇ ДНЯ</h1>
      <h2 className=" text-2xl italic text-red-500">
        Тільки якісні продукти
      </h2>
      <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </section>
    // </main>
  );
}
