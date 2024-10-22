import Image from "next/image";
import React from "react";
import TaskList from "./TaskList";
import { Task } from "@/pages";
interface CreateTaskProps {
  addTask: (task: Task) => void;
  toggleTaskCompletion: (id: string) => void;
  tasks: Task[];
  setCurrentTask: (task: Task | null) => void;
}
function SideBar({
  addTask,
  toggleTaskCompletion,
  tasks,
  setCurrentTask,
}: CreateTaskProps) {
  
  
  return (
    <div className="shadow-2xl  w-[414px] h-[100vh]   ">
      <div className=" bg-[#3556AB] flex justify-between px-[30px] py-[12px] shadow-2xl shadow-[black]">
        <div>
          <Image
            src={"/profile-pic.png"}
            alt="profile picture"
            width={50}
            height={50}
          />
        </div>
        <div className="text-white ml-3">
          <p className="font-[500] text-[16px]">Hello, Jhon</p>
          <p className="italic font-[100] text-[25px]">
            What are your plans for today?
          </p>
        </div>
      </div>
      <div className="bg-[#CDE53D] border-b border-[#9EB031] flex px-5 justify-between pb-10">
        <div className="mt-5">
          <Image
            src={"/trophy.png"}
            alt="profile picture"
            width={50}
            height={50}
          />
        </div>
        <p className="text-[18px] mt-7 font-[700] text-[#071D55]">
          Go Pro Upgrade Now
        </p>
        <div className="bg-[#071D55] h-[71px] text-[#F2C94C] w-[66.11px] p-6">
          <p>$1</p>
        </div>
      </div>
      <TaskList addTask={addTask} toggleTaskCompletion={toggleTaskCompletion} tasks={tasks} setCurrentTask={setCurrentTask}/>
      
    </div>
  );
}

export default SideBar;
