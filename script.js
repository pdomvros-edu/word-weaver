// script.js - REPLACE YOUR ENTIRE script.js FILE WITH THIS CONTENT

const gameData = {
    base_words: [
    {
        word: "create",
        level: "B1",
        derivatives: [
            { word: "creation", level: "B1", definition: "The act of bringing something into existence." },
            { word: "creative", level: "B1", definition: "Relating to or involving imagination or original ideas." },
            { word: "creativity", level: "B2", definition: "The use of imagination to create something." },
            { word: "creator", level: "B2", definition: "A person or thing that brings something into existence." },
            { word: "recreate", level: "B2", definition: "To create again or produce a new version." }
        ]
    },
    {
        word: "agree",
        level: "A2",
        derivatives: [
            { word: "agreement", level: "A2", definition: "A negotiated and typically legally binding arrangement." },
            { word: "disagree", level: "A2", definition: "To have a different opinion." },
            { word: "agreeable", level: "B1", definition: "Pleasant or pleasing." },
            { word: "disagreement", level: "B1", definition: "A lack of consensus or approval." }
        ]
    },
    {
        word: "appear",
        level: "A2",
        derivatives: [
            { word: "appearance", level: "B1", definition: "The way someone or something looks." },
            { word: "disappear", level: "A2", definition: "To cease to be visible." },
            { word: "reappear", level: "B1", definition: "To appear again." },
            { word: "apparent", level: "B2", definition: "Clearly visible or understood." }
        ]
    },
    {
        word: "believe",
        level: "A2",
        derivatives: [
            { word: "belief", level: "A2", definition: "An acceptance that something exists or is true." },
            { word: "unbelievable", level: "B1", definition: "Not able to be believed; extraordinary." },
            { word: "believer", level: "B1", definition: "A person who believes in a particular thing." },
            { word: "disbelieve", level: "B2", definition: "To be unable to believe something." }
        ]
    },
    {
        word: "care",
        level: "A2",
        derivatives: [
            { word: "careful", level: "A2", definition: "Making sure to avoid danger or harm." },
            { word: "careless", level: "A2", definition: "Not giving sufficient attention or thought." },
            { word: "caregiver", level: "B2", definition: "A family member or paid helper who cares for others." },
            { word: "caring", level: "B1", definition: "Displaying kindness and concern for others." }
        ]
    },
    {
        word: "communicate",
        level: "B1",
        derivatives: [
            { word: "communication", level: "B1", definition: "The imparting or exchanging of information." },
            { word: "communicative", level: "B2", definition: "Willing or eager to talk or impart information." },
            { word: "miscommunicate", level: "B2", definition: "To communicate incorrectly or inadequately." },
            { word: "telecommunication", level: "B2", definition: "Communication over a distance by technology." }
        ]
    },
    {
        word: "compete",
        level: "B1",
        derivatives: [
            { word: "competition", level: "B1", definition: "The activity of competing against others." },
            { word: "competitive", level: "B1", definition: "Having a strong desire to win or be the best." },
            { word: "competitor", level: "B1", definition: "A person or organization competing with others." },
            { word: "uncompetitive", level: "B2", definition: "Not able to compete successfully." }
        ]
    },
    {
        word: "consider",
        level: "B1",
        derivatives: [
            { word: "consideration", level: "B1", definition: "Careful thought or attention." },
            { word: "considerate", level: "B1", definition: "Careful not to inconvenience others." },
            { word: "reconsider", level: "B2", definition: "To consider again with possibility of change." },
            { word: "inconsiderate", level: "B2", definition: "Thoughtlessly causing hurt to others." }
        ]
    },
    {
        word: "continue",
        level: "A2",
        derivatives: [
            { word: "continuous", level: "B1", definition: "Forming an unbroken whole without interruption." },
            { word: "continuation", level: "B2", definition: "The action of carrying something on over time." },
            { word: "discontinue", level: "B2", definition: "To cease doing or providing something." }
        ]
    },
    {
        word: "decide",
        level: "A2",
        derivatives: [
            { word: "decision", level: "A2", definition: "A conclusion or resolution reached after consideration." },
            { word: "decisive", level: "B1", definition: "Settling an issue quickly." },
            { word: "indecisive", level: "B2", definition: "Not able to make decisions quickly." }
        ]
    },
    {
        word: "develop",
        level: "B1",
        derivatives: [
            { word: "development", level: "B1", definition: "The process of developing or being developed." },
            { word: "developer", level: "B1", definition: "A person or company that develops something." },
            { word: "underdeveloped", level: "B2", definition: "Not fully developed." },
            { word: "redevelop", level: "B2", definition: "To develop again or differently." }
        ]
    },
    {
        word: "differ",
        level: "B1",
        derivatives: [
            { word: "difference", level: "A2", definition: "A point or way in which people or things are dissimilar." },
            { word: "different", level: "A1", definition: "Not the same as another or each other." },
            { word: "indifferent", level: "B2", definition: "Having no particular interest or sympathy." }
        ]
    },
    {
        word: "direct",
        level: "B1",
        derivatives: [
            { word: "direction", level: "A2", definition: "A course along which someone or something moves." },
            { word: "director", level: "B1", definition: "A person who supervises or manages something." },
            { word: "indirect", level: "B1", definition: "Not directly caused by or resulting from something." }
        ]
    },
    {
        word: "educate",
        level: "B1",
        derivatives: [
            { word: "education", level: "A2", definition: "The process of receiving or giving systematic instruction." },
            { word: "educator", level: "B2", definition: "A person who provides instruction or education." },
            { word: "reeducate", level: "C1", definition: "To educate or train again." }
        ]
    },
    {
        word: "employ",
        level: "B1",
        derivatives: [
            { word: "employee", level: "A2", definition: "A person employed for wages or salary." },
            { word: "employer", level: "A2", definition: "A person or organization that employs people." },
            { word: "unemployed", level: "A2", definition: "Without a paid job but available to work." }
        ]
    },
    {
        word: "excite",
        level: "B1",
        derivatives: [
            { word: "excitement", level: "B1", definition: "A feeling of great enthusiasm and eagerness." },
            { word: "exciting", level: "A2", definition: "Causing great enthusiasm and eagerness." },
            { word: "unexciting", level: "B1", definition: "Not exciting; dull." }
        ]
    },
    {
        word: "expand",
        level: "B1",
        derivatives: [
            { word: "expansion", level: "B2", definition: "The action of becoming larger or more extensive." },
            { word: "expansive", level: "C1", definition: "Covering a wide area in terms of space or scope." }
        ]
    },
    {
        word: "explain",
        level: "A2",
        derivatives: [
            { word: "explanation", level: "A2", definition: "A statement making something clear." },
            { word: "explanatory", level: "B2", definition: "Intended to explain something." },
            { word: "unexplained", level: "B2", definition: "Not described or made clear." }
        ]
    },
    {
        word: "express",
        level: "B1",
        derivatives: [
            { word: "expression", level: "B1", definition: "The process of making known one's thoughts or feelings." },
            { word: "expressive", level: "B2", definition: "Effectively conveying thought or feeling." },
            { word: "inexpressible", level: "C1", definition: "Unable to be expressed in words." }
        ]
    },
    {
        word: "fortune",
        level: "B1",
        derivatives: [
            { word: "fortunate", level: "B1", definition: "Lucky or favorable." },
            { word: "unfortunate", level: "B1", definition: "Having bad luck." },
            { word: "misfortune", level: "B2", definition: "Bad luck or an unlucky event." }
        ]
    },
    {
        word: "govern",
        level: "B2",
        derivatives: [
            { word: "government", level: "B2", definition: "The system or group of people governing an organized community." },
            { word: "governance", level: "C1", definition: "The action or manner of governing." },
            { word: "governor", level: "B2", definition: "An official chosen to govern a province, state, or town." }
        ]
    },
    {
        word: "happy",
        level: "A1",
        derivatives: [
            { word: "happiness", level: "A2", definition: "The state of being happy." },
            { word: "unhappy", level: "A2", definition: "Not happy." },
            { word: "happily", level: "A2", definition: "In a happy manner." }
        ]
    },
    {
        word: "help",
        level: "A1",
        derivatives: [
            { word: "helper", level: "A2", definition: "A person who helps someone else." },
            { word: "helpful", level: "A2", definition: "Giving or ready to give help." },
            { word: "helpless", level: "B1", definition: "Unable to defend oneself or act without help." }
        ]
    },
    {
        word: "imagine",
        level: "A2",
        derivatives: [
            { word: "imagination", level: "B1", definition: "The faculty of imagining things." },
            { word: "imaginative", level: "B1", definition: "Having or showing creativity or inventiveness." },
            { word: "unimaginable", level: "B2", definition: "Difficult or impossible to imagine." }
        ]
    },
    {
        word: "inform",
        level: "B1",
        derivatives: [
            { word: "information", level: "A2", definition: "Facts provided or learned about something." },
            { word: "informative", level: "B1", definition: "Providing useful or interesting information." },
            { word: "misinform", level: "B2", definition: "To give false or misleading information." }
        ]
    },
    {
        word: "invent",
        level: "B1",
        derivatives: [
            { word: "invention", level: "B1", definition: "The action of inventing something." },
            { word: "inventor", level: "B1", definition: "A person who invented a particular process or device." },
            { word: "inventive", level: "B2", definition: "Having the ability to create or design new things." }
        ]
    },
    {
        word: "invest",
        level: "B1",
        derivatives: [
            { word: "investment", level: "B1", definition: "The action of investing money for profit." },
            { word: "investor", level: "B1", definition: "A person who invests money for profit." },
            { word: "reinvest", level: "B2", definition: "To invest again or further." }
        ]
    },
    {
        word: "know",
        level: "A1",
        derivatives: [
            { word: "knowledge", level: "A2", definition: "Facts, information, and skills acquired through experience." },
            { word: "unknown", level: "A2", definition: "Not known or familiar." },
            { word: "well-known", level: "A2", definition: "Widely or generally known." }
        ]
    },
    {
        word: "legal",
        level: "B1",
        derivatives: [
            { word: "illegal", level: "A2", definition: "Contrary to or forbidden by law." },
            { word: "legality", level: "B2", definition: "The quality or state of being legal." },
            { word: "legalize", level: "B2", definition: "To make something legal." }
        ]
    },
    {
        word: "like",
        level: "A1",
        derivatives: [
            { word: "unlike", level: "A2", definition: "Different from; not similar to." },
            { word: "likely", level: "A2", definition: "Such as well might happen or be true." },
            { word: "likeness", level: "B1", definition: "The fact or quality of being alike." }
        ]
    },
    {
        word: "live",
        level: "A1",
        derivatives: [
            { word: "life", level: "A1", definition: "The condition that distinguishes organisms from inorganic objects." },
            { word: "alive", level: "A1", definition: "Living, not dead." },
            { word: "lively", level: "A2", definition: "Full of life and energy." }
        ]
    }
]
        {
            word: "govern",
            level: "B2",
            derivatives: [
                { word: "government", level: "B2", definition: "The system or group of people governing an organized community." },
                { word: "governance", level: "C1", definition: "The action or manner of governing." },
                { word: "governor", level: "B2", definition: "An official chosen to govern a province, state, or town." },
                { word: "governmental", level: "C1", definition: "Relating to government." },
                { word: "ungovernable", level: "C2", definition: "Impossible to control or manage." },
                { word: "misgovern", level: "C1", definition: "To govern badly." },
                { word: "misgovernment", level: "C2", definition: "Bad or corrupt government." }
            ]
        },
        {
            word: "national",
            level: "B2",
            derivatives: [
                { word: "nation", level: "B2", definition: "A large body of people united by common descent, history, culture, or language, inhabiting a particular country." },
                { word: "nationality", level: "B2", definition: "The status of belonging to a particular nation." },
                { word: "nationalize", level: "C1", definition: "Transfer (an industry or company) from private to state ownership." },
                { word: "nationalism", level: "C1", definition: "Identification with one's own nation." },
                { word: "nationalist", level: "C1", definition: "A person who advocates political independence for a country." },
                { word: "international", level: "B2", definition: "Existing or occurring between two or more nations." },
                { word: "internationally", level: "C1", definition: "In an international manner; globally." },
                { word: "denationalize", level: "C2", definition: "Transfer (an industry or business) from public to private ownership." },
                { word: "multinational", level: "C1", definition: "Including or involving several countries or nationalities." }
            ]
        },
        {
            word: "act",
            level: "B2",
            derivatives: [
                { word: "action", level: "B2", definition: "The process of doing something." },
                { word: "active", level: "B2", definition: "Engaged in action or movement." },
                { word: "actively", level: "B2", definition: "In an active manner." },
                { word: "actor", level: "B2", definition: "A person whose profession is acting." },
                { word: "actress", level: "B2", definition: "A female actor." },
                { word: "activity", level: "B2", definition: "The condition in which things are happening or being done." },
                { word: "inactive", level: "B2", definition: "Not engaging in physical activity." },
                { word: "inactivity", level: "C1", definition: "Lack of activity or movement." },
                { word: "react", level: "C1", definition: "Respond to something." },
                { word: "reaction", level: "C1", definition: "An action or feeling in response to a situation." },
                { word: "reactive", level: "C1", definition: "Showing a response to a stimulus." },
                { word: "reactivate", level: "C2", definition: "To make something active again." },
                { word: "overact", level: "C1", definition: "Act in an exaggerated way." },
                { word: "enact", level: "C1", definition: "To make (a bill or other proposal) law." },
                { word: "enactment", level: "C2", definition: "The process of passing legislation." },
                { word: "interact", level: "C1", definition: "Act in such a way as to have an effect on another." },
                { word: "interaction", level: "C1", definition: "Reciprocal action or influence." }
            ]
        },
        {
            word: "connect",
            level: "B2",
            derivatives: [
                { word: "connection", level: "B2", definition: "A relationship in which things are linked." },
                { word: "connected", level: "B2", definition: "Joined together." },
                { word: "disconnect", level: "B2", definition: "Break the connection of or from." },
                { word: "disconnection", level: "C1", definition: "The state of being disconnected." },
                { word: "reconnect", level: "C1", definition: "Connect again or anew." },
                { word: "connectivity", level: "C2", definition: "The state or extent of being connected." }
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
            word: "rational",
            level: "C1",
            derivatives: [
                { word: "rationality", level: "C1", definition: "The quality of being based on reason or logic." },
                { word: "irrational", level: "C1", definition: "Not logical or reasonable." },
                { word: "irrationality", level: "C2", definition: "The state of being illogical or unreasonable." },
                { word: "rationalize", level: "C1", definition: "Attempt to explain or justify with reasons, even if not true." },
                { word: "rationalization", level: "C2", definition: "The action of attempting to explain or justify behaviour." },
                { word: "rationally", level: "C1", definition: "In a way that is based on reason or logic." }
            ]
        },
        {
            word: "agree",
            level: "B2",
            derivatives: [
                { word: "agreement", level: "B2", definition: "Harmony or accordance in opinion or feeling." },
                { word: "disagree", level: "B2", definition: "Have a different opinion." },
                { word: "disagreement", level: "C1", definition: "Lack of consensus or approval." },
                { word: "agreeable", level: "C1", definition: "Pleasant or enjoyable." },
                { word: "disagreeable", level: "C1", definition: "Unpleasant or unacceptable." }
            ]
        },
        {
            word: "legal",
            level: "B2",
            derivatives: [
                { word: "legally", level: "B2", definition: "In a way that conforms to the law." },
                { word: "illegal", level: "B2", definition: "Forbidden by law; unlawful." },
                { word: "illegally", level: "B2", definition: "In an illegal manner." },
                { word: "legality", level: "C1", definition: "The state or quality of being in conformity with the law." },
                { word: "illegality", level: "C2", definition: "The quality or state of being illegal." }
            ]
        },
        {
            word: "perfect",
            level: "B2",
            derivatives: [
                { word: "perfection", level: "C1", definition: "The state of being perfect." },
                { word: "perfectly", level: "B2", definition: "In a perfect manner; completely." },
                { word: "imperfect", level: "B2", definition: "Not perfect; faulty or incomplete." },
                { word: "imperfectly", level: "C1", definition: "In an imperfect manner." },
                { word: "perfectionist", level: "C1", definition: "A person who refuses to accept any standard short of perfection." }
            ]
        },
        {
            word: "possible",
            level: "B2",
            derivatives: [
                { word: "possibility", level: "B2", definition: "A thing that may happen or be the case." },
                { word: "possibly", level: "B2", definition: "Perhaps; maybe." },
                { word: "impossible", level: "B2", definition: "Not able to occur, exist, or be done." },
                { word: "impossibility", level: "C1", definition: "The state of being impossible." }
            ]
        },
        {
            word: "develop",
            level: "B2",
            derivatives: [
                { word: "development", level: "B2", definition: "The process of developing." },
                { word: "developer", level: "C1", definition: "A person or company that develops something." },
                { word: "developed", level: "B2", definition: "Advanced or mature." },
                { word: "undeveloped", level: "C1", definition: "Not developed." },
                { word: "underdevelop", level: "C2", definition: "To develop insufficiently or imperfectly." },
                { word: "underdevelopment", level: "C2", definition: "The state of being underdeveloped." }
            ]
        },
        {
            word: "employ",
            level: "B2",
            derivatives: [
                { word: "employment", level: "B2", definition: "The state of having paid work." },
                { word: "employer", level: "B2", definition: "A person or organization that employs people." },
                { word: "employee", level: "B2", definition: "A person employed for wages or salary." },
                { word: "unemployment", level: "C1", definition: "The state of being unemployed." },
                { word: "unemployed", level: "B2", definition: "Without a paid job." },
                { word: "employable", level: "C1", definition: "Having skills and qualifications to get a job." },
                { word: "reemploy", level: "C1", definition: "To employ again." }
            ]
        },
        {
            word: "educate",
            level: "B2",
            derivatives: [
                { word: "education", level: "B2", definition: "The process of receiving or giving systematic instruction." },
                { word: "educational", level: "B2", definition: "Relating to education." },
                { word: "educated", level: "B2", definition: "Having received an education." },
                { word: "uneducated", level: "C1", definition: "Lacking education." },
                { word: "educator", level: "C1", definition: "A person who provides education." },
                { word: "reeducate", level: "C2", definition: "To educate again, especially to correct previous beliefs." }
            ]
        },
        {
            word: "operate",
            level: "B2",
            derivatives: [
                { word: "operation", level: "B2", definition: "The action of functioning or being active." },
                { word: "operator", level: "B2", definition: "A person who operates something." },
                { word: "operational", level: "C1", definition: "In working order." },
                { word: "cooperate", level: "C1", definition: "Act jointly with others." },
                { word: "cooperation", level: "C1", definition: "The process of working together." },
                { word: "cooperative", level: "C1", definition: "Involving mutual assistance in working toward a common goal." }
            ]
        },
        {
            word: "manage",
            level: "B2",
            derivatives: [
                { word: "management", level: "B2", definition: "The process of dealing with or controlling things or people." },
                { word: "manager", level: "B2", definition: "A person responsible for controlling or administering an organization or group of staff." },
                { word: "manageable", level: "C1", definition: "Able to be managed or controlled." },
                { word: "unmanageable", level: "C2", definition: "Difficult or impossible to control or manage." }
            ]
        },
        {
            word: "organize",
            level: "B2",
            derivatives: [
                { word: "organization", level: "B2", definition: "An organized body of people with a particular purpose." },
                { word: "organizer", level: "C1", definition: "A person who arranges or plans events." },
                { word: "organized", level: "B2", definition: "Arranged or structured in a systematic way." },
                { word: "unorganized", level: "C1", definition: "Not organized or structured." },
                { word: "reorganize", level: "C1", definition: "Organize again in a different way." },
                { word: "reorganization", level: "C2", definition: "The action or process of reorganizing something." }
            ]
        },
        {
            word: "form",
            level: "B2",
            derivatives: [
                { word: "formation", level: "B2", definition: "The action of forming or the process of being formed." },
                { word: "formal", level: "B2", definition: "Done in accordance with convention or etiquette." },
                { word: "informal", level: "B2", definition: "Having a relaxed, friendly, or unofficial style or manner." },
                { word: "formally", level: "B2", definition: "In a way that follows accepted rules or conventions." },
                { word: "informally", level: "C1", definition: "In an informal manner." },
                { word: "formula", level: "C1", definition: "A mathematical relationship or rule expressed in symbols." },
                { word: "transform", level: "C1", definition: "Make a thorough or dramatic change in the form, appearance, or character of." },
                { word: "transformation", level: "C1", definition: "A dramatic change in form or appearance." },
                { word: "uniform", level: "B2", definition: "Remaining the same in all cases and at all times." },
                { word: "deform", level: "C2", definition: "Distort the shape or form of; make misshapen." },
                { word: "deformation", level: "C2", definition: "The action or process of changing in shape or distorting." }
            ]
        },
        {
            word: "press",
            level: "B2",
            derivatives: [
                { word: "pressure", level: "B2", definition: "The exertion of force on a surface by an object, fluid, etc." },
                { word: "expression", level: "B2", definition: "The process of making known one's thoughts or feelings." },
                { word: "express", level: "B2", definition: "Convey (a thought or feeling) in words or by gestures." },
                { word: "impression", level: "B2", definition: "An idea, feeling, or opinion about something or someone." },
                { word: "impress", level: "B2", definition: "Make (someone) feel admiration and respect." },
                { word: "impressive", level: "C1", definition: "Evoking admiration through size, quality, or skill." },
                { word: "depress", level: "C1", definition: "Make (someone) feel utterly despondent and dejected." },
                { word: "depression", level: "C1", definition: "A state of feeling sad and without hope." },
                { word: "repress", level: "C2", definition: "Subdue (someone or something) by force." },
                { word: "suppress", level: "C2", definition: "Forcibly put an end to." },
                { word: "oppress", level: "C2", definition: "Keep (someone) in hardship and injustice by cruel exercise of authority." }
            ]
        },
        {
            word: "confide",
            level: "C1",
            derivatives: [
                { word: "confidence", level: "B2", definition: "The state of feeling certain about the truth of something." },
                { word: "confident", level: "B2", definition: "Feeling or showing confidence in oneself or one's abilities." },
                { word: "confidential", level: "C1", definition: "Intended to be kept secret." },
                { word: "confidentiality", level: "C2", definition: "The state of keeping or being kept secret or private." },
                { word: "confidently", level: "C1", definition: "In a confident manner." },
                { word: "selfconfident", level: "C1", definition: "Feeling sure about your own ability or character." },
                { word: "selfconfidence", level: "C1", definition: "A feeling of trust in one's abilities, qualities, and judgment." }
            ]
        },
        {
            word: "decide",
            level: "B2",
            derivatives: [
                { word: "decision", level: "B2", definition: "A conclusion or resolution reached after consideration." },
                { word: "decisive", level: "C1", definition: "Settling an issue conclusively; able to make decisions quickly." },
                { word: "indecisive", level: "C1", definition: "Not able to make decisions quickly." },
                { word: "undecided", level: "B2", definition: "Not yet having made a decision or having a fixed opinion." }
            ]
        },
        {
            word: "rely",
            level: "B2",
            derivatives: [
                { word: "reliable", level: "B2", definition: "Consistently good in quality or performance; able to be trusted." },
                { word: "unreliable", level: "B2", definition: "Not able to be relied upon." },
                { word: "reliability", level: "C1", definition: "The quality of being trustworthy or of performing consistently well." },
                { word: "reliance", level: "C1", definition: "The state of depending on something or someone." }
            ]
        },
        {
            word: "attend",
            level: "B2",
            derivatives: [
                { word: "attention", level: "B2", definition: "The act or power of carefully thinking about, listening to, or watching someone or something." },
                { word: "attentive", level: "C1", definition: "Paying close attention to something." },
                { word: "inattentive", level: "C1", definition: "Not paying attention." },
                { word: "attendance", level: "B2", definition: "The action or state of going regularly to or being present at a place or event." },
                { word: "attendant", level: "C1", definition: "A person who is present at an event or who works at a place." }
            ]
        },
        {
            word: "sense",
            level: "B2",
            derivatives: [
                { word: "sensitive", level: "B2", definition: "Quick to detect or respond to slight changes, signals, or influences." },
                { word: "insensitive", level: "C1", definition: "Lacking sensitivity, awareness, or sympathy." },
                { word: "sensitively", level: "C1", definition: "In a sensitive manner." },
                { word: "sensibility", level: "C1", definition: "The ability to appreciate and respond to complex emotional or aesthetic influences." },
                { word: "senseless", level: "C1", definition: "Lacking meaning, purpose, or consequence." },
                { word: "sensory", level: "C1", definition: "Relating to sensation or the physical senses." },
                { word: "nonsense", level: "B2", definition: "Foolish, meaningless, or absurd words or ideas." }
            ]
        },
        {
            word: "industry",
            level: "B2",
            derivatives: [
                { word: "industrial", level: "B2", definition: "Relating to industry." },
                { word: "industrialize", level: "C1", definition: "Develop industries in (a country or region) on a wide scale." },
                { word: "industrialization", level: "C2", definition: "The development of industries in a country or region on a wide scale." },
                { word: "industrious", level: "C1", definition: "Diligent and hard-working." }
            ]
        }, // Add comma here!
        {
        word: "establish",
        level: "B2",
        derivatives: [
            { word: "establishment", level: "B2", definition: "The act of establishing something or being established." },
            { word: "established", level: "B2", definition: "Having been in existence for a long time and therefore recognized and respected." },
            { word: "re-establish", level: "C1", definition: "To establish again." },
            { word: "disestablish", level: "C2", definition: "To deprive (a national church) of its status as an established church." },
            { word: "disestablishment", level: "C2", definition: "The action of depriving a national church of its status as an established church." }
        ]
    },
    {
        word: "achieve",
        level: "B1",
        derivatives: [
            { word: "achievement", level: "B1", definition: "A thing done successfully, typically by effort, courage, or skill." },
            { word: "achievable", level: "B2", definition: "Capable of being done or accomplished successfully." },
            { word: "achiever", level: "C1", definition: "A person who achieves a lot." },
            { word: "unachievable", level: "C1", definition: "Impossible to achieve." }
        ]
    },
    {
        word: "respond",
        level: "B1",
        derivatives: [
            { word: "response", level: "B1", definition: "A verbal or written answer." },
            { word: "responsive", level: "B2", definition: "Reacting quickly and positively." },
            { word: "responsiveness", level: "C1", definition: "The quality of reacting quickly and positively." },
            { word: "respondent", level: "C1", definition: "A person who replies to something, especially one who answers questions in a survey or questionnaire." },
            { word: "irresponsible", level: "B2", definition: "Not showing a proper sense of responsibility." },
            { word: "irresponsibility", level: "C1", definition: "Lack of a proper sense of responsibility." },
            { word: "correspond", level: "B2", definition: "To communicate by exchanging letters or emails." },
            { word: "correspondence", level: "B2", definition: "Communication by exchange of letters or emails." },
            { word: "correspondent", level: "B2", definition: "A person who writes letters to a person or a newspaper." }
        ]
    },
    {
        word: "create",
        level: "B1",
        derivatives: [
            { word: "creation", level: "B1", definition: "The action or process of bringing something into existence." },
            { word: "creative", level: "B1", definition: "Relating to or involving the use of the imagination or original ideas to create something." },
            { word: "creatively", level: "B2", definition: "In a creative way." },
            { word: "creativity", level: "B2", definition: "The use of imagination or original ideas to create something; inventiveness." },
            { word: "creator", level: "B2", definition: "A person or thing that brings something into existence." },
            { word: "recreate", level: "C1", definition: "To create again or anew." },
            { word: "recreation", level: "B2", definition: "Activity done for enjoyment when one is not working." },
            { word: "recreational", level: "B2", definition: "Relating to or denoting recreation." }
        ]
    },
    {
        word: "analyse",
        level: "B2",
        derivatives: [
            { word: "analysis", level: "B2", definition: "Detailed examination of the elements or structure of something." },
            { word: "analyst", level: "B2", definition: "A person who conducts analysis." },
            { word: "analytical", level: "C1", definition: "Relating to or using analysis or logical reasoning." },
            { word: "analytically", level: "C1", definition: "In an analytical manner." },
            { word: "reanalyse", level: "C2", definition: "To analyze again." }
        ]
    },
    {
        word: "identify",
        level: "B1",
        derivatives: [
            { word: "identification", level: "B2", definition: "The action or process of identifying someone or something." },
            { word: "identity", level: "B2", definition: "The fact of being who or what a person or thing is." },
            { word: "identifiable", level: "C1", definition: "Able to be recognized as being a particular person or thing." },
            { word: "unidentifiable", level: "C2", definition: "Impossible to identify." },
            { word: "identifier", level: "C2", definition: "A name or symbol that identifies something." }
        ]
    },
    {
        word: "explain",
        level: "A2",
        derivatives: [
            { word: "explanation", level: "B1", definition: "A statement or account that makes something clear." },
            { word: "explanatory", level: "B2", definition: "Serving to explain something." },
            { word: "unexplained", level: "C1", definition: "Not accounted for or understood." },
            { word: "explainable", level: "C1", definition: "Able to be explained." },
            { word: "inexplicable", level: "C2", definition: "Unable to be explained or accounted for." }
        ]
    },
    {
        word: "educate",
        level: "B1",
        derivatives: [
            { word: "education", level: "B1", definition: "The process of receiving or giving systematic instruction, especially at a school or university." },
            { word: "educational", level: "B1", definition: "Relating to education." },
            { word: "educationally", level: "B2", definition: "In an educational way." },
            { word: "educated", level: "B2", definition: "Having had a good education." },
            { word: "educator", level: "C1", definition: "A person who provides instruction or education." },
            { word: "uneducated", level: "B2", definition: "Lacking a good education." }
        ]
    },
    {
        word: "manage",
        level: "B1",
        derivatives: [
            { word: "management", level: "B1", definition: "The process of dealing with or controlling things or people." },
            { word: "manager", level: "B1", definition: "A person responsible for controlling or administering all or part of a company or organization." },
            { word: "manageable", level: "B2", definition: "Able to be managed or controlled." },
            { word: "unmanageable", level: "C1", definition: "Difficult or impossible to manage or control." },
            { word: "mismanage", level: "C1", definition: "To manage badly or incompetently." },
            { word: "mismanagement", level: "C2", definition: "The process or practice of managing something badly." }
        ]
    },
    {
        word: "require",
        level: "B1",
        derivatives: [
            { word: "requirement", level: "B1", definition: "A thing that is needed or wanted." },
            { word: "requisition", level: "C1", definition: "An official order laying claim to the use of property or materials." },
            { word: "required", level: "B1", definition: "Officially compulsory, or otherwise necessary." },
            { word: "prerequisite", level: "C1", definition: "A thing that is required as a prior condition for something else to happen or exist." }
        ]
    },
    {
        word: "organize",
        level: "B1",
        derivatives: [
            { word: "organization", level: "B1", definition: "An organized body of people with a particular purpose." },
            { word: "organizer", level: "B2", definition: "A person who arranges or plans an event or activity." },
            { word: "organized", level: "B1", definition: "Arranged or structured in a systematic way." },
            { word: "disorganized", level: "B2", definition: "Lacking order or planning." },
            { word: "reorganize", level: "C1", definition: "To organize again in a different way." },
            { word: "reorganization", level: "C1", definition: "The action or process of organizing something again in a different way." }
        ]
    },
    {
        word: "participate",
        level: "B2",
        derivatives: [
            { word: "participation", level: "B2", definition: "The action of taking part in something." },
            { word: "participant", level: "B2", definition: "A person who takes part in something." },
            { word: "participatory", level: "C1", definition: "Relating to or involving participation." }
        ]
    },
    {
        word: "produce",
        level: "A2",
        derivatives: [
            { word: "product", level: "A2", definition: "An article or substance that is manufactured or refined for sale." },
            { word: "production", level: "B1", definition: "The action of making or manufacturing from components or raw materials, or the process of being so manufactured." },
            { word: "producer", level: "B1", definition: "A person or company that makes or creates something." },
            { word: "productive", level: "B2", definition: "Achieving or producing a significant amount or result." },
            { word: "productively", level: "C1", definition: "In a productive manner." },
            { word: "productivity", level: "C1", definition: "The state or quality of being productive." },
            { word: "unproductive", level: "C1", definition: "Not producing or achieving much." },
            { word: "reproduce", level: "B2", definition: "To produce again." },
            { word: "reproduction", level: "B2", definition: "The action or process of copying something." }
        ]
    },
    {
        word: "assess",
        level: "B2",
        derivatives: [
            { word: "assessment", level: "B2", definition: "The evaluation or estimation of the nature, quality, or ability of someone or something." },
            { word: "assessor", level: "C1", definition: "A person who evaluates the quality or nature of something." },
            { word: "reassess", level: "C1", definition: "To assess again." },
            { word: "reassessment", level: "C2", definition: "The action of assessing something again." }
        ]
    },
    {
        word: "perform",
        level: "B1",
        derivatives: [
            { word: "performance", level: "B1", definition: "The action or process of performing a task or function." },
            { word: "performer", level: "B2", definition: "A person who entertains an audience." },
            { word: "performing", level: "B1", definition: "Engaging in or presenting a performance." },
            { word: "underperform", level: "C1", definition: "To perform less well than expected." },
            { word: "underperformance", level: "C2", definition: "The act or instance of performing less well than expected." }
        ]
    },
    {
        word: "solve",
        level: "B1",
        derivatives: [
            { word: "solution", level: "B1", definition: "A means of solving a problem or dealing with a difficult situation." },
            { word: "solver", level: "C1", definition: "A person or thing that solves a problem." },
            { word: "solvable", level: "C1", definition: "Able to be solved." },
            { word: "unsolved", level: "B2", definition: "Not solved." },
            { word: "insoluble", level: "C2", definition: "Impossible to solve." }
        ]
    },
    {
        word: "contribute",
        level: "B2",
        derivatives: [
            { word: "contribution", level: "B2", definition: "The part played by a person or thing in bringing about a result or helping something to advance." },
            { word: "contributor", level: "C1", definition: "A person who contributes something." },
            { word: "contributory", level: "C1", definition: "Playing a part in bringing about a result." }
        ]
    },
    {
        word: "investigate",
        level: "B2",
        derivatives: [
            { word: "investigation", level: "B2", definition: "The action of investigating something or someone; formal inquiry." },
            { word: "investigator", level: "C1", definition: "A person who carries out a formal inquiry or investigation." },
            { word: "investigative", level: "C1", definition: "Of or relating to investigation, especially legal or criminal investigation." },
            { word: "uninvestigated", level: "C2", definition: "Not investigated." }
        ]
    },
    {
        word: "communicate",
        level: "B1",
        derivatives: [
            { word: "communication", level: "B1", definition: "The imparting or exchanging of information by speaking, writing, or using some other medium." },
            { word: "communicative", level: "B2", definition: "Willing to talk or impart information." },
            { word: "communicatively", level: "C1", definition: "In a communicative manner." },
            { word: "communicator", level: "C1", definition: "A person who is able to convey information or ideas effectively." },
            { word: "uncommunicative", level: "C1", definition: "Unwilling to talk or impart information." }
        ]
    }
    ],
    common_prefixes: [
        "un-", "dis-", "re-", "pre-", "mis-", "co-", "in-", "im-", "il-", "ir-",
        "de-", "ex-", "sub-", "inter-", "over-", "under-", "anti-", "auto-", "bi-",
        "non-", "post-", "pro-", "trans-", "semi-", "mal-", "hyper-", "mono-",
        "multi-", "poly-", "mega-", "micro-", "macro-", "mini-", "neo-", "out-",
        "super-", "tele-"
    ],
    common_suffixes: [
        "-ment", "-tion", "-sion", "-able", "-ible", "-ly", "-ness", "-ful", "-less",
        "-er", "-or", "-ist", "-ism", "-ity", "-ive", "-al", "-ic", "-ize", "-ify",
        "-en", "-dom", "-ship", "-ence", "-ancy", "-ant", "-ent", "-ous", "-ette",
        "-ian", "-ing", "-ation", "-ition", "-ization", "-hood", "-esque",
        "-fold", "-free", "-graph", "-ish", "-ite",
        "-like", "-logy", "-meter", "-monger", "-nomy", "-oid", "-pathy",
        "-phone", "-phobia", "-proof", "-scope", "-some", "-speak", "-sphere", "-tude", "-ward",
        "-wise", "-worthy", "-y"
    ]
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
    // Sort base words alphabetically before rendering
    gameData.base_words.sort((a, b) => a.word.localeCompare(b.word));

    renderBaseWordSelection();
    showScreen('wordSelectionScreen');
    updateScoreDisplay();
}

function renderBaseWordSelection() {
    baseWordSelectionGrid.innerHTML = ''; // Clear existing content
    gameData.base_words.forEach(wordData => {
        const button = document.createElement('button');
        button.classList.add('word-select-btn');
        // MODIFIED: Only display the word, no level on the button
        button.innerHTML = wordData.word;
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
    // Deselect previous affix of the same type if a new one is selected
    // Or toggle off the current one if it's clicked again
    if (type === 'prefix') {
        if (selectedPrefix === affix) { // Clicked the same prefix, so deselect it
            selectedPrefix = null;
            element.classList.remove('selected');
            element.removeAttribute('data-affix');
        } else { // Clicked a new prefix
            const prevSelected = document.querySelector(`.affix-item.selected[data-affix][class*="prefix"]`);
            if (prevSelected) prevSelected.classList.remove('selected');
            selectedPrefix = affix;
            element.classList.add('selected');
            element.setAttribute('data-affix', affix);
        }
    } else { // type === 'suffix'
        if (selectedSuffix === affix) { // Clicked the same suffix, so deselect it
            selectedSuffix = null;
            element.classList.remove('selected');
            element.removeAttribute('data-affix');
        } else { // Clicked a new suffix
            const prevSelected = document.querySelector(`.affix-item.selected[data-affix][class*="suffix"]`);
            if (prevSelected) prevSelected.classList.remove('selected');
            selectedSuffix = affix;
            element.classList.add('selected');
            element.setAttribute('data-affix', affix);
        }
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
    totalScore = 0; // Reset total score when changing base word
    updateScoreDisplay();
    renderBaseWordSelection(); // Re-render in case you add more words dynamically
});

// --- Start the game ---
initGame();
