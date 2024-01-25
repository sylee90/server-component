"use client"

import { useCallback } from 'react';
import { createTodoAction } from '@/app/api/_action';

interface NewTodoProps {
    onSubmit: (data: FormData) => Promise<void>;
}

function NewTodo({ onSubmit }: NewTodoProps) {
    return (
        <form action={onSubmit} key={Math.random()} className="flex items-center space-x-2 mb-4">
            <input
                type="text" 
                name="content" 
                className="border rounded px-2 py-1 flex-1" 
            />
            <button className="px-4 py-1 text-white rounded bg-green-500">Add</button>
        </form>
    );
}

export default NewTodo;
