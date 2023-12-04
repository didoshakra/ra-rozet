import { getAllPopularCategories } from "../../app/product/dataPopularCategories";
import Link from "next/link";
import ItemImage from "../../app/(shop)/_images/ItemImage";

function PopularCategorie({ item }) {
  // console.log("************Product.js/P/roduct=", Product)
  return (
    <Link
      href={`/product/${item.id}`}
      className=" grid h-[72px] grid-flow-col grid-cols-[56px_1fr] items-center justify-items-start gap-x-3 border-b border-current  text-sm text-[#3e77aa] hover:text-red-500 hover:underline"
    >
      <div>
        <ItemImage item={item} width={56} height={56} />
      </div>

      <div className="mb-1 mt-4 flex items-center justify-center font-semibold">
        <p className="w-44 truncate">{item.title}</p>
      </div>
      <p className="line-clamp-2 w-64 text-xs italic text-gray-600">
        {item.description}
      </p>
    </Link>
  );
}

export default async function popularCategories() {
  const popularCategories = await getAllPopularCategories();
  // console.log("popularCategories.js/popularCategories=", popularCategories)
  return (
    <section className="flex h-full w-full flex-col">
      <h3 className="mb-6 text-[16px] font-semibold ">Популярні категорії</h3>
      {/* <div className="  grid  grid-rows-4 grid-cols-2 grid-flow-col gap-x-3 items-stretch "> */}
      <div className="grid  grid-cols-1 items-stretch gap-x-3 sm:grid-cols-2  md:grid-rows-4 ">
        {popularCategories.map((item) => (
          <PopularCategorie key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}
