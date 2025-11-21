function calculate() {
      let datatype = document.getElementById("datatype").value;
      let val1 = document.getElementById("val1").value;
      let val2 = document.getElementById("val2").value;
      let operator = document.getElementById("operator").value;
      let result = "";

    


  if (datatype === "number") {
  let num1, num2;
  
    if (val1.includes(".") || val2.includes(".")) {
    num1 = parseFloat(val1);
    num2 = parseFloat(val2);
  } else {
    num1 = parseInt(val1);
    num2 = parseInt(val2);
  }
     switch (operator) {
          case "+": result = num1 + num2; break;
          case "-": result = num1 - num2; break;
          case "*": result = num1 * num2; break;
          case "/": result = num2 !== 0 ? num1 / num2 : "Error"; break;
          case "pow": result = Math.pow(num1, num2); break;
          default: result = "Invalid";
        }
      } else {
  let longer = val1.length >= val2.length ? val1 : val2;
  let shorter = val1.length < val2.length ? val1 : val2;
  switch (operator) {
    case "+": 
      result = val1 + val2; 
      break;
    case "-": 
      let diff = longer.length - shorter.length;
      result = longer.slice(0, diff);
      break;
    case "/": 
      if (shorter.length === 0) {
        result = "Error"; // avoid division by zero
        break;
      }
      let quotient = Math.floor(longer.length / shorter.length);
      result = longer.slice(0, quotient);
      break;
    case "*": 
      result = val1.repeat(Number(val2.length)); 
      break;
    case "pow": 
    case "%": 
      result = "N/A for strings"; 
      break;
    default: 
      result = "Invalid";
  }
}
      document.getElementById("result").value = result;
    }
