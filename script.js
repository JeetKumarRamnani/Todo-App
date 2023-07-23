// JavaScript Code
// Fetching elements from the DOM
const d = document;
const inpEl = d.querySelector("#inpEl");
const submitEl = d.querySelector("#submitEl");
const todoContainer = d.querySelector("#todoContainer");

// Array to store todo tasks
const todoValue = [];

// Event listener for the Add Task button
submitEl.addEventListener("click", () => {
  if (submitEl.value == "Done Editing") {
    submitEl.value = "Submit A Todo";
    // inpEl.value = "";
    return;
  }
  if (!inpEl.value) return;

  todoValue.push(inpEl.value);

  inpEl.value = "";

  const value = todoValue[todoValue.length - 1];

  console.log(value);

  const taskElement = `
    <div class="Tasks-Container mt-2 text-sm text-white flex justify-between border-t-2 p-1 items-center">
      <span class="font-thin flex-1 mr-2 text-justify">${value}</span>
      <button class="bg-green-500 p-1 rounded-md cursor-pointer editBtn" type="button">Edit Task</button>
      <button class="bg-red-500 p-1 rounded-md cursor-pointer ml-2 deleteBtn" type="button">Delete Task</button>
    </div>
  `;

  todoContainer.innerHTML += taskElement;

  const deleteButtons = todoContainer.querySelectorAll(".deleteBtn");
  const editButtons = todoContainer.querySelectorAll(".editBtn");

  // Add click event listener to each delete button
  deleteButtons.forEach((deleteButton) => {
    deleteButton.addEventListener("click", () => {
      console.log("Deleted Successfully");
      deleteButton.parentElement.remove();
    });
  });

  editButtons.forEach((editButton) => {
    editButton.addEventListener("click", function (e) {
      inpEl.value = e.target.previousElementSibling.textContent;
      let previousElement = e.target.previousElementSibling;
      console.log(submitEl);
      submitEl.value = "Done Editing";
      submitEl.addEventListener("click", function () {
        if (inpEl.value === "") return;

        console.log(inpEl.value);
        previousElement.textContent = inpEl.value;
        if (submitEl.value == "Submit A Todo") {
          inpEl.value = "";
        }
      });
    });
  });
});
