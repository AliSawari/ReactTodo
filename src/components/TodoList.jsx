import React,{Component} from 'react';
import Todo from './Todo';
class TodoList extends Component {
  constructor(props){
    super(props);
  }

  renderTodo(){
    var {todos,toggle,del} = this.props;
    return todos.map((todo)=>{
      return <Todo key={todo.id} {...todo} toggle={toggle}/>;
    });
  }

  render(){
    return <div>
      {this.renderTodo()}
    </div>
  }
}

export default TodoList;
