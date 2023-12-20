document.addEventListener('DOMContentLoaded', () => {
  // your code here
  const form = document.getElementById('create-task-form');
  const taskInput = document.getElementById('new-task-description');
  const taskList = document.getElementById('tasks');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Created a new list item
    const listItem = document.createElement('li');
    // Created a delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.addEventListener('click', () => {
      taskList.removeChild(listItem);
    });

    listItem.textContent = taskInput.value;
    listItem.appendChild(deleteBtn);

    taskList.appendChild(listItem);

    taskInput.value = ''
  });

})




  /* document
    .getElementById('create-task-form')
    .addEventListener('submit', (e) => {
      e.preventDefault();
    });*/

  // function deleteTasks() {
  //   let tasks
  // }