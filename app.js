const express = require('express');
const app = express();
const fs = require('fs');


app.use('/', express.static('/'));
app.use('/images', express.static('images'));
const dir="C:/";
const files = fs.readdirSync(dir);

       
       app.get('/', (req, res) => {
              files.forEach(file=>{
            
          if(file.includes(".txt")){
              res.write('<div style="display:flex; align-items:center;"><img src ="./images/textFile.png" width="20px"/><p style="padding-left:5px">'+file+'</p></div>');
          }
          else if(file.includes('.sys')){
            res.write('<div style="display:flex; align-items:center;"><img src ="./images/textFile.png" width="20px"/><p style="padding-left:5px">'+file+'</p></div>');
        }
          else{
              res.write('<div style="display:flex; align-items:center;"><img src ="./images/folderIcon.png" width="20px"/><p style="padding-left:5px">'+file+'</p></div>');
          }

          
      })
     
  
  
       });
  app.listen(5000, () => {
        console.log("server has been runned port on 5000")
      });









