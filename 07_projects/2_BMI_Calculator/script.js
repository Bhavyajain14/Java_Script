const from = document.querySelector("form");

from.addEventListener("submit", function (e) {
  e.preventDefault();
  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const results = document.querySelector("#results");

  if (height === " " || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`;
  } else if (weight === " " || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight ${weight}`;
  } else {
    const BMI = (weight / ((height * height) / 10000)).toFixed(2);
    results.innerHTML = `<span>${BMI}</span>`;
    if (BMI < 18.6) {
      results.innerHTML = `Under Weight ${BMI}`;
    }
    if (BMI > 24.9) {
      results.innerHTML = `Over Weight ${BMI}`;
    } else {
      results.innerHTML = `Normal range ${BMI}`;
    }
  }
});
