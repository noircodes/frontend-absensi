"use client";
import { Button, Input } from "@nextui-org/react";
import Link from "next/link";
import React, { ChangeEvent, useEffect, useState } from "react";
import { DotsIcon } from "@/components/icons/users/dots-icon";
import { InfoIcon } from "@/components/icons/users/info-icon";
import { TrashIcon } from "@/components/icons/users/trash-icon";
import { HouseIcon } from "@/components/icons/breadcrumb/house-icon";
import { UsersIcon } from "@/components/icons/breadcrumb/users-icon";
import { SettingsIcon } from "@/components/icons/sidebar/settings-icon";
import { TableWrapper } from "@/components/table/table";
import { fetchAllAttendance } from "../api/attendance";
import { Pagination } from "@/utils/pagination";
import DatePicker from "react-datepicker";
import moment from "moment";

export const Attendance = () => {
  const [content, setContent] = useState<any[]>([])
  const [valueDate, setValueDate] = useState<string>()
  const [name, setName] = useState<string>()
  const [date, setDate] = useState<string>()
  const [page, setPage] = useState<Pagination>()

  const column = [
    {name: 'NAME', uid: 'name'},
    {name: 'DATE', uid: 'date'},
    {name: 'CHECK IN', uid: 'checkin'},
    {name: 'CHECK OUT', uid: 'checkout'},
    {name: 'ACTIONS', uid: 'actions'}
  ]

  useEffect(() => {
    const fetchAllData = async () => {
      try {
        const data = await fetchAllAttendance(name, date, {page});
        setContent(data);
        console.log(data)
      } catch(error) {
        console.log(error)
      }
    };
    fetchAllData();
  }, [name, date, page, date])

  const handleName = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleDate = (e: ChangeEvent<HTMLInputElement>) => {
    setValueDate(e.target.value)
    setDate(moment(e.target.value).format("MM-DD-YYYY"))
  }

  return (
    <div className="my-14 lg:px-6 max-w-[95rem] mx-auto w-full flex flex-col gap-4">
      <ul className="flex">
        <li className="flex gap-2">
          <HouseIcon />
          <Link href={"/"}>
            <span>Home</span>
          </Link>
          <span> / </span>{" "}
        </li>

        <li className="flex gap-2">
          <UsersIcon />
          <span>Attendance</span>
          <span> / </span>{" "}
        </li>
        <li className="flex gap-2">
          <span>List</span>
        </li>
      </ul>

      <h3 className="text-xl font-semibold">All Attendance</h3>
      <div className="flex justify-between flex-wrap gap-4 items-center">
        <div className="flex items-center gap-3 flex-wrap md:flex-nowrap">
          <Input
            classNames={{
              input: "w-full",
              mainWrapper: "w-full",
            }}
            placeholder="Search attendance"
            size="sm"
            value={name}
            onChange={handleName}
          />
          <Input 
            type="date"
            size="sm"
            isClearable
            value={valueDate}
            placeholder="Date Filter"
            onChange={handleDate}
          />
          <TrashIcon setDate={setDate} setName={setName} setValueDate={setValueDate}/>
        </div>
        <div className="flex flex-row gap-3.5 flex-wrap">
          {/* <AddUser /> */}
          {/* <Button color="primary" startContent={<ExportIcon />}>
            Export to CSV
          </Button> */}
        </div>
      </div>
      <div className="max-w-[95rem] mx-auto w-full">
        <TableWrapper page={page?.page} setPage={setPage} columns={column} content={content} render="attendance"/>
      </div>
    </div>
  );
};
