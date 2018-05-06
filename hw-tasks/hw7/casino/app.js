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
        let cashIn = Math.floor(_self.totalCash / _self.machinesCount);
        let reminder = _self.totalCash % _self.machinesCount
        if( id === 0 ){
            return new SlotMachine({cash: cashIn + reminder , luckbox: true });
        } else {
            return new SlotMachine({cash: cashIn , luckbox: false });
        }
        
    }
    createSlotMachine();

}
Casino.prototype.getTotalSum = function(){
    return this.totalCash;
}
Casino.prototype.getMachinesCount = function(){    
    return this.casinoMachines.length;
}
Casino.prototype.addMachine = function(){
    let maxCash = Math.max.apply(Math, this.casinoMachines.map(function(o){return o.cash;}));        
    let mashineMaxCashIndex = this.casinoMachines.findIndex(function(e){
        if(e.cash === maxCash){
            return e;
        }
    });
    let halfFromMachine = Math.floor(maxCash / 2);
    let reminder = maxCash % 2;
    this.casinoMachines[mashineMaxCashIndex].cash = halfFromMachine + reminder;
    this.casinoMachines.push(new SlotMachine({cash: halfFromMachine, luckbox: false}));
}
Casino.prototype.removeMachine = function(id){
    let sum = this.casinoMachines[id].cash;
    this.casinoMachines.splice(id, 1);
    this.machinesCount = this.getMachinesCount();
    
    let sumPerMashine = Math.floor(sum / this.machinesCount );
    let reminder = sum % this.machinesCount;

    this.casinoMachines.forEach(function(el, index){
        if(index === 0){
            el.cash += sumPerMashine + reminder;
        } else {
            el.cash += sumPerMashine;
        }        
    });
}

Casino.prototype.cashOut = function(sum){
    
    let sumPerMashine = Math.floor(sum / this.machinesCount );
    let reminder = sum % this.machinesCount;

    this.casinoMachines.forEach(function(el, index){
        if(index === 0){
            el.cash -= sumPerMashine + reminder;
        } else {
            el.cash -= sumPerMashine;
        }        
    });
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
SlotMachine.prototype.cashOut = function(sum){
    if(sum > 0 && sum < this.cash) {
        return this.cash -= sum;
    } else {
        throw "SLOT MACHINE: You trying cash out the sum that more then machine contain";
    }
}
SlotMachine.prototype.cashIn = function(sum){
    if(sum > 0) { this.cash += sum; }
}
SlotMachine.prototype.letsPlay = function(){}

try {
    var casino = new Casino({machinesCount: 4, totalCash: 100});
} catch(e) {
    console.error(e);
}

//console.log('add mashine', casino.addMachine());
console.log('remove machine');
casino.casinoMachines[0].cashOut(100);
console.log(casino);
