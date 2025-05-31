// script.js

const gameData = {
    base_words: [
        {
            word: "govern",
            level: "B2",
            derivatives: [
                { word: "government", level: "B2", definition: "The group of people with the authority to govern a country or state; a particular administration." },
                { word: "governance", level: "C1", definition: "The action or manner of governing a state, organization, etc." },
                { word: "governor", level: "B2", definition: "An official chosen to govern a province, state, or town." },
                { word: "governmental", level: "C1", definition: "Relating to government." },
                { word: "ungovernable", level: "C2", definition: "(of a person or a situation) impossible to control or manage." },
                { word: "misgovern", level: "C1", definition: "To govern badly." },
                { word: "misgovernment", level: "C2", definition: "Bad or corrupt government." },
                { word: "regovern", level: "C2", definition: "To govern again or anew. (Less common but possible)" }
            ]
        },
        {
            word: "national",
            level: "B2",
            derivatives: [
                { word: "nation", level: "B2", definition: "A large body of people united by common descent, history, culture, or language, inhabiting a particular country or territory." },
                { word: "nationality", level: "B2", definition: "The status of belonging to a particular nation." },
                { word: "nationalize", level: "C1", definition: "Transfer (a major industry or company) from private to state ownership or control." },
                { word: "nationalism", level: "C1", definition: "Identification with one's own nation and support for its interests, especially to the exclusion or detriment of the interests of other nations." },
                { word: "international", level: "B2", definition: "Existing or occurring between two or more nations." },
                { word: "denationalize", level: "C2", definition: "To transfer (an industry or business) from public to private ownership." },
                { word: "multinational", level: "C1", definition: "Including or involving several countries or nationalities." },
                { word: "nationalist", level: "C1", definition: "A person who advocates political independence for a country." }
            ]
        },
        {
            word: "act",
            level: "B2",
            derivatives: [
                { word: "action", level: "B2", definition: "The fact or process of doing something, typically to achieve an aim." },
                { word: "active", level: "B2", definition: "Engaged in action or movement; not passive." },
                { word: "actor", level: "B2", definition: "A person whose profession is acting on the stage, in films, or on television." },
                { word: "actress", level: "B2", definition: "A female actor." },
                { word: "activity", level: "B2", definition: "The condition in which things are happening or being done." },
                { word: "inactive", level: "B2", definition: "Not engaging in or involving any or much physical activity." },
                { word: "react", level: "C1", definition: "Respond to something." },
                { word: "reaction", level: "C1", definition: "An action performed or a feeling experienced in response to a situation or event." },
                { word: "reactivate", level: "C2", definition: "To make something active again." },
                { word: "overact", level: "C1", definition: "Act in an exaggerated way." },
                { word: "enact", level: "C1", definition: "To make (a bill or other proposal) law." },
                { word: "enactment", level: "C2", definition: "The process of passing legislation." },
                { word: "interact", level: "C1", definition: "Act in such a way as to have an effect on another; act reciprocally." },
                { word: "interaction", level: "C1", definition: "Reciprocal action or influence." }
            ]
        },
        {
            word: "connect",
            level: "B2",
            derivatives: [
                { word: "connection", level: "B2", definition: "A relationship in which a person, thing, or idea is linked or associated with something else." },
                { word: "connected", level: "B2", definition: "Brought into contact with someone or something; joined together." },
                { word: "disconnect", level: "B2", definition: "Break the connection of or from." },
                { word: "disconnection", level: "C1", definition: "The state of being disconnected." },
                { word: "reconnect", level: "C1", definition: "Connect again or anew." },
                { word: "connectivity", level: "C2", definition: "The state or extent of being connected or interconnected." }
            ]
        },
        {
            word: "happy",
            level: "B2",
            derivatives: [
                { word: "happiness", level: "B2", definition: "The state of being happy." },
                { word: "unhappy", level: "B2", definition: "Not happy." },
                { word: "unhappiness", level: "C1", definition: "The state of being unhappy." },
                { word: "happily", level: "B2", definition: "In a happy way; with happiness." }
            ]
        }
    ],
    common_prefixes: ["un-", "dis-", "re-", "pre-", "mis-", "co-", "in-", "im-", "il-", "ir-", "de-", "ex-", "sub-", "inter-", "over-", "under-", "anti-", "auto-", "bi-", "non-", "post-", "pro-", "trans-", "semi-"],
    common_suffixes: ["-ment", "-tion", "-sion", "-able", "-ible", "-ly", "-ness", "-ful", "-less", "-er", "-or", "-ist", "-ism", "-ity", "-ive", "-al", "-ic", "-ize", "-ify", "-en", "-dom", "-ship", "-ence", "-ancy", "-ant", "-ent"]
};

// DOM Elements
const baseWordDisplay = document.getElementById('baseWordDisplay');
const prefixList = document.getElementById('prefixList');
const suffixList = document.getElementById('suffixList');
const wordInput = document.getElementById('wordInput');
const checkWordBtn = document.getElementById('checkWordBtn');
const nextWordBtn = document.getElementById('nextWordBtn');
const feedbackMessage = document.getElementById('feedbackMessage');
const scoreDisplay = document.getElementById('scoreDisplay');
const foundWordsList = document.getElementById('foundWordsList');

let currentBaseWordIndex = 0;
let currentBaseWordData = null;
let foundWordsForCurrentBase = new Set();
let totalScore = 0;

// --- Game Initialization ---
function initGame() {
    loadBaseWord();
    renderAffixes();
    updateScoreDisplay();
}

function loadBaseWord() {
    if (currentBaseWordIndex >= gameData.base_words.length) {
        // All words completed
        baseWordDisplay.textContent = "Game Over! You've completed all words.";
        wordInput.style.display = 'none';
        checkWordBtn.style.display = 'none';
        nextWordBtn.textContent = 'Play Again';
        feedbackMessage.textContent = '';
        foundWordsList.innerHTML = '';
        return;
    }

    currentBaseWordData = gameData.base_words[currentBaseWordIndex];
    baseWordDisplay.textContent = currentBaseWordData.word;
    foundWordsForCurrentBase.clear(); // Reset found words for new base word
    foundWordsList.innerHTML = ''; // Clear the displayed list
    updateScoreDisplay();
    feedbackMessage.textContent = ''; // Clear previous feedback
    wordInput.value = ''; // Clear input field
    wordInput.style.display = 'flex'; // Ensure input is visible
    checkWordBtn.style.display = 'block'; // Ensure button is visible
    nextWordBtn.textContent = 'Next Base Word';
}

function renderAffixes() {
    prefixList.innerHTML = '';
    gameData.common_prefixes.forEach(prefix => {
        const span = document.createElement('span');
        span.classList.add('affix-item');
        span.textContent = prefix;
        span.onclick = () => {
            const currentVal = wordInput.value;
            // Prevent adding prefix if word already starts with it to avoid double prefixes
            if (!currentVal.startsWith(prefix.slice(0, -1))) { // slice to remove the hyphen for check
                wordInput.value = prefix.slice(0, -1) + currentVal; // Add prefix without hyphen first, then adjust
            }
        };
        prefixList.appendChild(span);
    });

    suffixList.innerHTML = '';
    gameData.common_suffixes.forEach(suffix => {
        const span = document.createElement('span');
        span.classList.add('affix-item');
        span.textContent = suffix;
        span.onclick = () => {
            const currentVal = wordInput.value;
            // Prevent adding suffix if word already ends with it
            if (!currentVal.endsWith(suffix.slice(1))) { // slice to remove the hyphen for check
                wordInput.value = currentVal + suffix.slice(1); // Add suffix without hyphen first
            }
        };
        suffixList.appendChild(span);
    });
}

function checkWord() {
    const inputWord = wordInput.value.trim().toLowerCase();

    if (!inputWord) {
        showFeedback("Please enter a word!", 'incorrect');
        return;
    }

    if (inputWord === currentBaseWordData.word.toLowerCase()) {
        showFeedback("That's the base word! Try adding affixes.", 'incorrect');
        return;
    }

    if (foundWordsForCurrentBase.has(inputWord)) {
        showFeedback("You've already found that word!", 'incorrect');
        wordInput.value = '';
        return;
    }

    const foundDerivative = currentBaseWordData.derivatives.find(d => d.word.toLowerCase() === inputWord);

    if (foundDerivative) {
        showFeedback("Correct! You found a new word!", 'correct');
        totalScore += 10; // Award points
        foundWordsForCurrentBase.add(inputWord);
        addWordToFoundList(foundDerivative);
        updateScoreDisplay();
        wordInput.value = ''; // Clear input after correct guess
    } else {
        showFeedback("That's not a valid word or not derivable from the base word.", 'incorrect');
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
checkWordBtn.addEventListener('click', checkWord);

wordInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        checkWord();
    }
});

nextWordBtn.addEventListener('click', () => {
    currentBaseWordIndex++;
    if (currentBaseWordIndex < gameData.base_words.length) {
        loadBaseWord();
    } else {
        // All words are done, reset for "Play Again"
        currentBaseWordIndex = 0;
        totalScore = 0;
        initGame(); // Re-initialize to start from the beginning
    }
});

// --- Start the game ---
initGame();
