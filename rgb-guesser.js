// start with fixed colors

var colors=[];
var numSquares=9;
// this number shoudl be equal to our defualt level on page
var difficultyLevels={
    "Easy":3,
    "Medium":6,
    "Hard":9
}
// remember to always name difficulty level keys same as the text content of these buttons


var colors=generateRandomColors(numSquares);
var squares=document.querySelectorAll(".square");
var pickedColor=pickRandomColorFromArray(numSquares);
var colorDisplay=document.getElementById("color-display");
var tryAgain=document.querySelector("#try-again-msg");
var navCustom=document.querySelector(".navcustom");
var resetButton=document.getElementById("reset");
var modeButtons=document.querySelectorAll(".mode");

colorDisplay.textContent=pickedColor;
init();

function init(){
    setUpModeButtons();
    setUpSquares();   

  
}


function setUpModeButtons(){
     //mode button event listeners
    for(var i=0;i<modeButtons.length;i++){
        modeButtons[i].addEventListener("click", function(){
            for(var j=0;j<modeButtons.length;j++){
               
                modeButtons[j].classList.remove("selected-level");
                
            }
            this.classList.add("selected-level");
            numSquares=difficultyLevels[this.textContent];
            modeGenerator(numSquares);
            reset();
        });
    }
}

function setUpSquares(){
      for (var i=0;i<squares.length;i++){
    // squares[i].style.background=colors[i];
    // note style.background is not compatible with all browsers,however style.backgroundColor is 
    squares[i].style.backgroundColor=colors[i];
    //add intiial colors to squares
    
    squares[i].addEventListener("click", function(){
        // console.log(this.style.backgroundColor);
        clickedColor=this.style.backgroundColor;
        if(clickedColor===pickedColor){
            // console.log("Correct match");
            navCustom.style.backgroundColor = pickedColor;
            tryAgain.textContent="You guessed it right";
            resetButton.textContent="Play Again?"
            changeColors(pickedColor);
        }
        else{
            // console.log("Incorrect match");
            // to get a fadeout effect,we are making color squares same as our body's background
            this.style.backgroundColor = "#232323";
            tryAgain.textContent="Try Again";
        }
        
        });
    
    }
}

function changeColors(color){
    //loop through all squares to match a given color
    for (var i=0;i<squares.length;i++){
        squares[i].style.backgroundColor = color;
    }
    //change each color to match given color

}

function pickRandomColorFromArray(numSquares){
    // var numSquares=
    var randomIndex=Math.floor(Math.random()*numSquares);
    return colors[randomIndex];
}
function generateRandomColors(numSquares){
    arr=[];
    for(var i=0;i<numSquares;i++){
        arr[i]=pickRandomColor();
    }
    return arr;
}


function pickRandomColor(){
    //pick red,green,blue b/w 0 and 255
    var red=Math.floor(Math.random()*256);
    var green=Math.floor(Math.random()*256);
    var blue=Math.floor(Math.random()*256);
    return "rgb("+red+", "+green+", "+blue+")";
}

// not in the above spaces are important between commas and numbers "rgb(255, 0, 0)" will work and "rgb(255,0,0)" will not work

resetButton.addEventListener("click", function(){
   reset(numSquares);
});

function modeGenerator(num1){
    colors=generateRandomColors(num1);

    pickedColor=pickRandomColorFromArray(num1);
    colorDisplay.textContent=pickedColor;
    resetButton.textContent="New Colors";
    for (var i=0;i<squares.length;i++){
    // squares[i].style.background=colors[i];
    // note style.background is not compatible with al browsers,however style.backgroundColor is 
        if(colors[i]){
            squares[i].style.display = "block";
            squares[i].style.backgroundColor=colors[i];
            
        }
        else{
            squares[i].style.display = "none";
        }
    
    }
}





function reset(){
    colors=generateRandomColors(numSquares);
    //pick new random color
    pickedColor=pickRandomColorFromArray(numSquares);
    colorDisplay.textContent=pickedColor;
    resetButton.textContent="New Colors";
    tryAgain.textContent="";

    for (var i=0;i<squares.length;i++){
    // squares[i].style.background=colors[i];
    // note style.background is not compatible with al browsers,however style.backgroundColor is 
   
        if(colors[i]){
            squares[i].style.display = "block";
            //unhides the content i.e squares
            squares[i].style.backgroundColor=colors[i];
            
        }else{
            squares[i].style.display = "none";
            //hides the content i.e squares
        }
    // squares[i].style.display = "block";
    }    
    navCustom.style.background="steelblue"; 

}