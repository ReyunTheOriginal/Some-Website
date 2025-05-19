let string = "cool"
let verycoolButton = document.getElementById(1);
let notverycoolButton = document.getElementById(2);

verycoolButton.onclick = () => cool("clicked cool");
notverycoolButton.onclick = () => cool("clicked not cool")

cool(string)

function cool(printString){
console.log(printString)
}

