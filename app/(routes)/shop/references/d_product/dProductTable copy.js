"use client";

export default function DProductTable({ rows }) {
  // console.log(" DProductTable.js/rows=", rows);
  const cols = [
    { name: "#", with: "15px" },
    { name: "Id", with: "20px" },
    { name: "Ім'я", with: "200px" },
  ];


  return (
    <div className="p-4">
      <h1 className="rounded-3xl border border-neutral-500 bg-stone-200 text-center text-4xl font-bold text-headMenuText dark:text-headMenuTextDark">
        DProducts
      </h1>
      {/* <table className=" w-full  rounded-3xl border border-neutral-500">
        <thead className="rounded-xl border border-red-600 bg-neutral-300 text-xl font-semibold">
          <tr className="bg-stone-400">
            <td>Index</td>
            <td>Id</td>
            <td>Name</td>
          </tr>
        </thead>
        {rows.length > 0 ? (
          <tbody>
            {rows.map((item, index) => (
              <tr key={item.id} className="bg-stone-200">
                <td>{index}</td>
                <td>{item.id}</td>
                <td>{item.name}</td>
              </tr>
            ))}
          </tbody>
        ) : (
          <tbody>No data available</tbody>
        )}
      </table> */}
      {/* <table className=" border-collapse w-full rounded-3xl border border-neutral-500">
        <tr className="bg-stone-400">
          <th>Index</th>
          <th>Id</th>
          <th>Name</th>
        </tr>
        {rows.length > 0 ? (
          <tbody>
            {rows.map((item, index) => (
              <tr key={item.id} className="bg-stone-200">
                <td>{index}</td>
                <td>{item.id}</td>
                <td>{item.name}</td>
              </tr>
            ))}
          </tbody>
        ) : (
          <tbody>No data available</tbody>
        )}
      </table> */}
      <div class="flex flex-col">
        <div class="-m-1.5 overflow-x-auto">
          <div class="inline-block min-w-full p-1.5 align-middle">
            <div class="overflow-hidden rounded-lg border dark:border-gray-700">
              <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                <thead class="bg-gray-50 dark:bg-gray-700">
                  <tr>
                    <th
                      scope="col"
                      class="px-6 py-3 text-left text-xs font-medium uppercase text-gray-500 dark:text-gray-400"
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      class="px-6 py-3 text-left text-xs font-medium uppercase text-gray-500 dark:text-gray-400"
                    >
                      Age
                    </th>
                    <th
                      scope="col"
                      class="px-6 py-3 text-left text-xs font-medium uppercase text-gray-500 dark:text-gray-400"
                    >
                      Address
                    </th>
                    <th
                      scope="col"
                      class="px-6 py-3 text-right text-xs font-medium uppercase text-gray-500 dark:text-gray-400"
                    >
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-gray-200 dark:divide-gray-700">
                  <tr class="odd:bg-white even:bg-gray-100 hover:bg-gray-100 dark:odd:bg-gray-800 dark:even:bg-gray-700 dark:hover:bg-gray-700">
                    <td class="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-800 dark:text-gray-200">
                      John Brown
                    </td>
                    <td class="whitespace-nowrap px-6 py-4 text-sm text-gray-800 dark:text-gray-200">
                      45
                    </td>
                    <td class="whitespace-nowrap px-6 py-4 text-sm text-gray-800 dark:text-gray-200">
                      New York No. 1 Lake Park
                    </td>
                    <td class="whitespace-nowrap px-6 py-4 text-right text-sm font-medium">
                      <a class="text-blue-500 hover:text-blue-700" href="#">
                        Delete
                      </a>
                    </td>
                  </tr>
                  {/* Смугасті рядки  і при наведенні колір  */}
                  <tr class="odd:bg-white even:bg-gray-100 hover:bg-gray-200 dark:odd:bg-gray-800 dark:even:bg-gray-700 dark:hover:bg-gray-700">
                    <td class="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-800 dark:text-gray-200">
                      Jim Green
                    </td>
                    <td class="whitespace-nowrap px-6 py-4 text-sm text-gray-800 dark:text-gray-200">
                      27
                    </td>
                    <td class="whitespace-nowrap px-6 py-4 text-sm text-gray-800 dark:text-gray-200">
                      London No. 1 Lake Park
                    </td>
                    <td class="whitespace-nowrap px-6 py-4 text-right text-sm font-medium">
                      <a class="text-blue-500 hover:text-blue-700" href="#">
                        Delete
                      </a>
                    </td>
                  </tr>

                  <tr class="odd:bg-white even:bg-gray-100 hover:bg-gray-100 dark:odd:bg-gray-800 dark:even:bg-gray-700 dark:hover:bg-gray-700">
                    <td class="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-800 dark:text-gray-200">
                      Joe Black
                    </td>
                    <td class="whitespace-nowrap px-6 py-4 text-sm text-gray-800 dark:text-gray-200">
                      31
                    </td>
                    <td class="whitespace-nowrap px-6 py-4 text-sm text-gray-800 dark:text-gray-200">
                      Sidney No. 1 Lake Park
                    </td>
                    <td class="whitespace-nowrap px-6 py-4 text-right text-sm font-medium">
                      <a class="text-blue-500 hover:text-blue-700" href="#">
                        Delete
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
