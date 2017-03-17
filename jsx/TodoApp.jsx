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
          text:"Eat Something",
          done:false
        },
        {
          id:2,
          text:"Wake Up at 8 am",
          done:true
        },
        {
          id:3,
          text:"Call Jalil",
          done:true
        }
      ],
      showCompl:false,
      searchText:''
    }
      this.seacrh = this.seacrh.bind(this);
      this.toggle = this.toggle.bind(this);
      this.AddTodo = this.AddTodo.bind(this);
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
    var {todos} = this.state;
    return (
      <div className="container jumbotron" style={this.mainStyle()}>
        <TodoSearch seacrh={this.seacrh}/>
        <TodoList todos={todos} toggle={this.toggle}/>
        <AddTodo add={this.AddTodo}/>
      </div>
    );
  }
}

export default TodoApp;
