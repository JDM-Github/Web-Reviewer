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
	// ["", "Harvard Business Review has labeled data science as the ____ career of the 21st century", "sexiest"],

	// ["", "It is one of the issue in data science. One way to solve this challenge is by adopting emerging AI-enabled data science technologies like Augmented Analytics and Auto feature engineering. Augmented Analytics automates manual data cleansing and preparation tasks and enables data scientists to be more productive", "Data preparation"],
	// ["", "It is one of the issue in data science. Organizations need a centralized platform integrated with multiple data sources to instantly access information from multiple sources", "Multiple Source"],
	// ["", "It is one of the issue in data science. Organizations should utilize advanced machine learning enabled security platforms and instill additional security checks to safeguard their data. At the same time, they must ensure strict adherence to the data protection norms to avoid time-consuming audits and expensive fines.", "Data Security"],
	// ["", "It is one of the issue in data science. Solution is that data scientists must follow a proper workflow before starting any analysis", "Understanding the business Problem"],
	// ["", "It is one of the issue in data science. This is something that data scientists can and must practice", "Effective Communication with non-technical stakeholders"],
	// ["", "It is one of the issue in data science. Solution: Fostering open communication by setting up a common coding language and a real-time collaboration tool.", "Collaboration with engineers"],

	// ["", "Enumerate all data science issues.", [
	// 	"Data preparation",
	// 	"Multiple sources",
	// 	"data security",
	// 	"Understanding the business Problem",
	// 	"Effective Communication with non-technical stakeholders",
	// 	"Collaboration with engineers",
	// 	"Misconceptions about the role",
	// 	"Undefined KPIs and Metrics",
	// 	"The Amount of data being collected",
	// 	"Collecting meaningful and real-time data",
	// 	"Visual representation of data",
	// 	"Inaccessible data",
	// 	"Poor quality data",
	// 	"Pressure from the top",
	// 	"Lack of support",
	// 	"Budget",
	// 	"Shortage of skills"
	// ]],
	

	// ["", "Design data modelling processes to create algorithms and predictive models and perform custom analysis", "Data scientists"],
	// ["", "Manipulate large data sets and use them to identify trends and reach meaningful conclusions to inform strategic business decisions", "Data analysts"],
	// ["", "Clean, aggregate, and organize data from disparate sources and transfer it to data warehouses.", "Data engineers"],
	// ["", "Identify trends in data sets", "Business intelligence specialists"],
	// ["", "Design, create, and manage an organization’s data architecture", "Data architects"],

	// ["", "Enumerate all Common Data Scientist Job Titles", [
	// 	"Data scientists",
	// 	"Data analysts",
	// 	"Data engineers",
	// 	"Business intelligence specialists",
	// 	"Data architects"
	// ]],

	// ["", "Identify patterns in data. This includes having a keen sense of pattern detection and anomaly detection.", "Statistical Analysis"],
	// ["", "Implement algorithms and statistical models to enable a computer to automatically learn from data", "Machine learning"],
	// ["", "Apply the principles of artificial intelligence, database systems, human/computer interaction, numerical analysis, and software engineering.", "Computer Science"],
	// ["", "Write computer programs and analyze large datasets to uncover answers to complex problems. Data scientists need to be comfortable writing code working in a variety of languages such as Java, R, Python, and SQL.", "Programming"],
	// ["", "Communicate actionable insights using data, often for a non-technical audience.", "Data storytelling"],

	// ["", "Enumerate all essetial skills use in Data Science", [
	// 	"Statistical Analysis",
	// 	"Machine learning",
	// 	"Computer Science",
	// 	"Programming",
	// 	"Data storytelling"
	// ]],

	// ["", "Connect with stakeholders to gain a full understanding of the problems they’re looking to solve.", "Business Intuition"],
	// ["", "Find analytical solutions to abstract business issues.", "Analytical thinking"],
	// ["", "Apply objective analysis of facts before coming to a conclusion.", "Critical thinking"],
	// ["", "Look beyond what’s on the surface to discover patterns and solutions within the data.", "Inquisitiveness"],
	// ["", "Communicate across a diverse audience across all levels of an organization", "Interpersonal skills"],
	// ["", "Enumerate all soft skills needeed", [
	// 	"Business Intuition",
	// 	"Analytical thinking",
	// 	"Critical thinking",
	// 	"Inquisitiveness",
	// 	"Interpersonal skills"
	// ]],
	["", "https://raw.githubusercontent.com/biolab/orange3/38bedb11033fd36e4cf6c52db25e29860587696f/Orange/widgets/visualize/icons/BarPlot.svg", "Bar Plot"],
	["", "https://raw.githubusercontent.com/biolab/orange3/38bedb11033fd36e4cf6c52db25e29860587696f/Orange/widgets/visualize/icons/BoxPlot.svg", "Box Plot"],
	["", "https://raw.githubusercontent.com/biolab/orange3/38bedb11033fd36e4cf6c52db25e29860587696f/Orange/widgets/data/icons/AggregateColumns.svg", "Aggregate Columns"],
	["", "https://raw.githubusercontent.com/biolab/orange3/38bedb11033fd36e4cf6c52db25e29860587696f/Orange/widgets/data/icons/CSVFile.svg", "CSV File Import"],
	["", "https://raw.githubusercontent.com/biolab/orange3/38bedb11033fd36e4cf6c52db25e29860587696f/Orange/widgets/data/icons/Category-Data.svg", "Data Table"],
	["", "https://raw.githubusercontent.com/biolab/orange3/38bedb11033fd36e4cf6c52db25e29860587696f/Orange/widgets/data/icons/Colors.svg", "Color"],
	["", "https://raw.githubusercontent.com/biolab/orange3/38bedb11033fd36e4cf6c52db25e29860587696f/Orange/widgets/data/icons/Concatenate.svg", "Concatenate"],
	["", "https://raw.githubusercontent.com/biolab/orange3/38bedb11033fd36e4cf6c52db25e29860587696f/Orange/widgets/data/icons/Continuize.svg", "Continuize"],
	["", "https://raw.githubusercontent.com/biolab/orange3/38bedb11033fd36e4cf6c52db25e29860587696f/Orange/widgets/data/icons/CreateClass.svg", "Create Class"],
	["", "https://raw.githubusercontent.com/biolab/orange3/38bedb11033fd36e4cf6c52db25e29860587696f/Orange/widgets/data/icons/CreateInstance.svg", "Create Instance"],
	["", "https://raw.githubusercontent.com/biolab/orange3/38bedb11033fd36e4cf6c52db25e29860587696f/Orange/widgets/data/icons/DataInfo.svg", "Data Info"],
	["", "https://raw.githubusercontent.com/biolab/orange3/38bedb11033fd36e4cf6c52db25e29860587696f/Orange/widgets/data/icons/DataSampler.svg", "Data Sampler"],
	["", "https://raw.githubusercontent.com/biolab/orange3/38bedb11033fd36e4cf6c52db25e29860587696f/Orange/widgets/data/icons/DataSets.svg", "Datasets"],
	["", "https://raw.githubusercontent.com/biolab/orange3/38bedb11033fd36e4cf6c52db25e29860587696f/Orange/widgets/data/icons/Discretize.svg", "Discretize"],
	["", "https://raw.githubusercontent.com/biolab/orange3/38bedb11033fd36e4cf6c52db25e29860587696f/Orange/widgets/data/icons/EditDomain.svg", "Edit Domain"],
	["", "https://raw.githubusercontent.com/biolab/orange3/38bedb11033fd36e4cf6c52db25e29860587696f/Orange/widgets/data/icons/FeatureConstructor.svg", "Feature Constructor"],
	["", "https://raw.githubusercontent.com/biolab/orange3/38bedb11033fd36e4cf6c52db25e29860587696f/Orange/widgets/data/icons/FeatureStatistics.svg", "Feature Statistics"],
	["", "https://raw.githubusercontent.com/biolab/orange3/38bedb11033fd36e4cf6c52db25e29860587696f/Orange/widgets/data/icons/GroupBy.svg", "Group By"],
	["", "https://raw.githubusercontent.com/biolab/orange3/38bedb11033fd36e4cf6c52db25e29860587696f/Orange/widgets/data/icons/Impute.svg", "Impute"],
	["", "https://raw.githubusercontent.com/biolab/orange3/38bedb11033fd36e4cf6c52db25e29860587696f/Orange/widgets/data/icons/Melt.svg", "Melt"],
	["", "https://raw.githubusercontent.com/biolab/orange3/38bedb11033fd36e4cf6c52db25e29860587696f/Orange/widgets/data/icons/MergeData.svg", "Merge Data"],
	["", "https://raw.githubusercontent.com/biolab/orange3/38bedb11033fd36e4cf6c52db25e29860587696f/Orange/widgets/data/icons/Neighbors.svg", "Neighbors"],
	["", "https://raw.githubusercontent.com/biolab/orange3/38bedb11033fd36e4cf6c52db25e29860587696f/Orange/widgets/data/icons/Normalize.svg", "Normalize"],
	["", "https://raw.githubusercontent.com/biolab/orange3/38bedb11033fd36e4cf6c52db25e29860587696f/Orange/widgets/data/icons/Outliers.svg", "Outliers"],
	["", "https://raw.githubusercontent.com/biolab/orange3/38bedb11033fd36e4cf6c52db25e29860587696f/Orange/widgets/data/icons/PCA.svg", "PCA"],
	["", "https://raw.githubusercontent.com/biolab/orange3/38bedb11033fd36e4cf6c52db25e29860587696f/Orange/widgets/data/icons/PaintData.svg", "Paint Data"],
	["", "https://raw.githubusercontent.com/biolab/orange3/38bedb11033fd36e4cf6c52db25e29860587696f/Orange/widgets/data/icons/Pivot.svg", "Pivot Table"],
	["", "https://raw.githubusercontent.com/biolab/orange3/38bedb11033fd36e4cf6c52db25e29860587696f/Orange/widgets/data/icons/Preprocess.svg", "Preprocess"],
	["", "https://raw.githubusercontent.com/biolab/orange3/38bedb11033fd36e4cf6c52db25e29860587696f/Orange/widgets/data/icons/PurgeDomain.svg", "Purge Domain"],
	["", "https://raw.githubusercontent.com/biolab/orange3/38bedb11033fd36e4cf6c52db25e29860587696f/Orange/widgets/data/icons/Random.svg", "Randomize"],
	["", "https://raw.githubusercontent.com/biolab/orange3/38bedb11033fd36e4cf6c52db25e29860587696f/Orange/widgets/data/icons/Rank.svg", "Rank"],
	["", "https://raw.githubusercontent.com/biolab/orange3/38bedb11033fd36e4cf6c52db25e29860587696f/Orange/widgets/data/icons/SQLTable.svg", "SQL Table"],
	["", "https://raw.githubusercontent.com/biolab/orange3/38bedb11033fd36e4cf6c52db25e29860587696f/Orange/widgets/data/icons/Save.svg", "Save Data"],
	["", "https://raw.githubusercontent.com/biolab/orange3/38bedb11033fd36e4cf6c52db25e29860587696f/Orange/widgets/data/icons/SelectByDataIndex.svg", "Select By Data Index"],
	["", "https://raw.githubusercontent.com/biolab/orange3/38bedb11033fd36e4cf6c52db25e29860587696f/Orange/widgets/data/icons/SelectColumns.svg", "Select Columns"],
	["", "https://raw.githubusercontent.com/biolab/orange3/38bedb11033fd36e4cf6c52db25e29860587696f/Orange/widgets/data/icons/SelectColumnsRandom.svg", "Select Columns Random"],
	["", "https://raw.githubusercontent.com/biolab/orange3/38bedb11033fd36e4cf6c52db25e29860587696f/Orange/widgets/data/icons/SelectRows.svg", "Select Rows"],
	["", "https://raw.githubusercontent.com/biolab/orange3/38bedb11033fd36e4cf6c52db25e29860587696f/Orange/widgets/data/icons/Transform.svg", "Apply Domain"],
	["", "https://raw.githubusercontent.com/biolab/orange3/38bedb11033fd36e4cf6c52db25e29860587696f/Orange/widgets/data/icons/Transpose.svg", "Transpose"],
	["", "https://raw.githubusercontent.com/biolab/orange3/38bedb11033fd36e4cf6c52db25e29860587696f/Orange/widgets/data/icons/Unique.svg", "Unique"],
	["", "https://raw.githubusercontent.com/biolab/orange3/38bedb11033fd36e4cf6c52db25e29860587696f/Orange/widgets/visualize/icons/CN2RuleViewer.svg", "CN2 Rule Viewer"],
	["", "https://raw.githubusercontent.com/biolab/orange3/38bedb11033fd36e4cf6c52db25e29860587696f/Orange/widgets/visualize/icons/ScatterPlot.svg", "Scatter Plot"],
	["", "https://raw.githubusercontent.com/biolab/orange3/38bedb11033fd36e4cf6c52db25e29860587696f/Orange/widgets/visualize/icons/Distribution.svg", "Distributions"],
	["", "https://raw.githubusercontent.com/biolab/orange3/38bedb11033fd36e4cf6c52db25e29860587696f/Orange/widgets/visualize/icons/Freeviz.svg", "FreeViz"],
	["", "https://raw.githubusercontent.com/biolab/orange3/38bedb11033fd36e4cf6c52db25e29860587696f/Orange/widgets/visualize/icons/Heatmap.svg", "Heat Map"],
	["", "https://raw.githubusercontent.com/biolab/orange3/38bedb11033fd36e4cf6c52db25e29860587696f/Orange/widgets/visualize/icons/LinePlot.svg", "Line Plot"],
	["", "https://raw.githubusercontent.com/biolab/orange3/38bedb11033fd36e4cf6c52db25e29860587696f/Orange/widgets/visualize/icons/LinearProjection.svg", "Linear Projection"],
	["", "https://raw.githubusercontent.com/biolab/orange3/38bedb11033fd36e4cf6c52db25e29860587696f/Orange/widgets/visualize/icons/MosaicDisplay.svg", "Mosaic Display"],
	["", "https://raw.githubusercontent.com/biolab/orange3/38bedb11033fd36e4cf6c52db25e29860587696f/Orange/widgets/visualize/icons/Nomogram.svg", "Nomogram"],
	["", "https://raw.githubusercontent.com/biolab/orange3/38bedb11033fd36e4cf6c52db25e29860587696f/Orange/widgets/visualize/icons/PythagoreanForest.svg", "Pythagorean Forest"],
	["", "https://raw.githubusercontent.com/biolab/orange3/38bedb11033fd36e4cf6c52db25e29860587696f/Orange/widgets/visualize/icons/PythagoreanTree.svg", "Pythagorean Tree"],
	["", "https://raw.githubusercontent.com/biolab/orange3/38bedb11033fd36e4cf6c52db25e29860587696f/Orange/widgets/visualize/icons/Radviz.svg", "Radviz"],
	["", "https://raw.githubusercontent.com/biolab/orange3/38bedb11033fd36e4cf6c52db25e29860587696f/Orange/widgets/visualize/icons/SieveDiagram.svg", "Seive Diagram"],
	["", "https://raw.githubusercontent.com/biolab/orange3/38bedb11033fd36e4cf6c52db25e29860587696f/Orange/widgets/visualize/icons/SilhouettePlot.svg", "Silhouette Plot"],
	["", "https://raw.githubusercontent.com/biolab/orange3/38bedb11033fd36e4cf6c52db25e29860587696f/Orange/widgets/visualize/icons/TreeViewer.svg", "Tree Viewer"],
	["", "https://raw.githubusercontent.com/biolab/orange3/38bedb11033fd36e4cf6c52db25e29860587696f/Orange/widgets/visualize/icons/VennDiagram.svg", "Venn Diagram"],
	["", "https://raw.githubusercontent.com/biolab/orange3/38bedb11033fd36e4cf6c52db25e29860587696f/Orange/widgets/visualize/icons/ViolinPlot.svg", "Violin Plot"],
	["", "https://raw.githubusercontent.com/biolab/orange3/38bedb11033fd36e4cf6c52db25e29860587696f/Orange/widgets/model/icons/AdaBoost.svg", "AdaBoost"],
	["", "https://raw.githubusercontent.com/biolab/orange3/38bedb11033fd36e4cf6c52db25e29860587696f/Orange/widgets/model/icons/CN2RuleInduction.svg", "CN2 Rule Induction"],
	["", "https://raw.githubusercontent.com/biolab/orange3/38bedb11033fd36e4cf6c52db25e29860587696f/Orange/widgets/model/icons/CalibratedLearner.svg", "Calibrated Learner"],
	["", "https://raw.githubusercontent.com/biolab/orange3/38bedb11033fd36e4cf6c52db25e29860587696f/Orange/widgets/model/icons/Constant.svg", "Constant"],
	["", "https://raw.githubusercontent.com/biolab/orange3/38bedb11033fd36e4cf6c52db25e29860587696f/Orange/widgets/model/icons/CurveFit.svg", "Curve Fit"],
	["", "https://raw.githubusercontent.com/biolab/orange3/38bedb11033fd36e4cf6c52db25e29860587696f/Orange/widgets/model/icons/KNN.svg", "KNN"],
	["", "https://raw.githubusercontent.com/biolab/orange3/38bedb11033fd36e4cf6c52db25e29860587696f/Orange/widgets/model/icons/LinearRegression.svg", "Linear Regression"],
	["", "https://raw.githubusercontent.com/biolab/orange3/38bedb11033fd36e4cf6c52db25e29860587696f/Orange/widgets/model/icons/LoadModel.svg", "Load Model"],
	["", "https://raw.githubusercontent.com/biolab/orange3/38bedb11033fd36e4cf6c52db25e29860587696f/Orange/widgets/model/icons/LogisticRegression.svg", "Logistic Regression"],
	["", "https://raw.githubusercontent.com/biolab/orange3/38bedb11033fd36e4cf6c52db25e29860587696f/Orange/widgets/model/icons/NN.svg", "Neural Network"],
	["", "https://raw.githubusercontent.com/biolab/orange3/38bedb11033fd36e4cf6c52db25e29860587696f/Orange/widgets/model/icons/NaiveBayes.svg", "Naive Bayes"],
	["", "https://raw.githubusercontent.com/biolab/orange3/38bedb11033fd36e4cf6c52db25e29860587696f/Orange/widgets/model/icons/RandomForest.svg", "Random Forest"],
	["", "https://raw.githubusercontent.com/biolab/orange3/38bedb11033fd36e4cf6c52db25e29860587696f/Orange/widgets/model/icons/SVM.svg", "SVM"],
	["", "https://raw.githubusercontent.com/biolab/orange3/38bedb11033fd36e4cf6c52db25e29860587696f/Orange/widgets/model/icons/SaveModel.svg", "Save Model"],
	["", "https://raw.githubusercontent.com/biolab/orange3/38bedb11033fd36e4cf6c52db25e29860587696f/Orange/widgets/model/icons/Stacking.svg", "Stacking"],
	["", "https://raw.githubusercontent.com/biolab/orange3/38bedb11033fd36e4cf6c52db25e29860587696f/Orange/widgets/model/icons/Tree.svg", "Tree"],
	["", "https://raw.githubusercontent.com/biolab/orange3/38bedb11033fd36e4cf6c52db25e29860587696f/Orange/widgets/evaluate/icons/CalibrationPlot.svg", "Calibration Plot"],
	["", "https://raw.githubusercontent.com/biolab/orange3/38bedb11033fd36e4cf6c52db25e29860587696f/Orange/widgets/evaluate/icons/Category-Evaluate.svg", "Confusion Matrix"],
	["", "https://raw.githubusercontent.com/biolab/orange3/38bedb11033fd36e4cf6c52db25e29860587696f/Orange/widgets/evaluate/icons/LiftCurve.svg", "Performance Curve"],
	["", "https://raw.githubusercontent.com/biolab/orange3/38bedb11033fd36e4cf6c52db25e29860587696f/Orange/widgets/evaluate/icons/Predictions.svg", "Predictions"],
	["", "https://raw.githubusercontent.com/biolab/orange3/38bedb11033fd36e4cf6c52db25e29860587696f/Orange/widgets/evaluate/icons/ROCAnalysis.svg", "ROC Analysis"],
	["", "https://raw.githubusercontent.com/biolab/orange3/38bedb11033fd36e4cf6c52db25e29860587696f/Orange/widgets/evaluate/icons/TestLearners1.svg", "Test and Score"],
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
	if (sessionStorage.getItem('myList')) {
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
