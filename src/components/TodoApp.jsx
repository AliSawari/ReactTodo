import React,{Component} from 'react';
import TodoList from './TodoList';
import AddTodo from './AddTodo';
import TodoSearch from './TodoSearch';
import TodoStorage from './TodoStorage';


class TodoApp extends Component {
  constructor(props){
    super(props);
    this.state = {
      todos: TodoStorage.getTodos(),
      showCompl:false,
      searchText:''
    }
      this.seacrh = this.seacrh.bind(this);
      this.toggle = this.toggle.bind(this);
      this.AddTodo = this.AddTodo.bind(this);
  }

  componentDidUpdate(){
    var {todos} = this.state;
    TodoStorage.save(todos);
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
        text: todoText,
        done:false
      }
    ]
  });
  }

  seacrh(searchText,check){
    this.setState({
      searchText:searchText.toLowerCase(),
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

  toggle(id) {
    var newTodos = this.state.todos.map((todo)=>{
      if(todo.id === id){
        todo.done = !todo.done;
      }
      return todo;
    });
    this.setState({
      todos: newTodos
    })
  }


  render(){
    var {todos,showCompl,searchText} = this.state;
    var filter = TodoStorage.filter(todos,showCompl,searchText);
    return (
      <div className="container jumbotron" style={this.mainStyle()}>
        <TodoSearch seacrh={this.seacrh}/>
        <TodoList todos={filter} toggle={this.toggle}/>
        <AddTodo add={this.AddTodo} />
      </div>
    );
  }
}

export default TodoApp;
