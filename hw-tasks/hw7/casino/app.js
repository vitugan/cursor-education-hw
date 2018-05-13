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
        console.log(this);
        if( id === 0 ){
            return new SlotMachine({cash: cashInMashine + remainder , luckbox: true });
        } else {
            return new SlotMachine({cash: cashInMashine , luckbox: false });
        }

    }    
    createSlotMachine();

}
Casino.prototype.getTotalSum = function(){
    var sum = 0;
    console.log(this);
    this.casinoMachines.forEach(function(el){
        sum += el.cash;
    });
    this.totalCash = sum;
    return this.totalCash;
}
Casino.prototype.getMachinesCount = function(){
    let count = this.machinesCount;
    return count;
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
    this.machinesCount = this.casinoMachines.length;
    let sumToMachine = Math.floor(sumToDistibute / this.machinesCount);
    let reminder = sumToDistibute % this.machinesCount;
    this.casinoMachines.forEach(function(el, index){
        el.cash += sumToMachine;
        if (index === 0) { 
            el.cash+=reminder; 
        }        
    });
}

Casino.prototype.cashOut = function(n){
    let s = 0;
    if( n > 0 && n < this.totalCash) {        
        this.casinoMachines.sort(function(a, b){
            if ( a.cash > b.cash) {
                return -1;
            } 
            if ( a.cash < b.cash ){
                return 1;
            }
            return 0;
        });

        this.casinoMachines.forEach(function(el){
            if (n > el.cash ) {
                n -= el.cash;
                el.cash = 0;                
            } else {
                el.cash -= n;
                n = 0;
            }            
        });
        this.totalCash -= n;
    } else {
        throw "No have enought money";
    }

}

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
        this.cash += n;
    }
}
SlotMachine.prototype.letsPlay = function(n){
    this.cashIn(n);
    let sum = 0;
    let random = (Math.floor(Math.random()*(999-100+1)+100)).toString();    

    if(random[0] === random[1] && random[0] === random[2] ) {
        if(random === 777){
            sum = this.cash;        
            this.cash = 0;
            return "Your numbers is: " + random + " and you win Jackpot $" + sum;    
        } else {
            sum = n * 5; 
            this.cashOut(sum);
            return "Your numbers is: " + random + " and you win " + sum;    
        }
    } 
    else if(random[0] === random[1] || random[0] === random[2] || random[1] === random[2]) {
        sum = n * 2; 
        this.cashOut(sum);
        return "Your numbers is: " + random + " and you win $" + sum;
    }     
    else {         
        return "Your numbers is: " + random + "and you win 0";
    }    
}

try {
    var casino = new Casino({machinesCount: 3, totalCash: 100});
} catch(e) {
    console.error(e);
}

console.log("Casino init \n 12 machines \n $1000 cash \n", casino);

console.log("Add 1 to machine to Casino", casino );
 casino.addMachine();

console.log("Remove machine to Casino", casino );
// casino.removeMachine(3);

console.log("Play 50 games: \n");
for(var i = 1; i<=50; i++){
    console.log("Game ", i);
    console.log(casino.casinoMachines[0].letsPlay(20));
}

// casino.casinoMachines[0].letsPlay(100);








