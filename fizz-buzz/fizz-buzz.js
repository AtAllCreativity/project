const textBox = document.querySelector("#textBox");
const output = document.querySelector("#output");

document.querySelector("#button-input").addEventListener("click", () => {
    const inputText = textBox.value;
    const number = parseInt(inputText);

    if (isNaN(number)) {
        output.textContent = "Please enter a valid number.";
    } else if (number % 3 === 0 && number % 5 === 0) {
        output.textContent = "Fizz-Buzz";
    } else if (number % 3 === 0) {
        output.textContent = "Fizz";
    } else if (number % 5 === 0) {
        output.textContent = "Buzz";
    } else {
        output.textContent = inputText;
    }
});