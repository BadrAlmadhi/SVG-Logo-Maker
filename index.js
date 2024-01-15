// this folder is for classes
// create .svg file
// enter text 3 no more than 3 characters
// enter text color
// select shape circle, square, triangle
// shape color



const inquire = require("inquirer");
const fs = require('node:fs'); //write to shapes.svg
const shapes = require("./lip/shapes");



class File {
    constructor(){
        this.name = '';
        this.shape = '';

    }
    render() {
        return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200">${this.name}${this.shape}</svg>`
    }
    setText(text, color) {
        this.text = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${color}">${text}</text>`
    }
    setShape(shape){
        this.shape = shape.render();
    }
}

inquire
.prompt ([
    {
        type : 'input',
        name: 'name',
        message: 'Enter your logo name (Please note the logo name should be up to 3 characters):',
    },
    {
        type:"input",
        name: 'input',
        message: "Enter the color of your text",
    },
    {
        type:"list",
        name: "shape",
        message:'Select your shape style:',
        choices: ["Square", "Circle", "Triangle"],
    },
])