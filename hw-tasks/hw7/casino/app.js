function Casino(options){    
    const _self = this;
    this.machinesCount = options.machinesCount;
    this.totalCash = options.totalCash;    
    this.casinoMachines = [];    
    const cashDistribution = this.getCashDistribution(_self.totalCash, _self.machinesCount);
    
    if(Number.isInteger(this.machinesCount) && this.machinesCount>0){
        for(var i =0; i<this.machinesCount; i++){            
            this.casinoMachines.push(createSlotMachine(i));
        }
    } else {
        throw 'CASINO: Entered count of Slot Mashines must be 1 or more';
    }

    function createSlotMachine(id) {        
        if( id === 0 ){
            return new SlotMachine({cash: cashDistribution.cashPerMachine + cashDistribution.reminder , luckbox: true });
        } else {
            return new SlotMachine({cash: cashDistribution.cashPerMachine , luckbox: false });
        }
        
    }
    this.getCashDistribution = function(cash, count){        
        const sum = Math.floor(cash / count);
        const reminder = cash - (sum * count);
        return {sum: sum, reminder: reminder };
    }    
    createSlotMachine();

}
Casino.prototype.getTotalSum = function(){
    return this.totalCash;
}
Casino.prototype.getMachinesCount = function(){
    var machines;
    return machines;
}
Casino.prototype.addMachine = function(){    
    let max = Math.max.apply(Math, this.casinoMachines.map(function(o){return o.cash;}));        
    let mashineMaxCashIndex = this.casinoMachines.findIndex(function(e){
        if(e.cash === max){
            return e;
        }
    });
    console.log('Mashines ', this.casinoMachines);
    console.log('Max function: ', Math.max.apply(Math, this.casinoMachines.map(function(o){return o.cash;})));
    console.log('Max: ', max);
    console.log('Array index: ', mashineMaxCashIndex);
    let halfFromMachine = this.getCashDistribution(max, 2);
    //console.log(this.casinoMachines[mashineMaxCashIndex].cash = halfFromMachine.sum);
    console.log(this.casinoMachines[mashineMaxCashIndex]);
    //return Math.max.apply(Math, this.casinoMachines.map(function(o){return o.cash;}));
    
}
Casino.prototype.removeMachine = function(){}

Casino.prototype.cashOut = function(){}

Casino.prototype.getCashDistribution = function(cash, count){        
    const sum = Math.floor(cash / count);
    const reminder = cash - (sum * count);
    return {sum: sum, reminder: reminder };
}    
/**
 * 
 * @param {cash: Number, luckbo: Bool } options 
 */
function SlotMachine(options){
    this.cash = options.cash;
    this.luckbox = options.luckbox;
}
SlotMachine.prototype.getTotalSum = function(){}
SlotMachine.prototype.cashOut = function(){}
SlotMachine.prototype.cashIn = function(){}
SlotMachine.prototype.letsPlay = function(){}

try {
    var casino = new Casino({machinesCount: 3, totalCash: 100});
} catch(e) {
    console.error(e);
}

console.log(casino.addMachine());