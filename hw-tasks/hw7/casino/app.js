function Casino(options){
    this.machinesCount = options.machinesCount;
    this.totalCash = options.totalCash;    
    this.casinoMachines = [];
    if(this.machinesCount>0){
        for(var i =0; i<this.machinesCount; i++){
            this.casinoMachines.push(CreateSlotMachine());
        }
    }

    function CreateSlotMachine() {
        var machineCash = (this.totalCash / this.machinesCount).toFixed(2);
        return new SlotMachine({cash: machineCash, lackbox: false });
    }
    CreateSlotMachine();
}
Casino.prototype.getTotalSum = function(){
    return this.totalCash;
}
Casino.prototype.getMachinesCount = function(){
    var machines;
    return machines;
}
Casino.prototype.addMachine = function(){}

Casino.prototype.removeMachine = function(){}

Casino.prototype.cashOut = function(){}

function SlotMachine(options){
    this.cash = options.cash;
    this.luckybox = options.luckybox;
}
SlotMachine.prototype.getTotalSum = function(){}
SlotMachine.prototype.cashOut = function(){}
SlotMachine.prototype.cashIn = function(){}
SlotMachine.prototype.letsPlay = function(){}

var casino = new Casino({machinesCount: 5, totalCash: 100});