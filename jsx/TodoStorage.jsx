const $ = require('jquery');
export default {
    save:(todos)=>{
        if($.isArray(todos)) {
            localStorage.setItem('todos',JSON.stringify(todos));
            return todos;
        }
    },
    get:()=>{
        var result = localStorage.getItem('todos');
        var todos = [];
        try {
            todos = JSON.parse(result);
        } catch(e) {
          console.log(e);
        }
        return $.isArray(todos) ? todos : [];
    },
    filter:(todos,showCompl,searchText)=>{
        var filter = todos;
        filter = filter.filter((todo)=>{
          return !todo.done || showCompl;
        });
        filter = filter.filter((todo)=>{
          var text = todo.text.toLowerCase();
          return searchText.length === 0 || text.indexOf(searchText) > -1;
        });
        filter.sort((a,b)=>{
          if(!a.done && b.done) {
            return -1;
          } else if(a.done && !b.done){
            return 1;
          } else {
            return 0;
          }
        });
        return filter;
    }
}
