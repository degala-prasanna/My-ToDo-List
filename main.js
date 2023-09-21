let inputBox = document.getElementById("input-box");
let add=document.getElementById("add");
let listContainer=document.getElementById("list-container");
const filterOption = document.getElementById("filter-todo");


add.addEventListener('click', () => {
    addTask();
});

inputBox.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        addTask();
    }
});

function addTask() {
    if (inputBox.value === '') {
        alert("Add your Tasks !");
    } else {
        // Adding list of tasks
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        
        // Adding trashbin to each list
        let span = document.createElement("span");
        li.appendChild(span);
        
        inputBox.value = "";
        savedata();
    }
}



listContainer.addEventListener("click", (e) => {
    let ele = e.target; // Get the clicked element
    console.log(ele.tagName);
    if (ele.tagName === 'LI') {
        ele.classList.toggle("checked"); 
        savedata();
    }
    else if(ele.tagName==='SPAN'){
        ele.parentElement.remove();
        savedata();
    }
},false);

function savedata(){
    localStorage.setItem("tasks",listContainer.innerHTML);
};
function showdata(){
    listContainer.innerHTML=localStorage.getItem("tasks");
};
showdata();

filterOption.addEventListener("change", filterTodo);
//filter
function filterTodo(e) {
    const todos = listContainer.childNodes;
    todos.forEach(function(todo) {
        switch(e.target.value) {
            case "all": 
                todo.style.display = "flex";
                break;
            case "completed": 
                if(todo.classList.contains("checked")) {
                    todo.style.display = "flex";
                } else {
                    todo.style.display = "none";
                }
                break;
            case "incomplete":
                if(!todo.classList.contains("checked")) {
                    todo.style.display = "flex";
                } else {
                    todo.style.display = "none";
                }
                break;
        }
    });
}