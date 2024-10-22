import { Task } from '@/pages';
import React, { useEffect, useState } from 'react';
interface EditTaskProps {
    currentTask: Task | null;
    updateTask: (task: Task) => void;
    deleteTask: (id: string) => void;
    clearCurrentTask: () => void;
  }

function EditTask({ currentTask, updateTask, deleteTask, clearCurrentTask }: EditTaskProps) {
    const [title, setTitle] = useState('');

    useEffect(() => {
        if (currentTask) {
          setTitle(currentTask.title);
        }
      }, [currentTask]);
  

      const handleSave = () => {
        if (currentTask) {
          updateTask({ ...currentTask, title});
          clearCurrentTask();
        }
      };
    
      if (!currentTask) return null;
    
    return (
        <div className='w-[635px] '>
            <div className='bg-[#3556AB] py-10 text-white text-center min-h-[123px] shadow-inner'>
                <p className='font-[500] text-[24px]'>Edit Task</p>

            </div>
            <div className='pl-5 pt-5'>
                <p className='font-[400] text-[16px]'>Task Name</p>
                <input type="text" className='w-[596px] h-[69px] rounded-md text-[#0D2972] mt-3 border-2 border-[#CBCBCB]' value={title} onChange={(e) => setTitle(e.target.value)}/>
                <div className='text-white px-4 absolute bottom-1'>
                    <button className='bg-[#AB3535] w-[121px] h-[61px] mr-3 rounded-md border border-[#720D0D]' onClick={() => deleteTask(currentTask.id)}>Delete</button>
                    <button className='w-[436px] h-[61px] bg-[#3556AB] rounded-md border border-[#0D2972]' onClick={handleSave}>Save</button>
                </div>
            </div>
        </div>
    );
}

export default EditTask;