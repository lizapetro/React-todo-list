import React from 'react';

function TodoItem(props){
	return (
		<div className='todo-item'>
			<input onChange={()=>props.change(props.doing.id)} type="checkbox" checked={props.doing.completed}/>
			{props.doing.completed ? <p className='done'>{props.doing.text}</p> : <p>{props.doing.text}</p>}
      		
		</div>
	)
}

export default TodoItem;