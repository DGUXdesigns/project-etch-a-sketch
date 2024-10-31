const container = document.querySelector('#grid-container');
const button = document.querySelector('button');

function rgbColorGenerator() {
    const r = Math.floor(Math.random() * 56) + 200;
    const g = Math.floor(Math.random() * 156) + 100;
    const b = Math.floor(Math.random() * 30);
    return `rgb(${r}, ${g}, ${b})`;
}

function createGrid(gridSize) {
    container.innerHTML = '';
    const cellSize = container.offsetWidth /gridSize;

    for (let i = 0; i < gridSize * gridSize; i++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');

        cell.style.width = `${cellSize}px`;
        cell.style.height = `${cellSize}px`;
        cell.style.opacity = '1';

        cell.addEventListener('mouseenter', () =>{
            let currentOpacity = parseFloat(cell.style.opacity);

            if (currentOpacity > 0) {
                cell.style.opacity = (currentOpacity - 0.1).toFixed(1);
            }

            cell.style.transition = "background-color 0.1s";
            cell.style.backgroundColor = rgbColorGenerator();

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