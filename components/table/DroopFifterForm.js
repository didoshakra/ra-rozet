//https://codesandbox.io/embed/form-functional-component-2lmxu?codemirror=1
//(input+select)Без react-hook-form
//css з //https://galaxies.dev/quickwin/react-tailwind-form

import { useState } from "react"; //Vers 7.0.X:<input {...register('test', { required: true })} />

export default function DroopFifterForm({ onCloseForm, toFormData }) {
  const [state, setState] = useState({
    firstFilter: "",
    lastFilter: "",
    comparison: "=",
    comparison2: "=", // bio: "",
    // hooks: true,
    // level: "master",
  });

  function handleChange(evt) {
    const value =
      evt.target.type === "checkbox" ? evt.target.checked : evt.target.value;
    setState({
      ...state,
      [evt.target.name]: value,
    });
  }

  return (
    <div className="absolute z-10  max-w-full  rounded-lg border  border-gray-400  bg-gray-500 p-1   shadow transition-transform duration-200 ease-out dark:border-gray-300 dark:bg-gray-200">
      <form className="flex space-x-1">
        <label className=" font-semibold  text-gray-700 ">
          <div className="mb-2 bg-gray-400 font-semibold uppercase dark:bg-gray-100">
            sel
          </div>
          <input
            type="radio"
            name="and"
            value="and"
            checked={state.level === "and"}
            onChange={handleChange}
          />
        </label>
        <label className="font-semibold uppercase text-gray-700">
          <div
            className="     mb-2 bg-gray-400 font-semibold uppercase dark:bg-gray-100"

            //   className="mb-2 bg-gray-400 font-semibold uppercase dark:bg-gray-100"
          >
            &gt;=&lt;
          </div>
          <select
            // appearance-none-не показувати стрілку селе
            className="mx-1 block w-full  appearance-none items-center rounded border border-gray-400 bg-gray-50  align-middle text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
            // className="mx-1 block w-full appearance-none items-center rounded border border-gray-400 bg-gray-50 p-1 align-middle  leading-tight text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
            name="comparison"
            onChange={handleChange}
            value={state.comparison}
          >
            <option value=">">&gt;</option>
            <option value="=">=</option>
            <option value="<"> &lt;</option>
          </select>
        </label>
        <label className="font-semibold uppercase text-gray-700">
          <div className="mb-2 bg-gray-400 font-semibold uppercase dark:bg-gray-100">
            First Name
          </div>
          <input
            className="w-full appearance-none rounded border border-gray-400 p-1 leading-tight text-gray-700 focus:border-indigo-500 focus:outline-none"
            type="text"
            name="firstFilter"
            value={state.firstFilter}
            onChange={handleChange}
          />
        </label>
        <label className="font-semibold uppercase text-gray-700">
          <div className="mb-2 min-w-unit-3 bg-gray-400 font-semibold uppercase dark:bg-gray-100">
            порівняння
            {/* &gt;=&lt; */}
          </div>
          <select
            className="mx-1 block w-full appearance-none items-center rounded border border-gray-400 bg-gray-50 p-1 align-middle  leading-tight text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
            name="comparison2"
            onChange={handleChange}
            value={state.comparison2}
          >
            <option value=">">&gt;</option>
            <option value="=">=</option>
            <option value="<"> &lt;</option>
          </select>
        </label>
        <label className="font-semibold uppercase text-gray-700">
          <div className="mb-4">Last Name</div>
          <input
            // className="w-full appearance-none rounded border border-gray-400 p-1 leading-tight text-gray-700 focus:border-indigo-500 focus:outline-none"
            // appearance-none : Видалення зовнішнього вигляду елемента за замовчуванням
            className="w-full appearance-none rounded border border-gray-400 p-1 leading-tight text-gray-700 focus:border-indigo-500 focus:outline-none"
            type="text"
            name="lastFilter"
            value={state.lastFilter}
            onChange={handleChange}
          />
        </label>
      </form>
      <div className="flex px-1 text-rose-200 dark:text-red-500">
        {state.comparison}
        {state.firstFilter}
        {state.comparison2}
        {state.lastFilter}
      </div>
    </div>
  );
}
