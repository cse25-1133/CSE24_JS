function calculate() {
  let inputs = document.getElementsByClassName("marks");

  let total = 0;

  for (let i = 0; i < inputs.length; i++) {
    let value = Number(inputs[i].value);

    if (inputs[i].value === "") {
      alert("Please enter all 4 subject marks!");
      return;
    }

    total += value;
  }

  let average = total / 4;

  let grade = "";

  if (average >= 90) grade = "A+";
  else if (average >= 75) grade = "A";
  else if (average >= 60) grade = "B";
  else if (average >= 40) grade = "C";
  else grade = "F";

  document.getElementById("result").innerHTML =
    "Total: " + total +
    "<br>Average: " + average.toFixed(2) +
    "<br>Grade: " + grade;
}