const container = document.querySelector('#grid-container');
const gridSize = 16;

for (let i = 0; i < gridSize * gridSize; i++) {
    const cell = document.createElement('div');
    cell.classList.add('cell');

    container.appendChild(cell);
}