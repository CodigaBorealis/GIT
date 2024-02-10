let tarea = document.getElementById("tarea");
let addBtn = document.querySelector(".btn-add");
let ul = document.querySelector("ul");
let empty = document.querySelector(".empty");
let task = 0;
let id = 0;
let contarB = document.getElementById("contar");
contarB.addEventListener("click", () => {
  let count = 0;
  let incomplete = 0;
  if (task == 0) {
    alert("no hay tareas pendientes");
  } else {
    for (x = 0; x <= id; x++) {
      if (document.getElementById(x) != null) {
        if (document.getElementById(x).checked == true) {
          count++;
        } else {
          incomplete++;
        }
      } else {
        continue;
      }
    }
    alert(
      "se han completado " +
        count +
        " tareas" +
        " faltan " +
        incomplete +
        " de un total de " +
        task
    );
  }
});
addBtn.addEventListener("click", (e) => {
  e.preventDefault();

  let text = tarea.value;

  if (text.trim() != "") {
    task++;
    id++;
    li = document.createElement("li");
    p = document.createElement("p");
    let x = document.createElement("INPUT");
    x.setAttribute("type", "checkbox");
    x.setAttribute("id", id);
    p.textContent = text;

    li.appendChild(p);
    li.appendChild(addDeleteBtn());
    li.appendChild(x);
    ul.appendChild(li);

    tarea.value = "";
  } else {
    alert("La tarea no puede estar vacia");
  }
});

function addDeleteBtn() {
  deleteBtn = document.createElement("button");

  deleteBtn.textContent = "del";
  deleteBtn.className = "btn-delete";

  deleteBtn.addEventListener("click", (e) => {
    item = e.target.parentElement;
    ul.removeChild(item);
    items = document.querySelectorAll("li");
    task--;
  });

  return deleteBtn;
}
