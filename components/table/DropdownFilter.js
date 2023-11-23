import { useState } from "react";
import DroopFifterForm from "./DroopFifterForm";

export default function DropdownFilterMenu({
  filterData,
  setFilterData,
  handleApplyFilters,
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
    // console.log("DropdownFilter.js/editRows/e.target=", e.target);
    const nRow = Number(e.target.id); //id-Це DOM(<td id="1"> Я йому присвоюю значення БД=_nrow)

    //Щукаємо рядок _nrow === nRow
    let tempData = [...filterData]; //Копія робочого масиву обєктів
    //  //https://www.geeksforgeeks.org/how-to-modify-an-objects-property-in-an-array-of-objects-in-javascript/
    const row = tempData.find((obj) => obj._nrow === nRow); //Шукажмо запис по _nrow=nRow
    if (row) {
      setIsDropdownFilterForm(true);
      setFilterDataRow(row);
    }
    //--------------------------------------------------------------
  };

  const deleteAll = () => {
    console.log("DropdownFilter.js/deleteAll/");
    let tempData = [...filterData];
    const temp = tempData.map((data, idx) => {
      data.comparisonFirst = "";
      data.filterFirst = "";
      data.logical = "";
      data.comparisonLast = "";
      data.filterLast = "";
    });
    setFilterData(tempData);
  };

  return (
    <div className=" absolute z-10  rounded-lg border  border-gray-300  bg-gray-200 p-1   shadow transition-transform duration-200 ease-out dark:border-gray-400 dark:bg-gray-500">
      <div className="mb-1 flex justify-between">
        <button
          className="rounded-full border border-gray-400 hover:bg-tabIconHovBgCol dark:hover:bg-tabIconHovBgColD"
          onClick={() => deleteAll()}
          title="Очистити всі"
        >
          <svg
            class="h-6 w-6 text-red-500"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            {" "}
            <path stroke="none" d="M0 0h24v24H0z" />{" "}
            <line x1="4" y1="7" x2="20" y2="7" />{" "}
            <line x1="10" y1="11" x2="10" y2="17" />{" "}
            <line x1="14" y1="11" x2="14" y2="17" />{" "}
            <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />{" "}
            <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
          </svg>
          {/* <svg
            className="h-6 w-6 text-red-500"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {" "}
            <path stroke="none" d="M0 0h24v24H0z" />{" "}
            <path d="M14 3v4a1 1 0 0 0 1 1h4" />{" "}
            <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />{" "}
            <path d="M10 12l4 4m0 -4l-4 4" />
          </svg> */}
        </button>
        <button
          className="mx-2  flex  items-center rounded-lg border border-gray-400 px-1 text-center hover:bg-tabIconHovBgCol dark:hover:bg-tabIconHovBgColD"
          //   className="rounded-full hover:bg-tabIconHovBgCol dark:hover:bg-tabIconHovBgColD"
          onClick={() => handleApplyFilters()}
          title="Застосувати фільтр"
        >
          <svg
            className="h-6 w-6 text-red-500"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {" "}
            <polyline points="9 10 4 15 9 20" />{" "}
            <path d="M20 4v7a4 4 0 0 1-4 4H4" />
          </svg>
          <h1 className={`{styleTableText} font-bold uppercase text-red-500 `}>
            Застосувати фільтри
          </h1>
        </button>

        <button
          className="  rounded-full border border-gray-400 hover:bg-tabIconHovBgCol dark:hover:bg-tabIconHovBgColD"
          onClick={(e) => setIsDropdownFilterMenu(false)}
          title="Вийти без збереження"
        >
          <svg
            className="h-6 w-6 text-red-500"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokewinejoin="round"
          >
            {" "}
            <line x1="18" y1="6" x2="6" y2="18" />{" "}
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
      </div>
      <div className='max-w-xs overflow-auto md:max-w-md'>
        <table className=" w-full table-auto border-collapse">
          <thead className="bg-gray-400  text-left uppercase  text-tabThTexCol dark:bg-tabThBgColD dark:text-tabThTexColD">
            <tr>
              <th className={`${styleTableText}`}>Назва поля</th>
              {/* <th>Ключ</th> */}
              <th className={`${styleTableText}`}>Фільтр1</th>
              <th className={`${styleTableText}`}>Лог</th>
              <th className={`${styleTableText}`}>Фільтр2</th>
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
                {/* <td
                id={row._nrow}
                className={`${styleTableText} font-semibold text-tabTrTexCol dark:text-tabTrTexColD`}
              >
                {row.accessor}
              </td> */}
                <td
                  id={row._nrow}
                  className={`${styleTableText} text-tabTrTexCol dark:text-tabTrTexColD`}
                >
                  {row.comparisonFirst}
                  {row.filterFirst}
                </td>
                <td
                  id={row._nrow}
                  className={`${styleTableText} text-tabTrTexCol dark:text-tabTrTexColD`}
                >
                  {row.logical}
                </td>
                <td
                  id={row._nrow}
                  className={`${styleTableText} text-tabTrTexCol dark:text-tabTrTexColD`}
                >
                  {row.comparisonLast}
                  {row.filterLast}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* Dropdown menu */}
      {isDropdownFilterForm && (
        <DroopFifterForm
          setIsDropdownFilterForm={setIsDropdownFilterForm}
          filterDataRow={filterDataRow}
          filterData={filterData}
          setFilterData={setFilterData}
        />
      )}
    </div>
  );
}
