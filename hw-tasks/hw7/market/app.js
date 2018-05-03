function Goods(options){
    this.place = options.place;
    this.weight = options.weight;    
    this.price = options.price;
    this.amount = 15;
}

Goods.prototype.findGoods = function (){
    return this.place;
}
Goods.prototype.getWeight = function (){    
    return this.weight
}

Goods.prototype.getPrice = function (){
    return this.price;
}

Goods.prototype.getBill = function (amount){    
    var totalSum = (this.price * amount).toFixed(2);
    var totalWeight = (amount * this.getWeight()).toFixed(2);
    return '  BILL   \n' +
        this.place + ' department \n' 
        + '------------------------ \n'
        + 'Amount items ' + amount + '\n'
        + 'Total weight ' + totalWeight + 'kg \n'
        + 'Price $      ' + this.price + '\n'
        + '------------------------ \n'
        + 'Total sum $' + totalSum ;
    //return (this.price * this.weight).toFixed(2);
}

Goods.prototype.buy = function (amount){
    if((this.amount - amount) < 1) {
        console.log('We have only '+this.amount+' of items');
        return false;
    } else {
        this.amount -= amount;
        console.log(this.getBill(amount));        
    }       
}

var apple = new Goods({weight: 2, price: 5, place: 'Grocery'});


console.log(apple.buy(10));
//console.log(apple.amount);
