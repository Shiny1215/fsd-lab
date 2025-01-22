class Item {
    constructor(name, price, quantity) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }
}
class Cart {
    constructor() {
        this.items = JSON.parse(localStorage.getItem('cart')) || [];
    }
    addItem(item) {
        const existingItem = this.items.find(i => i.name === item.name);
        if (existingItem) {
            existingItem.quantity += item.quantity;
        } else {
            this.items.push(item);
        }
        this.saveToStorage();
    }
    removeItem(name) {
        this.items = this.items.filter(item => item.name !== name);
        this.saveToStorage();
    }
    viewCart() {
        return this.items;
    }
    calculateTotal() {
        return this.items.reduce((total, item) => total + item.price * item.quantity, 0);
    }
    saveToStorage() {
        localStorage.setItem('cart', JSON.stringify(this.items));
    }
}
const cart = new Cart();
cart.addItem(new Item('Apple', 1.5, 3));
cart.addItem(new Item('Banana', 1, 5));
console.log(cart.viewCart());
console.log(`Total: $${cart.calculateTotal()}`);
