import { BrowserRouter, Route } from "react-router-dom";
import TodoContext from "./context/TodoContext";

import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Todo from "./pages/Todo";



function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
        <TodoContext>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/todo">
          <Todo />
        </Route>
        </TodoContext>
      </BrowserRouter>

    </div>
  );
}

export default App;
