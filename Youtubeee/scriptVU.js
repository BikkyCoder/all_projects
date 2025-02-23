let number = 0;

// Function to Update Number
function updateNumber(newValue) {
    number = newValue; // Value Update
    updateHTML(); // HTML Update Function Call
}

// Function to Reflect Change in HTML
function updateHTML() {
    let numberElement = document.getElementById("version");
    if (numberElement) {
        numberElement.textContent = number; // HTML me Update
    }
}

// Ensure Karo Ki Page Load Hote Hi Value Set Ho
document.addEventListener("DOMContentLoaded", updateHTML);