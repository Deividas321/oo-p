import { Dog } from './js/Dog.js';
const rexas = new Dog('Rexas', 'juodas', 5);
console.log(rexas);
console.log(rexas.name)
console.log(rexas.color)
console.log(rexas.age)
console.log(rexas.hi());
console.log(rexas.think());
console.log(rexas.addNumbers(7,5))
console.log(rexas.manyBones(8))

console.clear();

const brisius = new Dog('Brisius', 'baltas', 2);
console.log(brisius)
console.log(brisius.lostLeg());
console.log(brisius.lostLeg());
console.log(brisius.lostLeg());
console.log(brisius.lostLeg());
console.log(brisius.lostLeg());
console.log(brisius);
console.log(brisius.birthday());
console.log(brisius.birthday());
console.log(brisius.birthday());

console.clear();


import { Car } from './js/Dog.js';
const Bmw = new Car ('Bmw' , 'X5' ,'juodas' );
console.log(Bmw);
console.log(Bmw.engineStart());
console.log(Bmw.engineStart());
console.log(Bmw.startDriving(130));
console.log(Bmw.engineRunning);
console.log(Bmw.engineStop());
console.log(Bmw.engineStop());
console.log(Bmw.engineRunning);
console.log(Bmw.engineStart());
console.log(Bmw.startDriving(60));
console.log(Bmw.speed);

console.log(Bmw.engineStop());
console.log(Bmw.engineStart());
console.log(Bmw.startDriving(130));
console.log(Bmw.drive(745));
console.log(Bmw.refuelNeeded());
console.log(Bmw.refuel(10.40));
console.log(Bmw.canDriveDistance(100));
console.log(Bmw.calculateFuelNeeded(1000));















// class -> Car (Automobilis)
 
// - pavadinimas (Audi)
// - modelis (80)
// - color
// - kuro bako talpa (litrais)
// - vidutines kuro sanaudos 100km
// - ar ijungtas varyklis (default: false)
// - greitis (default: 0)
 
// metodai:
// - ijungti varykli
//     - ijungto varykli dar karto ijungti negalima, sugadinti starteri
// - isjungti varykli
//     - isjungto varyklio isjungti negalima...
// - pradeti vaziuoti (greitis tiesiog tampa ne nulinis ir sunaudoja 2x litrus kuro sanaudu)
// - vaziuoti (naudoja 1x litro kuro sanaudu)
// - sustoti (greitis tiesiog tampa nulinis)
// - kiek liko kuro?
// - uzpilti kuro baka (kiek litrais)
// has context menu



