"use client";
import { useEffect, useState } from "react";
// import DProductTable from "./dProductTable_PrelineUI";
// import DProductTable from "./dProductTable_TailwindUI";
// import DProductTable from "./dProductTable_FlowbiteUI";
import RTable from "./RTable";

export default function Products() {
  const [resData, setResData] = useState([]);
  const [loading, setLoading] = useState(true);

  const getData = async (res) => {
    await fetch("/api/shop/references/d_product")
      .then((res) => res.json())
      .then((data) => {
        setResData(data.data);
        // console.log("d_product/page/data.data.rows", data.data);
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  const columns = [
    { label: "nRow", accessor: "_nrow", sortable: false, with: "15px" },
    { label: "Idx", accessor: "index", sortable: false, with: "15px" },
    { label: "Id", accessor: "id", sortable: true, with: "20px" },
    { label: "Назва товару", accessor: "name", sortable: true, with: "200px" },
    { label: "ШтрихКод", accessor: "skod", sortable: true, with: "200px" },
    {
      label: "Категорія",
      accessor: "category",
      sortable: true,
      with: "200px",
    },
    { label: "Ціна", accessor: "price", sortable: true, with: "200px" },
  ];

  //  const columns = [
  //   {
  //     key: "name",
  //     label: "NAME",
  //   },
  //   {
  //     key: "role",
  //     label: "ROLE",
  //   },
  //   {
  //     key: "age",
  //     label: "AGE",
  //   },
  // ];

  const rows = [
    {
      key: "1",
      firstName: "Tony",
      lastName: "Reichert",
      role: "Developer",
      age: "35",
    },
    {
      key: "2",
      firstName: "Zoey",
      lastName: "Lang",
      role: "Designer",
      age: "22",
    },
    {
      key: "3",
      firstName: "Jane",
      lastName: "Fisher",
      role: "CEO",
      age: "29",
    },
    {
      key: "4",
      firstName: "William",
      lastName: "Howard",
      role: "Designer",
      age: "27",
    },
  ];

  //   console.log("d_product/page/resData", resData);
  return (
    <main className="h-screen items-center justify-center">
      {loading ? (
        <div>Отримання даних з бази даних...</div>
      ) : (
        // <div className="flex w-fit flex-col items-center justify-center">
        <>
          <RTable
            // rowsData={resData}
            initialData={resData}
            // columns={columns}
            initialСolumns={columns}
            title={"DProducts"}
            p_selected={"true"}
            p_filteredAllRows={"true"}
            p_infoRows={"true"}
          />
          {/* <DProductTable rows={rows} columns={columns} title={"DProducts"} /> */}
        </>
      )}
    </main>
  );
}
