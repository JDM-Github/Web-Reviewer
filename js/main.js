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

let questions = null;


// const questionsAccounting = [

// 	[-1, "Nominal Account means TEMPORARY account.", true],
// 	[-1, "Real Account means THE MAIN account.", false],
// 	[-1, "Owner’s Drawing is an income statement account, but must also be closed, or put into zero balance, at the end of the accounting period.", false],

// 	["", "It refer to amounts owed to lenders and suppliers.", "Liabilities||Liability"],
// 	["", "This business renders services to customers or clients for a fee.", "Service Business"],
// 	["", "This business buy goods or commodities and sell them at a profit.", "Merchandising Business||Trading Business||Merchandising/Trading Business"],
// 	["", "This business makes \"finished goods\" from \"raw materials\" or unassembled parts. It \"produces\" the goods that it sells.", "Manufacturing Business"],
// 	["", "This is OUTFLOW of economic benefits, in simple term, these are COSTS incurred to produce income/revenue", "Expenses||Expense"],
// 	["", "These are PROPERTIES owned by the business.", "Assets||Asset"],
// 	["", " It is the RESIDUAL INTEREST in the Assets of the business after deducting all its liabilities.",
// 		"Owner's Equity||Owners Equity||Capital||Owner's Equity/Capital||Owners Equity/Capital"],

// 	["", "____ are debt and equity securities that are purchased with the intent of selling them in the \"near term\" or very soon.", "Trading Security||Trading Securities"],
// 	["", "____ are claims against debtors or customers arising from services rendered on account and sale of merchandise on account.", "Account Receivable||Account Receivables"],
// 	["", "An identifiable non-monetary asset \"without physical substance\" or have no physical appearance but are expected to provide future economic benefits to the company.",
// 		"Intangible Assets||Intangible Asset"],
// 	["", "Income Earned but not yet received/collected.", "Accrued Income"],
// 	["", "\"Total\" depreciated cost of a depreciable asset. (CONTRA-ASSET)", "Accumulated Depreciation"],
// 	["", "Expenses PAID IN ADVANCE by the business (\"Paid but not yet incurred\") (CURRENT ASSET).", "Prepaid Expenses|Prepaid Expense"],

// 	["", "The earning derived from service rendered by a servicing business to its customers. This includes cash and on account service.", "Service Income"],
// 	["", "The earning derived from services rendered by a professional or professional servicing firm which could be in cash or in collectibles to its clients.", "Professional Fees"],
// 	["", "The earning representing the time value of money derived from promissory notes received by the business, whether in cash or collectibles in the future.", "Interest Income"],
// 	["", "The income earned from allowing others to use property or facility of the business", "Rent Income"],

// 	[-1, ["A business owned by only ONE INDIVIDUAL", "A"],
// 		"Sole Proprietorship",
// 		"Partnership",
// 		"Corporation",
// 		"Cooperative"
// 	],
// 	[-1, ["An association of \"TWO or MORE\" persons who bind themselves to contribute money, property or industry(services) to a common fund, with the intention of dividing the profits among themselves.", "B"],
// 		"Sole Proprietorship",
// 		"Partnership",
// 		"Corporation",
// 		"Cooperative"
// 	],
// 	[-1, ["An artifical being(not natural, like human being) created by operation of LAW, having the rights of SUCCESSION, and the POWERS AND ATTRIBUTES expressly authorized by law or incident to its existence.", "C"],
// 		"Sole Proprietorship",
// 		"Partnership",
// 		"Corporation",
// 		"Cooperative"
// 	],
// 	[-1, ["A legal entity owned and democratically controlled by its members. Members often have a close association with the enterprise as producers or consumers of its products or services, or as its employees.", "D"],
// 		"Sole Proprietorship",
// 		"Partnership",
// 		"Corporation",
// 		"Cooperative"
// 	],
// 	[-1, ["The right Equity/Capital Formula", "A"],
// 		"Investment + Revenue - Expenses - Drawings(Withdrawal)",
// 		"Investment - Revenue + Expenses - Drawings(Withdrawal)",
// 		"Revenue - Investment + Expenses + Drawings(Withdrawal)",
// 		"Investment + Revenue + Expenses + Drawings(Withdrawal)"
// 	],

// 	["", "Give 3 types of Business mentioned in REVIEWER",
// 		[
// 			"Service Business",
// 			"Manufacturing Business",
// 			"Merchandising Business||Trading Business||Merchandising/Trading Business"
// 		]
// 	],
// 	["", "In DEBIT (DEAL), what is the meaning of DEAL",
// 		[
// 			"Dividend||Dividends",
// 			"Expenses||Expense",
// 			"Asset||Assets",
// 			"Losses||Loss"
// 		]
// 	],
// 	["", "In CREDIT (GIRLS), what is the meaning of GIRLS",
// 		[
// 			"Gains||Gain",
// 			"Income",
// 			"Revenue||Revenues",
// 			"Liabilities||Liability",
// 			"StockHolder||StockHolders||Owners Equity||Owner's Equity"
// 		]
// 	],

// 	["", "Give 5 Example of Current Asset",
// 		[
// 			"Cash",
// 			"Trading Security||Trading Securities",
// 			"Account Receivables||Account Receivable",
// 			"Notes Receivable||Notes Receivables",
// 			"Merchandise Inventory",
// 			"Accrued Income",
// 			"Advances to Employees",
// 			"Prepaid Expenses||Prepaid Expense",
// 			"Office/Store Supplies||Office Supplies||Store Supplies||Supplies",
// 			"Land",
// 			"Building",
// 			"Machinery and Equipment||Machinery & Equipment",
// 			"Intangible Asset||Intangible Assets"
// 		], 5
// 	],
// 	["", "What are the 2 Classification of Assets",
// 		[
// 			"Current Assets||Current Asset",
// 			"Non-Current Assets||Non-Current Asset||Non Current Assets||Non Current Asset"
// 		]
// 	],

// 	[-1, "Liabilities also include amounts received in advance for a future sale or for future service to be performed.", true],
// 	[-1, "CAPITAL ACOUNT (or EQUITY ACCOUNT) consists of the following: \na. \"Owner's Capital\"\nb. \"Owner's Drawing\"", true],

// 	[-1, ["All of this is an elements of Financial Statements, EXCEPT", "F"],
// 		"INCOME/REVENUE",
// 		"EXPENSE",
// 		"ASSETS",
// 		"LIABILITIES",
// 		"OWNER'S EQUITY/CAPITAL",
// 		"ACCOUNTS RECEIVABLES"
// 	],
// 	[-1, ["All of this is an example of Non-Current Assets, EXCEPT", "C"],
// 		"Investment Properties",
// 		"Intangible Assets",
// 		"Inventory",
// 		"Equipment"
// 	]
// ];
var questionsWeb = [], questionsAOOP = [], questionsHCI = [], questionsAccounting = [], questionsEnvi = [];

questionsEnvi = [
	["", "is the most abundant of all energy resources and can even be harnessed in cloudy weathers", "Solar Energy"],
	["", "Solar energy used ___ to collect energy", "Photovoltaic"],
	["", "harnesses the energy of water moving from higher to lower elevations. It can be generated from reservoirs and rivers.", "Hydropower"],
	["", "Give 5 renewable energy in module.", [
		"Solar Energy",
		"Wind Energy",
		'Hydropower',
		"Geothermal Energy",
		"Bioenergy"
	]],
	["", "Main benefits of Green Energy", [
		"Self-sufficient",
		"Inexhaustible energy source",
		"No carbon emmisions of greenhouse gases",
		"Environmentally friendly",
		"Sustainability",
		"Energy independence"
	]],
	["", "This is the portion of the Earth that is inhabited by life, the sum of all livingmatter on Earth", "Biosphere"],
	["", "All 3 components of Biosphere", [
		"lithosphere",
		"hydrosphere",
		"atmosphere"
	]],
	["", "Individual -> ? ? ? ? ?", [
		"Population",
		"Community",
		"Ecosystem",
		"Biome",
		"Biosphere"
	]],
	["", "can be accessed in areas where hot springs/geothermal reservoirs are near the surface of the Earth.", "Direct geothermal energy"],
	["", "utilizes a series of underground pipes, an electric compressor and a heat exchanger to absorb and transfer heat.", "Geothermal heat pumps"],
	["", "also harness the heat of the Earth through hot water and steam. In these plants, heat is used to generate electricity.", "Geothermal power plants"],
	["", "Benefits of biodiversity", ["Oxygen", "Clean water", "Food", "Medicine"]],
	["", "Threat to biodiversity", ["Pollution", "Global climate change", "Exploitation", "Species introduction", "Habitat destruction"]],
	[-1, "High diversity creates a more stable environment", true],
	[-1, "• Some scientists estimate that as many as 3 species per hour are going extinct and 20,000 extinctions occur each year.", true],

	["", "The smallest part of the environment that supports a distinct flora and fauna;", "Microhabitat"],
	["", "any species which is vulnerable to becoming endangered in the near future", "Threatened"],
	["", "any species that is at risk of extinction because of a sudden rapid decrease in its population or a loss of its critical habitat", "Endangered"],
	["", "any species of animal or plant whose no more individuals are alive anywhere in the world", "Extinct"],
	["", "3 Components of biodiversity",["Diversity of genes", "Diversity of number of species", "Variety of ecosystems"]],
	["", "Features of Earth’s surface (continents, rocks, sea floor, and everything below Earth’s surface", "lithosphere"],
	["", "Hydologic Cycle, All of Earth’s water, ice, water vapor", "hydrosphere"],
	["", "The air blanketing Earth’s solid and liquid surface, It becomes progressively thinner with increasing altitude", "atmosphere"],
	["", "Three tectonic plate types", ["Transform", "Convergent", "Divergent"]],
	["", "Three reason why human can cause global change", ["Population Growth", "Industrialization", "Pollution"]],
	["", "4 Major concern in Biosphere", ["Temperature", "Climate flunctuation", "Greenhouse gases", "Ozone layer"]],
	["", "It occurs when the environment change too fast, It differ in scale, scope, # of species, It recovery took millions of years", "Mass Extinction"],
	["", "Why mass extinction happens?", ["hunting", "fishing", "commercial trades", "loss of habitat"]],
	["", "is a discipline that brings together many fields to attempt to solve biodiversity problems, It develop practical approaches to prevent extinction and destruction of ecosystems", "Conservation biology"],


];

const urlParams = new URLSearchParams(window.location.search);
if (urlParams.has('var')) {
	const varValue = urlParams.get('var');
	if (varValue == 'web') questions = questionsWeb;
	else if (varValue == 'aoop') questions = questionsAOOP;
	else if (varValue == 'hci')  questions = questionsHCI;
	else if (varValue == 'acc')  questions = questionsAccounting;
	else if (varValue == 'env')  questions = questionsEnvi;
} else {
	questions = [["", "TEST QUESTION", "TEST"]];
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

		qQ.textContent = questions[number][1][0];
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
			qQ.textContent = questions[number][1];
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

	qT.textContent        = "Question " + (number+1);
	prevDiv.style.display = (number - 1 < 0) ? "none" : "block";
	nextDiv.textContent   = (number + 1 >= questions.length || number + 1 >= maxNumber) ? "FINISH" : "NEXT";
	checkScrollable();
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

	for (let i = 0; i < questions.length; i++) {
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
