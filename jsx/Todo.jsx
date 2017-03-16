import React,{Component} from 'react';

class Todo extends Component {
  constructor(props){
    super(props);
  }
  render(){
    var {text,id} = this.props;
    return (
      <h3 className="well text-center">
      {id}. {text}
    </h3>
    );
  }
}

export default Todo;
