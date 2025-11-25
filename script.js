const input = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

addBtn.addEventListener("click", addTask);

function addTask() {
  if (input.value === "") return;

  const li = document.createElement("li");
  li.innerHTML = `
        ${input.value}
        <div class="task-buttons">
            <button class="deleteBtn">Delete</button>
            <button class="editBtn">Edit</button>
        </div>
    `;

  taskList.appendChild(li);

  li.querySelector(".deleteBtn").addEventListener("click", () => {
    li.remove();
  });

  li.querySelector(".editBtn").addEventListener("click", () => {
    const newText = prompt("Edit task:", input.value);
    if (newText) li.firstChild.textContent = newText;
  });

  input.value = "";
}

input.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    addTask();
  }
});
