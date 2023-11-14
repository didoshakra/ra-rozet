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
import { useState, useMemo, useEffect } from "react";
import TableFooter from "./TableFooter";
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
  const [tableStyle, setTableStyle] = useState("sm"); //Текуча сторінка

  // Стилі таблиці
  //Величина щрифта основних компонентів таблиці(надбудова(пошук+ітфо)/шапка/чаклунки/footer(підсумки)/нижній інфорядок з вибором сторінок (МОЖЛИВИЙ ВИБІР)
  const styleTableText =
    tableStyle === "xs"
      ? " text-xs"
      : tableStyle === "sm"
      ? " text-sm"
      : tableStyle === "base"
      ? " text-base"
      : " text-lg";

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

  //** Сторінки /*
  //***//https://dev.to/franciscomendes10866/how-to-create-a-table-with-pagination-in-react-4lpd
  const [page, setPage] = useState(1); //Номер текучої сторінки
  const { slice, range } = useTable(preparedTableData, page, rowsPerPage); //
  //   console.log("RTable/preparedTableData)=", preparedTableData);
  //   console.log("RTable/slice=", slice);

  //**+++ Робоча таьлиця*/
  const [tableData, setTableData] = useState(preparedTableData); //РОбоча таьлиця
  // const [tableData, setTableData] = useState(slice); //РОбоча таьлиця

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

  return (
    //align-middle-текст по вертикалі посередині
    <div className={`${styleTableText} align-middle`}>
      {/* title- Заголовок вікна таблиці */}
      {typeof title !== "undefined" && (
        <div className="rounded-3xl border border-neutral-500 bg-tabThBgCol  text-center  text-headMenuText dark:bg-tabThBgColD  dark:text-headMenuTextDark">
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
      <div className="mb-1 flex">
        {/* <label htmlFor="table-search" className="sr-only">
            Search
          </label> */}
        {/*Чи треба селект */}
        {typeof p_filteredAllRows !== "undefined" && p_filteredAllRows && (
          <div className="relative mt-1 items-center">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center  pl-3">
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
              placeholder="Пошук..."
              // value={searchTerm}
              onChange={(e) => onChangeSearch(e)} //Для Enter
              type="text"
              className="block w-80 items-center rounded-lg border border-gray-300 bg-gray-50 p-2 pl-10 text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
            />
          </div>
        )}
        {typeof p_infoRows !== "undefined" && p_filteredAllRows && (
          //   Вирівняти по  y
          <div className="m-1 flex items-center rounded-lg border border-gray-300 bg-gray-50 p-2 dark:bg-gray-700">
            <p>
              Вибрано: {selectedRows.length} з {initialData.length}
            </p>
          </div>
        )}
        <div className="m-1 flex items-center rounded-lg border border-gray-300 bg-gray-50  p-2  dark:bg-gray-700">
          <p>Шрифт:</p>
          <select
            //   className="agrid_head-nav-button"
            // className="mx-1 block items-center align-middle "
            className="align-middle bg-gray-50  mx-1 block w-full items-center  border-gray-300 text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
            defaultValue={tableStyle}
            onChange={(e) => setTableStyle(e.target.value)}
            //   id="page-size"
            title="Рядків на сторінку"
          >
            <option value="10" disabled>
              {tableStyle}
            </option>
            <option value="xs">xs</option>
            <option value="sm">sm</option>
            <option value="base">base</option>
            <option value="lg">lg</option>
            {/* <option value="xs">малий</option>
            <option value="sm">середній</option>
            <option value="base">база</option>
            <option value="lg">великий</option> */}
          </select>
        </div>
      </div>

      {/* Обгортка(Wraper)таблиці (для проокрутки і...) */}
      <div
        // rr-text
        className=" h-[--sH] w-full overflow-auto  border-3 border-green-300  text-left text-gray-500 dark:text-gray-400"
        style={{ "--sH": "calc(100vh - 250px)" }} //Створення style для h-
      >
        {/* <table className="  h-10 w-full table-auto border-collapse "> */}
        <table className=" w-full table-auto border-collapse ">
          <thead>
            <tr>
              {/* поле селекту */}
              {/*Чи треба селект p_selected*/}
              {typeof p_selected !== "undefined" && p_selected && (
                <th className="sticky  top-0  bg-tabThBgCol p-2 text-tabThTexCol dark:bg-tabThBgColD dark:text-tabThTexColD">
                  <div className="flex items-center">
                    <input
                      id={"checkbox-all"}
                      onChange={(e) => onChangeHeadCheckbox(e)} //Для Enter
                      value={true}
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 bg-tabThBgCol text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-tabThBgColD dark:ring-offset-gray-800 dark:focus:ring-blue-600 dark:focus:ring-offset-gray-800"
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
                    // uppercase- текст у верхній регістр
                    className="sticky top-0  h-5   bg-tabThBgCol uppercase text-tabThTexCol dark:bg-tabThBgColD dark:text-tabThTexColD"
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
          {/* рядки */}
          <tbody>
            {/* перебір рядків */}
            {/* {tableData.map((row, rowIndex) => ( */}
            {/* slice-це кусок вибраного для рендерінгу масиву (сторінка/відфільтроване і...) */}
            {slice.map((row, rowIndex) => (
              <tr
                id={row._nrow} //Початкова нумерація рядків/додано програмно
                key={row._nrow} //Початкова нумерація рядків/додано програмно
                // key={row.id}
                className="odd:bg-tabTrBgCol even:bg-tabTrBgEveCol hover:bg-tabTrBgHovCol dark:odd:bg-tabTrBgColD dark:even:bg-tabTrBgEveColD dark:hover:bg-tabTrBgHovColD"
                // className="odd:bg-white even:bg-stone-100 hover:bg-stone-200 dark:odd:bg-gray-700 dark:even:bg-gray-600 dark:hover:bg-gray-500"
                onClick={(e) => selectRowIndexArray(e)}
              >
                {/* поле селекту */}
                {typeof p_selected !== "undefined" && p_selected && (
                  <td id={row._nrow} className="p-2">
                    {/* <div id={row._nrow} className="flex items-center"> */}
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
                    {/* </div> */}
                  </td>
                )}

                {/* перебір полів */}
                {initialСolumns.map(({ accessor }) => {
                  const tData = accessor === "index" ? rowIndex : row[accessor];
                  return (
                    <td
                      id={row._nrow}
                      key={accessor}
                      className="p-2 text-tabTrTexCol dark:text-tabTrTexColD"
                    >
                      {tData}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
          {/*  */}
          <tfoot className="sticky bottom-0 bg-tabThBgCol  p-2  text-gray-700 dark:bg-tabThBgColD dark:text-tabThTexColD">
            <tr>
              {/* <th colSpan="8" className="text-center">
                Всього
              </th> */}
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
      {/* footer */}
      <nav
        // rr-text(footer)
        // className="flex flex-wrap items-center justify-between  py-2 align-middle text-sm"
        //align-middle-текст по вертикалі посередині
        className="my-2 flex flex-wrap items-center justify-between "
        aria-label="Table navigation"
      >
        {/* py-1-Задає висоту */}
        <span className="flex items-center justify-center rounded-lg border border-gray-300 bg-white px-3 py-1 leading-tight text-gray-500   dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400  ">
          Showing
          <span className="mx-2  text-gray-900 dark:text-white">
            {rowsPerPage * (page - 1)} -{" "}
            {rowsPerPage * page > initialData.length
              ? initialData.length
              : rowsPerPage * page}
          </span>
          of
          <span className="ml-3  text-gray-900 dark:text-white">
            {initialData.length}
          </span>
        </span>
        <TableFooter
          range={range}
          slice={slice}
          setPage={setPage}
          page={page}
          rowsPerPage={rowsPerPage}
          setRowsPerPage={setRowsPerPage}
        />
      </nav>
    </div>
  );
}
