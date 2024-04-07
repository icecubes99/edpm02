import Sidebar from "@/components/shared/Sidebar";
import UnivHeader from "@/components/shared/UnivHeader";
import React from "react";
import Link from "next/link";
import AssignSuperior from "@/components/shared/AssignSuperior";
import SuperiorsMap from "@/components/shared/SuperiorsMap";

const page = () => {
    return (
        <main>
            <UnivHeader />
            <div className="flex flex-row">
                <Sidebar />
                <div className="flex flex-col ml-10">
                    <h1 className="pt-10 text-3xl font-bold">ASSIGN SUPERIORS PER EMPLOYEE</h1>
                    <AssignSuperior />
                    <SuperiorsMap />
                </div>
            </div>
        </main>
    )
}

export default page