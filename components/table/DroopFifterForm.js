//https://codesandbox.io/embed/form-functional-component-2lmxu?codemirror=1
//(input+select)Без react-hook-form
//css з //https://galaxies.dev/quickwin/react-tailwind-form

import { useState } from "react"; //Vers 7.0.X:<input {...register('test', { required: true })} />

export default function DroopFifterForm({
  filterDataRow,
  setIsDropdownFilterForm,
  setFilterData,
  filterData,
}) {
  const [state, setState] = useState({
    filterFirst: "",
    filterLast: "",
    logical: "and",
    comparisonFirst: "=",
    comparisonLast: "=",
  });

  const handleAdd = () => {
    const nRow = filterDataRow._nrow;
    //--- Записємо filter в filtered масиву(filterDataRow) --------
    let tempData = [...filterData]; //Копія робочого масиву обєктів
    //https://www.geeksforgeeks.org/how-to-modify-an-objects-property-in-an-array-of-objects-in-javascript/
    const targetObj = tempData.find((obj) => obj._nrow === nRow); //Шукажм рядок по _nrow=nRow
    if (targetObj) {
      const newData = `${state.comparisonFirst}:${state.filterFirst}:${state.logical}:
           ${state.comparisonLast}:${state.filterLast}`;
      console.log("DroopFifterForm.js/handleAdd/newData=", newData);
      targetObj.filter = newData; // Записує безпосередньо в масив ????
    //   console.log("DroopFifterForm.js/handleAdd/filterData=", filterData);
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
    console.log("DroopFifterForm.js/handleChange/state=", state);
  }

  return (
    <div className="absolute z-10   rounded-lg border  border-gray-400  bg-gray-300 p-1   shadow transition-transform duration-200 ease-out dark:border-gray-300 dark:bg-gray-200">
      <div className=" mb-2 flex justify-between space-x-3 text-center font-semibold uppercase">
        <button
          className="rounded-full border border-gray-400 hover:bg-tabIconHovBgCol dark:hover:bg-tabIconHovBgColD"
          //   className="rounded-full hover:bg-tabIconHovBgCol dark:hover:bg-tabIconHovBgColD"
          onClick={() => handleAdd()}
          title="Добавте значення"
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
            <polyline points="9 10 4 15 9 20" />{" "}
            <path d="M20 4v7a4 4 0 0 1-4 4H4" />
          </svg>
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
        </button>
        <header className="flex text-red-700 ">
          <label className="px-1">{filterDataRow.name}</label>
          <label className="px-1">({filterDataRow.accessor})</label>
        </header>
        <button
          className="rounded-full border border-gray-400 hover:bg-tabIconHovBgCol dark:hover:bg-tabIconHovBgColD"
          onClick={(e) => setIsDropdownFilterForm(false)}
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
      </div>{" "}
      <form className="flex space-x-1">
        {/* <input
          type="radio"
          name="sel"
          value="sel"
          checked={state.level === "sel"}
          onChange={handleChange}
        /> */}

        <select
          // appearance-none-не показувати стрілку селе
          className="mx-1 block appearance-none items-center rounded border border-gray-400 bg-gray-50 px-2  align-middle text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-400 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
          //   className="mx-1 block w-full appearance-none items-center rounded border border-gray-400 bg-gray-50 p-1 align-middle  leading-tight text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
          name="comparisonFirst"
          onChange={handleChange}
          value={state.comparisonFirst}
        >
          <option value=">">&gt;</option>
          <option value="=">=</option>
          <option value="<"> &lt;</option>
        </select>
        {/* </label> */}
        {/* <label className="font-semibold uppercase text-gray-700">
          <div className="mb-2 bg-gray-400 font-semibold uppercase dark:bg-gray-100">
            First Name
          </div> */}
        <input
          className="w-full appearance-none rounded border border-gray-400 p-1 leading-tight text-gray-700 focus:border-indigo-500 focus:outline-none dark:bg-gray-400"
          type="text"
          name="filterFirst"
          value={state.filterFirst}
          onChange={handleChange}
        />

        <select
          className="mx-1 block appearance-none items-center rounded border border-gray-400 bg-gray-50 p-1 px-2 align-middle  leading-tight text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-400 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
          name="logical"
          onChange={handleChange}
          value={state.logical}
        >
          <option value="&&">and</option>
          <option value="||">or</option>
        </select>
        <select
          className="mx-1 block appearance-none items-center rounded border border-gray-400 bg-gray-50 p-1 px-2 align-middle  leading-tight text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-400 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
          name="comparisonLast"
          onChange={handleChange}
          value={state.comparisonLast}
        >
          <option value=">">&gt;</option>
          <option value="=">=</option>
          <option value="<"> &lt;</option>
        </select>
        {/* </label> */}
        {/* <label className="font-semibold uppercase text-gray-700">
          <div className="mb-4">Last Name</div> */}
        <input
          className="w-full appearance-none rounded border border-gray-400 p-1 leading-tight text-gray-700 focus:border-indigo-500 focus:outline-none dark:bg-gray-400"
          type="text"
          name="filterLast"
          value={state.filterLast}
          onChange={handleChange}
        />
        {/* </label> */}
      </form>
      <div className="flex px-2 text-red-500 dark:text-red-500">
        {state.comparisonFirst} {state.filterFirst} {state.logical}
        {state.comparisonLast} {state.filterLast}
      </div>
    </div>
  );
}
