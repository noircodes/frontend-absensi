"use client";
import { Button, Input } from "@nextui-org/react";
import { Select, SelectSection, SelectItem } from "@nextui-org/select";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { TrashIcon } from "@/components/icons/users/trash-icon";
import { HouseIcon } from "@/components/icons/breadcrumb/house-icon";
import { UsersIcon } from "@/components/icons/breadcrumb/users-icon";
import { TableWrapper } from "@/components/table/table";
import { AddUser } from "./add-user";
import { fetchAllUser } from "../api/user";
import { Pagination } from "@/utils/pagination";

export const Users = () => {
  const [date, setDate] = useState();
  const [content, setContent] = useState<any[]>([]);
  const [name, setName] = useState<any>("");
  const [role, setRole] = useState<any>("");
  const [page, setPage] = useState<Pagination>();

  const column = [
    { name: "NAME", uid: "name" },
    { name: "ROLE", uid: "role" },
    { name: "ACTIONS", uid: "actions" },
  ];

  const roles = ["ADMIN", "EMPLOYEE"];

  useEffect(() => {
    const fetchAllData = async () => {
      try {
        const data = await fetchAllUser(name, role);
        setContent(data);
      } catch (error) {}
    };
    fetchAllData();
  }, [name, role, date]);
  console.log("cek role", role);

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
          <span>Users</span>
          <span> / </span>{" "}
        </li>
        <li className="flex gap-2">
          <span>List</span>
        </li>
      </ul>

      <h3 className="text-xl font-semibold">All Users</h3>
      <div className="flex justify-between flex-wrap gap-4 items-center">
        <div className="flex items-center gap-3 flex-wrap md:flex-nowrap">
          <Input
            size="sm"
            classNames={{
              input: "w-full",
              mainWrapper: "w-full",
            }}
            value={name}
            label="Search users"
            onChange={(e) => setName(e.target.value)}
          />
          <Select
            label="Select role"
            className="max-w-xs"
            size="sm"
            onChange={(e) => setRole(e.target.value)}
            selectedKeys={[role]}
          >
            {roles.map((roles) => (
              <SelectItem key={roles} value={roles}>
                {roles}
              </SelectItem>
            ))}
          </Select>
          <TrashIcon setName={setName} setRole={setRole} />
        </div>
        <div className="flex flex-row gap-3.5 flex-wrap">
          <AddUser />
        </div>
      </div>
      <div className="max-w-[95rem] mx-auto w-full">
        <TableWrapper
          page={page?.page}
          setPage={setPage}
          columns={column}
          content={content}
          render="user"
        />
      </div>
    </div>
  );
};
