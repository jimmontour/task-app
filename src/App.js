import React, { Component } from "react";
import Header from './components/Header'
import SubmitTodo from './components/SubmitTodo'
import TodoList from "./components/TodoList";
class App extends Component {
   constructor(props) {
      super(props)
   }

   render() {
      return (
         <div className="container">
               <Header />
               <SubmitTodo />
               <TodoList />
         </div>
      );
   }
}

export default App;
