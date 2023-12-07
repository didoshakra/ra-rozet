//https://preline.co/docs/tables.html
"use client";

export default function DProductTable({ rows }) {
  // console.log(" DProductTable.js/rows=", rows);

  const cols = [
    { name: "#", with: "15px" },
    { name: "Id", with: "20px" },
    { name: "Назва товару", with: "200px" },
    { name: "ШтрихКод", with: "200px" },
    { name: "Категорія", with: "200px" },
    { name: "Ціна", with: "200px" },
    // { name: "Дія", with: "200px" },
  ];
  return (
    <div className="p-4">
      <div className="rounded-3xl border border-neutral-500 bg-stone-300 text-center  text-hText dark:bg-gray-800  dark:text-hTextD">
        <h3 className=" dark:text-hTextD text-center text-lg font-bold text-hText">
          PrelineUI
        </h3>
        <h1 className=" dark:text-hTextD text-center text-4xl font-bold text-hText">
          DProducts
        </h1>
        hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh
      </div>
      <div className="flex flex-col">
        <div className="-m-1.5 overflow-x-auto">
          <div className="inline-block min-w-full p-1.5 align-middle">
            <div className="overflow-hidden rounded-lg border dark:border-gray-700">
              <table className="min-w-full divide-y divide-stone-300 dark:divide-gray-700">
                <thead className="bg-stone-300 dark:bg-gray-700">
                  <tr>
                    {cols.map((item, index) => (
                      <th
                        key={index}
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium uppercase text-gray-500 dark:text-gray-400"
                      >
                        {item.name}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-200 dark:divide-gray-700">
                  {rows.map((item, index) => (
                    <tr
                      key={item.id}
                      className="odd:bg-white even:bg-stone-100 hover:bg-stone-200 dark:odd:bg-gray-800 dark:even:bg-gray-700 dark:hover:bg-gray-700"
                    >
                      <td>{index}</td>
                      <td>{item.id}</td>
                      <td>{item.name}</td>
                      <td>{item.skod}</td>
                      <td>{item.category}</td>
                      <td>{item.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
