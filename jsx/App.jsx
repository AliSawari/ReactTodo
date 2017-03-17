import React from 'react';
import ReactDOM from 'react-dom';
import TodoApp from './TodoApp';
const app = document.getElementById('app');
ReactDOM.render(<TodoApp/>,app);
app.style.fontFamily = "Roboto";
app.style.fontWeight = 'bold';
