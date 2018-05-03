function Casino(options){
    this.machinesCount = options.machinesCount;
    this.totalCash = options.totalCash;
    var casinoMachines = [];
    if(this.machinesCount>0){
        for(var i =0; i<machinesCount; i++){
            casinoManhines[] = CreateSlotMachine(cash);
        }
    }

    function CreateSlotMachine(options){
        var machineCash = this.totalCash / this.machinesCount;
        return new SlotMachine(options);
    }
}
Casino.prototype.getTotalSum = function(){
    return this.total_cash;
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