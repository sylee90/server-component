import connectDb from "@/lib/connectDb";
import { createTodo, getTodos } from "@/lib/todo-db";
import { createErrorResponse } from "@/lib/utils";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    await connectDb();

    // const { todos, results, error } = await getTodos();

    // if (error) {
    //   throw error;
    // }

    // let json_response = {
    //   status: 'success',
    //   results,
    //   todos,
    // }
    if (req.method !== 'GET') {
      return NextResponse.json({ message: 'error'}, { status: 403 })
    }
    return NextResponse.next();
  } catch (error: any) {
    return createErrorResponse(error.message, 500)
  }
}

export async function POST(request: Request) {
  try {
    await connectDb();

    const body = await request.json();

    if (!body.content) {
      return createErrorResponse('Todo must have a content', 400);
    }

    const { todo, error } = await createTodo(body.content);

    if (error) {
      throw error;
    }

    let json_response = {
      status: 'success',
      data: {
        todo,
      }
    };
    return new NextResponse(JSON.stringify(json_response), {
      status: 201,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error: any) {
    if (error.code === 11000) {
      return createErrorResponse("Todo with content already exists", 409);
    }
    return createErrorResponse(error.message, 500)
  }
}