//Ecomerc
import Link from "next/link";
import ProductImage from "../../../components/_images/ItemImage";

export default function Product({ product }) {
  //   console.log("************Product.js/product=", product)
  return (
    <Link
    //   href={`/(shop)/product/${product.id}`}
      href={`/product/${product.id}`}
      className="group flex h-96 flex-col rounded border p-5 transition-transform duration-200 ease-out hover:scale-105"
    >
      <div className="relative max-h-72 flex-1">
        <ProductImage item={product} fill />
      </div>

      <div className="mb-1 mt-4 flex items-center justify-between font-semibold">
        <p className="w-44 truncate">{product.title}</p>
        <p>${product.price}**</p>
      </div>

      <p className="line-clamp-2 w-64 text-xs italic text-gray-600">
        {product.description}
      </p>
    </Link>
  );
}
