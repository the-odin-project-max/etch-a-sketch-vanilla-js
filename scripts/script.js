const SQUARE_STYLE_BORDER = '1px solid lightgray';

function changeColor(e) {
	if (!colorToDraw) {
		const randomColor = Math.floor(Math.random() * 16777215).toString(16);
		e.target.style.backgroundColor = `#${randomColor}`;
	} else {
		e.target.style.backgroundColor = colorToDraw;
	}
}

function initHover() {
	document.querySelectorAll(".square").forEach(square => {
		square.addEventListener('mouseover', changeColor);
	});
}

let colorToDraw = false;
let colorPicker = document.querySelector("input[name=colorpicker]");
colorPicker.addEventListener('input', function () {
	colorToDraw = colorPicker.value;
});


// Change grid size based on slider
let rangeInput = document.getElementById("size");
rangeInput.addEventListener("change", function () {
	document.querySelector(".selected-size").textContent = rangeInput.value;
	createGrid(rangeInput.value);
}, false);
// ******* //

// Reset grid
document.querySelector('.reset').addEventListener('click', clearGrid);
function clearGrid() {
	document.querySelectorAll(".square").forEach(square => {
		square.style.backgroundColor = 'white';
	});
}
// ******* //

// Add grid square borders
let gridToggle = document.querySelector("input[name=grid-toggle]");
gridToggle.addEventListener('change', function () {
	if (this.checked) {
		document.querySelectorAll(".square").forEach(square => {
			square.style.border = SQUARE_STYLE_BORDER;
		});
	} else {
		document.querySelectorAll(".square").forEach(square => {
			square.style.border = 'none';
		});
	}
});
// ******* //

// Init grid
function createGrid(numOfSquares) {
	let canva = document.querySelector('.canva');
	let gridToggle = document.querySelector("input[name=grid-toggle]");

	canva.textContent = '';

	for (let i = 0; i < numOfSquares; i++) {
		for (let j = 0; j < numOfSquares; j++) {
			const square = document.createElement('div');
			square.classList.add('square');
			square.style.width = `${100 / numOfSquares}%`;
			square.style.height = `${100 / numOfSquares}%`;
			if (gridToggle.checked) {
				square.style.border = SQUARE_STYLE_BORDER;
			}
			canva.appendChild(square);
			initHover();
		}
	}
}
createGrid(rangeInput.value);
// ******* //