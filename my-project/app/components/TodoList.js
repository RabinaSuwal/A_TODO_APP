import CheckboxList from './CheckboxList';

export default function TodoList({todos, setTodos}) {
  const handleDelete = (todoToDelete) =>{
    const updatedTodos = todos.filter(todo => todo !== todoToDelete);
    setTodos(updatedTodos);
  }

  return (
    <div> 
      
      <div className=" w-full max-w-md mt-4 ">
        <ul>
          {todos.map((todo, index) => (
            <CheckboxList key={index} todo={todo} onDelete={handleDelete}/>
          ))}
        </ul>
        {/* <TodoItems todos={todos}/> */}
      </div>
   
    </div>
  )
}
