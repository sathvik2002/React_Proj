import Task from "./Task"
const Tasks = ({tasks, onDelete}) => {
    return(
        <>
          {tasks.map((e)=>(
              <Task key={e.id} task={e} dlt={onDelete}/>
          ))}
        </>
    )
}

export default Tasks
