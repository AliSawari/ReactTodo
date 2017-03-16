import React,{Component} from 'react';

class AddTodo extends Component {
  constructor(props){
    super(props)
  }

  add(e){
    e.preventDefault();
    var todoText = this.refs.todoText.value;
    if(todoText.length > 1) {
      this.refs.todoText.value = '';
      this.props.add(todoText);
      this.refs.todoText.placeholder = 'Your Todo Here...'
    } else {
      this.refs.todoText.placeholder = 'Enter Valid Data!';
      this.refs.todoText.focus();
    }
  }

  render(){
    return (
    <form onSubmit={this.add.bind(this)}>
      <input type="text" ref="todoText"
        className="form-control center-block" placeholder="Your Todo Here..."/>
      <button className="btn btn-lg btn-success center-block"
        style={{marginTop:'20px'}}>Add Todo</button>
    </form>
    );
  }
}

export default AddTodo;
