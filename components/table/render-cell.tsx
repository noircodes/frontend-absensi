import { User, Tooltip, Chip } from "@nextui-org/react";
import React, { useEffect, useState } from "react";
import { DeleteIcon } from "../icons/table/delete-icon";
import { EditIcon } from "../icons/table/edit-icon";
import { EyeIcon } from "../icons/table/eye-icon";
import { users } from "./data";
import { deleteUser, fetchUserById } from "../api/user";
import { UpdateUser } from "../users/update-user";
import { DeleteUser } from "../users/delete-user";
import moment from "moment";
import { DeleteAttendance } from "../attendance/delete-attendance";

interface PropsUser {
  // user: (typeof users)[number];
  user: any;
  columnKey: string | React.Key;
}

interface PropsAttendance {
  data: any;
  columnKey: string | React.Key;
}

export const RenderCellUser = ({ user, columnKey }: PropsUser) => {
  const cellValue = user[columnKey];
  // const [userId, setUserId] = useState<any>("")

  switch (columnKey) {
    case "name":
      return (
        <User
          avatarProps={{
            src: user["photoUrl"],
          }}
          name={cellValue}
        >
        </User>
      );
    case "role":
      return (
        <div>
          <div>
            <span>{cellValue}</span>
          </div>
        </div>
      );
    // case "status":
    //   return (
    //     <Chip
    //       size="sm"
    //       variant="flat"
    //       color={
    //         cellValue === "active"
    //           ? "success"
    //           : cellValue === "paused"
    //           ? "danger"
    //           : "warning"
    //       }
    //     >
    //       <span className="capitalize text-xs">{cellValue}</span>
    //     </Chip>
    //   );

    case "actions":
      return (
        <div className="flex items-center gap-4 ">
          <div>
            <Tooltip content="Details">
              <button onClick={() => console.log("Edit user", user._id)}>
                <EyeIcon size={20} fill="#979797" />
              </button>
            </Tooltip>
          </div>
          <div>
            <UpdateUser currentUser={user} />
          </div>
          <div>
            <DeleteUser currentUser={user} />
          </div>
        </div>
      );
    default:
      return cellValue;
  }
};

export const RenderCellAttendance = ({ data, columnKey }: PropsAttendance) => {
  const cellValue = data[columnKey];

  switch (columnKey) {
    case "name":
      return (
        <User
          avatarProps={{
            src: data.employeeDetail.photoUrl,
          }}
          name={data.employeeDetail.name}
        >
          {data.email}
        </User>
      );
    case "date":
      return(
        <div>
          <span>{moment(data.checkIn.timestamp).format('DD MMMM YYYY')}</span>
        </div>
      )
    case "checkin":
      return (
        <div>
          <div>
            <span>{moment(data.checkIn.timestamp).format('HH:mm:ss')}<br></br></span>
            <Chip
            size="sm"
            variant="flat"
            color={
                data.checkIn.status === "TEPAT WAKTU"
                ? "success"
                : data.checkIn.status === "TIDAK TEPAT WAKTU"
                ? "danger"
                : "warning"
            }
          >
            <span className="capitalize text-xs">{data.checkIn.status}</span>
          </Chip>
          </div>
        </div>
      );
      case "checkout":
        return (
          <div>
            <div>
              <span>{data.checkOut.timestamp !== null ? moment(data.checkOut.timestamp).format('HH:mm:ss') : null}<br></br></span>
              {data.checkOut.status !== null ? <Chip
              size="sm"
              variant="flat"
              color={
                  data.checkOut.status === "TEPAT WAKTU"
                  ? "success"
                  : data.checkOut.status === "TIDAK TEPAT WAKTU"
                  ? "danger"
                  : "warning"
              }
            >
              <span className="capitalize text-xs">{data.checkOut.status}</span>
            </Chip> : null
            }
            </div>
          </div>
        );

    case "actions":
      return (
        <div className="flex items-center gap-4 ">
          <div>
            <Tooltip content="Details">
              <button onClick={() => console.log("Edit data", data._id)}>
                <EyeIcon size={20} fill="#979797" />
              </button>
            </Tooltip>
          </div>
          <div>
            <DeleteAttendance currentAttendance={data} />
          </div>
        </div>
      );
    default:
      return cellValue;
  }
};