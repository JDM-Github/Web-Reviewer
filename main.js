let number = -1;

let reviewMode = false;
let isIdentification = false;

let totalScore = 0;
let numOfScoreInc = 0;
let numOfScoreCor = 0;

const numToLetter = new Map();
numToLetter.set(-1, "X");
numToLetter.set( 0, "A");
numToLetter.set( 1, "B");
numToLetter.set( 2, "C");
numToLetter.set( 3, "D");

const questions = [
	[-1, ["____ pertains to study of the written events significant to a particular society.", "A"],
		"History", "Greek", "Science", "Society"],
	["", "Greek word “historia” which means “to _____ or look into”.", "search"],
	[-1, ["All of this is a reason on why studying history is important EXCEPT", "C"],
		"The stories of past about people and things in the world we live provide valuable lessons to us.",
		"In studying history, we can learn various ways of studying and researching in the social sciences. It can help us learn different ways of discovering new knowledge.",
		"History can be used to examine and forecast the things in the environment and society. Greek can teach us to appreciate culture, love, and respect other people in the world.",
		"History is an eye opener to understand our culture, language and society. History may arouse patriotic, humanitarian nature in people.",
	],
	[-1, ["The history or story of a society or group of people is rooted from their ____", "D"],
		"myths, science, and rituals",
		"myths, legends, and traditions",
		"myths, tales, and customs",
		"myths, epics, folklores and rituals"
	],
	["", "The history or story of a society or group of people is rooted from their myths, epics, ___ and rituals", "folklores"],
	[-1, "The basis of data is only through written documents and also the things that have to do with the lives of people.", false],
	[-1, "In early times, recording history is important to the rulers of government to justify their works.", true],
	[-1, ["Lately, the basis of data is not only through written documents but also the things that have to do with the lives of people. Some of these things are their ____.", "A"],
		["materials, corpse, settlement, plants, picture, computer text files and environment."],
		["materials, corpse, documents, letters, diaries and environment."],
		["materials, corpse, artifacts, paintings and environment."],
		["materials, corpse, books, manuscripts, scrolls and environment."],
	],
	["", "Enumeration: Give all Sources of Historical Data. WRITTEN (Note: Separated Comma and space. Ex.'test, test2')",
		["laws", "treaty", "biography", "documents", "news"]],
	["", "Enumeration: Give all Sources of Historical Data. NOT WRITTEN (Note: Separated Comma and space. Ex.'test, test2')",
		["corpse", "materials", "settlement", "environment", "customs"]],
	[-1, "The study of history as a discipline or a science has its advancement during 1800.", false],
	[-1, "Today, scientists believe that it is impossible to do because the description of the past events used by the historian comes from his/her own understanding and imagination that is scrutinized and connected to the different data collected.", true],
	[-1, "Sociology is one of branches of Social Sciences", true],
	[-1, "Archaeology is one of branches of Social Sciences", true],
	[-1, "Pysiological is one of branches of Social Sciences", false],
	[-1, "Psychology is one of branches of Social Sciences", false],
	[-1, "Geography is one of branches of Social Sciences", false],
	[-1, "Chemistry is one of branches of Social Sciences", true],
	[-1, "Biology is one of branches of Social Sciences", true],
	[-1, "Economics is one of branches of Social Sciences", true],
	[-1, "History is one of branches of Social Sciences", false],
	[-1, "Linguistics is one of branches of Social Sciences", true],

	["", "One of the branches of Social Science. The science of society, social institutions and social relationships, the systematic study of the development, structure, interaction, and collective behavior of organized groups of human beings", "sociology"],
	["", "One of the branches of Social Science. A branch of Science that deals with the institutions and functioning of human society and with the interpersonal relationships of individuals as members of society.", "social science"],
	["", "One of the branches of Social Science. The scientific study of material remains of past human life and activities", "archaeology"],
	["", "One of the branches of Social Science. The science of art of making maps", "cartography"],
	["", "One of the branches of Social Science. The science of the mental or behavioral characteristics of an individual or group the study of mind and behavioral in relation to a particular field of knowledge or activity.", "psychology"],
	["", "One of the branches of Social Science. A social science concerned chiefly with description and analysis of the productions, distribution and consumptions of goods and services", "economics"],
	["", "One of the branches of Social Science. A science that deals with the description, distribution, and interaction of the diverse physical, biological, and cultural features of the earth's surface.", "geography"],
	["", "One of the branches of Social Science. The study of human speech including the units, nature, sturcture and modification of language", "linguistics"],
	["", "One of the branches of Social Science. This two can also help us study about our history. It's a great help in studying the history of validation if the fragments is in humans and not animals", "chemistry and biology"],
	[-1, ["The historian’s most important research tools are ____ sources.", "C"],
		"primary",
		"secondary",
		"historical",
		"archaeological",
	],
	[-1, "historical sources can be classified as primary and secondary sources.", true],
	[-1, ["Definition of Criticism of Historical Sources", "A"],
		"Historical evidence is derived from historical sources by the process of criticism which is of two types – external and internal criticism.",
		"The assessment of artistic quality in historical sources",
		"Analysis of historical events",
		"Evaluation of political aspects in historical sources",
	],
	[-1, ["Primary sources are usually defined as ____ or participants in past events.", "D"],
		"documents and letters from historians",
		"fictional accounts of historical events",
		"historical photographs",
		"first-hand information or data generated from actual witnesses"
	],
	["", "These are also sources produced at same time as the event, period, or subject being studied. These materials are often located in the ____ Collections of a library, rather than in the general collection.", "special"],
	["", "A ____ source typically refers to original, firsthand information or data related to a specific topic or event. It's the unmediated source that provides direct evidence or insights.", "primary"],
	["", "A ____ source works that analyze, interpret, or summarize primary sources or existing research.", "secondary"],
	[-1, "A secondary source provide a second-hand perspective or commentary on the original information.", true],
	[-1, ["They include letters, diaries, journals, newspapers, photographs, and other immediate accounts. The interpretation and evaluation of these sources becomes the basis for research.", "D"],
		"secondary sources",
		"historical novels and poems",
		"audio recordings and films",
		"primary sources",
	],
	["", "____ is a continuing process and written in chronological order of events and its importance to our society.", "history"],
	[-1, "Historical Event and Philippine Artifact is considered secondary sources", false],
	["", ["The historian should be able to conduct an ___ criticism of the sources especially primary resources which can age in centuries.", "B"],
		"in-depth",
		"external and internal",
		"critical and detailed",
		"superficial"
	],
	["", "____ criticism, also called lower criticism, is the practice of verifying the authenticity of evidence by examining its physical characteristics.", "external"],
	[-1, "External criticism applies 'science to a document.'", true],
	["", "____ criticism or higher criticism is concerned with the examination of the honesty of the proof.", "internal"],
];

const backResult = document.querySelector(".backresult");
const retryDiv = document.querySelector(".result .buttons .resultRetry");
retryDiv.addEventListener('click', retry);
const reviewDiv = document.querySelector(".result .buttons .resultReview");
reviewDiv.addEventListener('click', doReview);

const qQ = document.querySelector(".question div");
const qA = document.querySelector(`.selection [selection="A"]`);
const qB = document.querySelector(`.selection [selection="B"]`);
const qC = document.querySelector(`.selection [selection="C"]`);
const qD = document.querySelector(`.selection [selection="D"]`);
const qT = document.querySelector(`.topNav .questionDiv`);

const qTrue  = document.querySelector(`.true-false [selection="True"]`);
const qFalse = document.querySelector(`.true-false [selection="False"]`);

const selectionDiv = document.querySelector(".selection");
const trueFalseDiv = document.querySelector(".true-false");
const identiFyDiv  = document.querySelector(".identification");

const totalDiv = document.querySelector(".result .resultTxt");
const incDiv   = document.querySelector(".result .resultNoInc");
const corDiv   = document.querySelector(".result .resultNoCor");

const nextDiv = document.querySelector(".topNav .nextDiv")
nextDiv.addEventListener('click', () => { next(); });
const prevDiv = document.querySelector(".topNav .prevDiv")
prevDiv.addEventListener('click', () => { prev(); });

const arrayChoice =  [qA, qB, qC, qD];
const arrayTrueFalse = [qTrue, qFalse];

for (let i = 0; i < arrayChoice.length; i++) { arrayChoice[i].addEventListener('click', () => { clickFunc(arrayChoice[i], i); }); }
for (let i = 0; i < arrayTrueFalse.length; i++) { arrayTrueFalse[i].addEventListener('click', () => { clickFuncTrueFalse(arrayTrueFalse[i], i); }); }

const allSelec = document.querySelectorAll(".selection div");
const allSelecTrueFalse = document.querySelectorAll(".true-false div");

function clickFunc(ques, index) {
	if (reviewMode) return;
	allSelec.forEach(q => {
		q.style.backgroundColor = "var(--choice-color)";
	});
	ques.style.backgroundColor = "#FE017F";
	questions[number][0] = index;
}

function clickFuncTrueFalse(ques, index) {
	if (reviewMode) return;
	allSelecTrueFalse.forEach(q => {
		q.style.backgroundColor = "var(--choice-color)";
	});
	ques.style.backgroundColor = "#FE017F";
	questions[number][0] = index;
}

function updateQuestionaire() {

	allSelec.forEach(q => { q.style.backgroundColor = "var(--choice-color)"; });
	allSelecTrueFalse.forEach(q => { q.style.backgroundColor = "var(--choice-color)"; });

	selectionDiv.style.display = "none";
	trueFalseDiv.style.display = "none";
	identiFyDiv.style.display  = "none";

	if (questions[number].length == 6) {
		selectionDiv.style.display = "grid";
		if ( questions[number][0] >= 0)			
			arrayChoice[questions[number][0]].style.backgroundColor = "#FE017F";

		qQ.textContent = questions[number][1][0];
		qA.textContent = questions[number][2];
		qB.textContent = questions[number][3];
		qC.textContent = questions[number][4];
		qD.textContent = questions[number][5];

		if (reviewMode) {
			if (questions[number][1][1] == "A")
				qA.style.backgroundColor = "#77ff43";
			else if (questions[number][1][1] == "B")
				qB.style.backgroundColor = "#77ff43";
			else if (questions[number][1][1] == "C")
				qC.style.backgroundColor = "#77ff43";
			else if (questions[number][1][1] == "D")
				qD.style.backgroundColor = "#77ff43";
		}

	} else if (questions[number].length == 3) {

		if (typeof questions[number][2] == "boolean") {
			trueFalseDiv.style.display = "grid";
			if ( questions[number][0] >= 0)			
				arrayTrueFalse[questions[number][0]].style.backgroundColor = "#FE017F";
			qQ.textContent = questions[number][1];

			if (reviewMode) {
				if (questions[number][2]) qTrue.style.backgroundColor = "#77ff43";
				else qFalse.style.backgroundColor = "#77ff43";
			}

		} else {
			identiFyDiv.style.display = "block";
			identiFyDiv.value = `${questions[number][0]}`;
			qQ.textContent = questions[number][1];
			if (reviewMode) identiFyDiv.value += ` : ${questions[number][2]}`;
			else isIdentification = true;
		}
	}
	qT.textContent = "Question " + (number+1);
 
	prevDiv.style.display = (number - 1 < 0) ? "none" : "block";
	nextDiv.textContent = (number + 1 >= questions.length) ? "FINISH" : "NEXT";
}

function arraysAreEqual(arr1, arr2) {
	if (arr1.length != arr2.length) {
		return false;
	}
	const sortedArr1 = arr1.slice().sort();
	const sortedArr2 = arr2.slice().sort();

	for (let i = 0; i < sortedArr1.length; i++) {
		if (sortedArr1[i].toLowerCase() != sortedArr2[i].toLowerCase()) {
			return false;
		}
	}
	return true;
}

// function arraysAreEqual(arr1, arr2) {
// 	if (arr1.length != arr2.length) {
// 		return false;
// 	}
// 	const sortedArr1 = arr1.slice().sort();
// 	const sortedArr2 = arr2.slice().sort();

// 	for (let i = 0; i < sortedArr1.length; i++) {
// 		if (sortedArr1[i].toLowerCase() != sortedArr2[i].toLowerCase()) {
// 			return false;
// 		}
// 	}
// 	return true;
// }

function finish() {
	for (let i = 0; i < questions.length; i++) {
		if (questions[i].length == 6) {
			if (numToLetter.get(questions[i][0]) == questions[i][1][1]) {
				totalScore++;
				numOfScoreCor++;
			} else numOfScoreInc++;

		} else if (questions[i].length == 3) {

			if (typeof questions[i][2] == "boolean") {
				if (questions[i][0] != -1 && (!questions[i][0]) == questions[i][2]) {
					totalScore++;
					numOfScoreCor++;
				} else numOfScoreInc++;

			} else {
				if (Array.isArray(questions[i][2])) {
					if (arraysAreEqual(questions[i][2], questions[i][0].split(', '))) {
						totalScore++;
						numOfScoreCor++;
					} else numOfScoreInc++;
				}
				else if (questions[i][0].toLowerCase() == questions[i][2].toLowerCase()) {
					totalScore++;
					numOfScoreCor++;
				} else numOfScoreInc++;
			}
		}
	}
	totalDiv.textContent = `SCORE: ${totalScore}/${questions.length}`;
	incDiv.textContent   = `Number of Incorrect: ${numOfScoreInc}`;
	corDiv.textContent   = `Number of Correct: ${numOfScoreCor}`;
	backResult.style.display = "block";
}

function doReview() {
	backResult.style.display = "none";
	number           = -1;
	totalScore       = 0;
	numOfScoreInc    = 0;
	numOfScoreCor    = 0;
	reviewMode       = true;

	identiFyDiv.readOnly = true;
	next();
}

function retry() {
	backResult.style.display = "none";
	number           = -1;
	totalScore       = 0;
	numOfScoreInc    = 0;
	numOfScoreCor    = 0;

	identiFyDiv.readOnly = false;
	reviewMode           = false;

	for (let i = 0; i < questions.length; i++) {
		if (questions[i].length == 6)
			questions[i][0] = -1;
		else if (questions[i].length == 3)
			if (typeof questions[i][2] == "boolean")
				questions[i][0] = -1;
			else questions[i][0] = "";
	}
	shuffleArray(questions);
	next();
}

function next() {
	if (!reviewMode && isIdentification) {
		questions[number][0] = identiFyDiv.value;
		isIdentification = false;
	}
	if (number + 1 >= questions.length) {
		finish();
		return;
	}
	number++;
	updateQuestionaire();
}

function prev() {
	if (number - 1 < 0) return;

	if (!reviewMode && isIdentification) {
		questions[number][0] = identiFyDiv.value;
		isIdentification = false;
	}
	number--;
	updateQuestionaire();
}

function shuffleArray(array) {
	for (let i = array.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[array[i], array[j]] = [array[j], array[i]];
	}
}

function main(argument) {
	shuffleArray(questions);
	next();
}
main();