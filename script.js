const container = document.querySelector('#wholePage');


// function creating grid of divs from 0 to 255
function creatGrid()
{
    for (let i = 0; i < 256; i++)
    {
        const div = document.createElement('div');
        div.classList.add('gridBox');
        div.setAttribute('id', 'div' + i)
        container.appendChild(div);
    }
}

function colorChange(e) {
    e.target.style.backgroundColor = 'yellow';
}

creatGrid();


const boxHover = document.querySelectorAll('.gridBox');
boxHover.forEach(element => element.addEventListener('mouseover', colorChange));



