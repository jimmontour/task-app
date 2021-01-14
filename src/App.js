import React, { Component } from "react";
import SubmitTasks from './components/SubmitTasks'
import Header from './components/Header'
import TaskList from './components/TaskList'

class App extends Component {
   render() {
      return (
         <div>
            <Header />
            <SubmitTasks />
            <TaskList />
         </div>
      )
   }
}

export default App;
