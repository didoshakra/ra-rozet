//RTable.js-таблиця:пошук(фільтр) по всіх полях/сортування/select.
//Select: selectedRows- масив індексів(_nrow) вибраних рядків  )
//==============================================================
//https://flowbite.com/docs/components/tables/#striped-rows\\Table pagination
//Creating a React sortable table //https://blog.logrocket.com/creating-react-sortable-table/
//---
//https://dev.to/franciscomendes10866/react-basic-search-filter-1fkh
//Step-by-Step Guide: Building a Simple Search Filter with React
//--------------------------------------------------------------------
// Поля задаються в const initialСolumns = [
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
  initialData, //значення рядків (з БД) - обов'язково
  initialСolumns, //поля(задаються в ...) - обов'язково
  title, //(значення)заголовок - не обов'язково
  p_selected, //(true/false)вибір рядків-не обов'язково
  p_filteredAllRows, //(true/false)фільтр по всіх полях-не обов'язково
  p_infoRows, //(true/false)к-сть рядків(Всього/відфільтрованих/вибраних)
}) {
  const [selectedRows, setSelectedRows] = useState([2, 4]);
  const [sortField, setSortField] = useState("");
  const [order, setOrder] = useState("asc");

  //формування початкової структури TableData
  const preparedTableData = () => {
    const start = Date.now(); //Час початку
    //   Create a copy using .map()
    const temp = initialData.map((data, idx) => {
      let tempData = { ...data }; // Copy object
      tempData._nrow = idx; // Set new field
      if (typeof p_selected !== "undefined") tempData._selected = false; // Set new field
      return tempData;
    });
    const millis = Date.now() - start;

    console.log(
      "Flowbit eUI/installTableData/Час виконання preparedTableData(): ",
      millis + "ms",
    );
    // console.log("Flowbit eUI/installTableData/temp=", temp);
    return temp;
  };
  const [rowsInitial, setRowsInitial] = useState(preparedTableData); //Початкова таблиця після добавлення полів
  const [tableData, setTableData] = useState(rowsInitial); //РОбоча таьлиця

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
      //   setTableData(sorted);
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
  const onChangeSearch = (e) => {
    // console.log("FlowbiteUI.js/onChangeSearch/e.key = ", e.key);
    // if (e.key === "Enter") {
    // alert("onCesh/Enter");
    //   console.log("FlowbiteUI.js/onChangeSearch/e.target.value = ", e.target.value);
    // if (e.target.value && tableData.length > 0) {
    //   alert("filteredAllRows()");
    const setSearchTerm = e.target.value;
    const filteredData = filteredAllRows(setSearchTerm); //
    // setTableData(filteredData);
    console.log("FlowbiteUI.js/onChangeSearch=", filteredData);
    // }
    // }
  };

  //   const onChangeRowCheckbox = (e) => {
  //     console.log("FlowbiteUI.js/e.target=", e.target);
  //     console.log("FlowbiteUI.js/e.target.value=", e.target.value);
  //   };

  //   const onChangeHeadCheckbox = (e) => {
  //     // console.log("FlowbiteUI.js/e.target=", e.target);
  //     // console.log("FlowbiteUI.js/e.target.value=", e.target.value);
  //   };

  //Selected (_selected=true- поле в tableData )
  //   const selectRowNrowColumn = (e) => {
  // //https://stackoverflow.com/questions/66290208/updating-item-by-react-usestate-hook
  // // console.log("FlowbiteUI.js/selectRowNrowColumn/e.target.id=", e.target.id);
  // // console.log("FlowbiteUI.js/selectRowNrowColumn/tableData1=", tableData);
  // let copyData = [...tableData]; //Копія робочого масиву обєктів
  // //находимо індекс виділеного рядка по полю "_nrow"
  // const selectIndex = copyData.findIndex(
  //   (obj) => obj._nrow === Number(e.target.id), //id-це id HTML елемента (в нащому випадку:id={_nrow})
  // );
  // if (selectIndex === -1) return; //якщо не знайшло
  // // console.log("FlowbiteUI.js/selectRowNrowColumn/selectIndex=", selectIndex);
  // const selectRow = copyData[selectIndex]; //Значення(обєкт) виділеного рядка
  // // console.log("FlowbiteUI.js/selectRowNrowColumn/selectRow=", selectRow);
  // const newDataRow = { _selected: !copyData[selectIndex]._selected }; //Нове значення поля "_selected"
  // // console.log("FlowbiteUI.js/selectRowNrowColumn/newData=", newDataRow);
  // const Lube = Object.assign(selectRow, newDataRow); //об'єднання 2-х об'єктів(в рядок) безпосередньо в масиві об''regionBreakInside:
  // //
  // setTableData(copyData);
  //   };

  //Selected (selectedRows- масив індексів(_nrow) вибраних рядків  )
  const selectRowIndexArray = (e) => {
    let copyArray = [...selectedRows]; //Копія робочого масиву обєктів
    // console.log("FlowbiteUI.js/selectRowIndexArray/copyArray0=", copyArray);
    const selectIndex = copyArray.findIndex(
      (item) => item === Number(e.target.id),
    ); //id-це id HTML елемента (в нащому випадку:id={_nrow})
    // console.log("FlowbiteUI.js/selectRowIndexArray/selectIndex=", selectIndex);
    if (selectIndex === -1) copyArray.push(Number(e.target.id));
    else copyArray.splice(0, selectIndex);
    // console.log("FlowbiteUI.js/selectRowIndexArray/copyArray=", copyArray);
    //
    setSelectedRows(copyArray);
  };

  const checkedRow = (nrow) => {
    // console.log("FlowbiteUI.js/checkedRow/element=", nrow);
    const selectIndex = selectedRows.findIndex((item) => item === Number(nrow)); //id-це id HTML елемента (в нащому випадку:id={_nrow})
    // console.log("FlowbiteUI.js/selectRowIndexArray/selectIndex=", selectIndex);
    if (selectIndex === -1) return false;
    else return true;
    // let found = false
    // found = selectedRows.find((element) => element === nrow);
    // console.log("FlowbiteUI.js/checkedRow/found=", found);
    // return found;
  };
  //

  return (
    <div className="p-4">
      {typeof title !== "undefined" && (
        <div className="mb-2 rounded-3xl border border-neutral-500 bg-stone-300  text-center  text-headMenuText dark:bg-gray-800  dark:text-headMenuTextDark">
          {/* <h3 className=" px-4 text-left font-sans text-sm text-red-400 ">
          FlowbiteUI / Table pagination
        </h3> */}
          <h1 className=" text-center text-4xl font-bold text-headMenuText dark:text-headMenuTextDark">
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
                onChange={(e) => onChangeSearch(e)} //Для Enter
                type="text"
                className="block w-80 rounded-lg border border-gray-300 bg-gray-50 p-2 pl-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
              />
            </div>
          )}
          {typeof p_infoRows !== "undefined" && p_filteredAllRows && (
            //   Вирівняти по  y
            <div className="flex items-center p-1">
              <p>
                Записів: {initialData.length}/{tableData.length}
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
                      id={"checkbox-all"}
                      onChange={(e) => onChangeHeadCheckbox(e)} //Для Enter
                      value={true}
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600 dark:focus:ring-offset-gray-800"
                      //   className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600 dark:focus:ring-offset-gray-800"
                    />
                    {/* <label for="checkbox-all" class="sr-only">checkbox</label> */}
                  </div>
                </th>
              )}
              {initialСolumns.map(({ label, accessor, sortable }) => {
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
                    // className={` ${sortClass}`}
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
                // onClick={(e) => selectRowNrowColumn(e)}
                onClick={(e) => selectRowIndexArray(e)}
              >
                {typeof p_selected !== "undefined" && p_selected && (
                  <td id={row._nrow} className="w-4 px-2">
                    <div id={row._nrow} className="flex items-center">
                      <input
                        id={row._nrow}
                        type="checkbox"
                        checked={checkedRow(row._nrow)}
                        // checked="true"
                        className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600 dark:focus:ring-offset-gray-800"
                        onChange={(e) => onChangeRowCheckbox(e)}
                      />
                      {/* <label for="checkbox-table-1" class="sr-only">
                        checkbox
                      </label> */}
                    </div>
                  </td>
                )}
                {initialСolumns.map(({ accessor }) => {
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
