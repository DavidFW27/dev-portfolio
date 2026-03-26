function addTask(){
    let input = document.getElementById("taskInput")
    let taskText = input.value

    let li = document.createElement("li")
    li.textContent = taskText

    li.onclick = function(){
        li.classList.toggle("completed")
        saveTasks()
    }

    let deleteBtn = document.createElement("button")
    deleteBtn.textContent = "Delete"

    deleteBtn.onclick = function(){
        li.remove()
        saveTasks()
    }

    li.appendChild(deleteBtn)

    document.getElementById("taskList").appendChild(li)

    input.value = ""

    saveTasks()
}

function saveTasks(){
    let tasks = []
    let lis = document.querySelectorAll("li")

    lis.forEach(function(li){
        tasks.push({
            text: li.firstChild.textContent,
            completed: li.classList.contains("completed")
        })
    })

    localStorage.setItem("tasks", JSON.stringify(tasks))
}

function loadTasks(){
    let tasks = JSON.parse(localStorage.getItem("tasks"))

    if(tasks){
        tasks.forEach(function(task){
            let li = document.createElement("li")
            li.textContent = task.text

            if(task.completed){
                li.classList.add("completed")
            }

            li.onclick = function(){
                li.classList.toggle("completed")
                saveTasks()
            }

            let deleteBtn = document.createElement("button")
            deleteBtn.textContent = "Delete"

            deleteBtn.onclick = function(){
                li.remove()
                saveTasks()
            }

            li.appendChild(deleteBtn)
            document.getElementById("taskList").appendChild(li)
        })
    }
}

loadTasks()