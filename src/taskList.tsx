import {  TaskListProps } from './interfaces'
import TaskCard from './taskCard';

export default function taskList({tasks, deleteATask}: TaskListProps) {
    return (
        <>
        {tasks.map(task => (
            <div className="col-md-4 pb-2" key={task.id}>
                <TaskCard task={task} deleteATask={deleteATask}/>
            </div>
        ))}
        </>
    )
}
