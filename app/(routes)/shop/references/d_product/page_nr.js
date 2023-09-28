//https://blog.coffeeinc.in/getting-started-with-vercel-postgres-and-next-js-13-bcb4715f3899
"use client";

import { useEffect, useState } from "react";

export default async function DProducts() {
  const [resData, setResData] = useState([]);
  const [loading, setLoading] = useState(true);

  const getData = async () => {
    await fetch("/api/shop/references/d_product")
      .then((res) => res.json())
      .then((data) => {
        // setResData(data.data.rows);
        setResData(data.data);
        console.log("d_product/page/data.data", data.data);
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setLoading(false);
      });
  };

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

  useEffect(() => {
    getData();
  }, []);

  //   const resData = await getData();
  console.log("* DProducts/resData=", resData);

  return (
    <main className="flex h-screen items-center justify-center">
      {loading ? (
        <div>Отримання даних ...</div>
      ) : (
        <div className="flex w-fit flex-col items-center justify-center">
          <h1 className="text-center text-4xl font-bold text-headMenuText dark:text-headMenuTextDark">
            DProducts
          </h1>
          {resData.length > 0 ? (
            <div>
              <DProductTable columns={columns} rows={resData} />
            </div>
          ) : (
            <div>Немає даних</div>
          )}
        </div>
      )}
    </main>
  );
}
