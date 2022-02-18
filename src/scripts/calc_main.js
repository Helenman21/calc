const classSearch = {
	MULTIPLY: document.querySelector('.multiply'),
	MINUS: document.querySelector('.minus'),
	EQUALS: document.querySelector('.eguals'),
	CLEARS: document.querySelector('.clears'),
	DELETION: document.querySelector('.deletion'),
	DIVISION: document.querySelector('.division'),
	PLUS: document.querySelector('.plus'),
	ONE: document.querySelector('.one'),
	TWO: document.querySelector('.two'),
	THREE: document.querySelector('.three'),
	FOOR: document.querySelector('.foor'),
	FIVE: document.querySelector('.five'),
	SIX: document.querySelector('.six'),
	SEVEN: document.querySelector('.seven'),
	EIGHT: document.querySelector('.eight'),
	NINE: document.querySelector('.nine'),
	ZERO: document.querySelector('.zero'),
	SCREEN: document.querySelector('.screen'),
}

let strValue = '';

let arrayNumberValue = [];



function show(value) {
	classSearch.SCREEN.textContent = value;
}

function clearArray(array) {
	array.length = 0;

}

function pushArray(value, array) {
	array.push(value)
}

function calc(firstCurrent, twoCurrent, operator) {
	switch (operator) {
		case '+':
			return Number(firstCurrent) + Number(twoCurrent);
		case '-':
			return Number(firstCurrent) - Number(twoCurrent);
		case '*':
			return Number(firstCurrent) * Number(twoCurrent);
		case '/':
			return Number(firstCurrent) / Number(twoCurrent);
		default:
			break;
	}
}
function calcFinalResult(firstCurrent, twoCurrent, operator) {
	let resultSum = '';
	let resultSubstraction = '';
	let resultMultiplay = '';
	let resultDivision = '';
	switch (operator) {
		case '+':
			resultSum = Number(firstCurrent) + Number(twoCurrent);
			show(resultSum);
			clearArray(arrayNumberValue);
		case '-':
			resultSubstraction = Number(firstCurrent) - Number(twoCurrent);
			show(resultSubstraction)
			clearArray(arrayNumberValue);
		case '*':
			resultMultiplay = Number(firstCurrent) * Number(twoCurrent);
			show(resultMultiplay);
			clearArray(arrayNumberValue);
		case '/':
			resultDivision = Number(firstCurrent) / Number(twoCurrent);
			show(resultDivision);
			clearArray(arrayNumberValue);
		default:
			break;
	}
}





function pressButton(value) {
	const operatorCheck = value === '+' || value === '-' || value === '/' || value === '*';
	if (!isNaN(value)) {
		strValue += value.toString();
		show(strValue);
	}

	if (operatorCheck && arrayNumberValue.length === 0) {
		pushArray(strValue, arrayNumberValue);
		pushArray(value, arrayNumberValue);
		show(strValue);
		strValue = '';
	}

	if (operatorCheck && arrayNumberValue.length === 1) {
		pushArray(value, arrayNumberValue);
	}

	if (operatorCheck && strValue.length >= 1 && arrayNumberValue.length === 2) {
		pushArray(strValue, arrayNumberValue);
		let firstValue = arrayNumberValue[0];
		let operator = arrayNumberValue[1];
		let twoValue = arrayNumberValue[2];
		let result = calc(firstValue, twoValue, operator);
		clearArray(arrayNumberValue);
		pushArray(result, arrayNumberValue);
		pushArray(value, arrayNumberValue)
		show(result);
		strValue = '';
	}

	if (value === '=' && strValue.length >= 1 && arrayNumberValue.length === 2) {
		pushArray(strValue, arrayNumberValue);
		let firstValue = arrayNumberValue[0];
		let operator = arrayNumberValue[1];
		let twoValue = arrayNumberValue[2];
		let result = calc(firstValue, twoValue, operator);
		show(result);
		clearArray(arrayNumberValue);
		//pushArray(result, arrayNumberValue)
		//strValue = '';
		strValue = '';
		strValue += result;
	}

	if (value === 'c') {
		clearArray(arrayNumberValue);
		strValue = '';
		show('0');
		console.log(arrayNumberValue, strValue)
	}

	if (value === 'del') {
		const screen = classSearch.SCREEN.textContent;
		console.log(screen)

		const str2 = strValue.slice(0, -1);
		strValue = str2;
	}

}

function setEventListener(element) {
	element.addEventListener('click', (event) => {
		const value = event.target.dataset.about ? event.target.dataset.about : event.target.textContent;
		pressButton(value);
	})
}



setEventListener(classSearch.SCREEN);
setEventListener(classSearch.MINUS);
setEventListener(classSearch.MULTIPLY);
setEventListener(classSearch.DIVISION);
setEventListener(classSearch.EQUALS);
setEventListener(classSearch.CLEARS);
setEventListener(classSearch.DELETION);
setEventListener(classSearch.PLUS);
setEventListener(classSearch.NINE);
setEventListener(classSearch.EIGHT);
setEventListener(classSearch.SEVEN);
setEventListener(classSearch.SIX);
setEventListener(classSearch.FIVE);
setEventListener(classSearch.FOOR);
setEventListener(classSearch.THREE);
setEventListener(classSearch.TWO);
setEventListener(classSearch.ONE);
setEventListener(classSearch.ZERO)
console.log(arrayNumberValue)