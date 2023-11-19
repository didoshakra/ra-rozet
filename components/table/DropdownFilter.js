import DroopFifterForm from "./DroopFifterForm";
export default function DropdownFilterMenu({
  filter,
  setIsDropdownFilterMenu,
  styleTableText,
}) {
  const handleAdd = () => {
    console.log("DropdownFilterMenu.js/handleAdd");
  };
  return (
    <div className="absolute z-10  max-w-full  rounded-lg border  border-gray-300  bg-gray-200 p-1   shadow transition-transform duration-200 ease-out dark:border-gray-400 dark:bg-gray-500">
      <div className="flex justify-between">
        <button
          className="rounded-full border border-gray-400 hover:bg-tabIconHovBgCol dark:hover:bg-tabIconHovBgColD"
          //   className="rounded-full hover:bg-tabIconHovBgCol dark:hover:bg-tabIconHovBgColD"
          onClick={() => handleAdd()}
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
            <line x1="12" y1="5" x2="12" y2="19" />{" "}
            <line x1="5" y1="12" x2="19" y2="12" />
          </svg>
        </button>
        <h1
          className={`{styleTableText} text-center  font-bold text-headMenuText dark:text-headMenuTextDark`}
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
          className={`bg-tabThBgCol  p-[0.5em]  text-tabThTexCol dark:bg-tabThBgColD dark:text-tabThTexColD`}
        >
          <tr>
            <th className={` uppercase`}>Назва поля</th>
            {/* <th className={`${styleTableText} uppercase`}>Ключ</th> */}
            <th className={`uppercase`}>Ключ</th>
            <th className={` uppercase`}>Фільтр</th>
          </tr>
        </thead>
        <tbody>
          {filter.map((row, index) => (
            <tr
              key={index}
              className="bg- bg-gray-200 hover:bg-tabTrBgHovCol dark:bg-gray-500 dark:hover:bg-tabTrBgHovColD"

              //   onClick={(e) => selectRows(e)}
            >
              <td
                className={`${styleTableText} font-semibold text-tabTrTexCol dark:text-tabTrTexColD`}
              >
                {row.name}
              </td>
              <td
                className={`${styleTableText} font-semibold text-tabTrTexCol dark:text-tabTrTexColD`}
              >
                {row.accessor}
              </td>
              <td
                className={`${styleTableText} text-tabTrTexCol dark:text-tabTrTexColD`}
              >
                {row.filter}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <DroopFifterForm />
    </div>
  );
}
