import React,{Component} from 'react';
import Todo from './Todo';
class TodoList extends Component {
  constructor(props){
    super(props);
  }

  renderTodo(){
    var {todos} = this.props;
    return todos.map((todo)=>{
      return <Todo key={todo.id} {...todo} />;
    });
  }

  render(){
    return <div>
      {this.renderTodo()}
    </div>
  }
}

export default TodoList;
