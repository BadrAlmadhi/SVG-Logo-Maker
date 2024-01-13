class Shapes {
  constructor() {
    this.color='';
  }
  setColor(color){
    this.color = color;
  }
}

class Square extends Shapes {
    render(){
        return `<circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="${this.color}" />`
    };
  };


class Triangle extends Shapes {
  render(){
``
  };
  };

class Circle extends Shapes {
  constructor(name, circle) {
    super(name);
    this.circle = circle;
  }
}



// // render() and then test return SVG file with the givin shape color

// const shape = new Triangle();
// shape.setColor("blue");
// expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');

// console.log(shape);

console.log('hello')

// // in lip folder handling user input, writing to file, writing test

// // writing text in SVG 
// <text x="10" y="10">Hello World!</text>


