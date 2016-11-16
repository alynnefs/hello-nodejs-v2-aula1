class Pessoa {
    constructor (id, x, y) {
        this.id = id;
        this.casa(x, y);
    }
    casa (x, y) {
        this.x = x;
        this.y = y;
    }
}

let s = new Pessoa(1,0,0);
s.casa(3,3);
// Pessoa {id: 1, x: 3, y: 3}

class Filho extends Pessoa {
    constructor (id, x, y, x2, y2) {
        super(id, x, y)
        this.x2  = x2 //localização da casa 2
        this.y2 = y2 //localização da casa 2
    }
}
class Filha extends Pessoa {
    constructor (id, x, y, carro) {
        super(id, x, y)
        this.carro = carro // valor do carro
    }
}

let o = new Filho(2,3,3,5,5);
let a = new Filha(3,3,3,25000);
console.log(o instanceof Pessoa); //true
console.log(a instanceof Pessoa); //true
console.log(o instanceof Filho); //true
console.log(a instanceof Filha); //true
console.log(a instanceof Filho); //false
