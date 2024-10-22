import { Task } from "@/pages";
import Image from "next/image";
import React, { useState } from "react";
interface CreateTaskProps {
  addTask: (task: Task) => void;
  toggleTaskCompletion: (id: string) => void;
  tasks: Task[];
  setCurrentTask: (task: Task | null) => void;
}
function TaskList({
  addTask,
  toggleTaskCompletion,
  tasks,
  setCurrentTask,
}: CreateTaskProps) {
  const [title, setTitle] = useState("");
  const [showInput, setShowInput] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newTask = { id: Date.now().toString(), title, completed: false };
    addTask(newTask);
    setTitle("");
  };
  const handleShowInput = () =>{
    setShowInput(!showInput)
  }
  return (
    <div className="relative  min-h-[450px]">
    <div className="py-5 min-h-[350px] max-h-[350px] overflow-y-auto mb-4">
      {tasks.map((task, index) => {
        return (
          <div
            className="w-[382px] shadow-xl rounded-md m-auto flex justify-between p-3 my-5"
            key={index}
          >
            <div className="mt-2" onClick={() => toggleTaskCompletion(task.id)}>
              <Image
                src={task.completed ? "/checked.png":"/unchecked.png"}
                alt="unchecked"
                width={32}
                height={32}
              />
            </div>
            <p className="font-[500] text-[16px] text-[#071D55] mt-3">
              {task.title}
            </p>
            <button className="border border-[#071D55] rounded-sm text-[#071D55] font-[500] text-[16px] p-3" onClick={() => setCurrentTask(task)}>
              Edit
            </button>
          </div>
        );
      })}

      
      
    </div>
    <div className="mt-2 absolute bottom-2 right-2 ">
      <form onSubmit={handleSubmit} className={`mb-2 ${showInput ? "block":"hidden"}`}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
          className='w-[250px] h-[69px] mr-3 rounded-md text-[#0D2972] mt-3 border-2 border-[#CBCBCB]'
        />
        <button type="submit" className='w-[100px] h-[61px] bg-[#3556AB] rounded-md border border-[#0D2972]'>Add Task</button>
      </form>
        <Image src={"/add.png"} alt="add button" width={60} height={61} onClick={handleShowInput}/>

       
      </div>
    </div>
  );
}

export default TaskList;
