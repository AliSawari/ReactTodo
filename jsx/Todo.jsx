import React,{Component} from 'react';

class Todo extends Component {
  constructor(props){
    super(props);
  }
  render(){
    var {text,id} = this.props;
    return (
      <div className="container">
      <h3 className="well text-center">
      {id}. {text}
    </h3>
    </div>
    );
  }
}

export default Todo;
