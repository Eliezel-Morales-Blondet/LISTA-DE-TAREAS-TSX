import { useState } from 'react'
import { Props, Task } from './interfaces'
import TaskList from './taskList';
import TaskForm from './taskForm';

function Appfazt(props: Props) {
    const [tasks, setTasks] = useState<Task[]>([{
        id: 1,
        title: "Learn React",
        description: "Learn React",
        completed: false
    }]);

    const getCurrentTimestamp = (): number => new Date().getTime();

    const addANewTask = (task: Task) => setTasks([...tasks, {...task, id: getCurrentTimestamp(), completed: false}]);

    const deleteTask = (id: number) =>setTasks(tasks.filter(task => task.id !== id));
    return (
        //Instalar Bootswatch
        <div className="bg-dark text-white" style={{height: '100vh'}}>
            <nav className='navbar navbar-dar bg-primary'>
                <div className='.container'>
                    <a href="/" className='navbar-brand'>
                    <img src="./public/vite.svg" alt="LOGO" style={{width: '4rem'}} />
                    {props.title && <h1>{props.title}</h1>}
                    </a>
                </div>
            </nav>
            <main className="container p-4">
                <div className="row">
                    <div className="col-md-4">
                        <TaskForm addANewTask={addANewTask}/>
                    </div>
                    <div className="col-md-8">
                        <TaskList tasks={tasks} deleteATask={deleteTask} />
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Appfazt      