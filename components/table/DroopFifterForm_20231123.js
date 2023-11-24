//https://codesandbox.io/embed/form-functional-component-2lmxu?codemirror=1
//(input+select)Без react-hook-form
//css з //https://galaxies.dev/quickwin/react-tailwind-form

import { useState } from "react"; //Vers 7.0.X:<input {...register('test', { required: true })} />

export default function DroopFifterForm({
  filterDataRow,
  setIsDropdownFilterForm,
  filterData,
  setFilterData,
}) {
  const [state, setState] = useState({
    filterFirst: filterDataRow.filterFirst,
    filterLast: filterDataRow.filterLast,
    logical: filterDataRow.logical,
    comparisonFirst: filterDataRow.comparisonFirst,
    comparisonLast: filterDataRow.comparisonLast,
    // filterFirst: "",
    // filterLast: "",
    // logical: "",
    // comparisonFirst: "",
    // comparisonLast: "",
  });

  const handleEdit = () => {
    const nRow = filterDataRow._nrow;
    //--- Записуємо filter в filtered масиву(filterData) --------
    let tempData = [...filterData]; //Копія робочого масиву обєктів щоб рендерило зміни
    // const targetObj = filterData.find((obj) => obj._nrow === nRow); //не ререндерить зміни
    const targetObj = tempData.find((obj) => obj._nrow === nRow); //Шукажм рядок по _nrow=nRow
    if (targetObj) {
      // Записує безпосередньо в масив ????//Треба змінювати через setFilterData бо не ререндерить зміни
      //   targetObj.filter1 = `${state.comparisonFirst}${state.filterFirst}`;

      targetObj.comparisonFirst = state.comparisonFirst;
      targetObj.filterFirst = state.filterFirst;
      targetObj.logical = state.logical;
      targetObj.comparisonLast = state.comparisonLast;
      targetObj.filterLast = state.filterLast;
      console.log("DroopFifterForm.js/handleEdit/filterData=", filterData);
      setFilterData(tempData); //ререндерить зміни
    }

    setIsDropdownFilterForm(false);
  };

  function handleChange(evt) {
    const value =
      evt.target.type === "checkbox" ? evt.target.checked : evt.target.value;
    setState({
      ...state,
      [evt.target.name]: value,
    });
    // console.log("DroopFifterForm.js/handleChange/state=", state);
  }

  return (
    <div className="absolute z-10 rounded-lg border  border-gray-400  bg-gray-300 p-1   shadow transition-transform duration-200 ease-out dark:border-gray-300 dark:bg-gray-200">
      <div className=" mb-2 flex justify-between space-x-3 text-center font-semibold uppercase">
        <button
          className="rounded-full border border-gray-400 hover:bg-tabIconHovBgCol dark:hover:bg-tabIconHovBgColD"
          //   className="rounded-full hover:bg-tabIconHovBgCol dark:hover:bg-tabIconHovBgColD"
          onClick={() => handleEdit()}
          title="Добавте значення"
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
        </button>
        <header className="flex text-red-700 ">
          <label className="px-1">{filterDataRow.name}</label>
          <label className="px-1">({filterDataRow.accessor})</label>
        </header>
        <button
          className="rounded-full border border-gray-400 hover:bg-tabIconHovBgCol dark:hover:bg-tabIconHovBgColD"
          onClick={(e) => setIsDropdownFilterForm(false)}
          title="Вийти без збереження"
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
            <line x1="18" y1="6" x2="6" y2="18" />{" "}
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
      </div>{" "}
      <form className=" space-x-1">
        {/* <input
          type="radio"
          name="sel"
          value="sel"
          checked={state.level === "sel"}
          onChange={handleChange}
        /> */}
        <label className="flex font-semibold text-gray-700">
          <div className="text-center">&gt;&lt;</div>
          <select
            // appearance-none-не показувати стрілку селе
            className="block appearance-none items-center rounded border border-gray-400 bg-gray-50 p-1 px-2 align-middle  leading-tight text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-400 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
            name="comparisonFirst"
            onChange={handleChange}
            value={state.comparisonFirst}
          >
            <option value=" "> </option>
            <option value=">">&gt;</option>
            <option value="===">=</option>
            <option value="!==">!=</option>
            <option value="<"> &lt;</option>
          </select>
        </label>
        {/*  */}
        <label className="flex font-semibold text-gray-700">
          <div className=" text-center">фільтр1</div>

          <input

            //leading-tight=line-height: 1.25-(висотою лінії) елемента.
            className="block items-center rounded border border-gray-400 bg-gray-50 p-1 align-middle leading-tight  text-gray-900 dark:border-gray-600 dark:bg-gray-400 dark:text-white"
            type="text"
            name="filterFirst"
            value={state.filterFirst}
            onChange={handleChange}
          />
        </label>
        {/*  */}
        <label className="flex font-semibold text-gray-700">
          <div className=" text-center">and/or</div>
          <select
            className=" block appearance-none items-center rounded border border-gray-400 bg-gray-50 p-1 px-2 align-middle  leading-tight text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-400 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
            name="logical"
            onChange={handleChange}
            value={state.logical}
          >
            <option value=" "> </option>
            <option value="&&">and</option>
            <option value="||">or</option>
          </select>
        </label>
        {/*  */}
        <label className="flex font-semibold text-gray-700">
          <div className=" text-center"> &gt;&lt;</div>
          <select
            className="block appearance-none items-center rounded border border-gray-400 bg-gray-50 p-1 px-2 align-middle  leading-tight text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-400 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
            name="comparisonLast"
            onChange={handleChange}
            value={state.comparisonLast}
          >
            <option value=" "> </option>
            <option value=">">&gt;</option>
            <option value="===">=</option>
            <option value="!==">!=</option>
            <option value="<"> &lt;</option>
          </select>
        </label>
        <label className="flex font-semibold text-gray-700">
          <div className=" text-center">фільтр2 </div>
          <input
           //leading-tight=line-height: 1.25-(висотою лінії) елемента.
            className="block items-center rounded border border-gray-400 bg-gray-50 p-1 align-middle leading-tight  text-gray-900 dark:border-gray-600 dark:bg-gray-400 dark:text-white"

            type="text"
            name="filterLast"
            value={state.filterLast}
            onChange={handleChange}
          />
        </label>
      </form>
      <div className="flex px-2 text-red-500 dark:text-red-500">
        {state.comparisonFirst}&nbsp; {state.filterFirst} {state.logical}
        &nbsp; {state.comparisonLast} &nbsp; {state.filterLast}
      </div>
    </div>
  );
}