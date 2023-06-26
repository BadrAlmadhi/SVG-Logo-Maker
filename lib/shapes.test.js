
// import shapes from shapes.js
const { Circle, Square, Triangle } = require('./shapes');


// unit testing for all shapes 

describe('Circle', () => {
    test('Circle rendered correctly', () => {
        const circle = new Circle();
        var color = ('blue')
        circle.Color(color);
        expect(circle.render()).toEqual(`<circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="${color}">`);
    });
});

describe('Square', () => {
    test('Square rendered correctly', () => {
        const circle = new Square();
        var color = ('Green')
        circle.Color(color);
        expect(circle.render()).toEqual(`<rect x="50" height="200" width="200" fill="${color}">`);
    });
});

describe('Triangle', () => {
    test('Triangle rendered correctly', () => {
        const circle = new Triangle();
        var color = ('Pink')
        circle.Color(color);
        expect(circle.render()).toEqual(`<polygon height="100%" width="100%" points="0,200 300,200 150,0" fill="${color}">`);
    });
});

