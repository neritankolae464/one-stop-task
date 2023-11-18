/* 
Filename: sophisticated_app.js
Description: A complex and elaborate JavaScript application that simulates an e-commerce platform with various functionalities such as user authentication, product browsing, cart management, and order placement.
*/

// User Authentication Module
class User {
  constructor(username, password) {
    this.username = username;
    this.password = password;
    this.isLoggedIn = false;
  }

  login() {
    // Perform login logic
    this.isLoggedIn = true;
    console.log(`User ${this.username} logged in successfully.`);
  }

  logout() {
    // Perform logout logic
    this.isLoggedIn = false;
    console.log(`User ${this.username} logged out.`);
  }
}

// Product Model
class Product {
  constructor(name, price, description) {
    this.name = name;
    this.price = price;
    this.description = description;
  }
}

// Product Management Module
class ProductManager {
  constructor() {
    this.products = [];
  }

  addProduct(product) {
    // Validate and add a new product
    this.products.push(product);
    console.log(`Product ${product.name} added successfully.`);
  }

  deleteProduct(product) {
    // Validate and delete a product
    const index = this.products.findIndex((p) => p.name === product.name);
    if (index !== -1) {
      this.products.splice(index, 1);
      console.log(`Product ${product.name} deleted successfully.`);
    } else {
      console.log(`Product ${product.name} not found.`);
    }
  }

  getProductByName(name) {
    // Search for a product by name
    return this.products.find((p) => p.name === name);
  }

  getProductsWithPriceLessThan(price) {
    // Return products with price less than given price
    return this.products.filter((p) => p.price < price);
  }
}

// Cart Management Module
class Cart {
  constructor() {
    this.items = [];
  }

  addItem(product, quantity) {
    // Add a product to the cart with given quantity
    this.items.push({ product, quantity });
    console.log(`${product.name} added to the cart.`);
  }

  removeItem(product) {
    // Remove a product from the cart
    const index = this.items.findIndex((item) => item.product.name === product.name);
    if (index !== -1) {
      this.items.splice(index, 1);
      console.log(`${product.name} removed from the cart.`);
    } else {
      console.log(`${product.name} not found in the cart.`);
    }
  }

  getSubtotal() {
    // Calculate the subtotal of the cart
    let subtotal = 0;
    this.items.forEach((item) => {
      subtotal += item.product.price * item.quantity;
    });
    return subtotal;
  }

  checkout() {
    // Finalize the cart and place the order
    console.log(`Order placed. Subtotal: $${this.getSubtotal()}`);
    this.items = [];
  }
}

// Order Management Module
class Order {
  constructor(user, cart) {
    this.user = user;
    this.cart = cart;
  }

  placeOrder() {
    // Place an order
    if (this.user.isLoggedIn) {
      this.cart.checkout();
      console.log(`Order placed successfully. Thank you, ${this.user.username}!`);
    } else {
      console.log(`Please login to place an order.`);
    }
  }
}

// Usage Example
const user = new User("johnDoe", "pass123");
user.login();

const productManager = new ProductManager();
productManager.addProduct(new Product("Shirt", 19.99, "A stylish shirt."));
productManager.addProduct(new Product("Pants", 29.99, "A comfortable pair of pants."));
productManager.addProduct(new Product("Hat", 9.99, "A cool hat."));

const cart = new Cart();
cart.addItem(productManager.getProductByName("Shirt"), 2);
cart.addItem(productManager.getProductByName("Hat"), 1);
console.log("Cart subtotal:", cart.getSubtotal());

const order = new Order(user, cart);
order.placeOrder();

user.logout();