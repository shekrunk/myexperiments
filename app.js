const fs = require('fs');
const path = require("path");


var p1 = "source";//fullpath
var arr1 = [];

var p2 = "dest";//fullpath
var arr2 = [];

listContents(p1, arr1, readDir);
listContents(p2, arr2, readDir);


setTimeout(function () {
    process();
}, 1000);

function listContents(dir, arr, callback) {
    callback(dir, arr);
}

function readDir(dir, arr) {
    fs.readdir(dir, function (err, files) {
        if (err) {
            throw err;
        }
        files.forEach(function (file) {
            arr.push(file);
        });
    });
}

function process() {
    var arr = arr2.filter(function (val) {
        return !arr1.includes(val);
    });
    
    arr.forEach(function (v) { 
        var dest = fs.createReadStream((p1+v),{ flags: 'w'});
        var src = fs.createReadStream((p2+v),{ flags: 'r'});

        src.pipe(dest);
    });
    
}

