//RTable.js-таблиця:пошук(фільтр) по всіх полях/сортування/select.
//Select: selectedRows- масив індексів(_nrow) вибраних рядків  )
//==== на базі FlowbiteUI==========================================================
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
//---
//Таблиця з фіксованим заголовком і прокручуваним тілом//https://www.w3docs.com/snippets/html/how-to-create-a-table-with-a-fixed-header-and-scrollable-body.html
// tfoot/https://css.in.ua/html/tag/tfoot
// <th colspan="2">-обєднання колонок в заголовку і tfoot
//---
//Як створити таблицю з розбивкою на сторінки в React// https://dev.to/franciscomendes10866/how-to-create-a-table-with-pagination-in-react-4lpd
//** */
//--------------------------------------------------------------------

"use client";
import { useState, useMemo } from "react";
import TableFooter from "./TableFooter"
import useTable from "./useTable";

export default function DProductTable({
  initialData, //початкові дані (з БД) - обов'язково
  initialСolumns, //поля(задаються в ...) - обов'язково
  title, //(значення)заголовок - не обов'язково
  p_selected, //(true/false)вибір рядків-не обов'язково
  p_filteredAllRows, //(true/false)фільтр по всіх полях-не обов'язково
  p_infoRows, //(true/false)к-сть рядків(Всього/відфільтрованих/вибраних)
}) {
  const [selectedRows, setSelectedRows] = useState([2, 4]);
  const [sortField, setSortField] = useState("");
  const [order, setOrder] = useState("asc");
    const [rowsPerPage, setRowsPerPage] = useState(10); //К-сть рядків на сторінку
    const [currentPage, setCurrentPage] = useState(1); //Текуча сторінка

  //***//https://dev.to/franciscomendes10866/how-to-create-a-table-with-pagination-in-react-4lpd
  const [page, setPage] = useState(1); //Номер текучої сторінки
//   const { slice, range } = useTable(data, page, rowsPerPage);//
  const { slice, range } = useTable(initialData, page, rowsPerPage);//
  //*** */

  //Підготовка робочої структури tableData
  //https://habr.com/ru/companies/otus/articles/696610/
  //   const preparedTableData = useMemo(() => funcResult, []);useMemo- це хук, який зберігає результат виклику функції (перший аргумент) і перераховує його лише за зміни залежностей (другий аргумент=initialData).
  const preparedTableData = useMemo(() => {
    //   const preparedTableData = () => {
    const start = Date.now(); //Час початку
    //   Create a copy using .map()
    const temp = initialData.map((data, idx) => {
      let tempData = { ...data }; // Copy object
      tempData._nrow = idx; // Set new field
      //   if (typeof p_selected !== "undefined") tempData._selected = false; // Set new field
      return tempData;
    });
    const millis = Date.now() - start; //Час виконання

    console.log(
      "Flowbit eUI/installTableData/Час виконання preparedTableData(): ",
      millis + "ms",
    );
    // console.log("Flowbit eUI/installTableData/temp=", temp);
    return temp;
  }, [initialData]); //Змінюється тільки при зміні 2-го аргумента

  //** Робоча таьлиця*/
  const [tableData, setTableData] = useState(preparedTableData); //РОбоча таьлиця

  //** Сторінки /*
  //--- К-сть сторінок
  //   const calculateRange = (data, rowsPerPage) => {
  const calculatePage = () => {
    const range = []; //Масив номерів сторінок
    //Math.ceil() - округление вверх
    const num = Math.ceil(tableData.length / rowsPerPage);
    let i = 1;
    for (let i = 1; i <= num; i++) {
      range.push(i);
    }
    return range;
  };
  // slice(кусень)-animals.slice(2, 4));Повернемо масив з 2ел по 3(до <4)
  const sliceData = (data, page, rowsPerPage) => {
    return data.slice((page - 1) * rowsPerPage, page * rowsPerPage); //Кусок масиву з 1 по 2
  };

  //*** Сортування
  //--- Sorting
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

  //--- Задає режим сортування
  const handleSortingChange = (accessor) => {
    console.log("FlowbiteUI/handleSortingChange/accessor=", accessor);
    const sortOrder =
      accessor === sortField && order === "asc" ? "desc" : "asc";
    setSortField(accessor);
    setOrder(sortOrder);
    handleSorting(accessor, sortOrder);
  };

  //** Фільтр(filter)/пошук(search) */
  //--- Ф-ція  фільтрування
  const filteredAllRows = (searchTerm) => {
    // if (!searchTerm) return tableData;
    if (tableData.length > 0) {
      const rows = tableData;
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

  //--- Запуск фільтру/пошуку(search) з insert
  const onChangeSearch = (e) => {
    // console.log("FlowbiteUI.js/onChangeSearch/e.key = ", e.key);
    // if (e.key === "Enter") {
    // alert("onCesh/Enter");
    //   console.log("FlowbiteUI.js/onChangeSearch/e.target.value = ", e.target.value);
    // if (e.target.value && tableData.length > 0) {
    //   alert("filteredAllRows()");
    const start = Date.now(); //Час початок
    const setSearchTerm = e.target.value;
    const filteredData = filteredAllRows(setSearchTerm); //
    setTableData(filteredData);
    const millis = Date.now() - start; //Час виконання
    console.log(
      "FlowbiteUI/onChangeSearch/Час виконання onChangeSearch()-Пошук: ",
      millis + "ms",
    );
    // console.log("FlowbiteUI.js/onChangeSearch=", filteredData);
    // console.log("FlowbiteUI.js/onChangeSearch=", filteredData);
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

  //
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
  const ListPages = () => {
    const num = 5;
    let i = 1;
    for (let i = 1; i <= num; i++) {
      console.log("Rtable.js/ListPages/i=", i);
      const nPage = i;
      return (
        <li>
          <a className="flex h-8 items-center justify-center border border-gray-300 bg-white px-3 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
            {nPage}
          </a>
        </li>
      );
    }
  };

  return (
    <>
      {/* title- Заголовок вікна таблиці */}
      {typeof title !== "undefined" && (
        <div className="rounded-3xl border border-neutral-500 bg-stone-300  text-center  text-headMenuText dark:bg-gray-800  dark:text-headMenuTextDark">
          {/* <h3 className=" px-4 text-left font-sans text-sm text-red-400 ">
          FlowbiteUI / Table pagination
        </h3> */}
          <h1 className=" text-center text-4xl font-bold text-headMenuText dark:text-headMenuTextDark">
            {title}
          </h1>
        </div>
      )}

      {/* Надбудова таблиці з елементами управління (пошук+...) */}
      {/* <div className="mb flex border-3 border-green-300 p-1 dark:bg-gray-900"> */}
      <div className="mb flex  p-2 dark:bg-gray-900">
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
          <div className="flex items-center p-2">
            <p>
              Вибрано: {selectedRows.length} з {initialData.length} На сторінці:
              {rowsPerPage}
            </p>
          </div>
        )}
        <select
          //   className="agrid_head-nav-button"
          className="flex justify-center align-middle h-6"
          defaultValue={"10"}
          onChange={() => onPageSizeChanged()}
          id="page-size"
          title="Розмір сторінки"
        >
          <option value="10" disabled>
            10
          </option>
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="50">50</option>
          <option value="100">100</option>
          <option value="500">500</option>
          <option value="0">auto</option>
        </select>
      </div>

      {/* Обгортка(Wraper)таблиці (для проокрутки і...) */}
      {/* <div className="max-h-[400px] w-full overflow-auto border-3 border-green-300 text-left text-sm text-gray-500 dark:text-gray-400"> */}
      <div
        className="h-[--sH]  w-full overflow-auto  text-left text-sm text-gray-500 dark:text-gray-400"
        style={{ "--sH": "calc(100vh - 250px)" }} //Створення style для h-
      >
        <table className="  w-full table-auto border-collapse">
          <thead>
            <tr>
              {/*Чи треба селект */}
              {typeof p_selected !== "undefined" && p_selected && (
                // uppercase- текст у верхній регістр
                <th className="sticky top-0 bg-slate-300 p-2 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400">
                  <div className="flex items-center">
                    <input
                      id={"checkbox-all"}
                      onChange={(e) => onChangeHeadCheckbox(e)} //Для Enter
                      value={true}
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600 dark:focus:ring-offset-gray-800"
                    />
                    {/* <label for="checkbox-all" class="sr-only">checkbox</label> */}
                  </div>
                </th>
              )}
              {initialСolumns.map(({ label, accessor, sortable }) => {
                //  Створення className для сортування(bg-color+bg-url)
                const clSort = sortable
                  ? sortField === accessor && order === "asc"
                    ? "up"
                    : sortField === accessor && order === "desc"
                    ? "down"
                    : "default"
                  : "";

                return (
                  <th
                    //   className="sticky top-0 w-4  bg-slate-300 p-2 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400"
                    className="sticky top-0  h-5 bg-slate-300 p-2 text-xs uppercase text-gray-800 dark:bg-gray-800 dark:text-gray-100"
                    key={accessor}
                    onClick={
                      sortable ? () => handleSortingChange(accessor) : null
                    }
                  >
                    {label}
                    {clSort === "up" ? (
                      <span> &#8593;</span>
                    ) : clSort === "down" ? (
                      <span> &#8595;</span>
                    ) : clSort === "default" ? (
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
              <tr
                id={row._nrow} //Початкова нумерація рядків/додано програмно
                key={row._nrow} //Початкова нумерація рядків/додано програмно
                // key={row.id}
                className="odd:bg-white even:bg-stone-100 hover:bg-stone-200 dark:odd:bg-gray-800 dark:even:bg-gray-700 dark:hover:bg-gray-700"
                onClick={(e) => selectRowIndexArray(e)}
              >
                {typeof p_selected !== "undefined" && p_selected && (
                  <td id={row._nrow} className="w-4 px-2">
                    <div id={row._nrow} className="flex items-center">
                      <input
                        id={row._nrow}
                        type="checkbox"
                        // checked={checkedRow(row._nrow)}
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
                    <td id={row._nrow} key={accessor} className="p-2">
                      {tData}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
          <tfoot className="sticky bottom-0 bg-slate-300  p-2 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th colSpan="8" className="text-center">
                Всього
              </th>
            </tr>
            <tr>
              <th className="p-2">40</th>
              <th className="p-2">40</th>
              <th className="p-2">40</th>
              <th className="p-2">40</th>
              <th className="p-2">40</th>
              <th className="p-2">40</th>
              <th className="p-2">40</th>
              <th className="p-2">40</th>
            </tr>
          </tfoot>
        </table>
      </div>
      {/* pagination */}
      <TableFooter range={range} slice={slice} setPage={setPage} page={page} />
      <div className="flex">
        {/* <!-- Previous Button --> */}
        <a
          href="#"
          className="mr-3 flex h-8 items-center justify-center rounded-lg border border-gray-300 bg-white px-3 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
        >
          <svg
            className="mr-2 h-3.5 w-3.5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 5H1m0 0 4 4M1 5l4-4"
            />
          </svg>
          Previous
        </a>
        <a
          href="#"
          className="flex h-8 items-center justify-center rounded-lg border border-gray-300 bg-white px-3 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
        >
          Next
          <svg
            className="ml-2 h-3.5 w-3.5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </a>
      </div>
      <nav
        className="flex flex-wrap  items-center justify-between p-2 align-middle"
        aria-label="Table navigation"
      >
        <span className=" flex justify-start text-sm font-normal text-gray-500 dark:text-gray-400">
          Showing{" "}
          <span className="font-semibold text-gray-900 dark:text-white">
            {rowsPerPage * (currentPage - 1)}-{rowsPerPage * currentPage}
          </span>{" "}
          of
          <span className="font-semibold text-gray-900 dark:text-white">
            {initialData.length}
          </span>
        </span>
        {/*  */}
        <ul className="inline-flex h-8 -space-x-px text-sm">
          <li>
            <a
              href="#"
              className="ml-0 flex h-8 items-center justify-center rounded-l-lg border border-gray-300 bg-white px-3 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              Previous
            </a>
          </li>
          {/*  */}

          {ListPages()}
          {/* <li>
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
          </li> */}
          {/*  */}
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
    </>
  );
}
