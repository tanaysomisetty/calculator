var screen = document.querySelector("#screenValue");
var answer;
var answerDisplayMode = false;
var isOperator = false;
var colorsArray = new Array(15);
var funButton = document.querySelector("#colorsButton");

function contrastColors(background, foreground){
	this.background = background;
	this.foreground = foreground;
}

colorsArray[0] = new contrastColors("#6a224d", "#98b93b");
colorsArray[1] = new contrastColors("#060f52", "#b87aa4");
colorsArray[2] = new contrastColors("#8c0741", "#a8b8ba");
colorsArray[3] = new contrastColors("#631d20", "#4fe892");
colorsArray[4] = new contrastColors("#545894", "#a9e969");
colorsArray[5] = new contrastColors("#0d1d37", "#c97566");
colorsArray[6] = new contrastColors("#b6c67a", "#7f164e");
colorsArray[7] = new contrastColors("#583836", "#0ee82c");
colorsArray[8] = new contrastColors("#f1ffd4", "#a66229");
colorsArray[9] = new contrastColors("#99a771", "#3d224e");

colorsArray[10] = new contrastColors("#edfffc", "#d23a5d");
colorsArray[11] = new contrastColors("#abfef6", "#457923");
colorsArray[12] = new contrastColors("#f7f964", "#ce2155");
colorsArray[13] = new contrastColors("#392f07", "#859d91");
colorsArray[14] = new contrastColors("#003638", "#e89a06");


function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function changeColors(){
	var index = getRandomInt(15);
	document.querySelector("body").style.background = colorsArray[index].background;
	document.querySelector("#calculator").style.background = colorsArray[index].foreground;
}

funButton.addEventListener("click", changeColors);


const buttonRad = document.querySelector("#rad");
const buttonDeg = document.querySelector("#deg");
const buttonFact = document.querySelector("#factorial");
const buttonLeftParen = document.querySelector("#leftParenthesis");
const buttonRightParen = document.querySelector("#rightParenthesis");
const buttonPercent = document.querySelector("#percentage");
const buttonClr = document.querySelector("#clear");
const buttonInv = document.querySelector("#inv");
const buttonSin = document.querySelector("#sin");
const buttonLn = document.querySelector("#ln");
const button7 = document.querySelector("#seven");
const button8 = document.querySelector("#eight");
const button9 = document.querySelector("#nine");
const buttonDivide = document.querySelector("#divide");
const buttonPi = document.querySelector("#pi");
const buttonCos = document.querySelector("#cos");
const buttonLog = document.querySelector("#log");
const button4 = document.querySelector("#four");
const button5 = document.querySelector("#five");
const button6 = document.querySelector("#six");
const buttonMultiply = document.querySelector("#multiply");
const buttonE = document.querySelector("#e");
const buttonTan = document.querySelector("#tan");
const buttonSqrt = document.querySelector("#sqrt");
const button1 = document.querySelector("#one");
const button2 = document.querySelector("#two");
const button3 = document.querySelector("#three");
const buttonSubtract = document.querySelector("#subtract");
const buttonAns = document.querySelector("#Ans");
const buttonEXP = document.querySelector("#EXP");
const buttonExponent = document.querySelector("#exponent");
const button0 = document.querySelector("#zero");
const buttonDec = document.querySelector("#decimal");
const buttonEqual = document.querySelector("#equal");
const buttonAdd = document.querySelector("#add");
const allButtons = document.querySelectorAll(".button");

buttonRad.addEventListener("click", wip);
buttonDeg.addEventListener("click", wip);
buttonFact.addEventListener("click", wip);
buttonLeftParen.addEventListener("click", function(){output(document.querySelector("#leftParenText"))});
buttonRightParen.addEventListener("click", function(){output(document.querySelector("#rightParenText"))});
buttonPercent.addEventListener("click", wip);
buttonClr.addEventListener("click", clearNums);
buttonInv.addEventListener("click", wip);
buttonSin.addEventListener("click", wip);
buttonLn.addEventListener("click", wip);
button7.addEventListener("click", function(){output(document.querySelector("#sevenText"))});
button8.addEventListener("click", function(){output(document.querySelector("#eightText"))});
button9.addEventListener("click", function(){output(document.querySelector("#nineText"))});
buttonDivide.addEventListener("click", function(){output(document.querySelector("#divideText"))});
buttonPi.addEventListener("click", wip);
buttonCos.addEventListener("click", wip);
buttonLog.addEventListener("click", wip);
button4.addEventListener("click", function(){output(document.querySelector("#fourText"))});
button5.addEventListener("click", function(){output(document.querySelector("#fiveText"))});
button6.addEventListener("click", function(){output(document.querySelector("#sixText"))});
buttonMultiply.addEventListener("click", function(){output(document.querySelector("#multiplyText"))});
buttonE.addEventListener("click", wip);
buttonTan.addEventListener("click", wip);
buttonSqrt.addEventListener("click", wip);
button1.addEventListener("click", function(){output(document.querySelector("#oneText"))});
button2.addEventListener("click", function(){output(document.querySelector("#twoText"))});
button3.addEventListener("click", function(){output(document.querySelector("#threeText"))});
buttonSubtract.addEventListener("click", function(){output(document.querySelector("#subtractText"))});
buttonAns.addEventListener("click", function(){output(document.querySelector("#savedAnswer"))});
buttonEXP.addEventListener("click", wip);
buttonExponent.addEventListener("click", wip);
button0.addEventListener("click", function(){output(document.querySelector("#zeroText"))});
buttonDec.addEventListener("click", function(){output(document.querySelector("#decimalText"))});
buttonEqual.addEventListener("click", computeExpression);
buttonAdd.addEventListener("click", function(){output(document.querySelector("#addText"))});

function output(currentButton){ //appends to whatever is on the calc's screen
	if(currentButton == document.querySelector("#divideText") || currentButton == document.querySelector("#multiplyText") || currentButton == document.querySelector("#subtractText") || currentButton == document.querySelector("#addText")){
		isOperator = true;
	}
	if(screen.innerHTML != 0 && (answerDisplayMode == false || isOperator == true)){
		screen.innerHTML = screen.innerHTML + currentButton.innerHTML;
		isOperator = false;
		answerDisplayMode = false;
	}
	else{
		screen.innerHTML = currentButton.innerHTML;
		answerDisplayMode = false;
	}
}

function clearNums(){ //give functionality to the CE/AC button
	screen.innerHTML = 0;
}

function wip(){ //placeholder for work in progress functions
	screen.innerHTML = "ERROR: this function is still a work in progress"
}

function computeExpression(){ //finds and displays the answer to the expression
	var expression = screen.innerHTML;
	answer = eval(expression);
	screen.innerHTML = answer;
	document.querySelector("#savedAnswer").innerHTML = answer;
	answerDisplayMode = true;
}

