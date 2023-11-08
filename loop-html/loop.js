document.querySelector('#button-input').addEventListener('click', () => {
    const textBoxWord = document.querySelector('#textBoxWord');
    const textBoxTimes = document.querySelector('#textBoxTimes');
    const resultContainer = document.querySelector('.container')
    
    const word = textBoxWord.value;
    const times = parseInt(textBoxTimes.value);

    if (isNaN(times) || times < 1) {
        resultContainer.innerHTML = 'Please, use a positive integer';
    } else {
        let repeatText = '';
        for (let i = 0; i < times; i++) {
            repeatText += word + '';
        }

        resultContainer.innerHTML = 'Result: ' + repeatText;
    }
});
