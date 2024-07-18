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
