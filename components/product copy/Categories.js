import Category from "./Category";
import {getAllCategories} from "@/app/product/dataCategories";

export default async function Categories() {
  const mCategories = await getAllCategories();
  // console.log("Categories.js/Categories=", Categories)
  return (
    // <div className=" mt-0 max-w-[232px] overflow-hidden border-b  border-r border-solid border-[#e9e9e9] bg-white p-1 px-2">
    <div className=" mt-0 max-w-[232px] overflow-hidden border-b  border-r border-solid border-[#e9e9e9] p-1 px-2">
      {mCategories.map((item) => (
        <Category key={item.id} item={item} />
      ))}
    </div>
  );
}
