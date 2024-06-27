function calculate(expression) {
    try {
        const result = eval(expression); 
        if (result === 'Infinity') return 'Error';
        return result;
    } catch {
        return 'Error';
    }
}

function init() {
    const display = document.getElementById('display');
    const buttons = Array.from(document.getElementById('buttons').children);
    let calculation = '';

    buttons.map(button => {
        button.addEventListener('click', (e) => {
            let buttonText = e.target.innerText;

            if (buttonText === 'C') {
                calculation = '';
                display.value = calculation;
                return;
            }

            if (buttonText === '=') {
                calculation = calculate(calculation);
                display.value = calculation;
                return;
            }

            calculation += buttonText;
            display.value = calculation;
        });
    });
}

module.exports = { calculate, init };
