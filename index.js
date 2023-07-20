const range = document.querySelector("#range");
const drawingBoard = document.querySelector(".draw");
const oneSquares = document.querySelector(".squares");
const back = document.querySelector(".back");
const clean = document.querySelector(".clean");
let drawing = true;

const updateScreen=()=>{
    let allSquares = [
        '<div class="squares"></div>'
    ]
    const zoom = range.value;
    const squares = 808 - (zoom*80);;
    console.log(squares);
    allSquares.push(allSquares[0].repeat(squares-1));
    drawingBoard.innerHTML= allSquares.join("");
    drawingBoard.style.setProperty("grid-template-columns", `repeat(${44 - (zoom * 4)}, auto)`);   
}

drawingBoard.addEventListener('mouseover', (e)=>{
    const square = e.target;
    
    if(drawing){
        square.classList.add("selected");
    } else {
        square.classList.remove("selected");
    }
});

clean.addEventListener("click", ()=>{
    drawing = !drawing;
    if(drawing){
        clean.style.setProperty("background-image", "url(\"./images/clean.png\")");
    }else {
        clean.style.setProperty("background-image", "url(\"./images/cleanOff.png\")");
    }
})

back.addEventListener('click', updateScreen);

range.addEventListener("change", updateScreen)
updateScreen();