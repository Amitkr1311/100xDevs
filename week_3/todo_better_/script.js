function deletetodo(index){
    const element = document.getElementById("todo-" + index);
    element.parentNode.removeChild(element);
}

const divEl = document.createElement("div");
divEl.innerHTML = "Read Books";
const parentEl = document.getElementById("parenttodo");
parentEl.appendChild(divEl);