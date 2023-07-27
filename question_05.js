class ProductOfNumbers {
    constructor() {
      this.numbers = []; // Array to store the numbers in the stream
      this.product = 1; // Variable to keep track of the running product
    }
  
    add(num) {
      if (num === 0) {
        // If the new number is 0, reset the array and the running product
        this.numbers = [];
        this.product = 1;
      } else {
        this.numbers.push(num);
        this.product *= num;
      }
    }
  
    getProduct(k) {
      const n = this.numbers.length;
      // Calculate the product of the last k numbers using the running product
      return this.product / (this.numbers[n - k] || 1);
    }
  }