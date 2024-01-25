import { getTodos } from "@/lib/todo-db";
import TodoItem from "./TodoItem.server";

export default async function TodoList() {
  const { todos, results } = await getTodos();
  return (
    <>
      {
        results === 0 ? (
          <p className="text-center">No Todos Found</p>
        ) : (
          todos?.map((todo) => (
            <TodoItem key={todo.id} todo={todo} />
          ))
        )
      }
    </>
  )
}