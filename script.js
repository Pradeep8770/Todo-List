const formtodo = document.querySelector(".form-todo");
const inputtodo = document.querySelector(".form-todo input[type = 'text']");
const todolist = document.querySelector(".todo-list");

formtodo.addEventListener("submit", function (e) {
  e.preventDefault();
  const newtodovalue = inputtodo.value;
  const newli = document.createElement("li");
  const newliinnerhtml = `<span class="text">${newtodovalue}</span>
    <div class="buttons">
        <button class="todo-btn done">DONE</button>
        <button class="todo-btn remove">REMOVE</button>
    </div>`;
  newli.innerHTML = newliinnerhtml;
  todolist.append(newli);
});

todolist.addEventListener("click", function (e) {
  if (e.target.classList.contains("done")) {
    const liSpan = e.target.parentNode.previousElementSibling;
    liSpan.style.textDecoration = "line-through";
    liSpan.style.color = "#fff"
  }

  if (e.target.classList.contains("remove")) {
    const targetli = e.target.parentNode.parentNode;
    targetli.remove();
  }
});
