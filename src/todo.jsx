import { useState } from "react"
import { v4 as uuidv4 } from 'uuid';

export default function Todo() {

    let [todo, setTodo] = useState([{ task: "sample-task", id: uuidv4(), isdone: false }])
    let [newtodo, setNewTodo] = useState("")

    let addnewtask = () => {
        setTodo((prevtodo) => {
            return [...prevtodo, { task: newtodo, id: uuidv4(), isdone: false }]
        })
        setNewTodo("")
    }
    let updatetodovalue = (e) => {
        setNewTodo(e.target.value)
    }

    let deletetodo = (id) => {
        setTodo((prevtodo) => todo.filter((prevtodo) => prevtodo.id !== id))
    }

    let uppercaseall = () => {
        setTodo((prevtodo) => {
            return prevtodo.map((todo) => {
                return { ...todo, task: todo.task.toUpperCase() }

            })
        }
        )
    }

    return (
        <div>

            <input placeholder="Enter your task" value={newtodo} onChange={updatetodovalue} type="text" />
            <br />
            <button onClick={addnewtask}>Add a Task</button>
            <br /><br />

            <p>Tasks Todo</p>
            <ul>
                {
                    todo.map((todo) => (
                        <li key={todo.id}>
                            <span>
                                {todo.task}</span>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <button onClick={() => deletetodo(todo.id)}>Delete</button>
                        </li>
                    ))}
            </ul>
            <button onClick={uppercaseall}>Uppercase</button>
        </div >
    )
}   