import React,{Component} from 'react';
import TodoList from './TodoList';
class TodoApp extends Component {
  constructor(props){
    super(props);
    this.state = {
      todos: [
        {
          id:1,
          text:"Eat Something"
        },
        {
          id:2,
          text:"Wake Up at 8 am"
        }, {
          id:3,
          text:"Call Jalil"
        }
      ]
    }
  }
  render(){
    var {todos} = this.state;
    return <TodoList todos={todos}/>
  }
}

export default TodoApp;
