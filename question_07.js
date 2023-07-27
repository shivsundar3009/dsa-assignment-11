function maxSlidingWindow(nums, k) {
    const result = [];
    const deque = []; // Deque to store indices of elements
  
    for (let i = 0; i < nums.length; i++) {
      // Remove elements outside of the current window from the front of the deque
      while (deque.length > 0 && deque[0] < i - k + 1) {
        deque.shift();
      }
  
      // Remove smaller elements from the back of the deque as they are no longer useful
      while (deque.length > 0 && nums[deque[deque.length - 1]] < nums[i]) {
        deque.pop();
      }
  
      // Add the current index to the back of the deque
      deque.push(i);
  
      // If the window size is reached, add the maximum element to the result array
      if (i >= k - 1) {
        result.push(nums[deque[0]]);
      }
    }
  
    return result;
  }