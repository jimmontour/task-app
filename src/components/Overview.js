import React from 'react'
import uniqid from 'uniqid'

export default function Overview(props) {
   const { tasks } = props;

   return (
      <ul>
         {tasks.map( (task) => {
            return <li key={uniqid()}>{task}</li>
         })}
      </ul>
   )
}
