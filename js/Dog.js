export class Dog {
constructor(vardas , kailioSpalva , amzius){
    this.name = vardas;
    this.color = kailioSpalva
    this.age = amzius
    this.legsCount = 4
    this.hasTail = true
}
birthday(){
    this.age++;
    return `Suns ${this.age} gimtadienis! 🥳`
}

lostLeg(){
    if(this.legsCount === 0){
        return `Suo jau turi 0 koju... daugiau nera ko prarasti!`
    }
    this.legsCount--;
    return `Suo prarado koja..🥲`
}

hi(){
    return 'Suo sako: au au!!'
}
think(){
    return 'Suo galvoja: 🦴🦴🦴'
}
addNumbers(a,b){
    return `Suo suskaiciavo: ${a} + ${b} = ${a + b}.`;
}
manyBones(count){
    return `Many bones: ${`🦴`.repeat(count)}.`
}
}


export class Car {
    constructor ( marke , modelis , spalva){
        this.make = marke 
        this.model = modelis
        this.color = spalva 
        this.fuelTankCapacity = 90
        this.averageFuelConsumption = 12; 
        this.engineRunning = false
        this.speed = 0
        this.fuelLevel = this.fuelTankCapacity;
        
    }


    engineStart() {
        if (this.engineRunning) {
            return `You already started the engine.`;
        } else {
            this.engineRunning = true;
            
            return `Brumm, engine started. Speed is now  0 km/h.`;
        }
    }

    engineStop() {
        if (!this.engineRunning) {
            return `The engine is already stopped.`;
        } else {
            this.engineRunning = false;
            this.speed = 0; // Reset speed to 0 km/h when the engine stops
            return `Engine stopped. Speed is now ${this.speed} km/h.`;
        }
    }

    isEngineRunning() {
        return this.engineRunning;
    }

    getSpeed() {
        return this.speed;
    }
    calculateFuelNeeded(distance) {
        const fuelNeeded = (distance / 100) * this.averageFuelConsumption;
        return fuelNeeded;
    }

    canDriveDistance(distance) {
        const fuelNeeded = this.calculateFuelNeeded(distance);
        if (fuelNeeded > this.fuelLevel) {
            return `You need to refuel to drive ${distance} km. Fuel needed: ${fuelNeeded.toFixed(2)} liters.`;
        } else {
            return `You can drive ${distance} km. Fuel needed: ${fuelNeeded.toFixed(2)} liters.`;
        }
    }

    drive(distance) {
        const fuelNeeded = this.calculateFuelNeeded(distance);
        if (fuelNeeded > this.fuelLevel) {
            return `You don't have enough fuel to drive ${distance} km. Please refuel.`;
        } else {
            this.fuelLevel -= fuelNeeded;
            return `You have driven ${distance} km. Remaining fuel: ${this.fuelLevel.toFixed(2)} liters.`;
        }
    }
    refuelNeeded() {
        const neededFuel = this.fuelTankCapacity - this.fuelLevel;
        return `You need ${neededFuel.toFixed(2)} liters to refuel to a full tank.`;
    }
    refuel(amount) {
        if (amount <= 0) {
            return `Invalid refuel amount. Please provide a positive number.`;
        }

        const potentialFuelLevel = this.fuelLevel + amount;
        if (potentialFuelLevel > this.fuelTankCapacity) {
            const actualRefuelAmount = this.fuelTankCapacity - this.fuelLevel;
            this.fuelLevel = this.fuelTankCapacity;
            return `You have refueled ${actualRefuelAmount.toFixed(2)} liters. The tank is now full.`;
        } else {
            this.fuelLevel += amount;
            return `You have refueled ${amount.toFixed(2)} liters. Current fuel level: ${this.fuelLevel.toFixed(2)} liters.`;
        }
    }
    startDriving(speed) {
        if (!this.engineRunning) {
            return `Start the engine first.`;
        }
        if (speed <= 0) {
            return `Invalid speed. Please provide a positive number.`;
        }
        if (this.fuelLevel < 3) {
            return `Not enough fuel to start driving. Please refuel.`;
        }
        this.speed = speed;
        this.fuelLevel -= 3; // Consume 3 liters of fuel when starting to drive
        return `You are now driving at ${this.speed} km/h. Fuel level: ${this.fuelLevel.toFixed(2)} liters.`;
    }
}






