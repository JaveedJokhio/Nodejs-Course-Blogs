const http = require('http');
const fs = require('fs');
const _ = require('lodash')

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html');

    let path = './views/'

    switch(req.url){
      case '/':
        path += 'index.html'
        res.statusCode = 200;
        break;
      case '/about':
        path += 'about.html'
        res.statusCode=200;
        break;
      default:
        path += '404.html'
        res.statusCode=404;
        break; 
    } 

    // send html file
    fs.readFile(path,(err,data)=>{
      if(err){
        console.log(err)
        res.end();
      }else{
        // res.write(data)
        res.end(data);
      }
    })
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
