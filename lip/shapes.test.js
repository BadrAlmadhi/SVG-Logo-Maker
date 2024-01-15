const { Circle, Square, Triangle } = require('./shapes');


describe('Circle', ()=>{
    test('render test', ()=>{
        const circle = new Circle();
        const color = ('blue');
        expect(circle.render()).toEqual(`<circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="${color}">`);
    });
});

describe('Square', ()=>{
    test('render test', ()=>{
        const square = new Square();
        const color = ('red');
        expect(square.render()).toEqual(`<rect x="50" height="200" width="200" fill="${color}">`);
    });
});

describe('Triangle', ()=>{
    test('render test', ()=>{
        const triangle = new Triangle();
        const color = ('yellow');
        expect(triangle.render()).toEqual(`<polygon height="100%" width="100%" points="0,200 300,200 150,0" fill="${color}">`);
    });
})