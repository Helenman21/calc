let temporaryValue = [];
let finalValue = [];
let currentString = [];

const screen = document.querySelector('.screen')

function setEventListener(selector) {
	const element = document.querySelector(selector)

	element.addEventListener('click', (event) => {
		const value = event.target.textContent;
		pressButton(value);
	})
}

function show(value) {
	screen.textContent = value
}


function pressButton(value) {
	if (!isNaN(value)) {
		currentString.push(value);
		console.log(currentString)
		show(currentString.join(''))
	}
	if (((value === '-') || (value === '+') || (value === '=') || (value === '&#247;') || (value === '&#215;')) && (currentString.length > 0)) {
		const numStr = currentString.join('');
		temporaryValue.push(numStr);
		temporaryValue.push(value);
		if (value !== '=') {
			show(value)
		}
		currentString.length = 0;

	}
	/*if((temporaryValue.length === 3) && (value === '=')){
		setTimeout(calc);
		console.log(calc())}*/

	if (value === 'c') {
		show('0')
		temporaryValue.length = 0;
		currentString.length = 0;
	}

}

setEventListener('.one');
setEventListener('.two');
setEventListener('.three');
setEventListener('.foor');
setEventListener('.five');
setEventListener('.six');
setEventListener('.seven');
setEventListener('.eight');
setEventListener('.nine');
setEventListener('.zero');

const multiply = document.querySelector('.multiply')

multiply.addEventListener('click', (event) => {
	const value = event.target.textContent;
	pressButton(value);
})


const minus = document.querySelector('.minus')

minus.addEventListener('click', (event) => {
	const value = event.target.textContent;
	pressButton(value);
})

const eguals = document.querySelector('.eguals')

eguals.addEventListener('click', (event) => {
	const value = event.target.textContent;
	pressButton(value);
	show(calc())
	console.log(temporaryValue)
	console.log(currentString)
})





function calc() {
	let [a, b, c] = temporaryValue;
	console.log('a, b, c: ', a, b, c)

	function calcCalc() {
		console.log('b=: ', b)
		switch (b) {
			case '+':
				return +a + +c;
			case '-':
				result = a - c;
				return result;
			case '/':
				result = a / c;
				return result;
			case '*':
				result = a * c;
				return result;
			default:
				return 'Error'
		}
	}
	return calcCalc()
}

const clears = document.querySelector('.clears')

clears.addEventListener('click', (event) => {
	const value = event.target.textContent;
	pressButton(value);
})

const deletion = document.querySelector('.deletion')

deletion.addEventListener('click', (event) => {
	const value = event.target.textContent;
	console.log('value: ', value)
})

const division = document.querySelector('.division')

division.addEventListener('click', (event) => {
	const value = event.target.textContent;
	pressButton(value);
})

const plus = document.querySelector('.plus')

plus.addEventListener('click', (event) => {
	const value = event.target.textContent;
	pressButton(value);
})