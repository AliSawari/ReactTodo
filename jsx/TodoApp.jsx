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
    var {todos} = this.state;
    if(todos.length > 0) {
    var x = todos.length - 1;
    var count = todos[x].id;
  } else {
    var count = 0;
  }
    count++;
  this.setState({
    todos: [
      ...this.state.todos,
      {
        id: count,
        text: todoText
      }
    ]
  });
  }

  seacrh(searchText,check){
    this.setState({
      searchText:searchText,
      showCompl:check
    });
  }

  mainStyle(){
      return {
        border:'2px solid #0fb5dd',
        borderRadius:'15px',
        margin:'2rem auto',
        boxShadow:'0 0 2rem #0fb5dd'
      }
  }

  render(){
    var {todos} = this.state;
    return (
      <div className="container jumbotron" style={this.mainStyle()}>
        <TodoSearch seacrh={this.seacrh.bind(this)}/>
      <TodoList todos={todos}/>
      <AddTodo add={this.AddTodo.bind(this)}/>
      </div>
    );
  }
}

export default TodoApp;
