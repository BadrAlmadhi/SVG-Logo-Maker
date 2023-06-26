// I am going to start with a defined class that represent shapes 

class Shapes {
  constructor() {
    this.color = ''
  }

  setColor(color) {
    this.color = (color);
  }
}

class Circle extends Shapes {
  render() {
    return `<circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="${this.color}">`
  }
}

class Square extends Shapes {
  render() {
    return `<rect x="50" height="200" width="200" fill="${this.color}">`
  }
}

class Triangle extends Shapes {
  render() {
    return `<polygon height="100%" width="100%" points="0,200 300,200 150,0" fill="${this.color}">`
  }
}

module.exports = { Circle, Square, Triangle }