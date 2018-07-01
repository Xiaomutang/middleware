const fs = require('fs');

module.exports = function static(path) {
    return function (req, res, next) {
        const filePath = path + req.path;
        // console.log(filePath);
        fs.readFile(filePath, (err, data)=>{
            if (err) {
                return next();
            }
            res.end(data);
        })
    }
}