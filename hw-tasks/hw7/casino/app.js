function Casino(options){    
    const _self = this;
    this.machinesCount = options.machinesCount;
    this.totalCash = options.totalCash;    
    this.casinoMachines = [];    
    
    if(Number.isInteger(this.machinesCount) && this.machinesCount>0){
        for(var i =0; i<this.machinesCount; i++){            
            this.casinoMachines.push(createSlotMachine(i));
        }
    } else {
        throw 'CASINO: Entered count of Slot Mashines must be 1 or more';
    }

    function createSlotMachine(id) {        
        let cashInMashine = Math.floor(_self.totalCash / _self.machinesCount);
        let remainder = _self.totalCash % _self.machinesCount;
        if( id === 0 ){
            return new SlotMachine({cash: cashInMashine + remainder , luckbox: true });
        } else {
            return new SlotMachine({cash: cashInMashine , luckbox: false });
        }
        
    }    
    createSlotMachine();

}
Casino.prototype.getTotalSum = function(){
    return this.totalCash;
}
Casino.prototype.getMachinesCount = function(){
    return _self.machinesCount.length;
}
Casino.prototype.addMachine = function(){ 
    /* Find max cash in machine*/   
    let max = Math.max.apply(Math, this.casinoMachines.map(function(o){return o.cash;}));        
    /* Find index machine wiht max cash in array */
    let mashineIndex = this.casinoMachines.findIndex(function(e){
        if(e.cash === max){
            return e;
        }
    });
    let halfSum = Math.floor(max / 2);    
    let reminder = max % 2;
    this.casinoMachines[mashineIndex].cash = halfSum + reminder;
    this.casinoMachines.push(new SlotMachine({cash: halfSum, luckbox: false}));
    this.machinesCount++;    
}
Casino.prototype.removeMachine = function(index){
    let sumToDistibute = this.casinoMachines[index].cash;
    this.casinoMachines.splice(index, 1);
    this.machinesCount--;
    let sumToMachine = Math.floor(sumToDistibute / this.machinesCount);
    let reminder = sumToDistibute % this.machinesCount;
    this.casinoMachines.forEach(function(el, index){
        el.cash += sumToMachine;
        if (index === 0) { 
            el.cash+reminder; 
        }
    });
}

Casino.prototype.cashOut = function(){
    let cashOut = 0;
    this.casinoMachines.forEach(function(el, index){
        cashOut += el.cash;
        el.cash = 0;        
    });
    return cashOut;
}

/**
 * 
 * @param {cash: Number, luckbo: Bool } options 
 */
function SlotMachine(options){
    this.cash = options.cash;
    this.luckbox = options.luckbox;
}
SlotMachine.prototype.getTotalSum = function(){
    return this.cash;
}
SlotMachine.prototype.cashOut = function(n){
    if( n <= this.cash ) {
        this.cash - n;
    } 
}
SlotMachine.prototype.cashIn = function(n){
    if (n>0){
        this.cash -= n;
    }
}
SlotMachine.prototype.letsPlay = function(n){
    this.cashIn(n);
    let random = Math.floor(Math.random()*(999-100+1)+100);
    if(random[0] === random[1] && random[]) {
        return n * 2;
    } else if (random === '777'){
        let wincash = this.cash;
        this.cash = 0;
        return wincash;
    } else {
        return "Try again";
    }
    /*  */
}

try {
    var casino = new Casino({machinesCount: 3, totalCash: 100});
} catch(e) {
    console.error(e);
}
