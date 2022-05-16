const container = document.querySelector('#wholePage');
const gridBtn = document.querySelector('#btn-generete-grid');
const gridBtnWarning = document.querySelector('.warning');
const colorBtn = document.querySelector('#choose-color');
const resetBtn = document.querySelector('#reset-color');
let colorChosen = {};
console.log(colorChosen);


// function creating grid of divs from 0 to 255
function creatGrid()
{
    clearGrid();
    let x = getNumberSquares()
    let y = x * x;
    // while (container.firstChild) {
    //     container.removeChild(container.firstChild);
    // }
    for (let i = 0; i < y; i++)
    {
        const div = document.createElement('div');
        div.classList.add('gridBox');
        div.setAttribute('id', 'div' + i)
        container.appendChild(div);
        container.style.gridTemplateColumns = `repeat(${y/x}, auto [col-start])`;
        
    }
    const boxHover = document.querySelectorAll('.gridBox');
    boxHover.forEach(element => element.addEventListener('mouseover', colorDrawing));
}

//function to remove children nodes
function clearGrid()
{
    while (container.firstChild) 
    {
        container.removeChild(container.firstChild);
    }
}

function colorDrawing(e)
{
    let r = Math.floor(Math.random() * 255) + 1;
    let g = Math.floor(Math.random() * 255) + 1;
    let b = Math.floor(Math.random() * 255) + 1;
    // let colorChosen = colorSelection();
    // console.log(colorChosen);
    switch (colorChosen)
        {
            case 'red':
                e.target.style.backgroundColor = 'red';
                break;
            case 'orange':
                e.target.style.backgroundColor = 'orange';
                break;
            case 'yellow':
                e.target.style.backgroundColor = 'yellow';
                break;
            case 'green':
                e.target.style.backgroundColor = 'green';
                break;
            case 'blue':
                e.target.style.backgroundColor = 'blue';
                break;
            case 'indygo':
                e.target.style.backgroundColor = 'indigo';
                break;
            case 'violet':
                e.target.style.backgroundColor = 'violet';
                break;
            case 'black':
                e.target.style.backgroundColor = 'black';
                break;
            case 'random':
                e.target.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
                break;
            // case 'gradient':
            //     e.target.classList.add('btn-opacity');
            //     let opacity = Number(e.target.style.opacity);
            //     let newOpacity = opacity + 0.10;
            //     e.target.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
            //     e.target.style.opacity = `${newOpacity}`;
            //     break;          
            default:
                e.target.style.backgroundColor = 'black';
        }

}

// function to change colors
function colorSelection() {
    const colors = ["red", "orange", "yellow", "green", "blue", "indygo", "violet", "black", "random"]
    let colorSelection = prompt('Please select one of available colors: \n' +
    '"red", "orange", "yellow", "green", "blue", "indygo", "violet", "black", "random"', '').trim().toLowerCase();
    if (colorSelection === '' || colorSelection === null) 
    {

    }
    else if (!colors.includes(colorSelection))
    {
        alert('Enter available color: "red", "orange", "yellow", "green", "blue", "indygo", "violet", "black"')
    }
    else 
    {
        colorChosen = colorSelection;
        return colorChosen;
    }
    
}

// function to reset grid color to white
function colorReset() 
{
    const boxHover = document.querySelectorAll('.gridBox');
    boxHover.forEach(element => element.style.backgroundColor = 'white');
    boxHover.
    boxHover.classList.remove('btn-opacity');
}

//function to get squares number from user
function getNumberSquares()
{
    let keepGoing = true;
    while(keepGoing)
    {
        let numberSquares = parseInt(prompt('Please write how many number of squares per side show grid have. Max 100', ));
        console.log(numberSquares);
        if (Number.isInteger(numberSquares) && numberSquares <= 100)
        {
            return numberSquares;
            keepGoing = false;
        }
        else if (Number.isNaN(numberSquares))
        {
            keepGoing = false;
        }
        else if (numberSquares > 100 || !Number.isInteger(numberSquares) || numberSquares === '')
        {
            alert('You didn\'t input number or it was higher than 100!');
        }
    }
}




// const boxHover = document.querySelectorAll('.gridBox');
// boxHover.forEach(element => element.addEventListener('mouseover', colorChange));
gridBtn.addEventListener('click', creatGrid);
colorBtn.addEventListener('click', colorSelection);
resetBtn.addEventListener('click', colorReset);
