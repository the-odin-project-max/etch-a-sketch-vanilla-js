function createGrid(numOfSquares) {
	let canva = document.querySelector('.canva');
	canva.textContent = '';

	for (let i = 0; i < numOfSquares; i++) {
		for (let j = 0; j < numOfSquares; j++) {
			const square = document.createElement('div');
			square.classList.add('square');
			square.style.width = `${100 / numOfSquares}%`;
			square.style.height = `${100 / numOfSquares}%`;
			canva.appendChild(square);
			initHover();
		}
	}
}

function clearGrid() {
	document.querySelectorAll(".square").forEach(square => {
		square.style.backgroundColor = 'white';
	});
}

createGrid(16);

function changeColor(e) {
	const randomColor = Math.floor(Math.random() * 16777215).toString(16);
	e.target.style.backgroundColor = `#${randomColor}`;
}

function initHover() {
	document.querySelectorAll(".square").forEach(square => {
		square.addEventListener('mouseover', changeColor);
	});
}

document.querySelector('.reset').addEventListener('click', clearGrid);