// List of random quotes
const quotes = [
    "The best way to predict the future is to invent it.",
    "Life is 10% what happens to us and 90% how we react to it.",
    "Your time is limited, so don’t waste it living someone else’s life.",
    "The only way to do great work is to love what you do.",
    "Success is not the key to happiness. Happiness is the key to success.",
    "You miss 100% of the shots you don’t take.",
    "Don’t wait. The time will never be just right.",
    "Dream big and dare to fail."
];

// Select elements
const quoteElement = document.getElementById("quote");
const generateButton = document.getElementById("generateButton");

// Function to generate a random quote
function generateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    quoteElement.textContent = quotes[randomIndex];
}

// Add event listener
generateButton.addEventListener("click", generateQuote);
