function Goods(options){
    this.place = options.place;
    this.weight = options.weight;    
    this.price = options.price;
}

Goods.prototype.findGoods = function (){
    return this.place;
}
Goods.prototype.getWeight = function (){
    return this.weight;
}

Goods.prototype.getPrice = function (){
    return this.price;
}

Goods.prototype.getBill = function (){
    return (this.price * this.weight).toFixed(2);
}