import {
  Link,
  Pagination,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/react";
import React, { useEffect, useState } from "react";
import { RenderCellAttendance, RenderCellUser } from "./render-cell";
import { fetchAllAttendance } from "../api/attendance";

interface ColumnKey {
  name: string;
  uid: string;
}
export const TableWrapper = ({
  page,
  setPage,
  columns,
  content,
  render,
}: {
  page: any
  setPage: any
  columns: ColumnKey[];
  content: any;
  render: string;
}) => {
  // const [content, setContent] = useState<any[]>([])
  console.log("column", columns);
  console.log("content", content);

  return (
    <div className=" w-full flex flex-col gap-4">
      <Table
        aria-label="Example table with custom cells"
        bottomContent={
          <div className="flex w-full justify-center">
            {Math.ceil(content.total/content.size) > 1 &&
            <Pagination
            isCompact
            showControls
            showShadow
            color="primary"
            page={page}
            onChange={(e) => {setPage(e), console.log(e)}}
            total={Math.ceil(content.total/content.size)}
          />
          }   
          </div>
        }
      >
        <TableHeader columns={columns}>
          {(column) => (
            <TableColumn
              key={column.uid}
              hideHeader={column.uid === "actions"}
              align={column.uid === "actions" ? "center" : "start"}
            >
              {column.name}
            </TableColumn>
          )}
        </TableHeader>
        <TableBody items={content} emptyContent={"No rows to display"}>
          {content.items?.map((item:any) => (
            <TableRow key={item}>
              {(columnKey) => (
                <TableCell>
                  {
                    render === "user" ? (
                      <RenderCellUser user={item} columnKey={columnKey} />
                    ) : render === "attendance" ? (
                      <RenderCellAttendance data={item} columnKey={columnKey} />
                    ) : null // You can provide a default case or handle other cases as needed
                  }
                </TableCell>
              )}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
