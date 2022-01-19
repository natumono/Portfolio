/*
 You can change anything in these files--HTML tags, CSS styles, JavaScript functions, etc. 
 Do what you need to make it suitable for your STEM problem.

 The getInput function will take user input from the page. 
 You should call your functions from inside the getInput function.

 The writeOutput function will write some given text to the output span on the page. 
 You can call this function from your code and give it your result.
*/

// This function will get the text entered into the "input" text field.
// Then it calls another function with the input as an argument.
function getInput() {
  let inputField = document.querySelector('#input1');
  let input = inputField.value;

  let wateramount = "";
  let energyamount = "";
  let integers = "1234567890";
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  let bug = ["grasshopper","ant","acheta domestic","gryllus bimaculatus","blaptica dubia"]
  let bugAmoutOfWoter = ["10","20","0.00313","0.3621","0.313"]
  let bugAmountOfEnergy = ["20","10","0.00701","10","0.849"]
  let bugNumber = ["1","2","3","4","5","6","7","8","9","10","11"]
  let name = "";
  let number = "";

  for (let i = 0; i < input.length; i++) {
    let checkit = input.charAt(i);
    if (alphabet.indexOf(checkit) == -1) {
      if (integers.indexOf(checkit) == -1) {
        continue;
      } else {
        number += input.charAt(i)
      }
    } else {
      name += input.charAt(i)
    }
  }

  for (let i = 0; i < bug.length; i++) {
    if (name == bug[i]) {
      wateramount = bugAmoutOfWoter[i] * number;
      energyamount = bugAmountOfEnergy[i] * number;
    } else {
      continue;
    }
  }
  document.querySelector("#output1").innerHTML = wateramount;
  document.querySelector("#output2").innerHTML = energyamount;

  // do something with the input
  //writeOutput(input); // <-- replace this with YOUR CODE
};

// This function will write some text to the output span on the page.
function writeOutput(text) {
  let outputSpan = document.querySelector("#output1");
  outputSpan.textContent = text;
}

document.querySelector("#buttonGo").addEventListener("click", getInput);

