const btn = document.getElementById("AddButton")
const TaskContainer = document.getElementById("Tasks")
const Input = document.getElementById("Input")
const CheckBoxs = document.getElementById("CheckBoxs")

btn.onclick = () => AddTask();

function AddTask(){
 let TaskText = Input.value
 if (TaskText != ""){
 let NewCheckBox = document.createElement("button")
 NewCheckBox.textContent = "g"
 NewCheckBox.onclick = () => CheckBox(TaskText)

 let NewTask = document.createElement("label")
 NewTask.textContent = TaskText;

 TaskContainer.appendChild(NewTask)
 TaskContainer.appendChild(NewCheckBox)

 TaskContainer.appendChild(document.createElement("br"))
 
 Input.value = ""
 }
}

function CheckBox(String){
    console.log(String)
}