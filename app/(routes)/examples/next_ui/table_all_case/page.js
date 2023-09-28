//https://www.simplenextjs.com/posts/next-postgresql

import NextUiTable from "./nextUiTable";
import { columns, users, statusOptions } from "./data";

export default async function NextUiTableAllCase() {
  // console.log("NextUiTableAllCase");
  return (
    <>
      <h1 className="text-center text-4xl font-bold text-headMenuText dark:text-headMenuTextDark">
        NextUiTableAllCase
      </h1>
      <NextUiTable columns={columns} users={users} statusOptions={statusOptions} />
    </>
  );
}
