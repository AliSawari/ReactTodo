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
    }
}
