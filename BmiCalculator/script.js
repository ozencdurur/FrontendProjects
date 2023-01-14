let button = document.getElementById("btn");

button.addEventListener("click", () => {
  const height = parseInt(document.getElementById("height").value);
  const weight = parseInt(document.getElementById("weight").value);
  const result = document.getElementById("output");
  let height_status = false,
    weight_status = false;
  if (height === "" || isNaN(height) || height <= 0) {
    document.getElementById("height-error").innerHTML =
      "Please provide a valid height";
  } else {
    document.getElementById("height-error").innerHTML = "";
    height_status = true;
  }
  if (weight === "" || isNaN(weight) || weight <= 0) {
    document.getElementById("weight-error").innerHTML =
      "Please provide a valid weight";
  } else {
    document.getElementById("weight-error").innerHTML = "";
    weight_status = true;
  }
  if (height_status && weight_status) {
    const bmi = weight / ((height * height) / 10000).toFixed(2);
    if (bmi < 18.6) {
      result.innerHTML = "BMI: " + bmi.toFixed(2) + " => Under Weight";
    } else if (bmi >= 18.6 && bmi < 24.9) {
      result.innerHTML = "BMI: " + bmi.toFixed(2) + " => Normal";
    } else {
      result.innerHTML = "BMI: " + bmi.toFixed(2) + " => Over Weight";
    }
  } else {
    alert("The form has errors");
    result.innerHTML = "";
  }
});
