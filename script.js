const form = document.getElementById("form");
const input = document.getElementById("input");
const todos = document.getElementById("todos");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  addTodo();
});

function addTodo() {
  const todoText = input.value;

  if (todoText) {
    const todoElement = document.createElement("li");
    todoElement.innerHTML = todoText;

    todoElement.addEventListener("click", () => {
      todoElement.classList.toggle("completed");

      updateLS();
    });

    todoElement.addEventListener("contextmenu", (e) => {
      e.preventDefault();

      todoElement.remove();

      updateLS();
    });
    todos.appendChild(todoElement);

    input.value = "";

    updateLS();
  }
}

function updateLS() {
  const todosElement = document.querySelectorAll("li");

  const todos = [];

  todosElement.forEach((todoElement) => {
    todos.push({
      text: todoElement.innerText,
      completed: todoElement.classList.contains("completed"),
    });
  });

  localStorage.setItem("notes", JSON.stringify(todos));
}
