const container = document.getElementById("grid");
const root = document.querySelector(":root");
const columns = getComputedStyle(root).getPropertyValue("--column-number");
const rows = getComputedStyle(root).getPropertyValue("--row-number");
let cells = rows * columns;
const slider = document.getElementById("myRange");
const value = document.getElementById("value");

window.onload = function load() {
    value.innerHTML = `${columns} x ${rows}`;
    newGrid();
}

document.addEventListener("mouseover", function hover(e) {
    if (e.target.className === "box"){
        e.target.style.background = "black";
    }
})

slider.oninput = function slider() {
    value.innerHTML = `${this.value} x ${this.value}`;
    clearGrid();
    newGrid();
}

function clearGrid() {
    container.innerHTML = "";
}

function newGrid() {
    cells = slider.value * slider.value;

    container.style.gridTemplateColumns = `repeat(${slider.value}, 1fr)`
    container.style.gridTemplateRows = `repeat(${slider.value}, 1fr)`

    for (let i = 0; i < cells; i++) {
        const newDiv = document.createElement("div");
        newDiv.classList.add("box");
        container.appendChild(newDiv);
    }
}