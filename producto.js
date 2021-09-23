export default class Producto{
    constructor(id, name, quantity, cost){
        this._id = Number (id);
        this._name = name;
        this._quantity = Number(quantity);
        this._cost = Number(cost);
    }
    
    getId(){
        return this._id;
    }
    getName(){
        return this._name;
    }
    getQuantity(){
        return this._quantity;
    }
    getCost(){
        return this._cost;
    }
    getTotal(){
        return this._quantity*this._cost;
    }

    
}