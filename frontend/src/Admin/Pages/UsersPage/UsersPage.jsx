import React from "react";
import "./UsersPage.css";

import UsersTable from "../../Components/UsersTable/UsersTable";

export default function UsersPage() {
  return (
    <div className='flex flex-col gap-[10px] p-[1rem]'>
      <p className='text-[20px] font-[500]'>Users</p>
      <UsersTable />
    </div>
  );
}
