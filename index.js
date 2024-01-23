// this folder is for classes
// create .svg file
// enter text 3 no more than 3 characters
// enter text color
// select shape circle, square, triangle
// shape color

const inquirer = require("inquirer");
const fs = require("fs");
const { Circle, Square, Triangle } = require("./lip/shapes");

class Svg {
  constructor() {
    this.text = "";
    this.shape = "";
  
  }

  render() {
    return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200">${this.shape}${this.text}</svg>`;
  }

  setText(text, color) {
    this.text = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${color}">${text}</text>`;
  }

  setShape(shape) {
    this.shape = shape.render();
  }

  async promptUser() {
    const answers = await inquirer.prompt([
      {
        type: "input",
        name: "name",
        message:
          "Enter your logo name (Please note the logo name should be up to 3 characters):",
        validate: function (input) {
          return input.length <= 3 ? true : "Logo name should be up to 3 characters.";
        },
      },
      {
        type: "input",
        name: "colorShape",
        message: "Enter the color of your shape:",
      },
      {
        type: "input",
        name: "colorText",
        message: "Enter the color of your text:",
      },
      {
        type: "list",
        name: "shape",
        message: "Select your shape style:",
        choices: ["Square", "Circle", "Triangle"],
      },
    ]);

    this.name = answers.name;
    this.setText(this.name, answers.colorText);

    switch (answers.shape.toLowerCase()) {
      case "square":
        this.setShape(new Square(answers.colorShape));
        break;
      case "circle":
        this.setShape(new Circle(answers.colorShape));
        break;
      case "triangle":
        this.setShape(new Triangle(answers.colorShape));
        break;
      default:
        break;
    }
  }

  createFile() {
    fs.writeFile("shapes.svg", this.render());
    console.log("File shapes.svg created successfully");
  }
}

async function main() {
  const svgGenerator = new Svg();
  await svgGenerator.promptUser();
  svgGenerator.createFile();
}

main();