import React,{Component} from 'react';
import TodoList from './TodoList';
import AddTodo from './AddTodo';
import TodoSearch from './TodoSearch';
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
        },
        {
          id:3,
          text:"Call Jalil"
        }
      ],
      showCompl:false,
      searchText:''
    }
  }

  AddTodo(todoText) {
    alert(todoText);
  }

  seacrh(searchText,check){
    this.setState({
      searchText:searchText,
      showCompl:check
    });
  }


  render(){
    var {todos} = this.state;
    return (
      <div className="container">
        <TodoSearch seacrh={this.seacrh.bind(this)}/>
      <TodoList todos={todos}/>
      <AddTodo add={this.AddTodo.bind(this)}/>
      </div>
    );
  }
}

export default TodoApp;
