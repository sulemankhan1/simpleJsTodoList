// show tasks list
showTasks();

function showTasks() {
    // get tasks from local Storage / tasks_list

    let ul = document.getElementById("tasks_list");
    let tasks = getTasks();
    let html = "";
    let arr_length = tasks.length;

    // Reverse loop through tasks and add it to html
    for(let i = (arr_length - 1); i >= 0; i--) {
      html += '<li class="list-group-item" id="'+ i +'">'+ tasks[i] +' <span class="btn btn-danger btn-sm float-right remove_btn" onclick="removeItem(this)">Remove</span></li>';
    }

    if(html === "") {
      html += '<li class="list-group-item" style="text-align: center">No Task Found</li>';
    }
    ul.innerHTML = html;
}

function addTask() {
  let task_input = document.getElementById("task");
  let tasks = getTasks();


  // add task to array
  tasks.push(task_input.value);

  // UPDATE local storage
  localStorage.tasks = JSON.stringify(tasks);

  // empty the input
  task_input.value = "";

  // update taks list
  showTasks();
}

function removeItem(obj) {
    let id = obj.parentElement.id;
    let tasks = getTasks();

    // remove item from array
    tasks.splice(id,1);

    // UPDATE local storage
    localStorage.tasks = JSON.stringify(tasks);

    // update list (html)
    showTasks();
}

function getTasks() {
  // if There is no array in local storage craete one
  if(localStorage.tasks === undefined) {
    // set local storage
    localStorage.tasks = JSON.stringify([]);
  }

  // localStorage.removeItem("tasks");
  return JSON.parse(localStorage.tasks);
}
