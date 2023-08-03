const data = document.getElementById("inputdata");
const btnEnter = document.getElementById("enter");
const btnRestart = document.getElementById("restart");
const result = document.getElementById("result");
const history = document.getElementById("historyId");
let input = false;
window.onload = function () {
  randNum = Math.floor(Math.random() * 100);
  console.log(randNum);
  if (data.value != "") {
    data.value = "";
  }
};
let guessList = [];
btnEnter.addEventListener("click", () => {
  if (data.value != "") {
    input = true;
    console.log(input);
  } else {
    input = false;
    console.log(input);
  }
  let userData = data.value;
  if (userData == randNum) {
    result.innerHTML = "Correct guess";
    guess = "Your guess is Correct";
  } else if (userData > randNum) {
    guess = "Your guess is higher";
    result.innerHTML = "Higher guess";
  } else if (userData < randNum) {
    result.innerHTML = "Lower guess";
    guess = "Your guess is Lower";
  } else {
    result.innerHTML = "invalid input";
  }
  if (!input) {
    btnEnter.innerHTML = "Enter";
  } else {
    btnEnter.innerHTML = "Check";
  }
  history.innerHTML = `<div>${guess}</div>`;
  displayHis(userData);
  displayHistory();
});
btnRestart.addEventListener("click", () => {
  if (data.value != "") {
    data.value = "";
    randNum = Math.floor(Math.random() * 100);
  }
  history.innerHTML = "";
  guessList = []
});

function displayHis(guess1) {
  guessList.push(guess1);
  console.log(guessList);
}

function displayHistory() {
  let index = 0;
  let list = "<ul>";
  while (index < guessList.length) {
    list += "<li id='aa'> Your guess is " + guessList[index] + "</li>";
    index++;
  }
  list += `</ul>`;
  history.innerHTML = list;
}
