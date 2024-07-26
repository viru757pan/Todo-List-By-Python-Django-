const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

document.addEventListener("DOMContentLoaded", (event) => {
  document.getElementById("addButton").onclick = () =>
    addTask(inputBox, listContainer);
  saveData();
});

function addTask(inputBox, listContainer) {
  if (inputBox.value.trim() === "") {
    alert("You must write something!");
  } else {
    // console.log(inputBox.value);
    let li = document.createElement("li");
    li.textContent = inputBox.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inputBox.value = ""; // Clear the input box after adding the task
  saveData();
}

listContainer.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      saveData();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      saveData();
    }
  },
  "false"
);

function saveData() {
  localStorage.setItem("tododata", listContainer.innerHTML);
}

function showList() {
  listContainer.innerHTML = localStorage.getItem("tododata");
}

showList();
