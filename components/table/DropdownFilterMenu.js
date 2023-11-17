export default function DropdownFilterMenu({
  filter,
  setFilter,
  styleTableText,
}) {
  return (
    <div className="p-2 absolute z-10 m-0 max-w-full divide-y  divide-gray-100 rounded-lg bg-gray-200   shadow transition-transform ease-out dark:divide-gray-600 dark:bg-gray-700">
      {/* <div className="rounded-3xl  ol  text-center  text-headMenuText dark:bg-tabThBgColD  dark:text-headMenuTextDark"> */}
      {/* <h3 className=" px-4 text-left font-sans text-sm text-red-400 ">
          RTable.js / Table pagination
        </h3> */}
      <h1 className="p-[0.1em] text-center text-sm font-bold text-headMenuText dark:text-headMenuTextDark">
        Фільтр
      </h1>
      <table className=" w-full table-auto border-collapse  ">
        <thead
          className={`sticky top-0 bg-tabThBgCol  p-[0.5em]  text-xs text-tabThTexCol dark:bg-tabThBgColD dark:text-tabThTexColD`}
        >
          <tr>
            <th className={`{styleTableText} uppercase`}>Назва поля</th>
            <th className={`{styleTableText} uppercase`}>Ключ</th>
            <th className={`{styleTableText} uppercase`}>Фільтр</th>
          </tr>
        </thead>
        <tbody>
          {filter.map((row, index) => (
            <tr
              key={index}
              className="odd:bg-tabTrBgCol even:bg-tabTrBgEveCol hover:bg-tabTrBgHovCol dark:odd:bg-tabTrBgColD dark:even:bg-tabTrBgEveColD dark:hover:bg-tabTrBgHovColD"

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
      {/* </div> */}
    </div>
  );
}
