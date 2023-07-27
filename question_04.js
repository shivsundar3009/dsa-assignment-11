
let timeRequiredToBuy = function(tickets, k) {
    const n = tickets.length;
    let time = 0;
    
    while (tickets[k] > 0) {
      for (let i = 0; i < n; i++) {
        if (tickets[i] > 0) {
          // Buy one ticket for the current person
          tickets[i]--;
          time++;
  
          // If the person at position k has finished buying tickets, return the time
          if (i === k && tickets[k] === 0) {
            return time;
          }
        }
      }
    }
  
    return -1; // If the person at position k cannot finish buying tickets, return -1
  };