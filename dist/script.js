const beginningCountInput = document.getElementById("beginning-count");
const endCountInput = document.getElementById("end-count");
const separationsInput = document.getElementById("separations");
const errorMessage = document.getElementById("error-message");
const resultDiv = document.getElementById("result");

const calculateTurnoverRate = () => {
  const beginningCount = beginningCountInput.value.trim();
  const endCount = endCountInput.value.trim();
  const separations = separationsInput.value.trim();

  let error = "";
  let turnoverRate = "";

  if (!beginningCount && !endCount && !separations) {
    // If all fields are empty, do nothing
    return;
  }

  if (!beginningCount) {
    error = "Please enter the total number of employees at the beginning of the time period";
  } else if (!endCount) {
    error = "Please enter the total number of employees at the end of the time period";
  } else if (!separations) {
    error = "Please enter the number of separations during the time period";
  } else {
    const averageCount = (parseInt(beginningCount) + parseInt(endCount)) / 2;
    turnoverRate = ` ${(parseInt(separations) / averageCount) * 100}`;
    turnoverRate = parseFloat(turnoverRate).toFixed(1) + "%";
  }

  errorMessage.innerHTML = error;
  resultDiv.innerHTML = turnoverRate ? `<div class="resulttext">The employee turnover rate is</div><div class="resultans">${turnoverRate}</div>` : "";
};

let timeoutId;
const handleInputChange = () => {
  clearTimeout(timeoutId);
  timeoutId = setTimeout(calculateTurnoverRate, 1000);
};

beginningCountInput.addEventListener("input", handleInputChange);
endCountInput.addEventListener("input", handleInputChange);
separationsInput.addEventListener("input", handleInputChange);