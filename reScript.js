const form = document.querySelector("#addTaskForm");
const input = document.querySelector("#txtTaskName");
const btnDeleteAll = document.querySelector("#btnDeleteAll");
const taskList = document.querySelector("#task-list");
let items;

eventListener();

function eventListener() {
    form.addEventListener("submit", addNewItem);
}

function addNewItem(event) {
    event.preventDefault();
    console.log(event);

    if (input.value === '') {
        alert('Lütfen bir görev yazınız!');
        return;
    }

    const li=document.createElement('li');
    li.classList = 'list-group-item list-group-item-secondary';
    li.appendChild(document.createTextNode(input.value));

    const a = document.createElement('a');
    a.classList = 'delete-item float-end';
    a.setAttribute('href', '#');
    a.innerHTML = '<i class="bi bi-x-circle"></i>';

    li.appendChild(a);
    taskList.appendChild(li);
}

const clearToDo = document.getElementById("task-list");
clearToDo.addEventListener('click', function(){
    a.remove();
}
)