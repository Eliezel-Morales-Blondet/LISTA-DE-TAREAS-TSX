import type { ChangeEvent } from 'react';

export interface Props{
    title?: string
}

export interface Task{
    id?: number;
    title: string;
    description: string;
    completed?: boolean
}

export interface AddANewTaskProps {
    addANewTask: (task: Task) => void
}

export interface TaskListProps{
    tasks: Task[];
    deleteATask: (id: number) => void;
}

export type TaskCardProps = {
    task: Task
    deleteATask: (id: number) => void;
}

export type HandleInputChange = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;