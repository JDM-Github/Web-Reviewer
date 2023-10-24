import { allCourseQuiz } from "../js/firebase.js";

let number           = -1;
let maxNumber        = 99;
let reviewMode       = false;
let isIdentification = false;
let isEnumeration    = false;

let totalScore    = 0;
let numOfScoreInc = 0;
let numOfScoreCor = 0;

const numToLetter = new Map();
numToLetter.set(-1, "X");
numToLetter.set( 0, "A");
numToLetter.set( 1, "B");
numToLetter.set( 2, "C");
numToLetter.set( 3, "D");

// const questions = allCourseQuiz[0];
// console.log(allCourseQuiz);
const questions = [
	["", "A well-known writer in the field of Artificial Intelligence.", "ernest tello"],
	["", "One of the Promoters of object-oriented paradigm. Also the one who created 'Small Talk'.", "allan c kay"],
	["", "It is a blueprint or template of an object that contains variables for storing data and functions to perform operations on the data", "class"],
	["", "____ is the most recent concept among programming paradigm and still means different things to different people. (Answer in Acronym).", "OOP"],
	["", "An access modifier that will make all attributes/method available on all files and class.", "public"],
	["", "An access modifier that will make attributes/method only available when inherited or own by.", "protected"],
	["", "An access modifier that will make attributes/method only available if own by.", "private"],
	["", "It is represented by fields/ properties/ attributes of an object.", "state"],
	["", "It gives a unique name to an object and enables one object to interact with other objects", "identity"],
	["", "It is represented by methods of an object.", "behavior"],
	["", "Named is formed of multiple words that are joined together as a single word with the first letter of each of multiple words capitalized.", "camelcase"],
	["", "What keyword used when declaring class field as constant.", "final"],
	["", "The process of creating an object from an existing class (template).", "instantiation"],
	["", "What is java entry point in program?", "main"],


	[-1, "Class will not occupy any memory space", true],
	[-1, "Objects contain data in the form of function and code in the form of attributes.", false],
	[-1, "OOP Language permits higher level of abstraction for solving real-life problems.", true],
	[-1, "We used the private keyword for a constant matter.", false],
	[-1, "Without class fields, a class would simply be a structure.", false],
	[-1, "Class methods acts as a action and function in class.", true],

	[-1, ["Class Syntax. Create class field.", "C"],
		"<access modifier> methodName () { // body }",
		"<access modifier> <fieldname>;",
		"<access modifier> data_type <fieldname>",
		"<access modifier> class <className>",
	],

	[-1, ["All of this is a drawback of Procedural Programming. EXCEPT", "D"],
		"Not suitable of high-level abstraction for solving real problem.",
		"Functions are less reusable",
		"Separates the data structures (variables) and algorithms (function)",
		"Treats data as critical element in the program development and does not allow it to flow freely around the system.",
	],

	[-1, ["What is the right order of 'Layers of a Software Technology'.", "B"],
		"Assembly Language, Machine Language, Procedural Programming, Object Oriented Programming",
		"(0, 1), Assembly Language, Procedural Programming, Object Oriented Programming",
		"Machine Language, (0, 1), Assembly Language, Procedural Programming, Object Oriented Programming",
		"(0, 1), Assembly Language, Machine Language, Procedural Programming, Object Oriented Programming"
	],

	["", "Class can contains...", ["class field", "method", "block", "constructor", "nested class interface"]],
	["", "OOP can contains...", ["data", "function"]],
	["", "Object consists of?", ["state", "behavior", "identity"]],
];

const backResult = document.querySelector(`.backresult`);
const retryDiv   = document.querySelector(`.result .buttons .resultRetry`);
const reviewDiv  = document.querySelector(`.result .buttons .resultReview`);

retryDiv .addEventListener('click', retry   );
reviewDiv.addEventListener('click', doReview);

const qQ     = document.querySelector(`.question div`             );
const qA     = document.querySelector(`.selection [selection="A"]`);
const qB     = document.querySelector(`.selection [selection="B"]`);
const qC     = document.querySelector(`.selection [selection="C"]`);
const qD     = document.querySelector(`.selection [selection="D"]`);
const qT     = document.querySelector(`.topNav .questionDiv`      );

const qTrue  = document.querySelector(`.true-false [selection="True"]`);
const qFalse = document.querySelector(`.true-false [selection="False"]`);

const selectionDiv = document.querySelector(`.selection`          );	
const trueFalseDiv = document.querySelector(`.true-false`         );
const enumerateDiv = document.querySelector(`.enumeration`        );
const identiFyDiv  = document.querySelector(`.identification`     );
const totalDiv     = document.querySelector(`.result .resultTxt`  );
const incDiv       = document.querySelector(`.result .resultNoInc`);
const corDiv       = document.querySelector(`.result .resultNoCor`);

const nextDiv = document.querySelector(".topNav .nextDiv")
nextDiv.addEventListener('click', () => { next(); });
const prevDiv = document.querySelector(".topNav .prevDiv")
prevDiv.addEventListener('click', () => { prev(); });

const arrayChoice    =  [qA, qB, qC, qD];
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
	enumerateDiv.style.display = "none";

	if (questions[number].length == 6) {
		selectionDiv.style.display = "grid";
		if ( questions[number][0] >= 0) arrayChoice[questions[number][0]].style.backgroundColor = "#FE017F";

		qQ.textContent = questions[number][1][0];
		qA.textContent = questions[number][2];
		qB.textContent = questions[number][3];
		qC.textContent = questions[number][4];
		qD.textContent = questions[number][5];

		if (reviewMode) {
			if ( questions[number][0] >= 0)
				arrayChoice[questions[number][0]].style.backgroundColor = "#FF193E";
			else {
				qA.style.backgroundColor = "#FF193E";
				qB.style.backgroundColor = "#FF193E";
				qC.style.backgroundColor = "#FF193E";
				qD.style.backgroundColor = "#FF193E";
			}

			const answerChar = questions[number][1][1];
			     if (answerChar == "A") qA.style.backgroundColor = "#77ff43";
			else if (answerChar == "B") qB.style.backgroundColor = "#77ff43";
			else if (answerChar == "C") qC.style.backgroundColor = "#77ff43";
			else if (answerChar == "D") qD.style.backgroundColor = "#77ff43";
		}

	} else if (questions[number].length == 3) {

		if (typeof questions[number][2] == "boolean") {
			trueFalseDiv.style.display = "grid";
			if ( questions[number][0] >= 0)			
				arrayTrueFalse[questions[number][0]].style.backgroundColor = "#FE017F";
			qQ.textContent = questions[number][1];

			if (reviewMode) {
				if ( questions[number][0] >= 0)			
					arrayTrueFalse[questions[number][0]].style.backgroundColor = "#FF193E";
				else {
					qTrue.style.backgroundColor = "#FF193E";
					qFalse.style.backgroundColor = "#FF193E";
				}
				if (questions[number][2]) qTrue.style.backgroundColor = "#77ff43";
				else qFalse.style.backgroundColor = "#77ff43";
			}

		} else if (Array.isArray(questions[number][2])) {
			enumerateDiv.style.display = "grid";
			qQ.textContent = questions[number][1];

			for (let i = 0; i < enumerateDiv.children.length; i++) {
				const child = enumerateDiv.children[i];
				child.value = "";
				child.readOnly = false;
				if (i < questions[number][2].length) {
					child.style.display = "block";
					child.style.backgroundColor = "var(--choice-color)";
				} else child.style.display = "none";
			}
			let enumAnswer = questions[number][0].split(", ");
			if (reviewMode) {
				const newArray = getRightArray(questions[number][2], enumAnswer);
				for (let i = 0; i < newArray.length; i++) {
					const child = enumerateDiv.children[i];
					child.value = newArray[i];
					child.readOnly = true;

					if (newArray[i].indexOf(":") != -1) child.style.backgroundColor = "#FF193E";
					else child.style.backgroundColor = "#77ff43";
				}
			}
			else {
				isEnumeration = true;
				for (let i = 0; i < enumAnswer.length; i++) {
					const child = enumerateDiv.children[i];
					child.value = enumAnswer[i];
					child.readOnly = false;
				}
			}
		} else {
			identiFyDiv.style.display = "block";

			identiFyDiv.style.backgroundColor = "var(--choice-color)";
			identiFyDiv.value = `${questions[number][0]}`;
			qQ.textContent = questions[number][1];
			if (reviewMode) {
				if (identiFyDiv.value.toLowerCase() == questions[number][2].toLowerCase())
					identiFyDiv.style.backgroundColor = "#77ff43"
				else {
					identiFyDiv.style.backgroundColor = "#FF193E"
					identiFyDiv.value += ` : ${questions[number][2]}`;
				}
			}
			else isIdentification = true;
		}
	}

	qT.textContent        = "Question " + (number+1);
	prevDiv.style.display = (number - 1 < 0) ? "none" : "block";
	nextDiv.textContent   = (number + 1 >= questions.length || number + 1 >= maxNumber) ? "FINISH" : "NEXT";
	checkScrollable();
}

function arraysAreEqual(arr1, arr2) {
	if (arr1.length != arr2.length) return false;

	const sortedArr1 = arr1.slice().sort();
	const sortedArr2 = arr2.slice().sort();

	for (let i = 0; i < sortedArr1.length; i++)
		if (sortedArr1[i].toLowerCase() != sortedArr2[i].toLowerCase())
			return false;

	return true;
}

function getRightArray(arr1, arr2) {

	const resultAns = []
	const originalArray = arr1.slice().sort();
	const answerArray = arr2.slice().sort();

	let i, j;
	let isFound = false;
	for (i = 0; i < originalArray.length; i++) {
		isFound = false;
		for (j = 0; j < answerArray.length; j++) {
			if (originalArray[i].toLowerCase() == answerArray[j].toLowerCase()) {
				resultAns.push(answerArray[j]);
  				answerArray  .splice(j, 1);
  				isFound = true;
				break;
			}
		}
		if (!isFound) resultAns.push(` : ${originalArray[i]}`);
	}
	return resultAns;
}

function finish() {

	totalScore       = 0;
	numOfScoreInc    = 0;
	numOfScoreCor    = 0;

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
	else if (!reviewMode && isEnumeration) {
		const newValue = [];
		for (let i = 0; i < questions[number][2].length; i++) {
			const child = enumerateDiv.children[i];
			newValue.push(child.value);
		}
		questions[number][0] = newValue.join(", ");
		isEnumeration = false;
	}
	if (number + 1 >= questions.length || number + 1 >= maxNumber) {
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

	} else if (!reviewMode && isEnumeration) {
		const newValue = [];
		for (let i = 0; i < questions[number][2].length; i++) {
			const child = enumerateDiv.children[i];
			newValue.push(child.value);
		}
		questions[number][0] = newValue.join(", ");
		isEnumeration = false;
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

function checkScrollable() {
	const body = document.body;
	if (body.scrollHeight > window.innerHeight) {
		document.querySelector(".credits").style.position = "relative";
	} else {
		document.querySelector(".credits").style.position = "fixed";
	}
}

function main(argument) {
	shuffleArray(questions);
	next();

	window.addEventListener("load", checkScrollable);
	window.addEventListener("resize", checkScrollable);
}
main();
