const fs = require('fs');
const readline = require('readline');

Array.prototype.unique = function () {
    return this.filter(function (value, index, self) {
        return self.indexOf(value) === index;
    });
}

var file1 = "file1";
var file2 = "file2";

var res1 = parsePropertyFile(file1);
var res2 = parsePropertyFile(file2);

Promise.all([res1, res2]).then(function (val) {
    findMissingKeys(val);
});

function findMissingKeys(arr) {
    var _1 = arr[0];
    var _2 = arr[1];

    var newKeys = _2.filter(function (val) {
        return !_2.includes(val);
    });
    
    fs.writeFile("text.txt", newKeys, function (err) {
        if (err) {
            return console.log(err);
        }       
    });
}

function parsePropertyFile(file) {

    return new Promise(function (res, rej) {
        var results = [];
        var rl = readline.createInterface({
            input: fs.createReadStream(file)
        });

        rl.on('line', function (line) {
            var re = /([\w.-]*)=(.*)/;
            var match;
            if ((match = re.exec(line)) !== null) {
                //results.push({ key: match[1], value: match[2] });
                results.push(match[1]);
            }
        });

        rl.on('close', function () {
            res(results);
        });
    });

}
