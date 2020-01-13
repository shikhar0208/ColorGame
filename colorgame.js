// var colors=["rgb(255, 0, 0)",
//            "rgb(255, 255, 0)",
//            "rgb(0, 255, 0)",
//            "rgb(0, 255, 255)",
//            "rgb(0, 0, 255)",
//            "rgb(255, 0, 255)"
//            ];                     //Note that the spaces are important

var numSquares = 6;
var colors=[];
var pickedColor;
var h1=document.querySelector("h1");
var squares = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay=document.querySelector("#message");
var resetButton=document.querySelector("#reset");
var modeButtons=document.querySelectorAll(".mode");


function init(){
	setupModeButtons();
	setupSquares();
	reset();
}

   init();

function setupModeButtons(){
  	for(var i=0;i<modeButtons.length;i++)
    { 
      modeButtons[i].addEventListener("click",function(){
      modeButtons[0].classList.remove("selected");
      modeButtons[1].classList.remove("selected");            
      this.classList.add("selected");

      this.textContent==="Easy"? numSquares=3 : numSquares=6;  //ternary operator
      reset();
	});
  }
}


function setupSquares(){
    for(var i=0;i<squares.length;i++)
    {    // add click listener to square
       squares[i].addEventListener("click",function(){
       //grab color of picked square
       var clickedColor=this.style.backgroundColor;
       //compare color to pickedColor
       if(clickedColor===pickedColor)
       {
       	changeColor(clickedColor);
       	messageDisplay.textContent="Correct!";
       	h1.style.backgroundColor=clickedColor;
       	resetButton.textContent="Play Again?"
       }
       else
       {
       	this.style.backgroundColor="#232323";
       	 messageDisplay.textContent="Try Again";
       }

	});
  }  
}

function reset(){
	 //Generate all new colors
  colors=generateRandomColors(numSquares);
  // picked a new random color from array
  pickedColor=pickColor();
  //Change colorDisplay to match picked color
  colorDisplay.textContent=pickedColor;
  messageDisplay.textContent="";
  resetButton.textContent="New Colors";
  //change colors of squares
  for(var i=0;i<squares.length;i++)
  {
	if(colors[i]){
		squares[i].style.display="block";
      squares[i].style.backgroundColor=colors[i];
	}
	else{
		squares[i].style.display="none";
	}
  }	
   
   	h1.style.backgroundColor="steelblue";
}


resetButton.addEventListener("click",function(){
    reset();
});


colorDisplay.textContent=pickedColor;


function changeColor(color){
	for(var i=0;i<squares.length;i++)
   	 {
       	squares[i].style.backgroundColor=color;
     }

}

// function to pick random color rgb

function pickColor(){
  	var random=Math.floor(Math.random()*colors.length);
  	return(colors[random]);
}


function generateRandomColors(num){
  // make an array
  var arr=[];

  //add num random colors to array
  for(var i=0;i<num;i++){
    //get random color and push into array 
    arr.push(randomColor());
  }
  return arr;
} 


function randomColor(){
 	// a red from 0 to 255
 var r=Math.floor(Math.random() * 256);	
 	// a green from 0 to 255
 var g=Math.floor(Math.random() * 256);	
 	// a blue from 0 to 255
 var b=Math.floor(Math.random() * 256);	
  return("rgb(" +r+", " +g+", "+b+")");

 }





 