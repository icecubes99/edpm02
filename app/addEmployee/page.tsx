import React from "react";
import CreateEmployee from "@/components/shared/CreateEmployee";
import Sidebar from "@/components/shared/Sidebar";
import UnivHeader from "@/components/shared/UnivHeader";

const page = () => {
  return (
    <main>
      <UnivHeader />
      <div className="flex flex-row">
        <Sidebar />
        <div>
          <CreateEmployee />
        </div>
      </div>
    </main>
  );
};

export default page;
