import type { NextPage } from "next";
import { Attendance } from '@/components/attendance';

export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";

const EmployeeAttendancePage: NextPage = () => {
   return <Attendance />;
};

export default EmployeeAttendancePage;
