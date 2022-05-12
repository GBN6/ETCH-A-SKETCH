const container = document.querySelector('#wholePage');
const gridBtn = document.querySelector('#btn-generete-grid');
const gridBtnWarning = document.querySelector('.warning');

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
        const boxHover = document.querySelectorAll('.gridBox');
        boxHover.forEach(element => element.addEventListener('mouseover', colorChange));
    }
}

//function to remove children nodes
function clearGrid()
{
    while (container.firstChild) 
    {
        container.removeChild(container.firstChild);
    }
}

// function to change colors
function colorChange(e) {
    e.target.style.backgroundColor = 'yellow';
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



gridBtn.addEventListener('click', creatGrid);
const boxHover = document.querySelectorAll('.gridBox');
boxHover.forEach(element => element.addEventListener('mouseover', colorChange));
console.log(boxHover);



