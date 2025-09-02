const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');

let currentInput = '';
let resetNext = false;

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const action = button.getAttribute('data-action');

    if (action === 'clear') {
      currentInput = '';
      display.textContent = '0';
    } else if (action === 'back') {
      currentInput = currentInput.slice(0, -1);
      display.textContent = currentInput || '0';
    } else if (action === '=') {
      try {
        currentInput = eval(currentInput).toString();
        display.textContent = currentInput;
        resetNext = true;
      } catch {
        display.textContent = 'Error';
        currentInput = '';
      }
    } else {
      if (resetNext) {
        currentInput = '';
        resetNext = false;
      }
      currentInput += action;
      display.textContent = currentInput;
    }
  });
});