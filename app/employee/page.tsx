import type { NextPage } from "next";
import { EmployeeHome } from "@/components/employee";

export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";

const EmployeePage: NextPage = () => {
  return <EmployeeHome />;
};

export default EmployeePage;
