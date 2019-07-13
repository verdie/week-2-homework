class ShoppingCart {
    constructor() {
        this.items = [];
    }

    getItems(){
        return this.items;
    }

    addItem(itemName, quantity, price){
        this.items.push(
        {
            name: itemName,
            quantity: quantity,
            pricePerUnit: price
        })      
    }

    clear(){
        this.items = [];
    }

    total (){
        return this.items.reduce((acc, item) => {
            acc += item.pricePerUnit * item.quantity;
            return acc;
        }, 0)
    }
}

module.exports = ShoppingCart;