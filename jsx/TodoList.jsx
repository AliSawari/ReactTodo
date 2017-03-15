import React,{Component} from 'react';
import Todo from './Todo';
class TodoList extends Component {
  constructor(props){
    super(props);
  }

  render(){
    var renderTodo = () => {
      var {todos} = this.props;
      return todos.map((todo)=>{
        return <Todo key={todo.id} {...todo} />;
      });
    }
    return <div>
      {renderTodo()}
    </div>
  }
}

export default TodoList;
