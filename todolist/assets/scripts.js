const form = document.getElementById('task-form')

form.onsubmit = function (e) {
	e.preventDefault()
	let inputField = document.getElementById('task-input')
    addTask(inputField.value)
	form.reset()
}

function addTask(taskToAdd){
    let checkbox = document.createElement('input')
    checkbox.setAttribute('type', 'checkbox')
    checkbox.setAttribute('name', taskToAdd.toUpperCase())

    if (document.getElementsByName(taskToAdd.toUpperCase()).length == 0 ){
        let task = document.createElement('label')
        let text = document.createTextNode(taskToAdd)
        task.appendChild(text)

        let div = document.createElement('div')
        div.setAttribute('class', 'task-item')
        div.appendChild(checkbox)
        div.appendChild(task)

        let divToAppend = document.getElementById('task')
        divToAppend.appendChild(div)
    }
    
}
