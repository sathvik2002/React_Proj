//import React from "react" not needed anymore;
import { useState } from "react";
import Headers  from "./components/Headers";
import Tasks from "./components/Tasks";


function App() {
  const [tasks,setTasks] = useState(
    [ {
        id:1,
        text:'football',
        day: 'feb 5th at 5:00pm',
        remainder: true,
    },
    {
        id:2,
        text:'code',
        day: 'feb 5th at 3:00pm',
        remainder: true,
    },
    {
        id:3,
        text:'eat',
        day: 'feb 5th at 2:00pm',
        remainder: true,
    },
    {
        id:4,
        text:'sleep',
        day: 'feb 5th at 10:00pm',
        remainder: true,
    }]
);

//delete task
const deleteTask = (id) =>{
  setTasks(tasks.filter((task)=>task.id !==id))
}
  
  return (
    <div className="container">
      <Headers/>
      {tasks.length > 0 ?<Tasks tasks={tasks} onDelete={deleteTask}/>:'nothing here'}
    </div>
  );
}

export default App;
