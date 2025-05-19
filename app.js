let Buttons = 16;

let Files = ["ant game", "wave game"]
Buttons = Files.length

let container = document.getElementById("ButtonContainer");
for (let i = 0; i< Buttons;i++){
    let btn = document.createElement("button")

    btn.textContent = "Download "+Files[i];

    btn.onclick = function (){
        console.log("Downloading "+Files[i]+"...")
    }

    container.appendChild(btn)
}

function cool(printString){
console.log(printString)
}

