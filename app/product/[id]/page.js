import ProductImage from "@/components/product/ProductImage"
import { notFound } from "next/navigation"
import { getProductById } from "../dataProducts.js"
//Фотки мають бути w254*h266

// export function generateMetadata({ params }) {
//   const id = params.name
//   return {
//     title: product.title,
//   }
// }

export default async function ProductPage({ params }) {
  try {
    const id = params.id
    const product = await getProductById(id)
    // const res = await fetch(`https://fakestoreapi.com/products/${id}`)
    // const product = await res.json()

    return (
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-8 px-4 mt-48 pb-10">
        <ProductImage item={product} />

        <div className="divide-y">
          <div className="space-y-2 pb-4">
            <h1 className="text-2xl md:text-4xl font-bold">{product.title}</h1>
            <h2 className="text-gray-500 font-bold text-xl md:text-3xl">${product.price}</h2>
          </div>

          <div className="pt-8">
            <p className="text-xs md:text-sm">{product.description}</p>
          </div>
        </div>
      </div>
    )
  } catch (error) {
    notFound()
  }
}
