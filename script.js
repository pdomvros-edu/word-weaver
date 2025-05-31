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
                { word: "nationalist", level: "C1", definition: "A person who advocates political independence for a country." },
                { word: "rationalize", level: "C1", definition: "Attempt to explain or justify (behaviour or an attitude) with logical, plausible reasons, even if these are not true or appropriate." } // Added to show multi-affix
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
        },
        {
            word: "rational", // New base word for testing multi-affix "irrationality"
            level: "C1",
            derivatives: [
                { word: "rationality", level: "C1", definition: "The quality of being based on or in accordance with reason or logic." },
                { word: "irrational", level: "C1", definition: "Not logical or reasonable." },
                { word: "irrationality", level: "C2", definition: "The state of being illogical or unreasonable." },
                { word: "rationalize", level: "C1", definition: "Attempt to explain or justify (behaviour or an attitude) with logical, plausible reasons, even if these are not true or appropriate." },
                { word: "rationalization", level: "C2", definition: "The action of attempting to explain or justify behaviour or an attitude with logical reasons." },
                { word: "rationally", level: "C1", definition: "In a way that is based on or in accordance with reason or logic." }
            ]
        }
    ],
    common_prefixes: ["un-", "dis-", "re-", "pre-", "mis-", "co-", "in-", "im-", "il-", "ir-", "de-", "ex-", "sub-", "inter-", "over-", "under-", "anti-", "auto-", "bi-", "non-", "post-", "pro-", "trans-", "semi-"],
    common_suffixes: ["-ment", "-tion", "-sion", "-able", "-ible", "-ly", "-ness", "-ful", "-less", "-er", "-or", "-ist", "-ism", "-ity", "-ive", "-al", "-ic", "-ize", "-ify", "-en", "-dom", "-ship", "-ence", "-ancy", "-ant", "-ent", "-ize"] // added -ize here, might be a verb suffix
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
    baseWordSelectionGrid.innerHTML = '';
    gameData.base_words.forEach(wordData => {
        const button = document.createElement('button');
        button.classList.add('word-select-btn');
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
        document.querySelector(`.affix-item.selected[data-affix="${selectedPrefix}"]`).classList.remove('selected');
    } else if (type === 'suffix' && selectedSuffix) {
        document.querySelector(`.affix-item.selected[data-affix="${selectedSuffix}"]`).classList.remove('selected');
    }

    // Set new selection
    if (type === 'prefix') {
        selectedPrefix = affix;
    } else {
        selectedSuffix = affix;
    }
    element.classList.add('selected');
    element.setAttribute('data-affix', affix); // Store affix value for deselection

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
    wordConstructionArea.innerHTML = `<span class="construction-part base">${currentBaseWordData.word}</span>`; // Put base word back

    // Remove 'selected' class from all affix items
    document.querySelectorAll('.affix-item.selected').forEach(item => {
        item.classList.remove('selected');
        item.removeAttribute('data-affix');
    });
    feedbackMessage.textContent = ''; // Clear feedback
}

function buildAndCheckWord() {
    if (!constructedWord || constructedWord === currentBaseWordData.word.toLowerCase()) {
        showFeedback("Please select affixes to build a new word!", 'incorrect');
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
    totalScore = 0;
    updateScoreDisplay();
    renderBaseWordSelection(); // Re-render in case you add more words dynamically
});

// --- Start the game ---
initGame();

// Initial display of base word in construction area (after game loads)
// This will be handled by `selectBaseWord`
