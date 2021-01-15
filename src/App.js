import React, { Component } from "react";

class App extends Component {
   constructor() {
      super();

      this.state = {
         task:"",
         tasks:[],
      };
   }

   handleChange = (e) => {
      this.setState({
         task: e.target.value,
      });
   };

   onSubmitTasks = (e) => {
      e.preventDefault();
      this.setState({
         tasks: this.state.tasks.concat(this.state.task),
         task: "",
      })
   }

   render() {
      const { task, tasks} = this.state;

      return (
         <div>
            <form onSubmit={this.onSubmitTasks}>
               <label htmlFor="taskInput">Enter task</label>
               <input
                  onChange={this.handleChange}
                  value={this.state.task}
                  type="text"
                  id="taskInput"
               />
               <button type="submit">
                  Add Task
               </button>
            </form>
         </div>
      );
   }
}

export default App;
