"use client";
import React,{useState} from "react";
import AddTodo from "./components/AddTodo"
import TodoList from "./components/TodoList"
import './globals.css';

export default function Home() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };
  return (
    <main className="flex min-h-screen flex-col items-center  p-24">
    
      <h1 className="text-blue-500 text-4xl font-medium pb-2">Todo <span className="text-purple-300">app</span></h1>
      <AddTodo addTodo={addTodo}/>
      <TodoList todos={todos} setTodos={setTodos} />

    </main>
  );
}
