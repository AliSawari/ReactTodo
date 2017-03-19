import React,{Component} from 'react';

class TodoSearch extends Component {
  constructor(props){
    super(props);
    this.change = this.change.bind(this);
  }

  change(){
    var searchText = this.refs.searchText.value;
    var check = this.refs.check.checked;
    this.props.seacrh(searchText,check);
  }

  render(){
    return (
      <div>
        <h2>Search Todos</h2>
        <div>
          <input type="search" ref="searchText" className="form-control center-block"
            placeholder="Search Todos" onChange={this.change}/>
        </div>
        <div>
          <h4>
          <label>
            <input type="checkbox" ref="check" onChange={this.change}/>
            Show Completed Todos
          </label>
        </h4>
        </div>
      </div>
    );
  }
}

export default TodoSearch;
