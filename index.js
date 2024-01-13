// this folder is for classes
// create .svg file
// enter text 3 no more than 3 characters
// enter text color
// select shape circle, square, triangle
// shape color


const inquire = require("inquirer");

class Questions {
    constructor(name, text, shape, shapeColor){

        this.name = '';
        this.text = text;
        this.shape = shape;
        this.shapeColor = shapeColor
        
    }
    addName() {
        return inquire
        .prompt ([
            {
                type:'input', 
                name:'name',
                message:'Enter your logo text. (please note; logo should not contain more than three characters)',
            }
        ]).then(
            
        )
    }
}