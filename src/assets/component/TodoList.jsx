import TodoItem from "./TodoItem"

function TodoList({todos, onDelete}) {
    
    return(
        <div>
            {todos.length > 0 ? todos.map ((todo)=>{
                return <TodoItem text={todo.text} key={todo.id} id={todo.id} onDelete={onDelete} />
                }
            ) : <p className='empty-state'>📝 No tasks yet. Add one to get started!</p>}
        </div>
    )
}
export default TodoList;