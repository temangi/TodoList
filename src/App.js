//Nurbolot Bazarbaev - TodoList ✔
import "./App.css";
import { useEffect, useState } from "react";
import Header from "./components/header/header";
import Todoitem from "./components/todoItem/TodoItem/Todoitem";
import CreateTodo from "./components/CreateTodo/CreateTodo";

function App() {

  const localTodo = JSON.parse(localStorage.getItem('array') || [])
  const [todos, setTodos] = useState(localTodo)
  const [index,setIndex] = useState(true)
  

  useEffect(() => {
    setTimeout(() => setIndex(false),2000)
  },[])

  useEffect(() => {
    localStorage.setItem('array',JSON.stringify(todos))
  },[todos])

  
  
  const addTodo = (str) => {
    setTodos([...todos, { text: str, status: false, id: Date.now() }])
  }
  const ChangeStatus = (id) => {
    const newArr = todos.map((item) => {
      if (item.id === id) {
        return { ...item, status: !item.status }
      }
      return item
    });

    setTodos(newArr)
  }

  const deleteStatus = (id) => {
    const newArray = todos.filter((elem) => elem.id !== id)
    setTodos(newArray)
  }

  const editTodo = (newText, id) => {
    const newArr = todos.map((item) => {

      if (item.id === id) {
        return { ...item, text: newText }
      }
      return item
    })
    setTodos(newArr)
  }

  const res = todos.filter((el) => el.status === true)

  const newTodos = todos.map((elem) => (
    <Todoitem
      ChangeStatus={ChangeStatus}
      deleteStatus={deleteStatus}
      title={elem.text}
      status={elem.status}
      onEdit={editTodo}
      key = {elem.id}
      id={elem.id} />));

  if (index) {
    return <div id="Preloader">
      <img src="spinner2.gif" alt="" />
    </div>
  }

  return (
    <div className="App">
      <Header todoLen={newTodos.length} counter={res.length} />
      <CreateTodo onAddTodo={addTodo} todosLen={todos.length} />
      <div className="todo-list">{newTodos.length ? newTodos : <h2>Please add todo</h2>}</div>
    </div>
  );
}

export default App;