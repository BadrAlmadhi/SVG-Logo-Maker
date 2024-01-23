const { Circle, Square, Triangle } = require('./shapes');


describe('Circle', ()=>{
    it('Should set and get color', ()=>{
        const circle = new Circle();
        circle.setColor('blue')
        expect(circle.color).toEqual('blue')
        
    });
});

describe('Square', ()=>{
    it('Should set and get color', ()=>{
        const square = new Square();
       square.setColor('green');
       expect(square.color).toEqual('green')
    });
});

describe('Should set and get color', ()=>{
    it('Should set and get color', ()=>{
        const triangle = new Triangle();
        triangle.setColor('pink');
        expect(triangle.color).toEqual('pink')
    });
})