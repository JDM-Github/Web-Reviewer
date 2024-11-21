// import { allCourseQuiz } from "../js/firebase.js";
// const questions = allCourseQuiz[0];
// console.log(allCourseQuiz);

let number = -1;
let maxNumber = 99;

let isRandomized = true;
let reviewMode = false;
let isIdentification = false;
let isEnumeration = false;

let totalScore = 0;
let numOfScoreInc = 0;
let numOfScoreCor = 0;

const numToLetter = new Map();
numToLetter.set(-1, "X");
numToLetter.set(0, "A");
numToLetter.set(1, "B");
numToLetter.set(2, "C");
numToLetter.set(3, "D");
numToLetter.set(4, "E");
numToLetter.set(5, "F");
numToLetter.set(6, "G");
numToLetter.set(7, "H");
numToLetter.set(8, "I");
numToLetter.set(9, "J");

// Sample
// [-1, "TEST", true]
// [-1, ["TEST", "A"], "", "", "", ""]
// ["", "TETS", "TEST"]
// ["", "TEST", ["TEST", "TEST"]]
let questions = null;
var questionsWeb = [],
	questionsAOOP = [],
	questionsHCI = [],
	questionsAccounting = [],
	questionsEnvi = [];
var questionDataScience = [
	[
		-1,
		["What is the purpose of a color sheet in character design?", "B"],
		"To outline the storyline",
		"To give a guide to the colors used for consistency",
		"To change the character's design style",
		"To reduce production",
	],
	[
		-1,
		["Bright and flamboyant colors in character design often convey", "C"],
		"Bright anf flamboyant colors in character design often convey",
		"Professionalism and stability",
		"Excitement and action",
		"Anger and Hatred",
	],
	[
		-1,
		["Which part of the letter known as a meanline", "C"],
		"The line where the lowercase letters sit",
		"The maximum height of uppercase letters",
		"The height that determines parts of a letter, such as shoulders and ears",
		"The bottom line where all letters rest",
	],
	[
		-1,
		[
			"Which of the following is NOT typically included in environment concept art?",
			"C",
		],
		"Buildings",
		"Natural Scenery",
		"Characters Emotions",
		"Landscapes",
	],
	[
		-1,
		["When aligning  elements in a design, it's best to:", "C"],
		"Use multiple alignments (center, left, right) on a single page to create variety",
		"Randomly place elements for a dynamic, exciting look.",
		"Stick to a consistent alignment pattern that guides the viewer's eye",
		"Ignore alignment to avoid making the design too rigid",
	],
	[
		-1,
		["Why is silhouette important in character design?", "C"],
		"It makes characters more expensive to design",
		"It limits the designer creativity",
		"It helps audiences recognize the character's shape quickly",
		"It hides characters from view",
	],
	[
		-1,
		["In design, alignment primarily serves to", "C"],
		"Make elements appear larger and more prominent",
		"Create visual connections that help guide the viewer's eye through the layout",
		"Ensure all text is the same size and font",
		"It helps audiences recognize the character's shape quickly",
	],
	[
		-1,
		[
			"You are designing a flyer for a formal event. Which typeface would be be the most appropriate to use?",
			"C",
		],
		"Comic Sans",
		"Arial",
		"Times New Roman",
		"Papyrus",
	],
	[
		-1,
		[
			"The character’s fundamental structure can often be broken down into:",
			"B",
		],
		"Colors",
		"Basic shapes like circles and triangles",
		"Photographs",
		"Environment scenes",
	],
	[
		-1,
		[
			"You have a block of text with several lines that need to be aligned. Which alignment is best for readability in most cases?",
			"D",
		],
		"Centered",
		"Right-aligned",
		"Justified",
		"Left-aligned",
	],
	[
		-1,
		[
			"When elements in a design are not aligned properly, it can lead to:",
			"C",
		],
		"A more organized and visually pleasing layout.",
		"Enhanced readability and flow.",
		"A sense of disorganization and confusion",
		"More contrast in the design",
	],
	[
		-1,
		["Which of the following is a characteristics of ascenders", "B"],
		"They extend below the baseline",
		"They extend upward from the main body of a letter",
		"They are horizontal strokes",
		"They connect two parts of a letter",
	],
	[
		-1,
		["The bowl in letters anatomy refers to:", "C"],
		"A straight vertical line in a letter",
		"A small projection at the end of a stroke",
		'The curved, enclosed part of a letter like "b" or "d"',
		"They connect two parts of a letter",
	],
	[
		-1,
		["Which guideline improves text readability", "A"],
		"Choosing a readable typeface",
		"Using a busy background",
		"Distorting text for effect",
		"Let it be",
	],
	[
		-1,
		[
			"What design principle involves the use of opposing elements, such as light and dark colors, to create visual interest?",
			"C",
		],
		"Proportion",
		"Emphasis",
		"Contrast",
		"Alignment",
	],
	[
		-1,
		["Which type of concept art focuses on creating props and tools?", "C"],
		"Environment design",
		"Character design",
		"Weapon and asset design",
		"Vehicle design",
	],
	[
		-1,
		[
			"You are tasked with designing a logo for a new coffee shop that wants to convey a warm, inviting atmosphere. You have several font options to choose from, including a modern sans serif, a vintage script, and a bold serif. Considering the shop’s brand identity and target audience, which font style would be most appropriate for the logo, and why?",
			"B",
		],
		"The modern sans serif, as it conveys a clean and temporary look that appeals to a younger crowd",
		"The vintage script, as it evokes a sense of nostalgia and warmth that aligns with the inviting atmosphere.",
		"The bold serif, as it portrays a sense of tradition that coffee lovers appreciate",
		"Include lenghty descriptions of the event in a decorative font to entice the audience to read more.",
	],
	[
		-1,
		["Why is simplicity crucial in character design for animation?", "D"],
		"It limits the character's personality",
		"It requires fewer colors",
		"It increase production costs",
		"It reduces the time and expense of rendering",
	],
	[
		-1,
		[
			"You are creating a social media campaign for a charity event that aims to raise awareness about environmental issues. The visuals will include powerful imagery, but you need to incorporate text that grabs attention without overshadowing the images. What typographic choices would you make to ensure that the text is effective while allowing the visuals to remain impactful?",
			"B",
		],
		"Use large, bold fonts with bright colors to dominate the visuals, ensuring the message is seen",
		"Choose a subtle, elegant font in a smaller size that complements the imagery, using negative space effectively to create balance.",
		"Include lenghty descriptions of the event in a decorative font to entice the audience to read more.",
		"Use multiple contrasting fonts in varying sizes to attract attention to different parts of the message",
	],
	[-1, "Concept art must always be fully polished and detailed", false],
	[
		-1,
		"Fascinating characters and monsters are essential to keep the spectator interested in any production.",
		true,
	],
	[
		-1,
		"A color sheet can help ensure consistency in character design across a production team.",
		true,
	],
	[
		-1,
		"Silhouettes of characters do not need to be distinct as long as they are colorful.",
		false,
	],
	[
		-1,
		"Contrast in design is the art of giving focus on the difference between the elements of graphic design",
		true,
	],
	[
		-1,
		"Edge alignment is mostly used in typography and text to evenly distribute a group of elements.",
		true,
	],
	[-1, "Typography is only concerned with the choice of typeface.", false],
	[-1, "Ascenders are strokes that extend below the baseline.", false],
	[
		-1,
		"Typographic standards are considered best practices for typography.",
		true,
	],
	[-1, "Left alignment is the most common for longer text bodies", true],
];

function saveListToSession() {
	const jsonList = JSON.stringify(questions);
	sessionStorage.setItem("myList", jsonList);
	sessionStorage.setItem("maxNumber", maxNumber);
	sessionStorage.setItem("currNumber", number);
	sessionStorage.setItem("reviewMode", reviewMode);
}

function setListFromSession() {
	const jsonList = sessionStorage.getItem("myList");
	questions = JSON.parse(jsonList);
	if (sessionStorage.getItem("maxNumber"))
		maxNumber = sessionStorage.getItem("maxNumber");

	if (sessionStorage.getItem("currNumber"))
		number = sessionStorage.getItem("currNumber") - 1;

	if (sessionStorage.getItem("reviewMode"))
		reviewMode = sessionStorage.getItem("reviewMode") === "true";
}

const urlParams = new URLSearchParams(window.location.search);
if (urlParams.has("var")) {
	const varValue = urlParams.get("var");
	if (varValue == "web") questions = questionsWeb;
	else if (varValue == "aoop") questions = questionsAOOP;
	else if (varValue == "hci") questions = questionsHCI;
	else if (varValue == "acc") questions = questionsAccounting;
	else if (varValue == "env") questions = questionsEnvi;
} else {
	if (false && sessionStorage.getItem("myList")) {
		setListFromSession();
		isRandomized = false;
	} else {
		questions = questionDataScience;
		maxNumber = questions.length;
	}
}

const backResult = document.querySelector(`.backresult`);
const retryDiv = document.querySelector(`.result .buttons .resultRetry`);
const reviewDiv = document.querySelector(`.result .buttons .resultReview`);

retryDiv.addEventListener("click", retry);
reviewDiv.addEventListener("click", doReview);

const qQ = document.querySelector(`.question div`);
const qA = document.querySelector(`.selection [selection="A"]`);
const qB = document.querySelector(`.selection [selection="B"]`);
const qC = document.querySelector(`.selection [selection="C"]`);
const qD = document.querySelector(`.selection [selection="D"]`);
const qE = document.querySelector(`.selection [selection="E"]`);
const qF = document.querySelector(`.selection [selection="F"]`);
const qG = document.querySelector(`.selection [selection="G"]`);
const qH = document.querySelector(`.selection [selection="H"]`);
const qI = document.querySelector(`.selection [selection="I"]`);
const qJ = document.querySelector(`.selection [selection="J"]`);

const qT = document.querySelector(`.topNav .questionDiv`);

const qTrue = document.querySelector(`.true-false [selection="True"]`);
const qFalse = document.querySelector(`.true-false [selection="False"]`);

const selectionDiv = document.querySelector(`.selection`);
const trueFalseDiv = document.querySelector(`.true-false`);
const enumerateDiv = document.querySelector(`.enumeration`);
const identiFyDiv = document.querySelector(`.identification`);
const totalDiv = document.querySelector(`.result .resultTxt`);
const incDiv = document.querySelector(`.result .resultNoInc`);
const corDiv = document.querySelector(`.result .resultNoCor`);

let holdControl = false;
let holdShift = false;
document.addEventListener("keydown", function (event) {
	// console.log(event.key);
	if (event.key === "Control") holdControl = true;
	if (event.key === "Shift") holdShift = true;
	if (holdControl) {
		// console.log(holdShift);
		if (holdShift) {
			if (event.key === "ArrowRight") {
				if (!(maxNumber >= questions.length)) maxNumber++;
				qT.textContent =
					"Question " +
					(number + 1) +
					" - " +
					Math.min(maxNumber, questions.length);
			}
			if (event.key === "ArrowLeft") {
				if (maxNumber > 1 && number + 1 < maxNumber) maxNumber--;
				qT.textContent =
					"Question " +
					(number + 1) +
					" - " +
					Math.min(maxNumber, questions.length);
			}
		} else {
			if (event.key === "ArrowRight") next();
			else if (event.key === "ArrowLeft") prev();
		}
	}
});
document.addEventListener("keyup", function (event) {
	if (event.key === "Control") holdControl = false;
	if (event.key === "Shift") holdShift = false;
});

const nextDiv = document.querySelector(".topNav .nextDiv");
nextDiv.addEventListener("click", () => {
	next();
	if (!prevable) {
		prevDiv.style.display = "none";
	}
});
const prevDiv = document.querySelector(".topNav .prevDiv");
const toggleDiv = document.querySelector(".setting");
let prevable = false;
toggleDiv.addEventListener("click", () => {
	prevable = !prevable;
	if (!prevable) {
		prevDiv.style.display = "none";
	} else {
		prevDiv.style.display = "block";
	}
});
prevDiv.addEventListener("click", () => {
	if (prevable) prev();
});

document.addEventListener("keydown", (event) => {
	switch (event.key) {
		case "ArrowRight": // Right arrow key
		case "D": // 'S' key
		case "d": // Lowercase 's'
			next();
			break;
		case "ArrowLeft": // Left arrow key
		case "A": // 'A' key
		case "a": // Lowercase 'a'
			prev();
			break;
	}
});

const arrayChoice = [qA, qB, qC, qD, qE, qF, qG, qH, qI, qJ];
const arrayTrueFalse = [qTrue, qFalse];

for (let i = 0; i < arrayChoice.length; i++) {
	arrayChoice[i].addEventListener("click", () => {
		clickFunc(arrayChoice[i], i);
	});
}
for (let i = 0; i < arrayTrueFalse.length; i++) {
	arrayTrueFalse[i].addEventListener("click", () => {
		clickFuncTrueFalse(arrayTrueFalse[i], i);
	});
}

const allSelec = document.querySelectorAll(".selection div");
const allSelecTrueFalse = document.querySelectorAll(".true-false div");

function updateQuestion(question) {
	var imageExtensions = ["jpg", "jpeg", "png", "gif", "svg"];
	var isImagePath = imageExtensions.some(function (ext) {
		return question.toLowerCase().endsWith(ext);
	});
	if (isImagePath) {
		qQ.style.backgroundImage = 'url("' + question + '")';
		qQ.textContent = "";
	} else {
		qQ.style.backgroundImage = "";
		qQ.textContent = question;
	}
}

function clickFunc(ques, index) {
	if (reviewMode) return;
	allSelec.forEach((q) => {
		q.style.backgroundColor = "var(--choice-color)";
	});
	ques.style.backgroundColor = "#FE017F";
	questions[number][0] = index;
}

function clickFuncTrueFalse(ques, index) {
	if (reviewMode) return;
	allSelecTrueFalse.forEach((q) => {
		q.style.backgroundColor = "var(--choice-color)";
	});
	ques.style.backgroundColor = "#FE017F";
	questions[number][0] = index;
}

function updateQuestionaire() {
	allSelec.forEach((q) => {
		q.style.backgroundColor = "var(--choice-color)";
	});
	allSelecTrueFalse.forEach((q) => {
		q.style.backgroundColor = "var(--choice-color)";
	});

	selectionDiv.style.display = "none";
	trueFalseDiv.style.display = "none";
	identiFyDiv.style.display = "none";
	enumerateDiv.style.display = "none";

	if (questions[number].length >= 6) {
		selectionDiv.style.display = "grid";
		if (questions[number][0] >= 0)
			arrayChoice[questions[number][0]].style.backgroundColor = "#FE017F";

		updateQuestion(questions[number][1][0]);
		qA.textContent = questions[number][2];
		qB.textContent = questions[number][3];
		qC.textContent = questions[number][4];
		qD.textContent = questions[number][5];

		if (questions[number].length >= 7) {
			qE.textContent = questions[number][6];
			qE.style.display = "inline-block";
		} else qE.style.display = "none";
		if (questions[number].length >= 8) {
			qF.textContent = questions[number][7];
			qF.style.display = "inline-block";
		} else qF.style.display = "none";
		if (questions[number].length >= 9) {
			qG.textContent = questions[number][8];
			qG.style.display = "inline-block";
		} else qG.style.display = "none";
		if (questions[number].length >= 10) {
			qH.textContent = questions[number][9];
			qH.style.display = "inline-block";
		} else qH.style.display = "none";
		if (questions[number].length >= 11) {
			qI.textContent = questions[number][10];
			qI.style.display = "inline-block";
		} else qI.style.display = "none";
		if (questions[number].length >= 12) {
			qJ.textContent = questions[number][11];
			qJ.style.display = "inline-block";
		} else qJ.style.display = "none";

		if (reviewMode) {
			if (questions[number][0] >= 0)
				arrayChoice[questions[number][0]].style.backgroundColor =
					"#FF193E";
			else {
				arrayChoice.forEach((e) => {
					e.style.backgroundColor = "#FF193E";
				});
			}

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
			if (questions[number][0] >= 0)
				arrayTrueFalse[questions[number][0]].style.backgroundColor =
					"#FE017F";

			updateQuestion(questions[number][1]);

			if (reviewMode) {
				if (questions[number][0] >= 0)
					arrayTrueFalse[questions[number][0]].style.backgroundColor =
						"#FF193E";
				else {
					qTrue.style.backgroundColor = "#FF193E";
					qFalse.style.backgroundColor = "#FF193E";
				}
				if (questions[number][2])
					qTrue.style.backgroundColor = "#77ff43";
				else qFalse.style.backgroundColor = "#77ff43";
			}
		} else if (Array.isArray(questions[number][2])) {
			enumerateDiv.style.display = "grid";
			updateQuestion(questions[number][1]);

			for (let i = 0; i < enumerateDiv.children.length; i++) {
				const child = enumerateDiv.children[i];
				child.value = "";
				child.readOnly = false;
				if (
					i <
					(questions[number].length == 4
						? questions[number][3]
						: questions[number][2].length)
				) {
					child.style.display = "block";
					child.style.backgroundColor = "var(--choice-color)";
				} else child.style.display = "none";
			}
			let enumAnswer = questions[number][0].split("||");
			if (reviewMode) {
				let ansCorr = 0;
				const newArray = getRightArray(
					questions[number][2],
					enumAnswer
				);
				for (let i = 0; i < newArray.length; i++) {
					const child = enumerateDiv.children[i];
					child.value = newArray[i].substr(
						newArray[i].startsWith(" : ") ? 3 : 0
					);
					child.readOnly = true;

					child.style.display = "block";
					if (newArray[i].indexOf(":") != -1) {
						if (
							questions[number].length == 4
								? questions[number][3] > ansCorr ||
								  questions[number][3] > i
								: true
						)
							child.style.backgroundColor = "#FF193E";
						else child.style.backgroundColor = "#ffff3E";
					} else {
						ansCorr++;
						child.style.backgroundColor = "#77ff43";
					}
				}
			} else {
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
				if (
					isInArray(
						identiFyDiv.value,
						questions[number][2].split("||")
					)
				)
					identiFyDiv.style.backgroundColor = "#77ff43";
				else {
					identiFyDiv.style.backgroundColor = "#FF193E";
					identiFyDiv.value += ` : ${questions[number][2]}`;
				}
			} else isIdentification = true;
		}
	}

	qT.textContent =
		"Question " +
		(number + 1) +
		" - " +
		Math.min(maxNumber, questions.length);
	prevDiv.style.display = number - 1 < 0 ? "none" : "block";
	nextDiv.textContent =
		number + 1 >= questions.length || number + 1 >= maxNumber
			? "FINISH"
			: "NEXT";
	checkScrollable();
	saveListToSession();
}

function arraysAreEqual(arr1, arr2) {
	const sortedArr1 = arr1.slice().sort();
	const sortedArr2 = arr2.slice().sort();

	let isFound;
	for (let i = 0; i < sortedArr2.length; i++) {
		isFound = false;
		for (let j = 0; j < sortedArr1.length; j++) {
			if (isInArray(sortedArr2[i], sortedArr1[j].split("||"))) {
				sortedArr1.splice(j, 1);
				isFound = true;
				break;
			}
		}
		if (!isFound) return false;
	}
	return true;
}

function getRightArray(arr1, arr2) {
	const resultAns = [],
		leftAns = [];
	const originalArray = arr1.slice().sort();
	const answerArray = arr2.slice().sort();

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
	for (j = 0; j < originalArray.length; j++)
		resultAns.push(` : ${originalArray[j]}`);
	return resultAns;
}

function isInArray(e, arr) {
	const sortedArr = arr.slice().sort();
	for (let i = 0; i < sortedArr.length; i++)
		if (sortedArr[i].toLowerCase() == e.toLowerCase()) return true;
	return false;
}

function finish() {
	totalScore = 0;
	numOfScoreInc = 0;
	numOfScoreCor = 0;

	for (let i = 0; i < maxNumber; i++) {
		if (questions[i].length >= 6) {
			if (numToLetter.get(questions[i][0]) == questions[i][1][1]) {
				totalScore++;
				numOfScoreCor++;
			} else numOfScoreInc++;
		} else if (questions[i].length >= 3) {
			if (typeof questions[i][2] == "boolean") {
				if (
					questions[i][0] != -1 &&
					!questions[i][0] == questions[i][2]
				) {
					totalScore++;
					numOfScoreCor++;
				} else numOfScoreInc++;
			} else {
				if (Array.isArray(questions[i][2])) {
					let answerArray = questions[i][0].split("||");
					if (
						(questions[i].length == 4
							? answerArray.length == questions[i][3]
							: answerArray.length == questions[i][2].length) &&
						arraysAreEqual(questions[i][2], answerArray)
					) {
						totalScore++;
						numOfScoreCor++;
					} else numOfScoreInc++;
				} else if (
					isInArray(questions[i][0], questions[i][2].split("||"))
				) {
					totalScore++;
					numOfScoreCor++;
				} else numOfScoreInc++;
			}
		}
	}
	totalDiv.textContent = `SCORE: ${totalScore}/${maxNumber}`;
	incDiv.textContent = `Number of Incorrect: ${numOfScoreInc}`;
	corDiv.textContent = `Number of Correct: ${numOfScoreCor}`;
	backResult.style.display = "block";
}

function doReview() {
	backResult.style.display = "none";
	number = -1;
	totalScore = 0;
	numOfScoreInc = 0;
	numOfScoreCor = 0;
	reviewMode = true;

	identiFyDiv.readOnly = true;
	next();
}

function retry() {
	backResult.style.display = "none";
	number = -1;
	totalScore = 0;
	numOfScoreInc = 0;
	numOfScoreCor = 0;

	identiFyDiv.readOnly = false;
	reviewMode = false;

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
	} else if (!reviewMode && isEnumeration) {
		const newValue = [];
		for (
			let i = 0;
			i <
			(questions[number].length == 4
				? questions[number][3]
				: questions[number][2].length);
			i++
		) {
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
		for (
			let i = 0;
			i <
			(questions[number].length == 4
				? questions[number][3]
				: questions[number][2].length);
			i++
		) {
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
				if (2 + i != startIndex + 2) newArray.push(ques[2 + i]);

			ques[1][1] = numToLetter.get(newIndex);
			ques[newIndex + 2] = ques[startIndex + 2];

			shuffleArray(newArray);
			for (let i = 0; i < newArray.length; i++) {
				ques[((newIndex + 1 + i) % (ques.length - 2)) + 2] =
					newArray[i];
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
