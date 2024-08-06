import './Tasks.css'
import { useState } from "react"

export const Tasks = () => {
    const [tasks, setTasks] = useState([
        {id: 1, name: "Write code", completed: true},
        {id: 2, name: "Test code", completed: false},
        {id: 3, name: "Push code", completed: true},
        {id: 4, name: "Deploy code", completed: true},
    ])
    const [toggle, setToggle] = useState(false);

    const deleteTask = (id) => {
        setTasks(tasks.filter((task) => task.id != id))
    }

    return (
        <div>
            <h1>Tasks</h1>
            <button className='trigger' onClick={() => setToggle(!toggle)}>{toggle ? "Hide Tasks" : "Show Tasks"}</button>
            <ul>
                {
                    toggle && tasks.map((task) => (
                        <li key={task.id} className={task.completed ? "completed" : "incomplete"}>
                            <span>{task.id} - {task.name}</span>
                            <button className="delete" onClick={() => deleteTask(task.id)}>Delete</button>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}
