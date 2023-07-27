function makeGood(s) {
    const stack = [];
    
    for (let i = 0; i < s.length; i++) {
      const currentChar = s[i];
      
      if (stack.length > 0) {
        const prevChar = stack[stack.length - 1];
        
        // Check if the current character and the previous character form a bad pair
        if (currentChar !== prevChar && currentChar.toLowerCase() === prevChar.toLowerCase()) {
          // If they form a bad pair, remove the previous character from the stack
          stack.pop();
        } else {
          // If they don't form a bad pair, add the current character to the stack
          stack.push(currentChar);
        }
      } else {
        // If the stack is empty, add the current character to the stack
        stack.push(currentChar);
      }
    }
    
    // Join the characters in the stack to form the resulting string
    return stack.join('');
  }