import React, { Component } from 'react'

export default class SubmitTodo extends Component {
   constructor(props) {
      super(props)
   }

   render() {
      return (
         <div>
            <label htmlFor="taskInput">Enter task</label>
            <input type="text" id="taskInput" />
            <button type="submit">Add Todo</button>
         </div>
      )
   }
}
