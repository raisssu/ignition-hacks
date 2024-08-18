import React, { Dispatch, SetStateAction } from 'react'
import { Task } from "./taskItem"
import Item from "./Item";

interface Props{
    tasks: Task[];
    setTasks: Dispatch<SetStateAction<Task[]>>;
}

const Todolist:React.FC<Props> = ({tasks, setTasks}: Props) => {
  return (
    <div className="">
        {
            tasks.map(task => (
                // <li className="flex justify-evenly w-9/10 flex-wrap">{task.time}</li>
                <div key={task.id}>
                    <Item task={task} key={task.id} tasks={tasks} setTasks={setTasks} />
                </div>
            )
        )
        }
    </div>
  )
}

export default Todolist