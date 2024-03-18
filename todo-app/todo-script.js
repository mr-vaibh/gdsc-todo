let todoInput = document.getElementById('todo-input')
let addBtn = document.getElementById('add-btn')
let todoListSection = document.getElementById('todo-list')

let todoID = 0

function deleteTodo(id) {
    document.getElementById(id).remove();
}

addBtn.addEventListener("click", function () {
    let todoValue = todoInput.value

    let htmlValue = `
        <div id="${todoID}" class="mt-3">
            <span>${todoValue}</span>
            <button class="btn btn-danger btn-sm" onclick="deleteTodo(${todoID})">Delete</button>
        </div>
    `

    todoListSection.innerHTML += htmlValue

    todoID++
})

