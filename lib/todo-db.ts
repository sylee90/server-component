import { Todo } from "@/models/Todo";
import connectDb from "./connectDb";
import { stringToObjectId } from "./utils";

export async function getTodos() {
  try {
    await connectDb();

    const todos = await Todo.find({});
    const results = todos.length;

    return {
      todos: todos,
      results
    }

  } catch (error) {
    return { error }
  }
}

export async function getTodo(id: string) {
  try {
    await connectDb();

    const parseId = stringToObjectId(id);

    if (!parseId) {
      return { error: "Todo not found" }
    }

    const todo = await Todo.findById(parseId).lean().exec();
    if (todo) {
      return {
        todo,
      }
    } else {
      return { error: "Todo not found" }
    }
  } catch (error) {
    return { error }
  }
}

export async function createTodo(content: string) {
  try {
    await connectDb();

    const todo = await Todo.create({
      content,
      task_done: false,
    });
    
    return {
      todo,
    }
  } catch (error) {
    return { error }
  }
}

export async function updateTodo(
  id: string,
  { content, task_done }: { content?: string; task_done?: boolean; }
) {
  try {
    await connectDb();
 
    const parsedId = stringToObjectId(id);
 
    if (!parsedId) {
      return { error: "Todo not found" };
    }
 
    const todo = await Todo.findByIdAndUpdate(
      parsedId,
      { content, task_done },
      { new: true }
    )
      .lean()
      .exec();
 
    if (todo) {
      return {
        todo,
      };
    } else {
      return { error: "Todo not found" };
    }
  } catch (error) {
    return { error };
  }
}
 
export async function deleteTodo(id: string) {
  try {
    await connectDb();
 
    const parsedId = stringToObjectId(id);
 
    if (!parsedId) {
      return { error: "Todo not found" };
    }
 
    const todo = await Todo.findByIdAndDelete(parsedId).exec();
 
    if (todo) {
      return {};
    } else {
      return { error: "Todo not found" };
    }
  } catch (error) {
    return { error };
  }
}
 