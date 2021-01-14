import React, { Component } from 'react'
import Todo from './Todo'

export default class TodoList extends Component {
   constructor(props) {
      super(props)
   }

   render() {

      const todos = [
         { name: 'Do homework', complete: false },
         { name: 'Do dishes', complete: false },
         { name: 'Go to gym', complete: false }
      ]

      return (
         <div>
            {todos.map( todo => {
              return <Todo name={todo.name} />
            })}

         </div>
      )
   }
}
