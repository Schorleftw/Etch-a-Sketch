window.onload = function addGrid() {
    const container = document.getElementById("grid");

    for (let i = 0; i < 256; i++) {
        const newDiv = document.createElement("div");
        newDiv.classList.add("box");
        container.appendChild(newDiv)
    }
}

document.addEventListener("mouseover", function hover(e) {
    if (e.target.className === "box"){
        console.log(e.target.className)
        e.target.style.background = "black";
    }
})