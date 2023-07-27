class StockSpanner {
    constructor() {
      this.prices = []; // Array to store the stock prices
      this.spans = []; // Array to store the spans for each stock price
    }
  
    next(price) {
      let span = 1; // Initialize the span for the current price to 1
  
      while (this.prices.length > 0 && price >= this.prices[this.prices.length - 1]) {
        // Pop the previous prices and their spans from the stack if the current price is greater or equal
        // Calculate the total span for the current price
        span += this.spans[this.spans.length - 1];
        this.prices.pop();
        this.spans.pop();
      }
  
      this.prices.push(price); // Push the current price and its span to the stack
      this.spans.push(span);
      
      return span;
    }
  }