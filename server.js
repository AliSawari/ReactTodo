const express = require('express');
const port = process.env.PORT || 3000;
const app = express();
app.use(express.static('public'));
app.listen(port,(e)=>{
  if(e) return console.log(e);
  console.log(`Server is Up on port ${port}`)
});
