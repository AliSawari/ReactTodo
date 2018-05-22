import React,{Component} from 'react';

class AddTodo extends Component {
  constructor(props){
    super(props);
    this.add = this.add.bind(this);
  }

  add(e){
    e.preventDefault();
    var todoText = this.refs.todoText.value;
    if(todoText.length > 1) {
      this.refs.todoText.value = '';
      this.props.add(todoText);
      this.refs.todoText.placeholder = 'Your Todo Here...';
      this.refs.todoText.style.borderColor = '#1b86e9';
    } else {
      this.refs.todoText.placeholder = 'Enter Valid Data!';
      this.refs.todoText.style.borderColor = 'red';
      this.refs.todoText.focus();
    }
  }

  render(){
    return (
    <form onSubmit={this.add}>
      <input style={{fontSize:'18px'}} type="text" ref="todoText"
        className="form-control center-block" placeholder="Your Todo Here..."/>
      <button className="btn btn-lg btn-success center-block"
        style={{marginTop:'20px'}}>Add Todo</button>
    </form>
    );
  }
}

export default AddTodo;
