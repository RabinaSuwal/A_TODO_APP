"use client";
//import Image from "next/image";
import React from "react";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center  p-24">
      <h1>Todo app</h1>
      <AddTodo/>
      <TodoItems/>
    </main>
  );
}
