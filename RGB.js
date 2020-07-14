var numberOfSquares = 6;
var colors = generateRandomColors(numberOfSquares);
var pickedColor = pickColor();
var square = document.querySelectorAll(".square");
var colorDisplay= document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1= document.querySelector("h1");
var resetBtn= document.querySelector("#reset");
var easyBtn=document.querySelector("#easyBtn");
var hardBtn=document.querySelector("#hardBtn");
colorDisplay.textContent = pickedColor;
easyBtn.addEventListener("click", function(){
	this.classList.add("selected");
	hardBtn.classList.remove("selected");
	numberOfSquares= 3;
	colors = generateRandomColors(numberOfSquares);
	pickedColor=pickColor();
	colorDisplay.textContent=pickedColor;
	messageDisplay.textContent="";
	for(var i=0; i<square.length; i++){
		if(colors[i]){
			square[i].style.background= colors[i];
		}
		else{
			square[i].style.display="none";
		}

	}
});
hardBtn.addEventListener("click", function(){
	this.classList.add("selected");
	easyBtn.classList.remove("selected");
	numberOfSquares=6;
	colors = generateRandomColors(numberOfSquares);
	pickedColor=pickColor();
	colorDisplay.textContent=pickedColor;
	messageDisplay.textContent="";
	for(var i=0; i<square.length; i++){
			square[i].style.background= colors[i];
			square[i].style.display="block";

	}
});
resetBtn.addEventListener("click", function(){
	colors= generateRandomColors(numberOfSquares);
	pickedColor= pickColor();
	colorDisplay.textContent= pickedColor;
	h1.style.background= "steelblue";
	resetBtn.textContent="New colors";
	messageDisplay.textContent="";

	for(var i=0; i<square.length; i++){
		square[i].style.background=colors[i];
	}
  
});
for(var i=0; i<square.length; i++){
	square[i].style.background = colors[i];
	square[i].addEventListener("click", function(){
		
		var clickedColor = this.style.background;
		if(clickedColor === pickedColor){
			messageDisplay.textContent= "Correct!";
			changeColors(pickedColor);
			h1.style.background=clickedColor;
			resetBtn.textContent="Play Again?";


		}
			
		else{
			this.style.background ="#232323";
			messageDisplay.textContent= "Try Again";
		}

	});
}
function changeColors(color){
	for(var i=0; i<square.length; i++){
		square[i].style.background = color;
	}
};
function pickColor(){
	var i=Math.floor((Math.random()*colors.length));
	return colors[i];
};
function generateRandomColors(num){
	var arr =[];
	for(var i=0; i<num; i++){
		arr.push(randomColor());
	}
	return arr;

};
function randomColor(){
	var red = Math.floor(Math.random()*256);
	var green = Math.floor(Math.random()*256);
	var blue = Math.floor(Math.random()*256);
	return "rgb("+red+", "+green+", "+blue+")";

};