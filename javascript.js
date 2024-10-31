const container = document.querySelector('#grid-container');
const button = document.querySelector('button');

function createGrid(gridSize) {
    container.innerHTML = '';
    const cellSize = container.offsetWidth /gridSize;

    for (let i = 0; i < gridSize * gridSize; i++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');

        cell.style.width = `${cellSize}px`;
        cell.style.height = `${cellSize}px`;

        cell.addEventListener('mouseenter', () =>{
            cell.classList.add('hover-effect');
        });

        container.appendChild(cell);
    }
}
createGrid(16); //Initialize grid with default size


//initialize button
button.onclick = resetGame;

function resetGame() {
   let newGridSize = Number(prompt('What size do you want the grid to be? (max: 100'));

   if (newGridSize <= 100 && newGridSize > 0) {
    createGrid(newGridSize);
   } else {
    alert('invalid selection. Please enter a number between 1 and 100');
   };
}