import { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { TodoContext } from "../context/TodoContext";

function Todo(){
    const {addTodo} = useContext(TodoContext);


    const history = useHistory();

    const [auther, setAuther] = useState("");
    const [todo, setTodo] = useState("");


    const handleSubmit = (e) => {
        e.preventDefault();

        let newTodo = {
            auther,
            todo,
            date: new Date().toLocaleString()
        }

        addTodo(newTodo);
        history.push("/");
    }

    const handleAutherChange = (e) => {
        setAuther(e.target.value);
    };

    const handleTodoChange = (e) => {
        setTodo(e.target.value);
    };




    return(
        <div className="flex">
        <div className="form">
            <form onSubmit={handleSubmit}>
            <h1 className="header">Auther</h1>
            <input onChange={handleAutherChange} typ="text" placeholder=""></input>
            <h1 className="header">Todo</h1>
            <input onChange={handleTodoChange} typ="text" placeholder=""></input>
            <div>
                <button className="add-button">Add</button>
            </div>
            </form>
        </div>
        </div>
    )
}

export default Todo;