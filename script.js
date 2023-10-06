
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
    

}
/*
let button = document.createElement('button')
button.addEventListener('click',newGrid)

let newGrid = function(){
    console.log()
}
*/






makeGrid();

