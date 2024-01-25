"use client";

import { updateTodoAction } from "@/app/api/_action";
import { TodoClass } from "@/models/Todo";
import { useCallback } from "react";

export interface CheckboxProps {
  taskDone: boolean;
  onSubmit: (taskDone: boolean) => Promise<void>
}
export default function Checkbox({ taskDone, onSubmit }: CheckboxProps) {
  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const checked = e.target.checked;
    onSubmit(checked)
  }, [onSubmit]);
  
  return (
    <input 
      type="checkbox"
      checked={taskDone}
      name="task_done"
      onChange={handleChange}
      className="h-6 w-6 border-gray-300 disabled:bg-gray-300 disabled:border-gray-300 disabled:cursor-not-allowed"
  />
  )
}