import { useState } from "react";
import DroopFifterForm from "./DroopFifterForm";

export default function DropdownFilterMenu({
  filterData,
  setFilterData,
  setIsDropdownFilterMenu,
  styleTableText,
}) {
  const [isDropdownFilterForm, setIsDropdownFilterForm] = useState(false); //Зберігається перед селектом
  const [filterDataRow, setFilterDataRow] = useState([]); //Зберігається перед селектом

  const handleAdd = () => {
    setIsDropdownFilterForm(true);
    console.log("DropdownFilter.js/handleAdd");
  };

  //--- Selected / Записуємо селект(true/false) в _selected роточого масиву(workData)
  const editRows = (e) => {
    // console.log("DropdownFilterMenu.js/editRows/e.target=", e.target);
    const nRow = Number(e.target.id); //id-Це DOM(<td id="1"> Я йому присвоюю значення БД=_nrow)
    // console.log("DropdownFilterMenu.js/editRows/nRow=", nRow);

    //  //  //--- Формуємо масив з індексами відмічених записів (setSelectedRow) --------------------
    //   let copyArray = [...filterData]; //Копія робочого масиву обєктів
    //   const selectIndex = copyArray.findIndex((item) => item === nRow); //id-це id HTML DOM елемента (в нашому випадку:id={_nrow})
    //   if (selectIndex !==-1) {
    //     console.log("DropdownFilterMenu.js/editRows/e.target=", e.target);
    //     copyArray.push(nRow); //Додаємо в масив
    //   } else copyArray.splice(selectIndex, 1); //Якщо вже є в масиві то видаляємо
    //   setSelectedRows(copyArray); //Запмс в масив

    //Щукаємо рядок _nrow === nRow
    let tempData = [...filterData]; //Копія робочого масиву обєктів
    //  //https://www.geeksforgeeks.org/how-to-modify-an-objects-property-in-an-array-of-objects-in-javascript/
    const row = tempData.find((obj) => obj._nrow === nRow); //Шукажмо запис по _nrow=nRow
    console.log("RTable.js.js/editRows/row=", row);
    if (row) {
      setIsDropdownFilterForm(true);
      setFilterDataRow(row);
    }
    //--------------------------------------------------------------
  };

  return (
    <div className="absolute z-10  max-w-full  rounded-lg border  border-gray-300  bg-gray-200 p-1   shadow transition-transform duration-200 ease-out dark:border-gray-400 dark:bg-gray-500">
      <div className="flex justify-between">
        <button
          className="rounded-full border border-gray-400 hover:bg-tabIconHovBgCol dark:hover:bg-tabIconHovBgColD"
          //   className="rounded-full hover:bg-tabIconHovBgCol dark:hover:bg-tabIconHovBgColD"
          //   onClick={() => handleAdd()}
          title="Включити фільтр"
        >
          {/* <svg
            class="h-6 w-6 text-red-500"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            {" "}
            <line x1="12" y1="5" x2="12" y2="19" />{" "}
            <line x1="5" y1="12" x2="19" y2="12" />
          </svg> */}
          <svg
            class="h-6 w-6 text-red-500"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            {" "}
            <polyline points="9 10 4 15 9 20" />{" "}
            <path d="M20 4v7a4 4 0 0 1-4 4H4" />
          </svg>
        </button>
        <h1
          className={`{styleTableText} text-center font-bold uppercase text-headMenuText dark:text-headMenuTextDark`}
        >
          Фільтр
        </h1>
        <button
          className="rounded-full border border-gray-400 hover:bg-tabIconHovBgCol dark:hover:bg-tabIconHovBgColD"
          onClick={(e) => setIsDropdownFilterMenu(false)}
        >
          <svg
            class="h-6 w-6 text-red-500"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            {" "}
            <line x1="18" y1="6" x2="6" y2="18" />{" "}
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
      </div>
      <table className=" w-full table-auto border-collapse">
        <thead
          className={`bg-gray-400  p-[0.5em] uppercase  text-tabThTexCol dark:bg-tabThBgColD dark:text-tabThTexColD`}
        >
          <tr>
            <th>Назва поля</th>
            {/* <th className={`${styleTableText} uppercase`}>Ключ</th> */}
            <th>Ключ</th>
            <th>Фільтр</th>
          </tr>
        </thead>
        <tbody>
          {filterData.map((row, index) => (
            <tr
              id={row._nrow}
              key={index}
              className=" bg-gray-200 hover:bg-gray-300 dark:bg-gray-500 dark:hover:bg-gray-400"
              onClick={(e) => editRows(e)}
            >
              <td
                id={row._nrow}
                className={`${styleTableText} font-semibold text-tabTrTexCol dark:text-tabTrTexColD`}
              >
                {row.name}
              </td>
              <td
                id={row._nrow}
                className={`${styleTableText} font-semibold text-tabTrTexCol dark:text-tabTrTexColD`}
              >
                {row.accessor}
              </td>
              <td
                id={row._nrow}
                className={`${styleTableText} text-tabTrTexCol dark:text-tabTrTexColD`}
              >
                {row.filter}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* Dropdown menu */}
      {isDropdownFilterForm && (
        <DroopFifterForm
          setIsDropdownFilterForm={setIsDropdownFilterForm}
          filterDataRow={filterDataRow}
          setFilterData={setFilterData}
          filterData={filterData}
        />
      )}
    </div>
  );
}
