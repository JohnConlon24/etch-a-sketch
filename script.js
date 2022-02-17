const container = document.querySelector('.container')
const blackButton = document.createElement('black-button')
const eraserButton = document.createElement('eraser-button')
const section = document.querySelector('.section');
const buttonsContainer = document.querySelector('.buttons');

createDivs = (col, rows) => {
    for(let i = 0; i < (col * rows); i++) {
        const div = document.createElement('div')
        container.style.gridTemplateColumns = `repeat(${col}, 1fr)`;
        container.style.gridTemplateRows = `repeat(${rows}, 1fr)`;
        container.appendChild(div).classList.add('box')
    }
}

createDivs(100,80)

eraser = () => {
    const boxes = container.querySelectorAll('.box');
    eraserButton.textContent = 'Erase';
    eraserButton.addEventListener('click', () => {
        boxes.forEach(box => box.addEventListener('mouseover', () => {
            let GrayScale = `gray`
            box.style.background = GrayScale;
        }))
    })
    buttonsContainer.appendChild(eraserButton).classList.add('eraser-button')
}
eraser()

black = () => {
    const boxes = container.querySelectorAll('.box');
    blackButton.textContent = 'Black';
    blackButton.addEventListener('click', () => {
        boxes.forEach(box => box.addEventListener('mouseover', () => {
            box.style.background = 'black'
        }))
    })
    buttonsContainer.appendChild(blackButton).classList.add('black-button')
}
black()
