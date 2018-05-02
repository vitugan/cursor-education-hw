function Goods(options){
    this.place = options.place;
    this.weight = options.weight;    
    this.price = options.price;
    this.amount = 15;
}

Goods.prototype.findGoods = function (){
    return 'Stored in - ' + this.place;
}
Goods.prototype.getWeight = function (){
    return 'Weight is - ' + (this.weight * this.amount).toFixed(2);
}

Goods.prototype.getPrice = function (){
    return 'Price is - $' + this.price;
}

Goods.prototype.getBill = function (){
    /* return this.place + ' department \n' + ; */
    return (this.price * this.weight).toFixed(2);
}

Goods.prototype.buy = function (){
    return (this.price * this.amount).toFixed(2);
}

var apple = new Goods({weight: 2, price: 5, place: 'Grocery'});

console.log(apple.findGoods());
console.log(apple.getWeight());
console.log(apple.getPrice());
console.log(apple.buy(10));
console.log(apple);