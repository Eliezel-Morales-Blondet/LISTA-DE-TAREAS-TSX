import {AiOutlinePlus} from 'react-icons/ai'
import { FormEvent, useState, useRef } from 'react'
import { AddANewTaskProps, HandleInputChange } from './interfaces';

const initialState = {
    title: "",
    description: "",
}

export default function TaskForm({addANewTask}: AddANewTaskProps) {
    const [task, setTask] = useState(initialState);
    const inputTitle = useRef<HTMLInputElement>(null);

    const handleInputChange = ({ target: { name, value } }: HandleInputChange) => {
        setTask({ ...task, [name]: value });
    }

    const handleNewTask = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        addANewTask(task);
        setTask(initialState);
        inputTitle.current?.focus();
    }
    return (
        <div className='card card-body bg-secondary text-dark'>
            <h1>Add Task</h1>
            <form onSubmit={handleNewTask}>
                <input type="text" placeholder='Write a title' name='title' className='form-control mb-3 rounded-0 shadow-none border-0' onChange={handleInputChange} value={task.title} autoFocus ref={inputTitle}
                />

                <textarea name="description" rows={2} placeholder='Write a Description' className='form-control mb-3 shadow-none border-0' onChange={handleInputChange} value={task.description}></textarea>

                <button className='btn btn-primary'>
                    Save
                    <AiOutlinePlus/>
                </button>
            </form>
        </div>
    )
}
