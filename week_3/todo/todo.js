let ctr = 1;

function addtodo(){
    let inputEl = document.querySelector("input");
    let value = inputEl.value;

    const newdivEl = document.createElement("div");
    newdivEl.setAttribute("id",ctr);

    newdivEl.innerHTML = "<div>" + value + "</div><button onclick='deletetodo(" + ctr + ")'>delete</button>";

    document.querySelector("body").append(newdivEl);
    inputEl.value = "";
    ctr = ctr + 1;
}

function deletetodo(index){
    const p = document.getElementById(index);
    p.parentNode.removeChild(p);
}