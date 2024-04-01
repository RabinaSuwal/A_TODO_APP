"use client";
import Image from "next/image";
import TodoForm from "./components/TodoForm";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center  p-24">
      <h1>Todo app</h1>
      <TodoForm/>
    </main>
  );
}
