/*
  Filename: ComplexApp.js

  This code is a complex application that simulates an online shopping platform. It includes various features such as user registration, adding items to a shopping cart, calculating total prices, and processing orders.

  Author: Your Name
  Date: Today's Date
*/

// Importing required libraries and modules
const readline = require('readline');

// Creating readline interface for user input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Global variables
let loggedInUser = null;
let products = [
  { id: 1, name: 'Product 1', price: 10.99 },
  { id: 2, name: 'Product 2', price: 19.99 },
  { id: 3, name: 'Product 3', price: 25.99 },
  // ... and so on
];

// Utility function to display a formatted list of products
function displayProducts() {
  console.log('Available Products:');
  products.forEach((product) => {
    console.log(`[${product.id}] ${product.name} - $${product.price}`);
  });
  console.log();
}

// Function to handle user registration
function registerUser() {
  rl.question('Enter your name: ', (name) => {
    // Perform registration logic here
    console.log(`Welcome, ${name}! You have been registered successfully.`);
    // Set the logged-in user
    loggedInUser = { name, cart: [] };
    // Proceed to the main menu
    showMainMenu();
  });
}

// Function to add items to the shopping cart
function addToCart() {
  rl.question('Enter the product ID you want to add to the cart: ', (productId) => {
    // Find the product by ID
    const product = products.find((p) => p.id === parseInt(productId));
    // Validate product existence
    if (!product) {
      console.log('Invalid product ID. Please try again.\n');
      showMainMenu();
      return;
    }
    // Add the product to the cart
    loggedInUser.cart.push(product);
    console.log(`${product.name} has been added to your cart.\n`);
    showMainMenu();
  });
}

// Function to calculate the total price of the cart
function calculateTotalPrice() {
  let totalPrice = 0;
  loggedInUser.cart.forEach((product) => {
    totalPrice += product.price;
  });
  console.log(`Total Price: $${totalPrice.toFixed(2)}\n`);
  showMainMenu();
}

// Function to process the order and clear the cart
function processOrder() {
  console.log(`Thank you for your purchase, ${loggedInUser.name}!`);
  console.log(`We are processing your order now.\n`);
  loggedInUser.cart = [];
  showMainMenu();
}

// Function to display the main menu
function showMainMenu() {
  console.log('--- Main Menu ---');
  console.log('[1] View Products');
  console.log('[2] Add to Cart');
  console.log('[3] Calculate Total Price');
  console.log('[4] Process Order');
  console.log('[5] Exit');
  console.log();

  rl.question('Enter your choice: ', (choice) => {
    switch (choice) {
      case '1': // View Products
        displayProducts();
        showMainMenu();
        break;
      case '2': // Add to Cart
        addToCart();
        break;
      case '3': // Calculate Total Price
        calculateTotalPrice();
        break;
      case '4': // Process Order
        processOrder();
        break;
      case '5': // Exit
        console.log('Thank you for using our online shopping platform!');
        rl.close();
        break;
      default:
        console.log('Invalid choice. Please try again.\n');
        showMainMenu();
        break;
    }
  });
}

// Application entry point
console.log('Welcome to our online shopping platform!\n');
registerUser();