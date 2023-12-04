//Під шаблон ProductVegefoogs
//Обєднано page+Prodocts(забір даних)
import { getAllProducts} from "@/app/(shop)/data/data";
import Link from "next/link";
import ItemImage from "./ItemImage";

function ProductVeg({ item }) {
  // console.log("************Product.js/P/roduct=", Product)
  return (
    <Link
    //   href={`/productVeg/${item.id}`}
      href={`/product/${item.id}`}
      className="group flex h-96 flex-col rounded border-2 border-cardBorder  transition-transform  duration-200 ease-out hover:scale-105 dark:border-cardBorderD"
      //   className="h-96 flex flex-col rounded border-2"
    >
      <div className="relative max-h-72 flex-1">
        {item.discontProc > 0 && (
          <div className="absolute left-0 top-0 z-10 inline bg-[#82ae46] text-base text-white">
            {item.discontProc}%
          </div>
        )}
        {/* <div className="hover:scale-105 transition-transform ease-out duration-200 bg-[#82ae46]"> */}
        <ItemImage item={item} width={350} height={280} />
        {/* </div> */}

        <h3 className="text-center font-semibold">{item.name}</h3>
        <p className="w-44 truncate">{item.title}</p>
        {/* <div className="products-container__price-container"> */}
        <div className="m-4 flex justify-center gap-2 text-center align-middle">
          {item.discontProc > 0 && (
            // <p className="products-container__discount">
            <p className="justify-center text-center text-base text-[#82ae46] line-through">
              {/* Ціна зі знмжкою/ToFixed () форматує число, використовуючи запис з фіксованою комою. */}
              {(item.price - (item.price * item.discontProc) / 100).toFixed(2)}
            </p>
          )}
          <p className="justify-center text-center text-base font-bold text-[#82ae46]">
            {" "}
            ₴{item.price.toFixed(2)}
          </p>
        </div>
        <div className=" bottom-4 left-0 flex items-center justify-center gap-1">
          <div className="flex h-10 w-10 items-center justify-center rounded-3xl bg-[#82ae46]">
            {/* Menu */}
            <svg
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
            {/* Cart/Візочок */}
            <svg
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
            {/* Серце*/}
            <svg
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
      </div>
      {/* products-container_icons-container */}
      <div className="mb-1 mt-4 flex items-center justify-center font-semibold">
        <p className="w-44 truncate">{item.title}</p>
      </div>
      {/* <p className="italic text-xs w-64 line-clamp-2 text-gray-600">{item.description}</p> */}
    </Link>
  );
}

export default async function ProductsVeg() {
  const products = await getAllProducts();
    console.log("Products.js/products=", products)
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
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {/* <div className="grid grid-cols-1 gap-y-10 gap-x-6 md:grid-flow-col sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8"> */}
        {products.map((item) => (
          <ProductVeg key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}
