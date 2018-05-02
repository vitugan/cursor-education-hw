function Pokemon(options){
    this.weight = options.weight;
    this.height = options.height;
}

Pokemon.prototype.getType = function(){
    return this.type;
}

Pokemon.prototype.getSpecie = function(){
    return this.specie;
}

Pokemon.prototype.getHeight = function(){
    return this.height;
}

Pokemon.prototype.getWeight = function(){
    return this.weight;
}

Pokemon.prototype.canFly = function(){
    return !!this.hasWings;
}

function Charmander(options){
    Pokemon.call(this, options);
    this.type = 'Fire';
    this.specie = 'Lizard Pokemon';
}

Charmander.prototype = Object(Pokemon.prototype);
Charmander.prototype.constructor = Charmander;

function Charmaleon(options){
    Charmander.call(this, options);    
    this.specie = 'Flame Pokemon';    
}

Charmaleon.prototype = Object(Charmander.prototype);
Charmaleon.prototype.constructor = Charmaleon;

function Charizard(options){
    Charmander.call(this, options);
    this.hasWings = true;
}

Charizard.prototype = Object(Charmander.prototype);
Charizard.prototype.constructor = Charizard;

var embury = new Charmander({height: 1, weight: 15});
var mercury = new Charmaleon({height: 2, weight: 45});
var morderbrand = new Charizard({height: 10, weight: 200});

console.log(morderbrand.canFly());