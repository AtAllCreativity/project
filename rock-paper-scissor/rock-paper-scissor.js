document.addEventListener('DOMContentLoaded', function () {
    const btnStart = document.getElementById('btnStart');
    const btnRock = document.getElementById('btnRock');
    const btnPaper = document.getElementById('btnPaper');
    const btnScissor = document.getElementById('btnScissor');

    btnStart.addEventListener('click', () => {
        btnRock.classList.remove('hidden');
        btnPaper.classList.remove('hidden');
        btnScissor.classList.remove('hidden');

        let startMessage = document.createElement('h2');
        let startMessageNode = document.createTextNode('Which one would you like to select? \nRock, Paper or Scissor?');
        startMessage.appendChild(startMessageNode);
        let elementStartMessage = document.getElementById('containerAnswer');

        let existingMessage = document.querySelector('#containerAnswer h2');

        if (existingMessage) {
            existingMessage.remove();
        };

        elementStartMessage.appendChild(startMessage);
    });

    function getComputerChoice() {
        const randomNumberComputer = Math.floor(Math.random() * 3);
        
        if (randomNumberComputer === 0) {
        return 'Rock';
        } else if (randomNumberComputer === 1) {
        return 'Paper';
        } else {
        return 'Scissor';
        };
    };

    btnRock.addEventListener('click', () => {
        const computerChoice = getComputerChoice();
        let startMessageNode = 'The computer has chosen ' + computerChoice + '. ';

        if (computerChoice === 'Rock') {
            startMessageNode += 'It\'s a tie!';
        } else if (computerChoice === 'Paper') {
            startMessageNode += 'You lose!';
        } else {
            startMessageNode += 'You win!';
        };

        let startMessage = document.createElement('h3');
        let startMessageTextNode = document.createTextNode(startMessageNode);
        startMessage.appendChild(startMessageTextNode);
        let elementStartMessage = document.getElementById('containerAnswer');

        let existingMessage = document.querySelector('#containerAnswer h3');

        if (existingMessage) {
            existingMessage.remove();
        }

        elementStartMessage.appendChild(startMessage);

    });

    btnPaper.addEventListener('click', () => {
        const computerChoice = getComputerChoice();
        let startMessageNode = 'The computer has chosen ' + computerChoice + '. ';
        
        if (computerChoice === 'Paper') {
            startMessageNode += 'It\'s a tie!';
        } else if (computerChoice === 'Rock') {
            startMessageNode += 'You win';
        } else {
            startMessageNode += 'You lose!';
        };

        let startMessage = document.createElement('h3');
        let startMessageTextNode = document.createTextNode(startMessageNode);
        startMessage.appendChild(startMessageTextNode);
        let elementStartMessage = document.getElementById('containerAnswer');

        let existingMessage = document.querySelector('#containerAnswer h3');

        if (existingMessage) {
            existingMessage.remove();
        }

        elementStartMessage.appendChild(startMessage);
    });

    btnScissor.addEventListener('click', () => {
        const computerChoice = getComputerChoice();
        let startMessageNode = 'The computer has chosen ' + computerChoice + '. ';

        if (computerChoice === 'Scissor') {
            startMessageNode += 'It\'s a tie';
        } else if (computerChoice === 'Paper') {
            startMessageNode += 'You win!';
        } else {
            startMessageNode += 'You lose!';
        };

        let startMessage = document.createElement('h3');
        let startMessageTextNode = document.createTextNode(startMessageNode);
        startMessage.appendChild(startMessageTextNode);
        let elementStartMessage = document.getElementById('containerAnswer');

        let existingMessage = document.querySelector('#containerAnswer h3');

        if (existingMessage) {
            existingMessage.remove();
        }

        elementStartMessage.appendChild(startMessage);
    });


});


    
