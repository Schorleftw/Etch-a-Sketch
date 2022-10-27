function addGrid() {
    const container = document.getElementById("grid");

    for (let i = 0; i < 256; i++) {
        const newDiv = document.createElement("div");
        container.appendChild(newDiv)
    }
}

addGrid();



// Cloning Nodes
//    const clone = newDiv.cloneNode(false);
//    container.appendChild(clone);