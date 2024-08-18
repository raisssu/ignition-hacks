"use client";
import Image from "next/image";

import NavBar  from "./components/header"
import { useState } from "react";
import { Task } from "./components/taskItem";
import Todolist from "./components/Todolist";
import Schedule from "./components/Schedule";

let navBar = NavBar();

export default function Home() {
  const [tasks, setTasks] = useState<Task[]>([])

  const addItem = (e: React.FormEvent) => {
    e.preventDefault();
    setTasks([...tasks, {id:Date.now(), task: "Enter a task",time:1}])
  };

  return (
    <main className="flex flex-col items-center py-2 text-white">
      
      {navBar}

      <div className="flex w-screen grid grid-cols-2 justify-center">
        
        <div >
          <h1 className="flex font-bold text-xl w-full justify-center">Tasks</h1>
          <div>
            <form onSubmit={addItem} className="px-5">
              <button className="flex w-full justify-center p-2 my-2 bg-white/10 rounded-lg border-dashed border-2 border-slate-500">+ Add</button>
              <Todolist tasks={tasks} setTasks={setTasks}/>
            </form>

          
          </div>
        </div>


        <div>
          <h1 className="flex font-bold text-xl w-full justify-center pb-4">Daily Schedule</h1>
          <Schedule tasks={tasks} />

        </div>
      
      </div>

    </main>
  );
}
