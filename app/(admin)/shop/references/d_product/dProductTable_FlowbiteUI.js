//https://flowbite.com/docs/components/tables/#striped-rows\\Table pagination
//Creating a React sortable table //https://blog.logrocket.com/creating-react-sortable-table/
//---
//https://dev.to/franciscomendes10866/react-basic-search-filter-1fkh
//Step-by-Step Guide: Building a Simple Search Filter with React
//--------------------------------------------------------------------
// Поля задаються в const columns = [
//   { label: "In", accessor: "index", sortable: false, with: "15px" },
//    { label: "Id", accessor: "id", sortable: true, with: "20px" },
// ];
//     { label: "Назва товару"-Заголовок
//       accessor: "name"-значення з data,
//       sortable: true- чи буде сортуватись колонка
//       with: "200px"-???
// Якщо accessor: "index", то іде нумерація рядків на основі index
//сортування/
//  Створення className для сортування(bg-color+bg-icon)
//--------------------------------------------------------------------

"use client";
import { useState } from "react";

export default function DProductTable({
  rowsData, //значення рядків (з БД) - обов'язково
  columns, //поля(задаються в ...) - обов'язково
  title, //(значення)заголовок - не обов'язково
  p_selected, //(true/false)вибір рядків-не обов'язково
  p_filteredAllRows, //(true/false)фільтр по всіх полях-не обов'язково
  p_infoRows, //(true/false)к-сть рядків(Всього/відфільтрованих/вибраних)
}) {
  const [selectedRows, setSelectedRows] = useState(0);
  const [sortField, setSortField] = useState("");
  const [order, setOrder] = useState("asc");

  const initialTableData = () => {
    const start = Date.now(); //Час початку
    //   Create a copy using .map()
    const temp = rowsData.map((data, idx) => {
      let tempData = { ...data }; // Copy object
      tempData._nrow = idx; // Set new field
      if (typeof p_selected !== "undefined") tempData._selected = false; // Set new field
      return tempData;
    });
    const millis = Date.now() - start;

    // console.log(
    //   "Flowbit eUI/installTableData/Час виконання initialTableData(): ",
    //   millis + "ms",
    // );
    // console.log("Flowbit eUI/installTableData/temp=", temp);
    return temp;
  };
  const [rowsInitial, setRowsInitial] = useState(initialTableData); //Початкова таблиця після добавлення полів
  const [tableData, setTableData] = useState(rowsInitial); //РОбоча таьлиця
  //   const [tableData, setTableData] = useState(rowsData);

  // Sorting ----------------------------------------------------------
  const handleSorting = (sortField, sortOrder) => {
    if (sortField) {
      const sorted = [...tableData].sort((a, b) => {
        if (a[sortField] === null) return 1;
        if (b[sortField] === null) return -1;
        if (a[sortField] === null && b[sortField] === null) return 0;
        return (
          a[sortField].toString().localeCompare(b[sortField].toString(), "en", {
            numeric: true,
          }) * (sortOrder === "asc" ? 1 : -1)
        );
      });
      setTableData(sorted);
    }
  };

  const handleSortingChange = (accessor) => {
    // console.log("FlowbiteUI/handleSortingChange/accessor=", accessor);
    const sortOrder =
      accessor === sortField && order === "asc" ? "desc" : "asc";
    setSortField(accessor);
    setOrder(sortOrder);
    handleSorting(accessor, sortOrder);
  };
  //--------------------------------------

  // фільтр(filter)/пошук(search)
  const filteredAllRows = (searchTerm) => {
    // if (!searchTerm) return tableData;
    if (rowsInitial.length > 0) {
      const rows = rowsInitial;
      const attributes = Object.keys(rows[0]); //Це рядок заголовку
      // console.log("filteredAllRows/rows=", rows);
      //   console.log("filteredAllRows/attributes=", attributes);

      const list = [];

      //Цикл по рядках
      for (const current of rows) {
        //Цикл по колонках
        for (const attribute of attributes) {
          if (
            attribute === "id" ||
            attribute === "_nrow" ||
            attribute === "_selected"
          ) {
            continue; //пропустити поле
          }
          //   const value = current[attribute];
          const value = String(current[attribute]).toLowerCase(); //У нижній регістр
          //   console.log("filteredAllRows/value=", value + "/attributes=", attribute);

          //toLowerCase()-> в нижній регістр
          //порівння значення поля!!!
          //   console.log(
          //     "filteredAllRows/to-if/searchTerm=",
          //     searchTerm + "/value=",
          //     value,
          //   );
          if (value.includes(searchTerm.toLowerCase())) {
            list.push(current);
            // console.log(
            //   "filteredAllRows/on-if/searchTerm=",
            //   searchTerm + "/value=",
            //   value,
            // );
            break; //вихід з внутрішнього циклу
          }
        }
      }
      return list;
    }
  };

  //Запуск фільтру/пошуку(search) з insert
  const onChange = (e) => {
    // console.log("FlowbiteUI.js/onChange/e.key = ", e.key);
    // if (e.key === "Enter") {
    // alert("onCesh/Enter");
    //   console.log("FlowbiteUI.js/onChange/e.target.value = ", e.target.value);
    // if (e.target.value && tableData.length > 0) {
    //   alert("filteredAllRows()");
    const setSearchTerm = e.target.value;
    const filteredData = filteredAllRows(setSearchTerm); //
    setTableData(filteredData);
    console.log("FlowbiteUI.js/onChange=", filteredData);
    // }
    // }
  };
  const onChangeRowCheckbox = (e) => {
    // console.log("FlowbiteUI.js/e.target=", e.target);
    // console.log("FlowbiteUI.js/e.target.value=", e.target.value);
  };
  const onChangeHeadCheckbox = (e) => {
    "FlowbiteUI.js/e.target=", e.target;
    // console.log("FlowbiteUI.js/e.target.value=", e.target.value);
  };
  const onClickRow = (e) => {
    objIndex = tableData.findIndex((obj) => obj._nrow == e.target.id);
    // setTableData((state) => ({ ...state, name: resRow[0].name }))

    // console.log("FlowbiteUI.js/onClickRow/e.target.id=", e.target.id);
    // console.log(
    //   "FlowbiteUI.js/onClickRow/tableData[e.target.id]=",
    //   tableData["_nrow"=e.target.id],
    // );
  };

  //

  return (
    <div className="p-4">
      {typeof title !== "undefined" && (
        <div className="mb-2 rounded-3xl border border-neutral-500 bg-stone-300 text-center text-hText dark:bg-gray-800  dark:text-hTextD">
          {/* <h3 className=" px-4 text-left font-sans text-sm text-red-400 ">
          FlowbiteUI / Table pagination
        </h3> */}
          <h1 className="text-center text-4xl font-bold text-hText dark:text-hText">
            {title}
          </h1>
        </div>
      )}
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        {/* <div className="bg-white pb-4 dark:bg-gray-900"> */}
        <div className="mb flex p-1 dark:bg-gray-900">
          {/* <label htmlFor="table-search" className="sr-only">
            Search
          </label> */}
          {/*Чи треба селект */}
          {typeof p_filteredAllRows !== "undefined" && p_filteredAllRows && (
            <div className="relative mt-1">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <svg
                  className="h-4 w-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                size="lg"
                placeholder="Пощук..."
                // value={searchTerm}
                onChange={(e) => onChange(e)} //Для Enter
                type="text"
                className="block w-80 rounded-lg border border-gray-300 bg-gray-50 p-2 pl-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
              />
            </div>
          )}
          {typeof p_infoRows !== "undefined" && p_filteredAllRows && (
            //   Вирівняти по  y
            <div className="flex items-center p-1">
              <p>
                Записів: {rowsData.length}/{tableData.length}
              </p>
            </div>
          )}
        </div>
        <table className="w-full text-left text-sm text-gray-500 dark:text-gray-400">
          <thead className="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              {/*Чи треба селект */}
              {typeof p_selected !== "undefined" && p_selected && (
                <th className="w-4 p-2">
                  <div className="flex items-center">
                    <input
                      id={"th-checkbox"}
                      onChange={(e) => onChangeHeadCheckbox(e)} //Для Enter
                      value={true}
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600 dark:focus:ring-offset-gray-800"
                    />
                    {/* <label htmlFor="checkbox-table-search-1" className="sr-only">
                    checkbox
                  </label> */}
                  </div>
                </th>
              )}
              {columns.map(({ label, accessor, sortable }) => {
                const cl = sortable
                  ? sortField === accessor && order === "asc"
                    ? "up"
                    : sortField === accessor && order === "desc"
                    ? "down"
                    : "default"
                  : "";
                //  Створення className для сортування(bg-color+bg-url)
                //   const classUp = "bg-red-400 bg-[url('/images/table/up_arrow.png')]";
                //   const classDown = "bg-green-400";
                //   const classDefault = "bg-blue-300";
                // const sortClass =
                //   cl === "up"
                //     ? classUp
                //     : cl === "down"
                //     ? classDown
                //     : cl === "default"
                //     ? classDefault
                //     : "";

                return (
                  <th
                    key={accessor}
                    onClick={
                      sortable ? () => handleSortingChange(accessor) : null
                    }
                    // className="w-[250p]"
                  >
                    {label}
                    {cl === "up" ? (
                      <span> &#8593;</span>
                    ) : cl === "down" ? (
                      <span> &#8595;</span>
                    ) : cl === "default" ? (
                      <span> &#9830;</span>
                    ) : (
                      ""
                    )}
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody>
            {tableData.map((row, rowIndex) => (
              // {filteredAllRows.map((row, rowIndex) => (
              <tr
                id={row._nrow} //Початкова нумерація рядків/додано програмно
                key={row._nrow} //Початкова нумерація рядків/додано програмно
                // key={row.id}
                className="odd:bg-white even:bg-stone-100 hover:bg-stone-200 dark:odd:bg-gray-800 dark:even:bg-gray-700 dark:hover:bg-gray-700"
                onClick={(e) => onClickRow(e)}
              >
                {typeof p_selected !== "undefined" && p_selected && (
                  <td id={row._nrow} className="w-4 px-2">
                    <div id={row._nrow} className="flex items-center">
                      <input
                        id={row._nrow}
                        type="checkbox"
                        // checked={row._selected}
                        className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600 dark:focus:ring-offset-gray-800"
                        onChange={(e) => onChangeRowCheckbox(e)}
                      />
                      {/* <label
                      htmlFor="checkbox-table-search-1"
                      className="sr-only"
                    >
                      checkbox
                    </label> */}
                    </div>
                  </td>
                )}
                {columns.map(({ accessor }) => {
                  const tData = accessor === "index" ? rowIndex : row[accessor];
                  return (
                    <td id={row._nrow} key={accessor} className="w-4 p-2">
                      {tData}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
        {/* pagination */}
        <nav
          className="flex items-center justify-between pt-4"
          aria-label="Table navigation"
        >
          <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
            Showing{" "}
            <span className="font-semibold text-gray-900 dark:text-white">
              1-10
            </span>{" "}
            of{" "}
            <span className="font-semibold text-gray-900 dark:text-white">
              1000
            </span>
          </span>
          <ul className="inline-flex h-8 -space-x-px text-sm">
            <li>
              <a
                href="#"
                className="ml-0 flex h-8 items-center justify-center rounded-l-lg border border-gray-300 bg-white px-3 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                Previous
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex h-8 items-center justify-center border border-gray-300 bg-white px-3 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                1
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex h-8 items-center justify-center border border-gray-300 bg-white px-3 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                2
              </a>
            </li>
            <li>
              <a
                href="#"
                aria-current="page"
                className="flex h-8 items-center justify-center border border-gray-300 bg-blue-50 px-3 text-blue-600 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
              >
                3
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex h-8 items-center justify-center border border-gray-300 bg-white px-3 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                4
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex h-8 items-center justify-center border border-gray-300 bg-white px-3 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                5
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex h-8 items-center justify-center rounded-r-lg border border-gray-300 bg-white px-3 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                Next
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
