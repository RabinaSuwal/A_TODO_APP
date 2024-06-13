"use client";
import { useState } from "react";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import './globals.css';

export default function Home() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };
  return (
    <main className="flex min-h-screen flex-col items-center  p-24">
    
      <h1 className="text-indigo-600 text-4xl font-medium pb-3">Todo <span className="text-pink-500">app</span></h1>
      <AddTodo addTodo={addTodo}/>
      <TodoList todos={todos} setTodos={setTodos} />

    </main>
  );
}
