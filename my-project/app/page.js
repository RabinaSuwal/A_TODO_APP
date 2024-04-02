"use client";


import React,{useState} from "react";
import AddTodo from "./components/AddTodo"
import TodoList from "./components/TodoList"


export default function Home() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };
  return (
    <main className="flex min-h-screen flex-col items-center  p-24">
      <h1>Todo app</h1>

      <AddTodo addTodo={addTodo}/>
      <TodoList todos={todos}   />

    </main>
  );
}
