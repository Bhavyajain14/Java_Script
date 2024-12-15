const input = document.getElementById("inputBox");
const buttons = document.querySelectorAll("button");

let currentExpression = "";
let memory = 0;

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const value = e.target.textContent;

    switch (value) {
      case "=":
        try {
          currentExpression = eval(currentExpression).toString();
        } catch {
          currentExpression = "Error";
        }
        break;
      case "AC":
        currentExpression = "";
        break;
      case "DEL":
        currentExpression = currentExpression.slice(0, -1);
        break;
      case "%":
        currentExpression = (eval(currentExpression) / 100).toString();
        break;
      case "√":
        currentExpression = Math.sqrt(eval(currentExpression)).toString();
        break;
      case "M+":
        memory += eval(currentExpression);
        break;
      case "M-":
        memory -= eval(currentExpression);
        break;
      case "MR":
        currentExpression = memory.toString();
        break;
      case "MC":
        memory = 0;
        break;
      default:
        if (currentExpression === "Error") currentExpression = "";
        currentExpression += value;
    }
    input.value = currentExpression || "0";
  });
});
