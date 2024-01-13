class Shapes {
  constructor(name) {
    this.name = name;
  }
}

class Square extends Shapes {
  constructor(name, square) {
    super(name);
    this.square = square;
  }
}

class Triangle extends Shapes {
  constructor(name, triangle) {
    super(name);
    this.triangle = triangle;
  }
}

class Circle extends Shapes {
  constructor(name, circle) {
    super(name);
    this.circle = circle;
  }
}

// render() and then test return SVG file with the givin shape color

const shape = new Triangle();
shape.setColor("blue");
expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');

console.log(shape);


// in lip folder handling user input, writing to file, writing test

// writing text in SVG 
<text x="10" y="10">Hello World!</text>