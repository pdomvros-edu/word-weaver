alert("Hello from JavaScript!");
// script.js

const gameData = {
    base_words: [
        {
            word: "test",
            level: "B2",
            derivatives: [
                { word: "testing", level: "B2", definition: "The action or process of putting something to the test." }
            ]
        },
        {
            word: "play",
            level: "C1",
            derivatives: [
                { word: "playing", level: "C1", definition: "Engaging in activity for enjoyment and recreation rather than a serious or practical purpose." }
            ]
        }
    ],
    common_prefixes: ["un-", "re-"],
    common_suffixes: ["-ing", "-er"]
};

// DOM Elements
const wordSelectionScreen = document.getElementById('wordSelectionScreen');
const baseWordSelectionGrid = document.getElementById('baseWordSelectionGrid');
const gameScreen = document.getElementById('gameScreen');

const baseWordDisplay = document.getElementById('baseWordDisplay');
const prefixList = document.getElementById('prefixList');
const suffixList = document.getElementById('suffixList');
const wordConstructionArea = document.getElementById('wordConstructionArea');
const buildWordBtn = document.getElementById('buildWordBtn');
const resetWordBtn = document.getElementById('resetWordBtn');
const nextWordBtn = document.getElementById('nextWordBtn');
const feedbackMessage = document.getElementById('feedbackMessage');
const scoreDisplay = document.getElementById('scoreDisplay');
const foundWordsList = document.getElementById('foundWordsList');

let currentBaseWordData = null;
let foundWordsForCurrentBase = new Set();
let totalScore = 0;

// State for building a word
let selectedPrefix = null;
let selectedSuffix = null;
let constructedWord = ''; // The actual word string built for checking

// --- Screen Management ---
function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.add('hidden');
    });
    document.getElementById(screenId).classList.remove('hidden');
}

// --- Game Initialization ---
function initGame() {
    renderBaseWordSelection();
    showScreen('wordSelectionScreen');
    updateScoreDisplay();
}

function renderBaseWordSelection() {
    baseWordSelectionGrid.innerHTML = ''; // Clear existing content
    gameData.base_words.forEach(wordData => {
        const button = document.createElement('button');
        button.classList.add('word-select-btn');
        // Ensure wordData.word and wordData.level exist and are strings
        button.innerHTML = `${wordData.word} <span class="word-level ${wordData.level}">${wordData.level}</span>`;
        button.onclick = () => selectBaseWord(wordData);
        baseWordSelectionGrid.appendChild(button);
    });
}

function selectBaseWord(wordData) {
    currentBaseWordData = wordData;
    foundWordsForCurrentBase.clear(); // Reset found words for new base word
    foundWordsList.innerHTML = ''; // Clear the displayed list
    totalScore = 0; // Reset score for a new game session on a new word
    updateScoreDisplay();
    resetWordConstruction();
    renderAffixes();
    baseWordDisplay.textContent = currentBaseWordData.word;
    showScreen('gameScreen');
    feedbackMessage.textContent = ''; // Clear previous feedback
}

function renderAffixes() {
    prefixList.innerHTML = '';
    gameData.common_prefixes.forEach(prefix => {
        const span = document.createElement('span');
        span.classList.add('affix-item');
        span.textContent = prefix;
        span.onclick = () => selectAffix(prefix, 'prefix', span);
        prefixList.appendChild(span);
    });

    suffixList.innerHTML = '';
    gameData.common_suffixes.forEach(suffix => {
        const span = document.createElement('span');
        span.classList.add('affix-item');
        span.textContent = suffix;
        span.onclick = () => selectAffix(suffix, 'suffix', span);
        suffixList.appendChild(span);
    });
}

function selectAffix(affix, type, element) {
    // Deselect previous affix of the same type
    if (type === 'prefix' && selectedPrefix) {
        const prevSelected = document.querySelector(`.affix-item.selected[data-affix="${selectedPrefix}"]`);
        if (prevSelected) prevSelected.classList.remove('selected');
    } else if (type === 'suffix' && selectedSuffix) {
        const prevSelected = document.querySelector(`.affix-item.selected[data-affix="${selectedSuffix}"]`);
        if (prevSelected) prevSelected.classList.remove('selected');
    }

    // Toggle selection
    if (element.classList.contains('selected')) {
        element.classList.remove('selected');
        element.removeAttribute('data-affix');
        if (type === 'prefix') selectedPrefix = null;
        else selectedSuffix = null;
    } else {
        element.classList.add('selected');
        element.setAttribute('data-affix', affix); // Store affix value for deselection
        if (type === 'prefix') selectedPrefix = affix;
        else selectedSuffix = affix;
    }

    updateWordConstructionArea();
}

function updateWordConstructionArea() {
    wordConstructionArea.innerHTML = '';

    const parts = [];
    if (selectedPrefix) {
        parts.push({ type: 'prefix', value: selectedPrefix.slice(0, -1) }); // Remove hyphen
    }
    parts.push({ type: 'base', value: currentBaseWordData.word });
    if (selectedSuffix) {
        parts.push({ type: 'suffix', value: selectedSuffix.slice(1) }); // Remove hyphen
    }

    parts.forEach(part => {
        const span = document.createElement('span');
        span.classList.add('construction-part', part.type);
        span.textContent = part.value;
        wordConstructionArea.appendChild(span);
    });

    // Automatically build the word string for check, but don't show it yet
    constructedWord = parts.map(p => p.value).join('').toLowerCase();
}

function resetWordConstruction() {
    selectedPrefix = null;
    selectedSuffix = null;
    constructedWord = '';
    wordConstructionArea.innerHTML = ''; // Clear visual construction area
    // Always show the base word in the construction area
    if (currentBaseWordData) {
        wordConstructionArea.innerHTML = `<span class="construction-part base">${currentBaseWordData.word}</span>`;
    }

    // Remove 'selected' class from all affix items
    document.querySelectorAll('.affix-item.selected').forEach(item => {
        item.classList.remove('selected');
        item.removeAttribute('data-affix');
    });
    feedbackMessage.textContent = ''; // Clear feedback
}

function buildAndCheckWord() {
    // Only proceed if there's a selected prefix OR suffix (or both)
    if (!selectedPrefix && !selectedSuffix) {
        showFeedback("Please select at least one affix to build a new word!", 'incorrect');
        return;
    }

    if (constructedWord === currentBaseWordData.word.toLowerCase()) {
        showFeedback("That's the base word! Try combining affixes.", 'incorrect');
        return;
    }

    if (foundWordsForCurrentBase.has(constructedWord)) {
        showFeedback("You've already found that word!", 'incorrect');
        resetWordConstruction();
        return;
    }

    const foundDerivative = currentBaseWordData.derivatives.find(d => d.word.toLowerCase() === constructedWord);

    if (foundDerivative) {
        showFeedback("Correct! You found a new word!", 'correct');
        totalScore += 10; // Award points
        foundWordsForCurrentBase.add(constructedWord);
        addWordToFoundList(foundDerivative);
        updateScoreDisplay();
        resetWordConstruction(); // Clear for next word
    } else {
        showFeedback(`"${constructedWord}" is not a valid word or not derivable from "${currentBaseWordData.word}".`, 'incorrect');
        // Optionally, don't reset immediately, let them correct it
    }
}

function addWordToFoundList(derivative) {
    const li = document.createElement('li');
    li.innerHTML = `
        <span class="word">${derivative.word}</span>
        <span class="level ${derivative.level}">${derivative.level}</span>
        <span class="definition">${derivative.definition}</span>
    `;
    foundWordsList.prepend(li); // Add to the top of the list
}

function updateScoreDisplay() {
    const foundCount = foundWordsForCurrentBase.size;
    const totalPossible = currentBaseWordData ? currentBaseWordData.derivatives.length : 0;
    scoreDisplay.textContent = `Score: ${totalScore} | Words Found: ${foundCount} / ${totalPossible}`;
}

function showFeedback(message, type) {
    feedbackMessage.textContent = message;
    feedbackMessage.className = `feedback ${type}`; // Apply class for styling
}

// --- Event Listeners ---
buildWordBtn.addEventListener('click', buildAndCheckWord);
resetWordBtn.addEventListener('click', resetWordConstruction);

nextWordBtn.addEventListener('click', () => {
    // Go back to the word selection screen
    showScreen('wordSelectionScreen');
    currentBaseWordData = null; // Clear current word data
    // Optionally, reset total score if you want score per word selected
    totalScore = 0; // Reset total score when changing base word
    updateScoreDisplay();
    renderBaseWordSelection(); // Re-render in case you add more words dynamically
});

// --- Start the game ---
initGame();
