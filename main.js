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
	[-1, ["TEST1", "A"], "A", "B", "C", "D"],
	[-1, ["TEST2", "A"], "A", "B", "C", "D"],
	[-1, "TEST3", true],
	[-1, "TEST4", true],
	["", "TEST5", "test"],
	["", "TEST6", "test2"],
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
	allSelec.forEach(q => {
		q.style.backgroundColor = "var(--choice-color)";
	});
	ques.style.backgroundColor = "#FE017F";
	questions[number][0] = index;
}
function clickFuncTrueFalse(ques, index) {
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
				if (questions[i][0] == questions[i][2]) {
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
	next();
}

function retry() {
	backResult.style.display = "none";
	number           = -1;
	totalScore       = 0;
	numOfScoreInc    = 0;
	numOfScoreCor    = 0;
	reviewMode       = false;

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