<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>The Word Weaver</title>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet">
    <style>
        /* Basic CSS for the game */
        body {
            font-family: 'Roboto', sans-serif;
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            background-color: #f0f2f5;
            margin: 0;
            color: #333;
            overflow-y: scroll; /* Allow scrolling if content is long */
            padding: 20px 0; /* Add padding for overall look */
        }

        .screen {
            background-color: #fff;
            border-radius: 12px;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
            padding: 30px;
            width: 90%;
            max-width: 900px;
            box-sizing: border-box;
            margin: 20px 0;
        }

        .screen.hidden {
            display: none;
        }

        /* --- Word Selection Screen --- */
        .word-selection-screen h1 {
            text-align: center;
            color: #2c3e50;
            margin-bottom: 30px;
        }

        .word-selection-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
            gap: 15px;
            justify-content: center;
        }

        .word-select-btn {
            background-color: #3498db;
            color: white;
            padding: 15px 20px;
            border: none;
            border-radius: 8px;
            font-size: 1.1em;
            cursor: pointer;
            transition: background-color 0.2s ease, transform 0.1s ease;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }

        .word-select-btn:hover {
            background-color: #2980b9;
            transform: translateY(-2px);
        }

        .word-select-btn .word-level {
            font-size: 0.8em;
            background-color: rgba(0, 0, 0, 0.2);
            padding: 3px 8px;
            border-radius: 10px;
            margin-top: 5px;
        }

        /* --- Game Screen (Main) --- */
        .game-container {
            display: grid;
            grid-template-columns: 1fr;
            gap: 20px;
        }

        h1, h2 {
            text-align: center;
            color: #2c3e50;
        }

        .section-header {
            font-size: 1.2em;
            font-weight: bold;
            margin-bottom: 10px;
            color: #34495e;
            border-bottom: 2px solid #ecf0f1;
            padding-bottom: 5px;
        }

        .base-word-display {
            font-size: 2.5em;
            font-weight: 700;
            text-align: center;
            color: #e74c3c; /* Red for emphasis */
            margin-bottom: 20px;
            text-transform: uppercase;
        }

        /* --- Word Construction Area --- */
        .word-construction-area {
            min-height: 80px;
            border: 2px dashed #ccc;
            border-radius: 8px;
            margin-bottom: 20px;
            padding: 15px;
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            justify-content: center;
            gap: 10px;
            background-color: #f8f8f8;
        }

        .construction-part {
            background-color: #a2d2ff; /* Light blue for parts */
            color: #1a5276;
            padding: 8px 15px;
            border-radius: 25px;
            font-size: 1.1em;
            font-weight: bold;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }
        .construction-part.base {
             background-color: #e6b12c; /* Orange for base word */
             color: white;
        }
        .construction-part.prefix {
             background-color: #c780e0; /* Purple for prefix */
             color: white;
        }
        .construction-part.suffix {
             background-color: #8be080; /* Green for suffix */
             color: white;
        }


        .affix-list {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
            margin-bottom: 15px;
            padding: 10px;
            background-color: #ecf0f1;
            border-radius: 8px;
        }

        .affix-item {
            background-color: #3498db;
            color: white;
            padding: 5px 12px;
            border-radius: 20px;
            font-size: 0.9em;
            cursor: pointer;
            transition: background-color 0.2s ease;
        }

        .affix-item.selected {
            background-color: #2980b9; /* Darker when selected */
            border: 2px solid #2ecc71; /* Green border for active selection */
        }

        .affix-item:hover {
            background-color: #2980b9;
        }

        .game-buttons {
            display: flex;
            gap: 10px;
            margin-top: 20px;
            flex-wrap: wrap;
            justify-content: center;
        }

        .game-buttons button {
            padding: 12px 20px;
            color: white;
            border: none;
            border-radius: 8px;
            font-size: 1em;
            cursor: pointer;
            transition: background-color 0.2s ease;
            flex-grow: 1; /* Allow buttons to grow */
            min-width: 120px; /* Minimum width for buttons */
        }

        #buildWordBtn {
            background-color: #27ae60;
        }
        #buildWordBtn:hover {
            background-color: #229954;
        }

        #resetWordBtn {
            background-color: #e74c3c;
        }
        #resetWordBtn:hover {
            background-color: #c0392b;
        }

        #checkWordBtn {
            background-color: #2c3e50; /* Darker blue */
        }
        #checkWordBtn:hover {
            background-color: #34495e;
        }


        #nextWordBtn {
            background-color: #f39c12;
        }

        #nextWordBtn:hover {
            background-color: #e67e22;
        }

        .feedback {
            text-align: center;
            margin-bottom: 15px;
            min-height: 2em; /* Reserve space for feedback */
        }

        .feedback.correct {
            color: #27ae60;
            font-weight: bold;
        }

        .feedback.incorrect {
            color: #e74c3c;
            font-weight: bold;
        }

        .score-display {
            text-align: center;
            font-size: 1.1em;
            margin-bottom: 15px;
            color: #555;
        }

        .found-words-list {
            list-style: none;
            padding: 0;
            max-height: 300px; /* Fixed height for scrolling */
            overflow-y: auto;
            border: 1px solid #ddd;
            border-radius: 8px;
            padding: 10px;
            background-color: #fdfdfd;
        }

        .found-words-list li {
            background-color: #e8f6f3;
            margin-bottom: 8px;
            padding: 10px 15px;
            border-left: 5px solid #2ecc71;
            border-radius: 6px;
            display: flex;
            flex-direction: column;
            gap: 5px;
            font-size: 0.95em;
        }

        .found-words-list li .word {
            font-weight: bold;
            color: #2c3e50;
        }

        .found-words-list li .level {
            display: inline-block;
            background-color: #9b59b6; /* Purple for level */
            color: white;
            padding: 2px 8px;
            border-radius: 15px;
            font-size: 0.75em;
            margin-left: 10px;
        }
        .found-words-list li .level.B2 { background-color: #3498db; } /* Blue */
        .found-words-list li .level.C1 { background-color: #f39c12; } /* Orange */
        .found-words-list li .level.C2 { background-color: #e74c3c; } /* Red */


        .found-words-list li .definition {
            font-size: 0.85em;
            color: #666;
            margin-top: 5px;
        }

        @media (min-width: 768px) {
            .game-container {
                grid-template-columns: 2fr 1fr; /* Two columns on wider screens */
            }
            .main-game-area {
                grid-column: 1 / 2;
            }
            .sidebar {
                grid-column: 2 / 3;
            }
            .game-buttons {
                justify-content: flex-start; /* Align buttons to start */
            }
        }
    </style>
</head>
<body>
    <div class="screen word-selection-screen" id="wordSelectionScreen">
        <h1>Choose Your Base Word</h1>
        <p style="text-align: center; margin-bottom: 25px;">Click on a word to start building!</p>
        <div class="word-selection-grid" id="baseWordSelectionGrid">
            </div>
    </div>

    <div class="screen game-container hidden" id="gameScreen">
        <div class="main-game-area">
            <h1>The Word Weaver</h1>
            <p style="text-align: center; margin-bottom: 25px;">Build words by clicking affixes and the base word!</p>

            <div class="base-word-display" id="baseWordDisplay"></div>

            <div class="section-header">Word Construction Area</div>
            <div class="word-construction-area" id="wordConstructionArea">
                </div>

            <div class="game-buttons">
                <button id="buildWordBtn">Build Word</button>
                <button id="resetWordBtn">Reset Word</button>
                <button id="nextWordBtn">Next Base Word</button>
            </div>

            <div class="feedback" id="feedbackMessage"></div>
            <div class="score-display" id="scoreDisplay">Score: 0 | Words Found: 0 / 0</div>

            <div class="section-header">Prefixes</div>
            <div class="affix-list" id="prefixList"></div>

            <div class="section-header">Suffixes</div>
            <div class="affix-list" id="suffixList"></div>
        </div>

        <div class="sidebar">
            <h2>Your Found Words</h2>
            <ul class="found-words-list" id="foundWordsList">
                </ul>
        </div>
    </div>

    <script src="script.js"></script>
</body>
</html>
