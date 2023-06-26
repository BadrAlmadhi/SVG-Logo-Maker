const inquirer = require("inquirer");
const filesystem = require('./node_modules/graceful-fs/graceful-fs');
const { Circle, Square, Triangle } = require('./lib/shapes');


function writeToFile(fileName, data) {
    console.log("Writing [" + data + "] to file [" + fileName + "]")
    filesystem.writeFile(fileName, data, function (err) {
        if (err) {
            return console.log(err);
        }
        console.log("Congratulations, you have Generated a logo.svg!");
    });
}

