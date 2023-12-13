const numericalButtons = document.querySelectorAll('.numericals');
const textBox = document.querySelector('.textbox');

// Buttons for clearing and deleting
const clearButton = document.querySelector('.clear');
const deleteButton = document.querySelector('.delete');


// Holds numbers and operators that are typed by the user to calculate
let expression = '';

// Holds the last clicked number
let clickedNumber;

// Equals button
const equalsButton = document.querySelector('.equals');

// Method to append the numbers typed
const appendValue = (value) => {
    return expression += value;
}

// Method that generates the result
const generateResult = () => {
    const result = eval(expression);
    textBox.value = result;
    expression = result;
}



// Adding event listeners to numerical buttons
numericalButtons.forEach((button) => {
    button.addEventListener('click', () => {
            clickedNumber = button.textContent;
            if(clickedNumber == '%'){
                textBox.value += clickedNumber;
                clickedNumber = '/100'
            }else{
            textBox.value += clickedNumber;
            }
            appendValue(clickedNumber);
    });
});



// Adding event listener to equals button
equalsButton.addEventListener('click', () => {
    generateResult();
});



// Event listener for clearing the textbox
clearButton.addEventListener('click', () => {
    textBox.value = '';
    expression = '';
});



// Event listener for deleting the last typed character
deleteButton.addEventListener('click', () => {
    let textBoxValue = textBox.value;
    if(textBoxValue.length <= 1){
        textBox.value = '';
    }
    else{
        expression = textBoxValue.substring(0, textBoxValue.length - 1);
        textBox.value = expression;
    }
});
