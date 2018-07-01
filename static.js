const express = require('express');
const fs = require('fs');
const app = express();
const static = require('./static模块')
app.use(static('./public'));

// function static(path) {
//     return function (req, res, next) {
//         const filePath = path + req.path;
//         // console.log(filePath);
//         fs.readFile(filePath, (err, data)=>{
//             if (err) {
//                 return next();
//             }
//             res.end(data);
//         })
//     }
// }

app.get('/index', (req, res) => {
    res.end('index');
})
app.listen(4000, () => {
    console.log('haobang');
})