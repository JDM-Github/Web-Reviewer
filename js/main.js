// import { allCourseQuiz } from "../js/firebase.js";
// const questions = allCourseQuiz[0];
// console.log(allCourseQuiz);

let number           = -1;
let maxNumber        = 99;

let isRandomized     = true;
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
numToLetter.set( 4, "E");
numToLetter.set( 5, "F");
numToLetter.set( 6, "G");
numToLetter.set( 7, "H");
numToLetter.set( 8, "I");
numToLetter.set( 9, "J");

// Sample
// [-1, "TEST", true]
// [-1, ["TEST", "A"], "", "", "", ""]
// ["", "TETS", "TEST"]
// ["", "TEST", ["TEST", "TEST"]]
let questions = null;

var questionsWeb = [], questionsAOOP = [], questionsHCI = [], questionsAccounting = [], questionsEnvi = [];

var questionDataScience = [
	["", "A scheduling where the CPU cannot be taken away from its currently executing process", "Non-Preemptive scheduling"],
	["", "A scheduling where the CPU can be taken away from its currently executing process", "Preemptive scheduling"],
	["", "The CPU must be busy doing useful work at all times.", "CPU utilization"],
	["", "The amount of work done by the CPU should be maximized.", "Throughput"],
	["", "The time between the point a process is submitted and the time it finishes executing is minimized", "Turnaround time"],
	["", "The time between the submission of a request and the start of the system’s first response is minimized.", "Response time"],
	["", "The time a process has to spend inside the ready queue waiting to be executed by the CPU is minimized.", "Waiting time"],
	["", "All processes will be given equal opportunity to use the CPU", "Fairness"],

	["", "Performance criteria of a good scheduler:", [
		"CPU Utilization",
		"Throughput",
		"Turnaround time",
		"Response time",
		"Waiting time",
		"Fairness"
	]],

	["", "Is said to have occurred since the final output is dependent on the sequence or time of events; undesirable situation that occurs when a device or system attempts to perform two or more operations at the same time, but because of the nature of the device or system, the operations must be done in the proper sequence to be done correctly", "Race condition||race hazard"],
	["", "When a process contains the instructions that access a shared resource.", "Critical section"],

	["", "requirement should always be met in order to guarantee that only one process may enter its critical section at a time.", "Mutual exclusion"],
	["", "requirement that must guarantee that if a process wants to enter its critical section and no other process is in its critical section, the process will be able to execute in its critical section.", "Progress"],
	["", "requirement that must guarantee that processes will not wait for an indefinite amount of time before it can enter its critical section.", "Bounded waiting"],

	["", "Solution for race condition problem involves:", [
		"Mutual exclusion",
		"Progress",
		"Bounded waiting"
	]],

	["", "is the main problem with all the software solutions to critical section problem; the other processes that are waiting to execute their critical section will be stuck in while loop of their problems.", "Busy waiting"],
	["", "feature enables a process to disable interrupts before it starts modifying a shared variable.", "Disabling interrupts"],
	["", "a special machine instruction that will allow a process to modify a variable or memory location atomically", "Special hardware instruction"],
	["", "Hardware solutions to the critical section problem:", [
		"Disabling interrupts",
		"Special hardware instruction"
	]],
	["", "a tool used to solve more complex synchronization problems and does not use busy waiting; a special integer variable that is protected.", "Semaphore"],
	["", "represents the processes and the use of limited resources.", "The dining philosophers problem"],
	["", "happens when two or more processes are waiting for resources held by each other before it can proceed with its execution", "deadlock"],
	["", "represents access to a database where readers are processes that only examine or read data stored in a database while writers have exclusive access to the database and they can modify or update data.", "The readers and writers problem"],
	["", "Classic Synchronization Problem", [
		"The Dining Philosophers Problem",
		"Deadlock",
		"The Readers and Writers Problem"
	]],
	["", "a directed graph showing the resources held (directed edge from resource to a process) and the resources requested (directed edge from process to a resource) by different processes.", "Resource-allocation graph"],
	["", "similar to resource allocation graph except that resources are omitted", "Wait-for-graphs"],
	["", "there must be mutual exclusion in the use of resources; resources are used by only one process at a time.", "Mutual exclusion"],
	["", "processes hold resources while waiting to acquire other resources.", "Hold and wait"],
	["", "resources held by processes cannot be forcibly taken away; the process should release it voluntarily", "No preemption"],
	["", "there must be a circular chain or processes; each process waits for the next process within the chain.", "Circular wait"],
	["", "Necessary conditions for a deadlock", [
		"Mutual exclusion",
		"Hold and wait",
		"No preemption",
		"Circular wait"
	]],
	["", "implies that all resources within a computer system become shareable. (Removing the ___ condition)", "Mutual exclusion"],
	["", "implies that a process is not allowed to hold a resource while requesting to use other resources. (Removing the ___ condition)", "Hold and wait"],
	["", "implies that a process may be stopped anytime and its resources be taken away from it. (Removing the ___ condition)", "No preemption"],
	["", "can be removed by forcing processes to request resources in a predefined order and a way to do this is to assign each resource a unique integer value. (Removing the ___ condition)", "Circular wait"],
];


function saveListToSession() {
	const jsonList = JSON.stringify(questions);
	sessionStorage.setItem('myList'    , jsonList);
	sessionStorage.setItem('maxNumber' , maxNumber);
	sessionStorage.setItem('currNumber', number);
	sessionStorage.setItem('reviewMode', reviewMode);
}

function setListFromSession() {
	const jsonList = sessionStorage.getItem('myList');
	questions = JSON.parse(jsonList);
	if (sessionStorage.getItem('maxNumber'))
		maxNumber = sessionStorage.getItem('maxNumber');

	if (sessionStorage.getItem('currNumber'))
		number    = sessionStorage.getItem('currNumber') - 1;

	if (sessionStorage.getItem('reviewMode'))
		reviewMode = sessionStorage.getItem('reviewMode') === 'true';
}

const urlParams = new URLSearchParams(window.location.search);
if (urlParams.has('var')) {
	const varValue = urlParams.get('var');
	if (varValue == 'web') questions = questionsWeb;
	else if (varValue == 'aoop') questions = questionsAOOP;
	else if (varValue == 'hci')  questions = questionsHCI;
	else if (varValue == 'acc')  questions = questionsAccounting;
	else if (varValue == 'env')  questions = questionsEnvi;
} else {
	if (false && sessionStorage.getItem('myList')) {
		setListFromSession();
		isRandomized = false;
	}
	else {
		questions = questionDataScience;
		maxNumber = questions.length;
	}
}


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
const qE     = document.querySelector(`.selection [selection="E"]`);
const qF     = document.querySelector(`.selection [selection="F"]`);
const qG     = document.querySelector(`.selection [selection="G"]`);
const qH     = document.querySelector(`.selection [selection="H"]`);
const qI     = document.querySelector(`.selection [selection="I"]`);
const qJ     = document.querySelector(`.selection [selection="J"]`);

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

let holdControl = false;
let holdShift   = false;
document.addEventListener('keydown', function(event) {
	// console.log(event.key);
	if (event.key === 'Control') holdControl = true;
	if (event.key === 'Shift'  ) holdShift = true;
	if (holdControl) {
		// console.log(holdShift);
		if (holdShift) {
			if (event.key === 'ArrowRight') {
				if (!(maxNumber >= questions.length))
					maxNumber++;
				qT.textContent = "Question " + (number+1) + " - " + (Math.min(maxNumber, questions.length));
			}
			if (event.key === 'ArrowLeft' ) {
				if (maxNumber > 1 && number+1 < maxNumber )
					maxNumber--;
				qT.textContent = "Question " + (number+1) + " - " + (Math.min(maxNumber, questions.length));
			}
		} else {
			if      (event.key === 'ArrowRight') next();
			else if (event.key === 'ArrowLeft' ) prev();
		}
	}
});
document.addEventListener('keyup', function(event) {
	if (event.key === 'Control') holdControl = false;
	if (event.key === 'Shift'  ) holdShift = false;
});

const nextDiv = document.querySelector(".topNav .nextDiv")
nextDiv.addEventListener('click', () => { next(); });
const prevDiv = document.querySelector(".topNav .prevDiv")
prevDiv.addEventListener('click', () => { prev(); });

const arrayChoice    =  [qA, qB, qC, qD, qE, qF, qG, qH, qI, qJ];
const arrayTrueFalse = [qTrue, qFalse];

for (let i = 0; i < arrayChoice.length; i++) { arrayChoice[i].addEventListener('click', () => { clickFunc(arrayChoice[i], i); }); }
for (let i = 0; i < arrayTrueFalse.length; i++) { arrayTrueFalse[i].addEventListener('click', () => { clickFuncTrueFalse(arrayTrueFalse[i], i); }); }

const allSelec = document.querySelectorAll(".selection div");
const allSelecTrueFalse = document.querySelectorAll(".true-false div");

function updateQuestion(question) {
	var imageExtensions = ['jpg', 'jpeg', 'png', 'gif', 'svg'];
	var isImagePath = imageExtensions.some(function(ext) {
		return question.toLowerCase().endsWith(ext);
	});
	if (isImagePath) {
		qQ.style.backgroundImage = 'url("' + question + '")';
		qQ.textContent = '';
	} else {
		qQ.style.backgroundImage = '';
		qQ.textContent = question;
	}
}

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

	if (questions[number].length >= 6) {
		selectionDiv.style.display = "grid";
		if ( questions[number][0] >= 0) arrayChoice[questions[number][0]].style.backgroundColor = "#FE017F";

		updateQuestion(questions[number][1][0]);
		qA.textContent = questions[number][2];
		qB.textContent = questions[number][3];
		qC.textContent = questions[number][4];
		qD.textContent = questions[number][5];

		if (questions[number].length >= 7 ) { qE.textContent = questions[number][6]; qE.style.display = "inline-block"; } else qE.style.display = "none";
		if (questions[number].length >= 8 ) { qF.textContent = questions[number][7]; qF.style.display = "inline-block"; } else qF.style.display = "none";
		if (questions[number].length >= 9 ) { qG.textContent = questions[number][8]; qG.style.display = "inline-block"; } else qG.style.display = "none";
		if (questions[number].length >= 10) { qH.textContent = questions[number][9]; qH.style.display = "inline-block"; } else qH.style.display = "none";
		if (questions[number].length >= 11) { qI.textContent = questions[number][10];qI.style.display = "inline-block"; } else qI.style.display = "none";
		if (questions[number].length >= 12) { qJ.textContent = questions[number][11];qJ.style.display = "inline-block"; } else qJ.style.display = "none";

		if (reviewMode) {
			if  ( questions[number][0] >= 0) arrayChoice[questions[number][0]].style.backgroundColor = "#FF193E";
			else { arrayChoice.forEach(e => { e.style.backgroundColor = "#FF193E"; }); }

			const answerChar = questions[number][1][1];
				 if (answerChar == "A") qA.style.backgroundColor = "#77ff43";
			else if (answerChar == "B") qB.style.backgroundColor = "#77ff43";
			else if (answerChar == "C") qC.style.backgroundColor = "#77ff43";
			else if (answerChar == "D") qD.style.backgroundColor = "#77ff43";
			else if (answerChar == "E") qE.style.backgroundColor = "#77ff43";
			else if (answerChar == "F") qF.style.backgroundColor = "#77ff43";
			else if (answerChar == "G") qG.style.backgroundColor = "#77ff43";
			else if (answerChar == "H") qH.style.backgroundColor = "#77ff43";
			else if (answerChar == "I") qI.style.backgroundColor = "#77ff43";
			else if (answerChar == "J") qJ.style.backgroundColor = "#77ff43";
		}

	} else if (questions[number].length >= 3) {

		if (typeof questions[number][2] == "boolean") {
			trueFalseDiv.style.display = "grid";
			if ( questions[number][0] >= 0)			
				arrayTrueFalse[questions[number][0]].style.backgroundColor = "#FE017F";

			updateQuestion(questions[number][1]);

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
			updateQuestion(questions[number][1]);

			for (let i = 0; i < enumerateDiv.children.length; i++) {
				const child = enumerateDiv.children[i];
				child.value = "";
				child.readOnly = false;
				if (i < ((questions[number].length == 4) ? questions[number][3] : questions[number][2].length)) {
					child.style.display = "block";
					child.style.backgroundColor = "var(--choice-color)";
				} else child.style.display = "none";
			}
			let enumAnswer = questions[number][0].split("||");
			if (reviewMode) {
				let ansCorr = 0;
				const newArray = getRightArray(questions[number][2], enumAnswer);
				for (let i = 0; i < newArray.length; i++) {
					const child = enumerateDiv.children[i];
					child.value = newArray[i].substr((newArray[i].startsWith(" : ") ? 3 : 0));
					child.readOnly = true;

					child.style.display = "block";
					if (newArray[i].indexOf(":") != -1) {
						if (((questions[number].length == 4) ? questions[number][3] > ansCorr || questions[number][3] > i : true))
							child.style.backgroundColor = "#FF193E";
						else child.style.backgroundColor = "#ffff3E";
					}
					else { 
						ansCorr++;
						child.style.backgroundColor = "#77ff43";
					}
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
			updateQuestion(questions[number][1]);
			if (reviewMode) {
				if (isInArray(identiFyDiv.value, questions[number][2].split("||")))
					identiFyDiv.style.backgroundColor = "#77ff43"
				else {
					identiFyDiv.style.backgroundColor = "#FF193E"
					identiFyDiv.value += ` : ${questions[number][2]}`;
				}
			}
			else isIdentification = true;
		}
	}

	qT.textContent        = "Question " + (number+1) + " - " + (Math.min(maxNumber, questions.length));
	prevDiv.style.display = (number - 1 < 0) ? "none" : "block";
	nextDiv.textContent   = (number + 1 >= questions.length || number + 1 >= maxNumber) ? "FINISH" : "NEXT";
	checkScrollable();
	saveListToSession();
}

function arraysAreEqual(arr1, arr2) {
	const sortedArr1 = arr1.slice().sort();
	const sortedArr2 = arr2.slice().sort();

	let isFound;
	for (let i = 0; i < sortedArr2.length; i++) { isFound = false;
		for (let j = 0; j < sortedArr1.length; j++)
			{ if (isInArray(sortedArr2[i], sortedArr1[j].split("||"))) { sortedArr1.splice(j, 1); isFound = true; break; } }
		if (!isFound) return false;
	}
	return true;
}

function getRightArray(arr1, arr2) {

	const resultAns = [], leftAns = [];
	const originalArray = arr1.slice().sort();
	const answerArray   = arr2.slice().sort();

	let i, j;
	for (i = 0; i < answerArray.length; i++) {
		for (j = 0; j < originalArray.length; j++) {
			if (isInArray(answerArray[i], originalArray[j].split("||"))) {
				resultAns.push(answerArray[i]);
				originalArray.splice(j, 1);
				break;
			}
		}
	}
	for (j = 0; j < originalArray.length; j++) resultAns.push(` : ${originalArray[j]}`);
	return resultAns;
}

function isInArray(e, arr) {
	const sortedArr = arr.slice().sort();
	for (let i = 0; i < sortedArr.length; i++)
		if (sortedArr[i].toLowerCase() == e.toLowerCase())
			return true;
	return false;
}

function finish() {

	totalScore       = 0;
	numOfScoreInc    = 0;
	numOfScoreCor    = 0;

	for (let i = 0; i < maxNumber; i++) {
		if (questions[i].length >= 6) {
			if (numToLetter.get(questions[i][0]) == questions[i][1][1]) { totalScore++; numOfScoreCor++; }
			else numOfScoreInc++;

		} else if (questions[i].length >= 3) {
			if (typeof questions[i][2] == "boolean") {
				if (questions[i][0] != -1 && (!questions[i][0]) == questions[i][2]) { totalScore++; numOfScoreCor++; }
				else numOfScoreInc++;
			} else {
				if (Array.isArray(questions[i][2])) {
					let answerArray = questions[i][0].split("||");
					if ( ((questions[i].length == 4) ? answerArray.length == questions[i][3] : answerArray.length == questions[i][2].length) &&
						arraysAreEqual(questions[i][2], answerArray)) { totalScore++; numOfScoreCor++; }
					else numOfScoreInc++;
				}
				else if (isInArray(questions[i][0], questions[i][2].split("||"))) { totalScore++; numOfScoreCor++; }
				else numOfScoreInc++;
			}
		}
	}
	totalDiv.textContent = `SCORE: ${totalScore}/${maxNumber}`;
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
		if (questions[i].length >= 6) questions[i][0] = -1;
		else if (questions[i].length >= 3)
			if (typeof questions[i][2] == "boolean") questions[i][0] = -1;
		else questions[i][0] = "";
	}
	start();
}

function next() {
	if (!reviewMode && isIdentification) {
		questions[number][0] = identiFyDiv.value;
		isIdentification = false;
	}
	else if (!reviewMode && isEnumeration) {
		const newValue = [];
		for (let i = 0; i < ((questions[number].length == 4) ? questions[number][3] : questions[number][2].length); i++) {
			const child = enumerateDiv.children[i];
			newValue.push(child.value);
		}
		questions[number][0] = newValue.join("||");
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
		for (let i = 0; i < ((questions[number].length == 4) ? questions[number][3] : questions[number][2].length); i++) {
			const child = enumerateDiv.children[i];
			newValue.push(child.value);
		}
		questions[number][0] = newValue.join("||");
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
	if (body.scrollHeight + 50 > window.innerHeight) {
		document.querySelector(".credits").style.position = "relative";
	} else {
		document.querySelector(".credits").style.position = "fixed";
	}
}

function start() {
	if (isRandomized) shuffleArray(questions);

	isRandomized = true;
	questions.forEach((ques) => {
		if (ques.length >= 6) {
			const newIndex = Math.floor(Math.random() * (ques.length - 2));
			const newArray = [];

			let startIndex = ques[1][1].charCodeAt(0) - 65;
			for (let i = 0; i < ques.length - 2; i++)
				if (2+i != startIndex+2) newArray.push(ques[2+i]);

			ques[1][1] = numToLetter.get(newIndex);
			ques[newIndex+2] = ques[startIndex+2];

			shuffleArray(newArray);
			for (let i = 0; i < newArray.length; i++) {
				ques[((newIndex+1+i) % (ques.length - 2))+2] = newArray[i];
			}
		}
	});
	next();
}

function main() {
	start();

	window.addEventListener("load", checkScrollable);
	window.addEventListener("resize", checkScrollable);
}
main();
