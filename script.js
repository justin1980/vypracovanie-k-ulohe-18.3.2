function calculate() {
    var number1 = parseFloat(document.getElementById("number1").value);
    var number2 = parseFloat(document.getElementById("number2").value);
    var operation = document.getElementById("operation").value;
    var result;
  
    switch (operation) {
      case "+":
        result = number1 + number2;
        break;
      case "-":
        result = number1 - number2;
        break;
      case "*":
        result = number1 * number2;
        break;
      case "/":
        result = number1 / number2;
        break;
      default:
        result = "Nesprávna operácia";
    }
  
    var history = localStorage.getItem("history");
    if (history) {
      history = JSON.parse(history);
    } else {
      history = [];
    }
  
    var calculation = number1 + " " + operation + " " + number2 + " = " + result;
    history.push(calculation);
  
    if (history.length > 5) {
      history.shift();
    }
  
    localStorage.setItem("history", JSON.stringify(history));
  
    var historyElement = document.getElementById("history");
    historyElement.innerHTML = "";
  
    for (var i = history.length - 1; i >= 0; i--) {
      var p = document.createElement("p");
      p.textContent = history[i];
      historyElement.appendChild(p);
    }
  }
  
  
  