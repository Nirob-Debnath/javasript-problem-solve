// Problem 10: PingPong Challenge
function pingPong() {
  for (let i = 1; i <= 20; i++) {      // Loop from 1 to 20
    if (i % 3 === 0 && i % 5 === 0) {  // If divisible by both 3 and 5
      console.log("PingPong");
    } else if (i % 3 === 0) {          // If divisible by 3 only
      console.log("Ping");
    } else if (i % 5 === 0) {          // If divisible by 5 only
      console.log("Pong");
    } else {                           // Otherwise, just print the number
      console.log(i);
    }
  }
}

pingPong();