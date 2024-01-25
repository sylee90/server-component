"use server";
 
import { createTodo, deleteTodo, updateTodo } from "@/lib/todo-db";
import { revalidatePath } from "next/cache";
 
export async function createTodoAction({
  content,
  path,
}: {
  content: string;
  path: string;
}) {
  await createTodo(content);
  revalidatePath(path);
}
 
export async function updateTodoAction(
  id: string,
  update: { content?: string; task_done?: boolean },
  path: string
) {
  await updateTodo(id, update);
  revalidatePath(path);
}
 
export async function deleteTodoAction({
  id,
  path,
}: {
  id: string;
  path: string;
}) {
  await deleteTodo(id);
  revalidatePath(path);
}
 