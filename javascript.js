const container = document.querySelector('#grid-container');
const gridSize = 16;

for (let i = 0; i < gridSize * gridSize; i++) {
    const cell = document.createElement('div');
    cell.classList.add('cell');

    container.appendChild(cell);
}

//hover effect
const cells = document.querySelectorAll('.cell');

cells.forEach(cell => {
    cell.addEventListener("mouseenter", () => {
        cell.classList.add('hover-effect');
    });
});