"use client";

import { updateTodoAction } from "@/app/api/_action";
import { updateTodo } from "@/lib/todo-db";
import { TodoClass } from "@/models/Todo";
import { useCallback, useState } from "react";

export interface TextFieldProps {
  todo: TodoClass;
  onSubmit: (data: FormData) => Promise<void>;
}
export default function TextField({ todo, onSubmit }: TextFieldProps) {
  const [isEdit, setIsEdit] = useState(false);
  const [value, setValue] = useState(todo.content);
  
  const handleSubmit = (data: FormData) => {
    onSubmit(data);
    setIsEdit(false);
  }

  // const handleSubmit = useCallback(async(data: FormData) => {
  //   const content = data.get("content");
  //   if (!content || typeof content !== "string") {
  //       return;
  //   }
  //   await updateTodoAction(todo.id, { content: content }, "/").then((res) => console.log(res))
  //   setIsEdit(false)
  // }, [todo.id])

  return (
    <form action={handleSubmit} className="flex flex-1">
      {isEdit ? (
        <div className="flex flex-1 space-x-2">
          <input
            type="text"
            name="content"
            className="border rounded px-2 py-1 flex-1"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onBlur={() => setIsEdit(false)}
            autoFocus
          />
          <button className="px-4 py-1 text-white rounded bg-green-500">Edit</button>
        </div>
      ) : (
          <button 
              className={`px-2 py-1 flex-1 text-left ${todo.task_done ? "line-through" : ""}`}
              onClick={() => setIsEdit(true)}
          >
              {todo.content}
          </button>
      )}
    </form>
  )
}