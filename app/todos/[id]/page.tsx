import { getTodo } from "@/lib/todo-db";

export interface HomeProps {
  params: {
    id: string;
  }
}
export default async function Home({ params: { id }}: HomeProps) {
  const { todo } = await getTodo(id);
  return (
    <div className="container mx-auto max-w-md p-4">
      {todo?.content}
    </div>
  )
}