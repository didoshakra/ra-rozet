"use client";
import React from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  User,
  Chip,
  Tooltip,
  getKeyValue,
} from "@nextui-org/react";
import { EditIcon } from "@/public/icon_jsx/table/EditIcon";
import { DeleteIcon } from "@/public/icon_jsx/table/DeleteIcon";
import { EyeIcon } from "@/public/icon_jsx/table/EyeIcon";
// import { columns, users } from "./data";

const statusColorMap = {
  active: "success",
  paused: "danger",
  vacation: "warning",
};

const columns = [
  { name: "Id", uid: "id" },
  { name: "Назва", uid: "name" },
  { name: "ACTIONS", uid: "actions" },
  { name: "Ціна", uid: "price" },
  { name: "ШКод", uid: "skod" },
  { name: "УКТЗЕД", uid: "uktzed" },
  // { name: "ПДВ", uid: "pdv" },
  // { name: "Акциз", uid: "akcuz" },
  // { name: "Знижка", uid: "is_discount" },
  // { name: "Категорія", uid: "category" },
  // { name: "Бренд", uid: "brand" },
  // { name: "Од вим.", uid: "ov" },
  // { name: "img", uid: "img" },
];
export default function DProductTableUI({rows}) {
  const renderCell = React.useCallback((rows, columnKey) => {
    const cellValue = rows[columnKey];

    switch (columnKey) {
      case "id":
        return (
          <div className="flex flex-col">
            {/* <p className="text-bold text-sm capitalize">{cellValue}</p> */}
            <p className="text-bold text-sm capitalize text-default-400">
              {rows.id}
            </p>
          </div>
        );
      case "name":
        return (
          <div className="flex flex-col">
            {/* <p className="text-bold text-sm capitalize">{cellValue}</p> */}
            <p className="text-bold text-sm capitalize text-default-400">
              {rows.name}
            </p>
          </div>
        );
      case "name":
        return (
          <div className="flex flex-col">
            {/* <p className="text-bold text-sm capitalize">{cellValue}</p> */}
            <p className="text-bold text-sm capitalize text-default-400">
              {rows.price}
            </p>
          </div>
        );
      case "name":
        return (
          <div className="flex flex-col">
            {/* <p className="text-bold text-sm capitalize">{cellValue}</p> */}
            <p className="text-bold text-sm capitalize text-default-400">
              {rows.skod}
            </p>
          </div>
        );
      case "name":
        return (
          <div className="flex flex-col">
            {/* <p className="text-bold text-sm capitalize">{cellValue}</p> */}
            <p className="text-bold text-sm capitalize text-default-400">
              {rows.uktzed}
            </p>
          </div>
        );
      case "actions":
        return (
          <div className="relative flex items-center gap-2">
            <Tooltip content="Details">
              <span className="cursor-pointer text-lg text-default-400 active:opacity-50">
                <EyeIcon />
              </span>
            </Tooltip>
            <Tooltip content="Edit">
              <span className="cursor-pointer text-lg text-default-400 active:opacity-50">
                <EditIcon />
              </span>
            </Tooltip>
            <Tooltip color="danger" content="Delete">
              <span className="cursor-pointer text-lg text-danger active:opacity-50">
                <DeleteIcon />
              </span>
            </Tooltip>
          </div>
        );
      default:
        return cellValue;
    }
  }, []);

  return (
    <Table aria-label="Example table with custom cells">
      <TableHeader columns={columns}>
        {(column) => (
          <TableColumn
            key={column.uid}
            align={column.uid === "actions" ? "center" : "start"}
          >
            {column.name}
          </TableColumn>
        )}
      </TableHeader>
      <TableBody items={rows}>
        {(item) => (
          <TableRow key={item.id}>
            {(columnKey) => (
              <TableCell>{renderCell(item, columnKey)}</TableCell>
            )}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}
