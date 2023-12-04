import Link from "next/link"
import RenderImage from "../RenderImage"

export default function PopularCategories({ PopularCategories }) {
  //   console.log("************PopularCategories.js/PopularCategories=", PopularCategories)
  return (
    <Link
      //   href={`/PopularCategories/${PopularCategories.id}`}
      className="h-[72px] grid grid-cols-[56px_1fr] grid-flow-col gap-x-3 items-center justify-items-start border-b border-current  text-sm text-[#3e77aa] hover:text-red-500 hover:underline"
    >
      <div className="relative h-[72px] flex-1">
        {/* <RenderImage RenderImages={PopularCategories} fill /> */}
        <RenderImage RenderImages={PopularCategories} width={56} height={56}/>
      </div>

      {/* <div className="font-semibold flex items-center justify-between mt-4 mb-1"> */}
      <div className="font-semibold flex items-center justify-center mt-4 mb-1">
        <p className="w-44 truncate">{PopularCategories.title}</p>
      </div>
      {/* <p className="italic text-xs w-64 line-clamp-2 text-gray-600">{PopularCategories.description}</p> */}
    </Link>
  )
}
