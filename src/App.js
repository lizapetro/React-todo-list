import React from 'react';
import todosData from './todosData'
import TodoItem from './TodoItem';



class App extends React.Component{


  constructor(){
    super();
    this.state={
      todos:todosData
    }
    this.handleChange=this.handleChange.bind(this);
  }


  handleChange(id){
    this.setState(prevState=>{
      const saveChange=prevState.todos.map(item=>{
        if (item.id===id){
          item.completed=!item.completed;
        }
        return item
      })
      return {
        todos:saveChange
      }
    });

  }

  render(){
    const todoItems=this.state.todos.map(todo=><TodoItem key={todo.id} doing={todo} change={this.handleChange}/>);
    return (
      <div className='todo-list'>
        {todoItems}
      </div>
    );
  }
}

export default App;
