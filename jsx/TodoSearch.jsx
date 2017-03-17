import React,{Component} from 'react';

class TodoSearch extends Component {
  constructor(props){
    super(props);
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
            placeholder="Search Todos" onChange={this.change.bind(this)}/>
        </div>
        <div>
          <label>
            <input type="checkbox" ref="check" onChange={this.change.bind(this)}/>
            Show Completed Todos
          </label>
        </div>
      </div>
    );
  }
}

export default TodoSearch;
