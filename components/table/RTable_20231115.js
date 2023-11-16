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
// 20221105-фіксовані <thead> i <tfoot> з вертикальним скролом
// Таблиця з фіксованим заголовком і прокручуваним тілом//https://www.w3docs.com/snippets/html/how-to-create-a-table-with-a-fixed-header-and-scrollable-body.html
// <th colspan="2">-обєднання колонок в заголовку і tfoot
// 20221110 //Поділ на сторінки:вибір к-сті рядків на сторінці/переміщення по сторінках
// - TableFooter.js,useTable.js://https://dev.to/franciscomendes10866/how-to-create-a-table-with-pagination-in-react-4lpd
//  - інфа: які рядки зараз відображені на сторінці і рядків всього
// 20221111 // вибір шрифтіф таблиці (T)
// 20221114 // Видалив з таблиці select ( тепер видідення  цілим рядком)
// //--------------------------------------------------------------------

"use client";
import { useState, useMemo, useEffect } from "react";
import TableFooter from "./TableFooter";
import useTable from "./useTable";

export default function DProductTable({
  initialData, //початкові дані (з БД) - обов'язково
  initialСolumns, //поля(задаються в ...) - обов'язково
  title, //(значення)заголовок - не обов'язково
  //   p_StripedRows, //Смугасті ряди
  //   p_selected, //???Завжди(true/false)вибір рядків-не обов'язково
  p_searchAllRows, //(true/false)пошук по всіх полях-не обов'язково
}) {
  const [selectedRows, setSelectedRows] = useState([]);
  const [sortField, setSortField] = useState(""); //Поле(колонка) по якій сортується
  const [order, setOrder] = useState("asc"); //Сортування в яку сторону(верх/вниз)
  const [rowsPerPage, setRowsPerPage] = useState(10); //К-сть рядків на сторінку
  const [tableFontSize, setTableFontSize] = useState("sm"); //Шрифти таблиці(font-size )
  const [lengthSearhValue, setLengthSearhValue] = useState(0); //Попереднє значення ряжка пошуку
  const [beforSelectData, setBeforSelectData] = useState([]); //Зберігається перед селектом

  // Стилі таблиці
  //Величина щрифта основних компонентів таблиці(надбудова(пошук+ітфо)/шапка/чаклунки/footer(підсумки)/нижній інфорядок з вибором сторінок (МОЖЛИВИЙ ВИБІР)
  //em-Відносно розміру шрифту даного елемента(=em*text-xs)
  const styleTableText =
    tableFontSize === "xs"
      ? " text-xs p-[0.5em]"
      : tableFontSize === "sm"
      ? " text-sm p-[0.5em]"
      : tableFontSize === "base"
      ? " text-base p-[0.5em]"
      : " text-lg p-[0.5em]";

  const styleTitleText =
    tableFontSize === "xs"
      ? " text-lg p-[0.1em]"
      : tableFontSize === "sm"
      ? " text-xl p-[0.1em]"
      : tableFontSize === "base"
      ? " text-2xl p-[0.1em]"
      : " text-3xl p-[0.1em]";

  //   const styleTableRowsColor = row._selected
  //     ? "bg-tabTrBgSelCol dark:tabTrBgSelColD"
  //     : " odd:bg-tabTrBgCol even:bg-tabTrBgEveCol hover:bg-tabTrBgHovCol dark:odd:bg-tabTrBgColD dark:even:bg-tabTrBgEveColD dark:hover:bg-tabTrBgHovColD";
  //   const styleTableRowsColor = row._selected
  //     ? "bg-tabTrBgSelCol dark:tabTrBgSelColD"
  //     : " odd:bg-tabTrBgCol even:bg-tabTrBgEveCol hover:bg-tabTrBgHovCol dark:odd:bg-tabTrBgColD dark:even:bg-tabTrBgEveColD dark:hover:bg-tabTrBgHovColD";
  // }  hover:bg-tabTrBgHovCol dark:odd:bg-tabTrBgColD dark:even:bg-tabTrBgEveColD dark:hover:bg-tabTrBgHovColD`}

  // className =
  //   "odd:bg-tabTrBgCol even:bg-tabTrBgEveCol hover:bg-tabTrBgHovCol dark:odd:bg-tabTrBgColD dark:even:bg-tabTrBgEveColD dark:hover:bg-tabTrBgHovColD";

  //Підготовка робочої структури tableData
  //https://habr.com/ru/companies/otus/articles/696610/
  //   const preparedData = useMemo(() => funcResult, []);useMemo- це хук, який зберігає результат виклику функції (перший аргумент) і перераховує його лише за зміни залежностей (другий аргумент=initialData).
  const preparedData = useMemo(() => {
    const start = Date.now(); //Час початку
    const temp = initialData.map((data, idx) => {
      let tempData = { ...data }; // Copy object()
      tempData._nrow = idx; // Set new field/Встановити нове поле
      // if (typeof p_selected !== "undefined") tempData._selected = false; // Set new field
      tempData._selected = false; // Set new field/Встановити нове поле
      return tempData; //Новий масис з добавленмим полями tempData._nrow/tempData._selected
    });
    const millis = Date.now() - start; //Час виконання

    console.log(
      "FRtable.js/preparedData/Час виконання preparedData(): ",
      millis + "ms",
    );
    // console.log("Flowbit eUI/preparedData/temp=", temp);
    return temp;
  }, [initialData]); //Змінюється тільки при зміні 2-го аргумента

  //**+++ Робоча таьлиця*/
  const [workData, setWorkData] = useState(preparedData); //РОбоча таьлиця

  //** Сторінки /*
  //***//https://dev.to/franciscomendes10866/how-to-create-a-table-with-pagination-in-react-4lpd
  const [page, setPage] = useState(1); //Номер текучої сторінки
  //   const { slice, range } = useTable(preparedData, page, rowsPerPage); //
  const { slice, range } = useTable(workData, page, rowsPerPage); //
  //   console.log("RTable/preparedData)=", preparedData);
  //   console.log("RTable/slice=", slice);

  //*** Сортування
  //--- Sorting
  const handleSorting = (sortField, sortOrder) => {
    if (sortField) {
      const sorted = [...workData].sort((a, b) => {
        if (a[sortField] === null) return 1;
        if (b[sortField] === null) return -1;
        if (a[sortField] === null && b[sortField] === null) return 0;
        return (
          a[sortField].toString().localeCompare(b[sortField].toString(), "en", {
            numeric: true,
          }) * (sortOrder === "asc" ? 1 : -1)
        );
      });
      setWorkData(sorted);
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
  const seachAllRows = (e) => {
    const searchValue = e.target.value;
    if (lengthSearhValue === 0) {
      setBeforSelectData(workData);
    }
    const rows = beforSelectData;

    console.log("seachAllRows/searchValue=", searchValue + "/ rows", rows);
    if (rows.length > 0) {
      const attributes = Object.keys(rows[0]); //Це рядок заголовку

      const list = [];
      //*** Цикл по рядках
      for (const current of rows) {
        //Цикл по колонках
        for (const attribute of attributes) {
          //Відсіюємо поля по яких не робиться пошук
          if (
            attribute === "id" ||
            attribute === "_nrow" ||
            attribute === "_selected"
          ) {
            continue; //пропустити поле
          }
          //   const value = current[attribute];
          const value = String(current[attribute]).toLowerCase(); //переводимо значення поля у нижній регістр
          //порівнюємо значення поля із пошуком, переводеним у нижній регістр
          if (value.includes(searchValue.toLowerCase())) {
            list.push(current);
            break; //вихід з внутрішнього циклу
          }
        }
      }
      setLengthSearhValue(searchValue.length);
      setWorkData(list);
    }
  };

  //--- Selected / Записуємо селект(true/false) в _selected роточого масиву(workData)
  const selectRows = (e) => {
    // console.log("RTable.js/selectRows");
    const nRow = e.target.id;
    //--- Формуємо масив з індексами відмічених записів ???--------------------
    let copyArray = [...selectedRows]; //Копія робочого масиву обєктів
    const selectIndex = copyArray.findIndex((item) => item === Number(nRow)); //id-це id HTML DOM елемента (в нашому випадку:id={_nrow})
    // console.log("FlowbiteUI.js/selectRows/selectIndex=", selectIndex);
    if (selectIndex === -1) {
      copyArray.push(Number(nRow)); //Додаємо в масив
      //   console.log("FlowbiteUI.js/addSelecrToRbTable/nRow=", nRow);
    } else copyArray.splice(selectIndex, 1); //Якщо вже є в масиві то видаляємо
    console.log("FlowbiteUI.js/selectRows/copyArray=", copyArray);
    //
    setSelectedRows(copyArray); //Запмс в масив
    //--- Записємо селект(true/false) в _selected роточого масиву(workData) --------
    // console.log(
    //   "RTable.js/workData[nRow]._selected=",
    //   tableData[nRow]._selected + "/nRow=",
    //   nRow,
    // );
    const newSelect = !tableData[nRow]._selected;
    // console.log(
    //   "FlowbiteUI.js/selectRows/newSelect=",
    //   newSelect + "/nRow=",
    //   nRow,
    // );
    let selectData = [...tableData]; //Копія робочого масиву обєктів
    selectData[nRow] = { ...selectData[nRow], ...{ _selected: newSelect } }; //Якщо міняєм не всі поля в об'єкті
    setWorkData(selectData);
    //--------------------------------------------------------------
  };

  return (
    //align-middle-текст по вертикалі посередині
    <div className={`${styleTableText} align-middle `}>
      {/* title- Заголовок вікна таблиці */}
      {typeof title !== "undefined" && (
        <div className="rounded-3xl border border-neutral-500 bg-tabThBgCol  text-center  text-headMenuText dark:bg-tabThBgColD  dark:text-headMenuTextDark">
          {/* <h3 className=" px-4 text-left font-sans text-sm text-red-400 ">
          FlowbiteUI / Table pagination
        </h3> */}
          <h1
            className={`${styleTitleText}text-text-center font-bold text-headMenuText dark:text-headMenuTextDark`}
          >
            {title}
          </h1>
        </div>
      )}

      {/* Надбудова таблиці з елементами управління (пошук+...) */}
      {/* <div className="mb flex border-3 border-green-300 p-1 dark:bg-gray-900"> */}
      <div className="my-1 flex flex-wrap items-center justify-start">
        {/* <label htmlFor="table-search" className="sr-only">
            Search
          </label> */}
        {/*Чи треба пошук */}
        {typeof p_searchAllRows !== "undefined" && p_searchAllRows && (
          <div className="relative ml-1 items-center ">
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
              // value={searchValue}
              //   onChange={(e) => onChangeSearch(e)} //Для Enter
              onChange={(e) => seachAllRows(e)} //Пошук
              type="text"
              className="block w-80 items-center rounded-lg border border-gray-300 bg-gray-50 p-1 pl-10 text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
            />
          </div>
        )}

        {/*Інформація про вибрані рядки  */}
        {/* {typeof p_selected !== "undefined" && p_selected && ( */}
        <div className="ml-1 flex items-center rounded-lg border border-gray-300 bg-gray-50 p-1 dark:bg-gray-700">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-5 w-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 12.75l6 6 9-13.5"
            />
          </svg>

          {/* <p>
              Вибрано
            </p> */}
          <p title="Вибрано">
            : {selectedRows.length}
            {/* з {initialData.length} */}
          </p>
        </div>
        {/* )} */}

        {/* Вибір шрифта */}
        <div className="ml-1 flex items-center rounded-lg border border-gray-300 bg-gray-50  p-1  dark:bg-gray-700">
          <svg
            className="h-5 w-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {" "}
            <polyline points="4 7 4 4 20 4 20 7" />{" "}
            <line x1="9" y1="20" x2="15" y2="20" />{" "}
            <line x1="12" y1="4" x2="12" y2="20" />
          </svg>
          {/* <p>Шрифт:</p> */}
          <p>:</p>
          <select
            //   className="agrid_head-nav-button"
            // className="mx-1 block items-center align-middle "
            className="mx-1 block  w-full items-center border-gray-300 bg-gray-50  align-middle text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
            defaultValue={tableFontSize}
            onChange={(e) => setTableFontSize(e.target.value)}
            //   id="page-size"
            title="Величина шрифту"
          >
            <option value={tableFontSize} disabled>
              {tableFontSize}
            </option>
            <option value="xs">xs</option>
            <option value="sm">sm</option>
            <option value="base">base</option>
            <option value="lg">lg</option>
          </select>
        </div>
      </div>

      {/* Обгортка(Wraper)таблиці (для проокрутки і...) */}
      <div
        // rr-text
        className=" max-h-[--sH] w-full overflow-auto  border-3 border-green-300  text-left text-gray-500 dark:text-gray-400"
        style={{ "--sH": "calc(100vh - 250px)" }} //Створення style для h-
      >
        {/* <table className="  h-10 w-full table-auto border-collapse "> */}
        <table className=" w-full table-auto border-collapse ">
          <thead
            className={`${styleTableText} sticky  top-0  bg-tabThBgCol text-tabThTexCol dark:bg-tabThBgColD dark:text-tabThTexColD`}
          >
            <tr>
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
                    className={`${styleTableText} uppercase`}
                    key={accessor}
                    onClick={
                      sortable ? () => handleSortingChange(accessor) : null
                    }
                  >
                    <div className="flex">
                      <div
                        className="flex text-center align-middle"
                        onAuxClick={(e) => tar}
                      >
                        <svg
                          //   class="h-4 w-4 text-red-500"
                          className="h-4 w-4 "
                          viewBox="0 0 24 24"
                          fill="none"
                          // fill="currentColor"
                          stroke="currentColor"
                          strokeWidth="1"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
                        </svg>
                      </div>
                      <p className="px-1"> {label}</p>
                      {clSort === "up" ? (
                        <span> &#8593;</span>
                      ) : clSort === "down" ? (
                        <span> &#8595;</span>
                      ) : clSort === "default" ? (
                        <span> &#9830;</span>
                      ) : (
                        ""
                      )}
                    </div>
                  </th>
                );
              })}
            </tr>
          </thead>
          {/* рядки */}
          <tbody>
            {/* перебір рядків */}
            {/* slice-це кусок вибраного для рендерінгу масиву (сторінка/відфільтроване і...) */}
            {slice.map((row, rowIndex) => (
              <tr
                id={row._nrow} //Початкова нумерація рядків/додано програмно
                key={row._nrow} //Початкова нумерація рядків/додано програмно
                // key={row.id}
                // className="odd:bg-tabTrBgCol even:bg-tabTrBgEveCol hover:bg-tabTrBgHovCol dark:odd:bg-tabTrBgColD dark:even:bg-tabTrBgEveColD dark:hover:bg-tabTrBgHovColD"
                className={`${
                  row._selected
                    ? "bg-tabTrBgSelCol dark:bg-2"
                    : "odd:bg-tabTrBgCol even:bg-tabTrBgEveCol hover:bg-tabTrBgHovCol dark:odd:bg-tabTrBgColD dark:even:bg-tabTrBgEveColD dark:hover:bg-tabTrBgHovColD"
                }`}
                onClick={(e) => selectRows(e)}
              >
                {/* перебір полів */}
                {initialСolumns.map(({ accessor }) => {
                  const tData = accessor === "index" ? rowIndex : row[accessor];
                  return (
                    <td
                      id={row._nrow}
                      key={accessor}
                      className={`${styleTableText} text-tabTrTexCol dark:text-tabTrTexColD`}
                    >
                      {tData}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
          {/*  */}
          <tfoot
            className={`${styleTableText} sticky bottom-0 bg-tabThBgCol  text-gray-700 dark:bg-tabThBgColD dark:text-tabThTexColD`}
          >
            <tr>
              {/* <th colSpan="8" className="text-center">
                Всього
              </th> */}
            </tr>
            <tr>
              <th className={`${styleTableText}`}>40</th>
              <th className={`${styleTableText}`}>40</th>
              <th className={`${styleTableText}`}>40</th>
              <th className={`${styleTableText}`}>40</th>
              <th className={`${styleTableText}`}>40</th>
              <th className={`${styleTableText}`}>40</th>
            </tr>
          </tfoot>
        </table>
      </div>
      {/* footer */}
      <TableFooter
        range={range}
        slice={slice}
        setPage={setPage}
        page={page}
        rowsPerPage={rowsPerPage}
        setRowsPerPage={setRowsPerPage}
        maxRow={initialData.length}
      />
    </div>
  );
}
