let board = document.querySelector(".board");
for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
        let cell = document.createElement("div");
        cell.classList.add("cell", (i + j) % 2 == 0 ? "white" : "black");
        board.append(cell)
    }    
}