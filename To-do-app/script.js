function addTask(){
    let input = document.getElementById("taskInput")
    let taskText = input.value

    if(taskText === ""){
        return
    }

    let li = document.createElement("li")
    li.textContent = taskText

    li.onclick = function(){
        li.classList.toggle("completed")
        saveTasks()
        updateCounter()
    }

    let deleteBtn = document.createElement("button")
    deleteBtn.textContent = "Delete"

    deleteBtn.onclick = function(){
        li.remove()
        saveTasks()
        updateCounter()
    }

    li.appendChild(deleteBtn)

    document.getElementById("taskList").appendChild(li)

    input.value = ""

    saveTasks()
    updateCounter()
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
                updateCounter()
            }

            let deleteBtn = document.createElement("button")
            deleteBtn.textContent = "Delete"

            deleteBtn.onclick = function(){
                li.remove()
                saveTasks()
                updateCounter()
            }

            li.appendChild(deleteBtn)
            document.getElementById("taskList").appendChild(li)
        })
    }

    updateCounter()
}

function clearTasks(){
    document.getElementById("taskList").innerHTML = ""
    saveTasks()
    updateCounter()
}

function updateCounter(){
    let count = document.querySelectorAll("li").length
    document.getElementById("taskCounter").textContent = "Tasks: " + count
}

loadTasks()