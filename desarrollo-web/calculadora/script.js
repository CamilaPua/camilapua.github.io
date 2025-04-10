const showResult = (result) => {
    let resultDiv = document.getElementById("result");
    resultDiv.textContent = `El resultado es ${result}`
};


const getNumbers = () => {
    let firstNumber = document.getElementById("first-number").value;
    let secondNumber = document.getElementById("second-number").value;

    if (isNaN(firstNumber) || isNaN(secondNumber)) {
        alert("Por favor, ingresa números válidos.");
        return;
    }

    firstNumber = parseFloat(firstNumber)
    secondNumber = parseFloat(secondNumber)
    return { firstNumber, secondNumber };
}


const getResult = (firstNumber, secondNumber, operationType) => {
    let result;

    switch (operationType) {
        case "addition":
            result = firstNumber + secondNumber;
            break;

        case "subtraction":
            result = firstNumber - secondNumber;
            break;

        case "multiplication":
            result = firstNumber * secondNumber;
            break;

        case "division":
            result = firstNumber / secondNumber;
            break;
    }
    return result;
}

const calculateButton = document.getElementById("calculate-button");

calculateButton.addEventListener("click", () => {
    let numbers = getNumbers();
    let firstNumber = numbers.firstNumber;
    let secondNumber = numbers.secondNumber;

    let operationType = document.getElementById("operation-type").value

    let result = getResult(firstNumber, secondNumber, operationType)
    showResult(result)
})