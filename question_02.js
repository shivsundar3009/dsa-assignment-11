function removeDuplicates(s) {
    const stack = [];
  
    for (let char of s) {
      // Check if the current character is equal to the top character of the stack
      if (stack.length > 0 && char === stack[stack.length - 1]) {
        // If they are equal, remove the top character from the stack
        stack.pop();
      } else {
        // If they are not equal, add the current character to the stack
        stack.push(char);
      }
    }
  
    // Join the characters in the stack to form the resulting string
    return stack.join('');
  }