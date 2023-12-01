//https://www.simplenextjs.com/posts/next-postgresql

import { conn } from "@/config/dbConfig";
import DProductTable from "./dProductTable_TailwindUI";

export default async function DProducts() {
  const getDataAll = async () => {
    let data = [];
    const query =
      "SELECT d_product.id,d_product.name,category_id,price,brand_id,img,ov_id,skod,uktzed,pdv,akcuz,is_discount,d_category.name AS category,d_brand.name AS brand,d_ov.name AS ov FROM d_product JOIN d_category ON d_category.id = d_product.category_id   JOIN d_brand ON d_brand.id = d_product.brand_id JOIN d_ov ON d_ov.kod = d_product.ov_id  ORDER BY id DESC LIMIT 100";
    //   const query = "select * from d_product ORDER BY id DESC LIMIT 100";
    try {
      const result = await conn.query(query); // conn.query-команда виконнання запиту(.query)
      // console.log("getDataAll/result=", result.rows);
      data = result.rows;
    } catch (error) {
      // console.log("Помилка запиту! 1.query =",query + "  2.Помилка запиту:",error);
      data =
        "DProducts/Помилка запиту! 1.query =" + query + " 2.Помилка:" + error;
    }
    return await data;
  };
  // console.log("*****DProducts/resData=");
  //   const resData = await Promise.all([getDataAll()]);//працює //https://github.com/mfikricom/CRUD-Next.js-13-Prisma-PostgreSQL/blob/main/app/products/page.tsx//
  const resData = await getDataAll();
  //   console.log("* DProducts/resData=", resData);

  const columns = [
    { name: "Id", uid: "id" },
    { name: "Назва", uid: "name" },
    { name: "ACTIONS", uid: "actions" },
    { name: "Ціна", uid: "price" },
    { name: "ШКод", uid: "skod" },
    { name: "УКТЗЕД", uid: "uktzed" },
    // { name: "ПДВ", uid: "pdv" },
    // { name: "Акциз", uid: "akcuz" },
    // { name: "Знижка", uid: "is_discount" },
    // { name: "Категорія", uid: "category" },
    // { name: "Бренд", uid: "brand" },
    // { name: "Од вим.", uid: "ov" },
    // { name: "img", uid: "img" },
  ];
  return (
    <>
      <h1 className="dark:text-hMenuTextDark text-center text-4xl font-bold text-hMenuText">
        DProducts
      </h1>
      <DProductTable columns={columns} rows={resData} />
    </>
  );
}
