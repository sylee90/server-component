import NewTodo from "@/app/todos/CreateTodo.client";
import { createTodoAction } from "../api/_action";
import TodoList from "../todos/TodoList.server";

export default async function Home() {

  const newTodo = async(data: FormData) => {
    "use server";

    const content = data.get("content");
    if (!content || typeof content !== "string") {
        return;
    }

    await createTodoAction({ content, path: "/" })
  }

  return (
    <div className="container mx-auto max-w-md p-4">
      <NewTodo onSubmit={newTodo} />
      <h1 className="text-2xl font-bold mb-4">Todo List</h1>
      <TodoList />
    </div>
  )
}