// Define the original and remapped keyboard mappings
const originalKeyboard = 'cdefghijklmnopqrstuvwxyzab';
const remappedKeyboard = 'abcdefghijklmnopqrstuvwxyz'; 

// Generate a random phrase for the player to type
function generatePhrase() {
    const phrases = [
        'hello world',
        'aaaaa',
        'remapped keyboard',
        'openai chatbot',
        'programming is fun',
        'web development',
        'keep practicing',
        'challenge yourself',
        'never give up',
    ];
    const randomIndex = Math.floor(Math.random() * phrases.length);
    return phrases[randomIndex];
}

// Remap a given character using the remapped keyboard mappings
function remapCharacter(char) {
    const lowerChar = char.toLowerCase();
    const charIndex = originalKeyboard.indexOf(lowerChar);
    if (charIndex !== -1) {
        const remappedChar = remappedKeyboard[charIndex];
        return (char === lowerChar) ? remappedChar : remappedChar.toUpperCase();
    }
    return char;
}

// Handle input event on the input box
function handleInput() {
    const inputBox = document.getElementById('inputBox');
    const result = document.getElementById('result');
    const key = Event.key;
    const enteredPhrase = inputBox.value;

    // Check if the entered phrase matches the current phrase
    if (enteredPhrase === phrase) {
        const endTime = new Date().getTime();
        const elapsedTime = (endTime - startTime) / 1000; // Time in seconds
        result.innerHTML = `Congratulations! You completed the phrase in ${elapsedTime} seconds.`;
        inputBox.disabled = true;
    }
}

// Update the phrase to be displayed and reset the game state
function updatePhrase() {
    const phraseElement = document.getElementById('phrase');
    phrase = generatePhrase();
    phraseElement.innerHTML = phrase;
    startTime = new Date().getTime();
    document.getElementById('result').innerHTML = '';
    document.getElementById('inputBox').value = '';
    document.getElementById('inputBox').disabled = false;
}

// Handle keydown event on the input box
document.getElementById('inputBox').addEventListener('keydown', function (event) {
    const inputBox = document.getElementById('inputBox');
    const enteredChar = event.key;
    const charCode = enteredChar.charCodeAt(0);
    if (enteredChar.length < 2 && (charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122)){
    console.log(enteredChar)
    const remappedChar = remapCharacter(enteredChar);

    // Prevent the default action of the entered key
    event.preventDefault();

    // Update the input box value with the remapped character
    inputBox.value += remappedChar;

    // Trigger the input event manually to handle the remapped character
    const inputEvent = new Event('input');
    inputBox.dispatchEvent(inputEvent);
    }

});

let phrase = '';
let startTime = 0;

// Initialize the game
window.onload = function () {
    updatePhrase();
};
