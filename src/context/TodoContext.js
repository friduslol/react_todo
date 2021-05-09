import { createContext, useState } from "react";
export const TodoContext = createContext();

export function TodoProvider (props){
    const [todos, setTodos] = useState([
        {
            todo: "Städa",
            auther: "Anders",
            date: "2021-01-25 14:30:47",
        },
        {
            todo: "Spela",
            auther: "Anna",
            date: "2021-01-19 02:37:15",
        },
        {
            todo: "Shoppa",
            auther: "Åke",
            date: "2021-01-13 09:35:23",
        },
        {
            todo: "Diska",
            auther: "Marianne",
            date: "2021-01-07 21:41:58",
        }
    ]);

const addTodo = (newTodo) => setTodos([newTodo, ...todos]);

const removeTodo = (todo) => {
  setTodos(todos.filter((t) => t!== todo));

}

const moveDown = (todoItem) => {
    // Vi tar reda på indexpositionen först för todon
    let index = todos.indexOf(todoItem);

    // Vi gör sen en check om todon redan ligger längst ner.
    if (index === todos.length - 1) {
      console.log("Du kan inte flytta ner den sista produkten.");
      return;
    }

    let tempTodos = [...todos]

    let temp = tempTodos[index];
    tempTodos[index] = tempTodos[index + 1];
    tempTodos[index + 1] = temp;

    setTodos(tempTodos);
  }

  const moveUp = (todoItem) => {
    // Vi tar reda på indexpositionen först för todon
    let index = todos.indexOf(todoItem);

    // Vi gör sen en check om todon redan ligger längst ner.
    if (index === 0 ) {
      console.log("Du kan inte flytta upp den första todon.");
      return;
    }

    let tempTodos = [...todos]

    let temp = tempTodos[index];
    tempTodos[index] = tempTodos[index - 1];
    tempTodos[index - 1] = temp;

    setTodos(tempTodos);
  }

const values = {
    todos,
    addTodo,
    removeTodo,
    moveDown,
    moveUp
}

return (
    <TodoContext.Provider value={values}>
        {props.children}
    </TodoContext.Provider>
)
}

export default TodoProvider;