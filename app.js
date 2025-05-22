const btn = document.getElementById("AddButton")
const TaskContainer = document.getElementById("Tasks")
const Input = document.getElementById("Input")
//Lists
let TaskTexts = [];
let CheckBoxs = [];
let CheckBoxStatus = [];
let DeleteButtons = [];
let lines = [];

//Button Onclick
btn.onclick = () => AddTask(Input.value);

//Add Task
function AddTask(TaskText){
//Check Input
 if (TaskText != ""){
//Create Button
 let NewCheckBox = document.createElement("button")

//Increase Button Lists
 CheckBoxs.push(NewCheckBox)
 CheckBoxStatus.push(true)

//Make Button functionality
 NewCheckBox.textContent = ""
 NewCheckBox.onclick = () => CheckBox(CheckBoxs.indexOf(NewCheckBox))

//Make Tast Text
 let NewTask = document.createElement("label")
 NewTask.textContent = TaskText;

//Show New Task
 TaskContainer.appendChild(NewTask)
 TaskContainer.appendChild(NewCheckBox)

//Increase TaskText List
 TaskTexts.push(NewTask)

//Delete Button
 let NewDelete = document.createElement("button")
 NewDelete.classList = "DeleteButtons"
 DeleteButtons.push(NewDelete);
 NewDelete.onclick = () => Delete(DeleteButtons.indexOf(NewDelete))
 TaskContainer.appendChild(NewDelete)


//Start New Line
 let br = TaskContainer.appendChild(document.createElement("br"))
 TaskContainer.appendChild(br)
 lines.push(br)

//Reset Input
 if (TaskText == Input.value) Input.value = ""
 }
}

//Button function
function CheckBox(Button){
//Status var
    let Status = CheckBoxStatus[Button]
//Change var
    CheckBoxStatus[Button] = !Status
//Debug
    console.log(Button, Status)

//Change Image (Inverted for some Reason ?)
    if (CheckBoxStatus[Button] == false){
        CheckBoxs[Button].style.backgroundImage = 'url("Images/checked.png")'
    }else {
        CheckBoxs[Button].style.backgroundImage = 'url("Images/Unchecked.png")'
    }
    
}

//DeleteButton function
function Delete(Button){
    console.log(Button)

    TaskTexts[Button].remove();
    CheckBoxs[Button].remove();
    DeleteButtons[Button].remove();
    lines[Button].remove();

    TaskTexts.splice(Button,1)
    CheckBoxs.splice(Button,1)
    DeleteButtons.splice(Button,1)
    CheckBoxStatus.splice(Button,1)
    lines.splice(Button,1)
}
