//https://www.simplenextjs.com/posts/next-postgresql

import { conn } from "@/config/dbConfig";
import DBrandTable from "./dBrandTable";

async function getDataAll(req, res) {
  let data = [];
  const query = "select * from d_brand ORDER BY id ASC";
  //   const query = "select * from d_brand ORDER BY id DESC";
  try {
    const result = await conn.query(query); // conn.query-команда виконнання запиту(.query)
    // console.log("getDataAll/result=", result.rows);
    data = result.rows;
  } catch (error) {
    // console.log("Помилка запиту! 1.query =",query + "  2.Помилка запиту:",error);
    data = "DBrands/Помилка запиту! 1.query =" + query + " 2.Помилка:" + error;
  }
  return await data;
}

// async function getDataAll(req, resp) {
//   console.log("dataQuery/getDataAll");
//   const sql = "select *  from d_brand ORDER BY id DESC";
//   //--- pool(promise)
//   conn.then((client) => {
//     return client
//       .query(sql) // your query string here
//       .then((result) => {
//         console.log("result.rows1=", result.rows);
//         client.release(); //звільнення
//         resp.status(200).json(result.rows);
//         // resp.status(200).result.rows;
//         console.log("json(result.rows)=", json(result.rows));
//       }) // your callback here
//       .catch((err) => {
//         client.release(); //звільнення
//         console.log(err.stack); // your callback here
//         resp.status(500).json({ message: err.message });
//       });
//   });
// }

export default async function DBrands() {
  // console.log("*****DBrands/resData=");
  //   const resData = await Promise.all([getDataAll()]);//працює //https://github.com/mfikricom/CRUD-Next.js-13-Prisma-PostgreSQL/blob/main/app/products/page.tsx//
  const resData = await getDataAll();
  //   console.log("* DBrands/resData=", resData);

  const columns = [
    { name: "Id", uid: "id" },
    { name: "NAME", uid: "name" },
    { name: "ACTIONS", uid: "actions" },
  ];
  return (
    <>
      <h1 className="text-center text-4xl font-bold text-hText dark:text-hTextD">
        DBrands
      </h1>
      {/* <ul>
        {resData.map((item) => {
          return (
            <li key={item.id}>
              {item.id}|{item.name}|
            </li>
          );
        })}
      </ul> */}
      {/* <table className="table w-full">
        <thead>
          <tr>
            <th>#</th>
            <th>Brand Id</th>
            <th>Brand Name</th>
            <th className="text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          {resData.map((brand, index) => (
            <tr key={brand.id}>
              <td>{index + 1}</td>
              <td>{brand.id}</td>
              <td>{brand.name}</td>
              <td className="flex justify-center space-x-1"> */}
      {/* <UpdateProduct brands={brands} product={product} /> */}
      {/* <DeleteProduct product={product} /> */}
      {/* </td>
            </tr>
          ))}
        </tbody>
      </table> */}
      <DBrandTable columns={columns} rows={resData} />
    </>
  );
}
