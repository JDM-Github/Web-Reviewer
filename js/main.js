// import { allCourseQuiz } from "../js/firebase.js";
// const questions = allCourseQuiz[0];
// console.log(allCourseQuiz);

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

const questions = [
	["", "The ____ is a global information network that connects millions of computers", "internet"],
	["", "A ____ is a computer system that delivers web content to users over the internet.", "web server"],
	["", "Web Server is made up of two main parts:", ["hardware", "software"]],
	["", "The browser client strips an URL down to its component parts:", ["protocol", "address", "path name", "file name"]],

	[-1, "Your browser connects to a server and request a page, the server sends back the requested page", true],
	[-1, "The purpose of URI is to locate a resource on the server  hosting the web service.", true],
	[-1, "The protocol 'http://' is secured.", false],
	[-1, "The protocol 'snews://' is secured.", true],
	[-1, "Server sends the data off to the browser based on request send by web browser", true],
	[-1, "Server takes the path name and file name that it has been given, finds them on its software", false],
	[-1, "Browser interprets, and properly displays the data it has received from web page", false],
	[-1, "In 1995, HTML working group define HTML 2.0", true],
	[-1, "In 1993, David Raggett dropped HTML+", false],

	["", "Who invented 'WWW' in 1989", "tim berners-lee"],
	["", "Who invented 'HTML' in 1991", "tim berners-lee"],
	["", "___-side programming language - programming language where validation of user input happens at the server itself acting on or creating a data stream as it is send out to the internet client. Examples (XML, Java, PERL, ASP.Net, PHP…)", "server"],
	["", "___-side programming language - The program that runs on the client side or end-user workstation. Examples (JavaScript, VBScript,Angular….)", "client"],

	["", "Incorporates the domain name, along with other detailed information, Use for redirecting pages, In essence, it's a set of directions and every web page has a unique one", "URL"],
	["", "Also referred as web address", "URL"],
	["", "Is a string of characters that unambiguously identifies a particular resource", "URI"],
	["", "URL means", "uniform resource locator"],
	["", "URI means", "uniform resource identifier"],
	["", "Browsing or navigating the Web through pages of information", "surfing"],
	["", "An electronic document written in an Internet language that depicts information", "web page"],
	["", "Collection of related web pages usually controlled and maintained by single organization", "website"],
	["", "The standard protocol used for transferring hypertext pages. Browsers and servers use the HTTP to communicate", "HTTP"],
	["", "HTML means", "hyperText transfter protocol"],
	["", "A simple markup language used to create hypertext documents that are portable from one platform to another.", "HTML"],

	[-1, ["HTML element contains machine-readable information (metadata) about the document, like its title, scripts, and style sheets", "A"],
		"<head>",
		"<body>",
		"<meta>",
		"<script>"
	],
	[-1, ["HTML element contains all the contents of an HTML document, such as headings, paragraphs, images, hyperlinks, tables, lists, etc", "B"],
		"<head>",
		"<body>",
		"<html>",
		"<script>"
	],
	[-1, ["HTML element that can considered a root of all", "A"],
		"<head>",
		"<body>",
		"<html>",
		"<script>"
	],

	[-1, ["They can create dynamic websites and web applications, perform scheduling and data mining tasks, automate processes such as compilation, and send emails.", "C"],
		"uniform resource locator",
		"uniform resource identifier",
		"server-side programming language",
		"client-side programming language"
	],
	[-1, ["It simply means running scripts, such as JavaScript, usually within a browser.", "D"],
		"uniform resource locator",
		"uniform resource identifier",
		"server-side programming language",
		"client-side programming language"
	],
	[-1, ["An underlined text or an image(indicating by a pointing hand cursor) that lets you jump from one web page to another.", "A"],
		"Hypertext or Hyperlinks",
		"Static Web Pages",
		"Dynamic Web Pages",
		"Virtual Reality Modeling Language"
	],
	[-1, ["existing HTML pages that are stored in server’s drive.", "B"],
		"Hypertext or Hyperlinks",
		"Static Web Pages",
		"HyperText Transfter Protocol",
		"Virtual Reality Modeling Language"
	],
	[-1, ["HTML pages that are created, dynamically on the fly, as response to a request by an application.", "C"],
		"Hypertext or Hyperlinks",
		"Static Web Pages",
		"Dynamic Web Pages",
		"HyperText Transfter Protocol"
	],
	[-1, ["A standard file format for representing 3-dimensional (3D) interactive vector graphics, designed particularly with the World Wide Web in mind", "D"],
		"Hypertext or Hyperlinks",
		"Static Web Pages",
		"Dynamic Web Pages",
		"Virtual Reality Modeling Language"
	]
]

// const questions = [
// 	["", "A well-known writer in the field of Artificial Intelligence.", "ernest tello"],
// 	["", "One of the Promoters of object-oriented paradigm. Also the one who created 'Small Talk'.", "allan c kay"],
// 	["", "It is a blueprint or template of an object that contains variables for storing data and functions to perform operations on the data", "class"],
// 	["", "____ is the most recent concept among programming paradigm and still means different things to different people. (Answer in Acronym).", "OOP"],
// 	["", "An access modifier that will make all attributes/method available on all files and class.", "public"],
// 	["", "An access modifier that will make attributes/method only available when inherited or own by.", "protected"],
// 	["", "An access modifier that will make attributes/method only available if own by.", "private"],
// 	["", "It is represented by fields/ properties/ attributes of an object.", "state"],
// 	["", "It gives a unique name to an object and enables one object to interact with other objects", "identity"],
// 	["", "It is represented by methods of an object.", "behavior"],
// 	["", "Named is formed of multiple words that are joined together as a single word with the first letter of each of multiple words capitalized.", "camelcase"],
// 	["", "What keyword used when declaring class field as constant.", "final"],
// 	["", "The process of creating an object from an existing class (template).", "instantiation"],
// 	["", "What is java entry point in program?", "main"],
// 	["", "Ease of understanding the code especially when working with complex programs that needs project teams in development", "naming convention"],
// 	["", "CamelCase use in class field", "lowerCamelCase"],
// 	["", "CamelCase use in methods", "upperCamelCase"],
// 	["", "Solves the problem in the design level.", "abstraction"],
// 	["", "Hides Details at the Implementation Level.", "Encapsulation"],
// 	["", "Deriving a class from another class.", "inheritance"],
// 	["", "Creating Objects having many forms.", "Polymorphism"],

// 	[-1, "The basic unit of OOP is a class", true],
// 	[-1, "Class will not occupy any memory space", true],
// 	[-1, "Objects contain data in the form of function and code in the form of attributes.", false],
// 	[-1, "OOP Language permits higher level of abstraction for solving real-life problems.", true],
// 	[-1, "We used the private keyword for a constant matter.", false],
// 	[-1, "Without class fields, a class would simply be a structure.", false],
// 	[-1, "Class methods acts as a action and function in class.", true],
// 	[-1, "In Procedural Programming, an object is said the to be the basic unit which represents the real-life entities.", false],
// 	[-1, "State, Age, and Breed can be considered a states.", true],
// 	[-1, "Use appropriate words or acronyms. When naming.", false],
// 	[-1, "In Layers of a Software Technology Only the Uppermost Layer is Functional.", true],
// 	[-1, "If you create multiple objects of one class, you can change the class field values in one object, without affecting the class field values in the other.", true],

// 	[-1, ["Class Syntax. Create class field.", "C"],
// 		"<access modifier> methodName () { // body }",
// 		"<access modifier> <fieldname>;",
// 		"<access modifier> data_type <fieldname>;",
// 		"<access modifier> class <className>",
// 	],
// 	[-1, ["All of this is example on how to defined class field. EXCEPT", "D"],
// 		"public int id;",
// 		"private double hourlyRate;",
// 		"<access modifier> data_type <fieldname>;",
// 		"final protected String name;",
// 	],
// 	[-1, ["All of this is a drawback of Procedural Programming. EXCEPT", "D"],
// 		"Not suitable of high-level abstraction for solving real problem.",
// 		"Functions are less reusable",
// 		"Separates the data structures (variables) and algorithms (function)",
// 		"Treats data as critical element in the program development and does not allow it to flow freely around the system.",
// 	],
// 	[-1, ["What is the right order of 'Layers of a Software Technology'.", "B"],
// 		"Assembly Language, Machine Language, Procedural Programming, Object Oriented Programming",
// 		"(0, 1), Assembly Language, Procedural Programming, Object Oriented Programming",
// 		"Machine Language, (0, 1), Assembly Language, Procedural Programming, Object Oriented Programming",
// 		"(0, 1), Assembly Language, Machine Language, Procedural Programming, Object Oriented Programming"
// 	],

// 	["", "Class can contains...", ["class field", "method", "block", "constructor", "nested class interface"]],
// 	["", "OOP can contains...", ["data", "function"]],
// 	["", "Object consists of?", ["state", "behavior", "identity"]],
// ];

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
	start();
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
	if (body.scrollHeight + 200 > window.innerHeight) {
		document.querySelector(".credits").style.position = "relative";
	} else {
		document.querySelector(".credits").style.position = "fixed";
	}
}

function start() {
	shuffleArray(questions);
	questions.forEach((ques) => {
		
		if (ques.length == 6) {
			let startIndex = 0;
			const newIndex = Math.floor(Math.random() * 4);
			const newArray = [];
			if (ques[1][1] == "A") {
				newArray.push(ques[3]);
				newArray.push(ques[4]);
				newArray.push(ques[5]);
				startIndex = 0;
			} else if (ques[1][1] == "B") {
				newArray.push(ques[2]);
				newArray.push(ques[4]);
				newArray.push(ques[5]);
				startIndex = 1;
			} else if (ques[1][1] == "C") {
				newArray.push(ques[2]);
				newArray.push(ques[3]);
				newArray.push(ques[5]);
				startIndex = 2;
			} else if (ques[1][1] == "D") {
				newArray.push(ques[2]);
				newArray.push(ques[3]);
				newArray.push(ques[4]);
				startIndex = 3;
			}
			ques[1][1] = numToLetter.get(newIndex);
			ques[newIndex+2] = ques[startIndex+2];

			shuffleArray(newArray);
			for (let i = 0; i < newArray.length; i++) {
				ques[((newIndex+1+i) % 4)+2] = newArray[i];
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
