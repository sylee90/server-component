import { deleteTodoAction, updateTodoAction } from '@/app/api/_action';
import { TodoClass } from '@/models/Todo';
import Checkbox from './Checkbox.client';
import { useState } from 'react';
import TextField from './TextField.client';
import Link from 'next/link';

interface TodoItemProps {
    todo: TodoClass;
}

function TodoItem({ todo }: TodoItemProps) {
    const updateTodoContent = async(data: FormData) => {
        "use server";
    
        const content = data.get("content");
        if (!content || typeof content !== "string") {
            return;
        }
    
        await updateTodoAction(todo.id, { content: content }, "/")
    }
    const updateTodoTaskDone = async(taskDone: boolean) => {
        "use server";

        await updateTodoAction(todo.id, { task_done: taskDone}, "/")
    }
    return (
        <div className="flex items-center space-x-2 mb-2">
            {/* <TextField todo={todo} onSubmit={updateTodoContent} /> */}
            <Link className={`flex flex-1 ${todo.task_done ? 'line-through' : ''}`} href={`/todos/${todo.id}`}>{todo.content}</Link>
            <form className="flex items-center">
                <Checkbox taskDone={todo.task_done} onSubmit={updateTodoTaskDone} />
                <button 
                    className="px-2 py-1 ml-2 text-white rounded bg-red-500"
                    formAction={async () => {
                        "use server";
                        await deleteTodoAction({
                            id: todo.id,
                            path: "/"
                        });
                    }}
                >
                    Delete
                </button>
            </form>
        </div>
    );
}

export default TodoItem;
