import type { NextPage } from "next";
import {Users} from '@/components/users';

export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";

const UserPage : NextPage = () => {
   return <Users />;
};

export default UserPage;
