
let defaultValue=16;
let containerDiv= document.querySelector('.containerDiv')
let makeGrid=function(){

for (let i=0;i<defaultValue;i++){
   
    let rowDiv = document.createElement('div')
    rowDiv.classList.add('rowDiv')

    for (let i=0;i<defaultValue;i++){
        let squareDiv = document.createElement('div')
        squareDiv.classList.add('grid')
        squareDiv.addEventListener('mouseover',()=>{
            squareDiv.style.backgroundColor ='black'
        })
        rowDiv.appendChild(squareDiv)
        
    }
    containerDiv.appendChild(rowDiv)
}
  
containerDiv.appendChild(button)
}

let newGrid = function(){
    defaultValue=prompt('enter a value','16')
    let isTooBig = false
    let containerKids = containerDiv.children;
    for (let i=0;i<containerKids.length;i++){
        console.log(containerKids.length)
        let firstGone = containerKids[i]
        containerDiv.removeChild(firstGone)
    }
    let rowKids = document.querySelectorAll('.rowDiv')
    for (let i=0;i<rowKids.length;i++){
        console.log(rowKids.length)
        let secondGone = rowKids[i]
        containerDiv.removeChild(secondGone)
    }
    defaultValue= +defaultValue
    if(defaultValue>100){
        alert ('please choose a smaller number for your comp lmao')
        defaultValue = prompt('enter another value.')
    }
    
    makeGrid();
}

let button = document.createElement('button')
button.textContent = 'click me'
button.addEventListener('click',newGrid)









makeGrid();

