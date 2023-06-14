for (let i = 1; i <= 100; i++) {
    let square = document.createElement("div");
    square.classList.add("square");
  
    if (i % 3 === 0 && i % 5 === 0) {
      square.classList.add("fizzbuzz");
      square.textContent = "FizzBuzz";
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      square.classList.add("fizz");
      square.textContent = "Fizz";
      console.log("Fizz");
    } else if (i % 5 === 0) {
      square.classList.add("buzz");
      square.textContent = "Buzz";
      console.log("Buzz");
    } else {
      square.textContent = i;
      console.log(i);
    }
  
    document.getElementById("container").appendChild(square);
  
    
    if (i % 10 === 0) {
      document.getElementById("container").appendChild(document.createElement("br"));
    }
  }
  