import { useContext } from "react";
import { TodoContext } from "../context/TodoContext";

function Home (){
const {todos, removeTodo, moveDown, moveUp } = useContext(TodoContext);

    return(
    <div className="home">
        {todos.map((todo, i) => (
            <div className="todo card" key={i}>
                <p>{todo.auther}</p>
                <p>{todo.todo}</p>
                <p>{todo.date}</p>
                <button className="remove" onClick={() => removeTodo(todo)}>Delete</button>
                <button className="down" onClick={() => moveDown(todo, i)}>Down</button>
                <button className="up" onClick={() => moveUp(todo, i)}>Up</button>
            </div>
        ))}
    </div>
    )
}

export default Home;