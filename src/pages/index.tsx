
import EditTask from "@/components/EditTask";
import SideBar from "@/components/SideBar";
import { useState } from "react";

export interface Task {
  id: string;
  title: string;
  completed: boolean;
}

export default function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [currentTask, setCurrentTask] = useState<Task | null>(null);

  const addTask = (task: Task) => setTasks([...tasks, task]);
  const updateTask = (updatedTask: Task) => setTasks(tasks.map(task => task.id === updatedTask.id ? updatedTask : task));
  const deleteTask = (id: string) => setTasks(tasks.filter(task => task.id !== id));
  const toggleTaskCompletion = (id: string) => setTasks(tasks.map(task => task.id === id ? { ...task, completed: !task.completed } : task));
  const clearCurrentTask = () => setCurrentTask(null);

  return (
   <div className="flex justify-center">
    <SideBar addTask={addTask} toggleTaskCompletion={toggleTaskCompletion} tasks={tasks} setCurrentTask={setCurrentTask}/>
    <EditTask currentTask={currentTask} updateTask={updateTask} deleteTask={deleteTask} clearCurrentTask={clearCurrentTask}/>
   </div>
  );
}
