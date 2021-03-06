import React,{Component} from 'react';

class Todo extends Component {
  constructor(props){
    super(props);
    this.state = {
      hover:false,
      click:0
    }
    this.mainStyle = this.mainStyle.bind(this);
    this.toggle = this.toggle.bind(this);
    this.hoverIn = this.hoverIn.bind(this);
    this.hoverOut = this.hoverOut.bind(this);
  }

  componentDidMount(){
    var {done} = this.props;
    if(done){
      this.setState({click:1});
    }
  }

  hoverIn(){
    this.setState({
      hover:true
    });
  }

  hoverOut(){
    this.setState({
      hover:false
    });
  }

  toggle(){
    var {id,toggle,text,done} = this.props;
    var {click} = this.state;
    var nClick = ++click;
    this.setState({
      click:nClick
    });
    if(nClick === 2){
      this.setState({click:0});
    }
    toggle(id);
  }

  mainStyle(){
    var {hover,click} = this.state;
    if(hover) {
      return {
        backgroundColor:'#dbbe40',
        cursor:'pointer',
        borderRadius: '15px'
      }
    } if(click === 1){
      return {
        border:'2px solid #49eb54',
        backgroundColor:'#cdcdcd',
        color:'#a0a0a0',
        textDecoration: 'line-through',
        borderRadius: '15px',
        cursor:'pointer',
      }
    } else {
    return {
      backgroundColor:'#e3cf78',
      cursor:'pointer',
      borderRadius: '15px'
    }
  }
  }

  buttonStyle(){
    return {
      border:'none',
      display:'block',
      margin:'0 0 0 85%',
    }
  }


  render(){
    var {text,id,done} = this.props;
    return (
      <div>
      <h3 onMouseEnter={this.hoverIn} onMouseLeave={this.hoverOut} onClick={this.toggle}
        className="well text-center" style={this.mainStyle()}>
        <input type="checkbox" checked={done} onChange={()=>{return 0;}}/>
      {id}. {text}
      <button className="btn-sm btn-danger"
        style={this.buttonStyle()}>Delete</button>
    </h3>
  </div>

    );
  }
}

export default Todo;
