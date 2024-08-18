"use client";
import { FormEvent } from "react";
import React, { Dispatch, SetStateAction, useState } from 'react'
import { Task } from "./taskItem"
import { MdDelete } from "react-icons/md"
import { TbAxe, TbClockEdit } from "react-icons/tb"
import { FiEdit } from "react-icons/fi"

type Props = {
    task: Task
    tasks: Task[]
    setTasks: Dispatch<SetStateAction<Task[]>>;
}

const Item = ({task, tasks, setTasks}: Props) => {

    const [editTask, setEditTask] = useState<string>(task.task)
    const [edit, setEdit] = useState<boolean>(false)
    const [editTime, setEditTime] = useState<number>(task.time)
    const [editT, setEditT] = useState<boolean>(false)

    const handleDelete = (id:number) => {
        setTasks(tasks.filter((task)=>task.id !== id))
    }
    const handleEdit = (e: React.FormEvent, id:number) => {
        e.preventDefault()
        
        setTasks(tasks.map((task)=> (
            task.id === id?{...task, task:editTask}:task
        )))
        
        setEdit(false)
    };
    
    
    console.log(event?.cancelable)
  return (
    <form onSubmitCapture={((e)=>handleEdit(e, task.id))} className="flex rounded-md mt-2 p-3 bg-taskcolor">

            {edit ? (
                    <input className="text-black"  value={editTask} onChange={(e)=> setEditTask(e.target.value)}/>
                ):(
                    <span className="flex flex-1 p-2 border-none text-l">{task.task}</span>
                )}

            
            <span className="p-2">{task.time}</span>
            
            <span className="ml-2 text-xl cursor-pointer py-2.5" onClick={() => {
                if(!edit){
                    setEdit(!edit)
                }}}>
                <FiEdit />
            </span>    
            <span className="ml-2 text-xl cursor-pointer py-2.5" onClick={() => {
                if(!editT){
                    setEditT(!editT)
                }}}>
                <TbClockEdit />
            </span>    
            <span className="ml-2 text-xl cursor-pointer py-2.5" onClick={()=>handleDelete(task.id)}>
                <MdDelete />
            </span>
    </form>
  )
}

export default Item


