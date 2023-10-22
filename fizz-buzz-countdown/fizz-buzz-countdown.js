const textBox = document.querySelector("#textBox");

document.querySelector("#button-input").addEventListener("click", () => {
    const inputText = textBox.value;
    const number = parseInt(inputText);

    for (let i = 1; i <= number; i++) {  
        if (i % 3 === 0 && i % 5 === 0) {
            output.innerHTML += "Fizz Buzz";
        } else if (i % 3 === 0) {
            output.innerHTML += "Fizz" + ", ";
        } else if (i % 5 === 0) {
            output.innerHTML += "Buzz" + ", ";
        } else {
            output.innerHTML += i + ", ";
        }                   
    }
});

