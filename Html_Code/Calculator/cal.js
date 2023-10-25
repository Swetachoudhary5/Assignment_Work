document.addEventListener("DOMContentLoaded", function () {
 
    const inputBox = document.getElementById("inputBox");
    const buttons = document.querySelectorAll("button");

    let currentInput = "";

    buttons.forEach(button => {
        button.addEventListener("click", (event) => {
            const buttonValue = event.target.innerText;

            if (buttonValue === "=") {
                // Perform calculation based on the currentInput and update inputBox
                try {
                    currentInput = eval(currentInput);
                } catch (error) {
                    currentInput = "Error";
                }
            } else if (buttonValue === "AC") {
                // Clear the input
                currentInput = "";
            } else if (buttonValue === "DEL") {
                // Remove the last character
                 currentInput = currentInput.slice(0, -1);
            } else {
                // Append the button value to the current input
                currentInput += buttonValue;
            }

            inputBox.value = currentInput;
        });
    });
});


