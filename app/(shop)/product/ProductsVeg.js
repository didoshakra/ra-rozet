//Під шаблон ProductVegefoogs
import { getAllProducts } from "@/app/(shop)/product/data/data";
import Link from "next/link";
import ItemImage from "@/components/_images/ItemImage";

function ProductVeg({ item }) {
  console.log("************Product.js/P/item=", item);
  return (
    <Link
      href={`/product/${item.id}`}
      //   href={`(shop)/product/${item.id}`}
      className="group flex h-96 flex-col rounded border-2 border-cardBorder  transition-transform  duration-200 ease-out hover:scale-105 dark:border-cardBorderD"
      //   className="h-96 flex flex-col rounded border-2"
    >
      <div className="relative max-h-72 flex-1 ">
        <>
          {item.discontProc > 0 && (
            <div className="absolute left-0 top-0 z-10 inline bg-[#82ae46] text-base text-white">
              {item.discontProc}%
            </div>
          )}
          {/* <ItemImage item={item} width={350} height={280} /> */}
          <ItemImage item={item} fill />
        </>
      </div>

      <h3 className="text-center font-serif font-normal uppercase">
        {item.title}
      </h3>

      {/* рядок іконок */}
      <div className="mt-2 flex items-center justify-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-3xl bg-[#82ae46]">
          <svg
            //   Menu
            className="h-6 w-6 text-red-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </div>
        <div className="flex h-10 w-10 items-center justify-center rounded-3xl bg-[#82ae46]">
          <svg
            // Cart/Візочок
            className="h-6 w-6 text-red-500"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {" "}
            <path stroke="none" d="M0 0h24v24H0z" />{" "}
            <circle cx="9" cy="19" r="2" /> <circle cx="17" cy="19" r="2" />{" "}
            <path d="M3 3h2l2 12a3 3 0 0 0 3 2h7a3 3 0 0 0 3 -2l1 -7h-15.2" />
          </svg>
        </div>
        <div className="flex h-10 w-10 items-center justify-center rounded-3xl bg-[#82ae46]">
          <svg
            //  Серце
            className="h-6 w-6 text-errorMsg dark:text-errorMsgD"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {" "}
            <path stroke="none" d="M0 0h24v24H0z" />{" "}
            <path d="M12 20l-7 -7a4 4 0 0 1 6.5 -6a.9 .9 0 0 0 1 0a4 4 0 0 1 6.5 6l-7 7" />
          </svg>
        </div>
      </div>
      <div className="mb-1 mt-4 flex items-center justify-center gap-10 px-1 font-semibold">
        {item.discontProc > 0 && (
          <p className="justify-center text-center text-base text-[#82ae46] line-through">
            {(item.price - (item.price * item.discontProc) / 100).toFixed(2)}
          </p>
        )}
        <p className="justify-center text-center text-base font-bold text-[#82ae46]">
          ₴{item.price.toFixed(2)}
        </p>
      </div>
      {/*line-clamp-2: Для затиску тексту до певної кількості рядків. */}
      <p className="line-clamp-2 px-4 text-xs italic text-gray-600">
        {item.description}
      </p>
    </Link>
  );
}

export default async function ProductsVeg() {
  const products = await getAllProducts();
  // console.log("Products.js/products=", products)
  return (
    <section className="relative mx-auto flex max-w-7xl flex-col space-y-12 py-14 pb-5 ">
      <div className="flex flex-col space-y-12 py-14 pb-5">
        <div className="text-center text-hMenuText">
          <span className="tex-lg mb-2 font-serif italic">Нові продукти</span>
          <h2 className="mb-4 text-4xl  font-bold">Наші продукти</h2>
          <p>
            Наші продукти жавжди свіжі і якісні. Ви отримажте масу задоводення
            від їх споживання
          </p>
        </div>
      </div>
      {/* card */}
      {/* <div className="grid grid-cols-1 gap-y-10 gap-x-6 md:grid-flow-col sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8"> */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products.map((item) => (
          <ProductVeg key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}