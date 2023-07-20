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
  // Check if the input field is empty, if so, return early
  if (!inpEl.value) return;

  // Push the value from the input field to the todoValue array
  todoValue.push(inpEl.value);

  // Clear the input field after adding the task
  inpEl.value = "";

  // Get the latest task value
  const value = todoValue[todoValue.length - 1];

  // Log the latest task value to the console
  console.log(value);

  // Create a new task element and append it to the todoContainer
  const taskElement = `
    <div class="Tasks-Container mt-2 text-sm text-white flex justify-between border-t-2 p-1 items-center">
      <span class="font-thin flex-1 mr-2">${value}</span>
      <button class="bg-blue-500 p-1 rounded-md cursor-pointer deleteBtn" type="button">Delete Task</button>
    </div>
  `;

  // Add the new task element to the todoContainer
  todoContainer.innerHTML += taskElement;

  // Get all delete buttons inside the todoContainer
  const deleteButtons = todoContainer.querySelectorAll(".deleteBtn");

  // Add click event listener to each delete button
  deleteButtons.forEach((deleteButton) => {
    deleteButton.addEventListener("click", () => {
      // Log a message when the delete button is clicked
      console.log("Deleted Successfully");

      // Remove the parent element (task container) when the delete button is clicked
      deleteButton.parentElement.remove();
    });
  });
});
