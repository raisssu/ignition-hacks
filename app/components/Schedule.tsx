import React from 'react'
import { Task } from "./taskItem"



interface Props {
    tasks:Task[]
}


const schedule:React.FC<Props> = ({tasks}:Props) => {
    
  return (
    
    tasks.map((task,index) => (
        
        <div key={task.id} className="flex justify-center py-2">
            {task.task} @ {index+8}:00

        </div>
    ))
  )
}

export default schedule