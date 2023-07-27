function largestRectangleArea(heights) {
    const stack = []; // Stack to keep track of indices of bars
    let maxArea = 0;
    let i = 0;
  
    while (i < heights.length) {
      if (stack.length === 0 || heights[i] >= heights[stack[stack.length - 1]]) {
        // If the stack is empty or the current height is greater than or equal to the bar at the top of the stack
        // Push the current index to the stack and move to the next index
        stack.push(i);
        i++;
      } else {
        // If the current height is smaller than the bar at the top of the stack
        // Pop the bar from the stack and calculate the area with the popped bar as the smallest bar
        const topIndex = stack.pop();
        const width = stack.length === 0 ? i : i - stack[stack.length - 1] - 1;
        const area = heights[topIndex] * width;
        maxArea = Math.max(maxArea, area);
      }
    }
  
    while (stack.length > 0) {
      // After processing all bars, calculate the area for the remaining bars in the stack
      const topIndex = stack.pop();
      const width = stack.length === 0 ? i : i - stack[stack.length - 1] - 1;
      const area = heights[topIndex] * width;
      maxArea = Math.max(maxArea, area);
    }
  
    return maxArea;
  }
  