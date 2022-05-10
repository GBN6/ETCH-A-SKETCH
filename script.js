const container = document.querySelector('#wholePage');



function creatGrid()
{
    for (let i = 0; i < 256; i++)
    {
        const div = document.createElement('div');
        div.classList.add('gridBox');
        container.appendChild(div);
    }
}

creatGrid();


const boxHover = document.querySelector('.gridBox')
boxHover.addEventListener('click', (e) => {console.log(e)});