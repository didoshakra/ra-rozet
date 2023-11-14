import { getAllProducts } from "../../app/product/dataProducts"
import Link from "next/link"
import ProductImage from "./ProductImage"

function Product({ item }) {
  // console.log("************Product.js/P/roduct=", Product)
  return (
    <Link
      href={`/product/${item.id}`}
      className="h-96 flex flex-col p-5 rounded border-2 group hover:scale-105 transition-transform ease-out duration-200"
    >
      <div className="relative max-h-72 flex-1">
        <ProductImage item={item} fill />
      </div>

      <div className="font-semibold flex items-center justify-center mt-4 mb-1">
        <p className="w-44 truncate">{item.title}</p>
      </div>
      <p className="italic text-xs w-64 line-clamp-2 text-gray-600">{item.description}</p>
    </Link>
  )
}

export default async function Products() {
  const products = await getAllProducts()
  //   console.log("Products.js/products=", products)
  return (
    <section className="relative flex flex-col space-y-12 py-14 pb-5">
      <h1 className="text-center text-4xl font-bold  text-headMenuText dark:text-headMenuTextDark">
        Наші вироби - стандартні і художні
      </h1>
      <h2 className="text-center text-2xl italic text-red-500">
        Використовуєм тільки сталь AISI 304
      </h2>
      {/* <div className="py-big h-80 grid grid-cols-1 md:grid-cols-2  md:grid-flow-col gap-x-5"> */}
      {/* <div className="grid grid-cols-1 gap-y-10 gap-x-6 md:grid-flow-col md:grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8"> */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {/* <div className="grid grid-cols-1 gap-y-10 gap-x-6 md:grid-flow-col sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8"> */}
        {products.map((item) => (
          <Product key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}
