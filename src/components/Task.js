import {FaTimes} from 'react-icons/fa';

const Task = ({task, dlt}) => {
    return (
        <div className="task">
            <h3>
                {task.text} <FaTimes style={{color:'red'}}  onClick={()=>dlt(task.id)}/>
            </h3>
             <p>{task.day}</p>
        </div>
    )
}

export default Task
