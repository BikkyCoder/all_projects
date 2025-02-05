// Calculator Implementation in JavaScript

// Create the structure for the calculator
const calculatorApp = () => {
    // Create a container for the calculator
    const container = document.createElement('div');
    container.id = 'calculator';
    container.style.cssText = 'width: 300px; margin: 50px auto; text-align: center; border: 1px solid #ccc; border-radius: 10px; padding: 20px; background-color: #f9f9f9; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1)';
  
    // Create display
    const display = document.createElement('input');
    display.id = 'display';
    display.type = 'text';
    display.disabled = true;
    display.style.cssText = 'width: 100%; height: 40px; font-size: 18px; margin-bottom: 10px; text-align: right; padding: 0 10px';
    container.appendChild(display);
  
    // Create buttons
    const buttons = [
      '7', '8', '9', '/',
      '4', '5', '6', '*',
      '1', '2', '3', '-',
      'C', '0', '=', '+'
    ];
  
    const buttonsContainer = document.createElement('div');
    buttonsContainer.style.cssText = 'display: grid; grid-template-columns: repeat(4, 1fr); gap: 10px';
  
    buttons.forEach(button => {
      const btn = document.createElement('button');
      btn.textContent = button;
      btn.style.cssText = 'height: 50px; font-size: 18px; border: none; background-color: #e0e0e0; border-radius: 5px; cursor: pointer';
      
      btn.addEventListener('click', () => handleButtonClick(button));
      
      buttonsContainer.appendChild(btn);
    });
  
    container.appendChild(buttonsContainer);
    document.body.appendChild(container);
  
    // Handle button clicks
    const handleButtonClick = (button) => {
      if (button === 'C') {
        display.value = '';
      } else if (button === '=') {
        try {
          display.value = eval(display.value) || '';
        } catch {
          display.value = 'Error';
        }
      } else {
        display.value += button;
      }
    };
  };
  
  // Initialize the calculator
  calculatorApp();
  