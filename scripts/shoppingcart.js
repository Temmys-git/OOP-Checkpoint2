// Object class for the product
class Product {
    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
}

// Object class for the shopping cart item
class ShoppingCartItem {
    constructor(product, quantity) {
        this.product = product;
        this.quantity = quantity;
    }
    
    // Method to calculate the total price of the item
    getTotalPrice() {
        return this.product.price * this.quantity;
    }
}

// Object class for the shopping cart
class ShoppingCart {
    constructor() {
        this.items = [];
    }
    
    // Method to get the total number of items inside the cart
    getTotalItems() {
        return this.items.length;
    }
    
    // Method to add items to the cart
    addItem(item) {
        this.items.push(item);
    }
    
    // Method to remove items from the cart
    removeItem(item) {
        const index = this.items.indexOf(item);
        if (index !== -1) {
            this.items.splice(index, 1);
        }
    }
    
    // Method to display cart items
    displayCartItems() {
        this.items.forEach(item => {
            console.log(`Product: ${item.product.name}, Quantity: ${item.quantity}, Total Price: ${item.getTotalPrice()}`);
        });
    }
}

// Test the objects
// Create products
const product1 = new Product(1, "Product 1", 10);
const product2 = new Product(2, "Product 2", 20);
const product3 = new Product(3, "Product 3", 30);

// Create a shopping cart
const cart = new ShoppingCart();

// Add items to the cart
cart.addItem(new ShoppingCartItem(product1, 2));
cart.addItem(new ShoppingCartItem(product2, 3));
cart.addItem(new ShoppingCartItem(product3, 1));

// Display the cart
console.log("Cart Items:");
cart.displayCartItems();

// Remove an item from the cart
cart.removeItem(cart.items[0]);

// Display the updated cart
console.log("Updated Cart Items:");
cart.displayCartItems();
