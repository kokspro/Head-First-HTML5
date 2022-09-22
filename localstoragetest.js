let input = document.getElementById("text");
let add = document.getElementById("addButton");
let list = document.getElementById("list");
let remove = document.getElementById("removeButton");
remove.onclick = removeList;
add.onclick = addToList;
window.onload = init;

function init() {
    localStorage.getItem("self");
}

function addToList() {
    let listItem = document.createElement("li");
    listItem.innerHTML = input.value;
    list.appendChild(listItem);
    localStorage.setItem("self", "Three");
}

function removeList() {
    localStorage.clear();
}