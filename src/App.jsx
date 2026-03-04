
import { useState, useEffect } from 'react'
import TodoList from './assets/component/TodoList'
import './App.css'
import TodoInput from './assets/component/TodoInput'

function App() {
const [todos, setTodos] = useState(() => {
  const savedTodos = localStorage.getItem('todos')
  return savedTodos ? JSON.parse(savedTodos) : []
})

useEffect(() => {
  localStorage.setItem('todos', JSON.stringify(todos))
}, [todos])

const addTodo = (text) => {
  const newTodo = {
    id: Date.now(),
    text: text,
    completed: false
  }
  setTodos([...todos, newTodo])
}
const deleteTodo = (id) => {
  setTodos(todos.filter(todo => todo.id !== id))
}
  return (
<div className='main'>
  <div className='todo-container'>
    <div className='todo-header'>
      <h1>✨ My Tasks</h1>
      <p>{todos.length} tasks to do</p>
    </div>
    <TodoInput addTodo={addTodo} />
    <div className='todos-list'>
      <TodoList todos={todos} onDelete={deleteTodo}/>
    </div>
  </div>
</div>
  )
}

export default App
