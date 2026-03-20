function calculate() {
  let n = document.getElementById("subjects").value;

  let total = 0;

  for (let i = 1; i <= n; i++) {
    let marks = parseInt(prompt("Enter marks for subject " + i));
    total += marks;
  }

  let avg = total / n;
  let grade = "";
  let result = "";

  if (avg >= 75) {
    grade = "A";
  } else if (avg >= 60) {
    grade = "B";
  } else if (avg >= 50) {
    grade = "C";
  } else {
    grade = "F";
  }

  if (avg >= 50) {
    result = "PASS";
  } else {
    result = "FAIL";
  }

  document.getElementById("output").innerHTML =
    "Total Marks: " + total + "<br>" +
    "Average Marks: " + avg.toFixed(2) + "<br>" +
    "Grade: " + grade + "<br>" +
    "Result: " + result;
}
