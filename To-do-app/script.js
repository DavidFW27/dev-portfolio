function addTask(){

let input = document.getElementById("taskInput")

let taskText = input.value

let li = document.createElement("li")

li.textContent = taskText

document.getElementById("taskList").appendChild(li)

input.value = ""

}