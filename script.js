const navDialog = document.getElementById('nav-dialog');

function handleMenu() {
    navDialog.classList.toggle('hidden');
}

function displayClock() {
    let d = new Date();
    let hour = String(d.getHours()).padStart(2, '0');
    let minute = String(d.getMinutes()).padStart(2, '0');
    let second = String(d.getSeconds()).padStart(2, '0');
    document.getElementById("clock").innerHTML = `${hour}:${minute}:${second}`;
}
setInterval(displayClock, 1000);

function displayDate() {
    let d = new Date();
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let day = days[d.getDay()];

    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let month = months[d.getMonth()];
    let date = d.getDate();
    let year = d.getFullYear();
    document.getElementById("date").innerHTML = `${day} ${date}th ${month}, ${year}`;
}
setInterval(displayDate, 1000);



function addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskText = taskInput.value.trim();

    if (taskText === '') {
        alert('Please enter a valid task!');
        return;
    }

    // Create list item (li)
    const li = document.createElement('li');
    li.className = 'w-full border flex flex-col p-3 text-xl m-1 font-bold rounded-xl bg-sky-400 break-words';

    // Create task span
    const taskSpan = document.createElement('span');
    taskSpan.textContent = taskText;
    taskSpan.className = 'break-words';  // Wrap text when exceeding the width of the div

    // Create a div for the buttons (displayed below the task text)
    const buttonDiv = document.createElement('div');
    buttonDiv.className = 'flex space-x-4 mt-2';  // Space between buttons and some margin on top

    // Create the complete button
    const completeButton = document.createElement('button');
    completeButton.textContent = 'Complete';
    completeButton.className = 'complete-btn p-2 text-lg font-normal bg-green-500 text-white rounded';
    completeButton.onclick = function() {
        moveToCompleted(li);
    };

    // Create the delete button
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.className = 'delete-btn p-2 text-lg font-normal bg-red-500 text-white rounded';
    deleteButton.onclick = function() {
        li.remove();
    };

    // Append buttons to buttonDiv
    buttonDiv.appendChild(completeButton);
    buttonDiv.appendChild(deleteButton);

    // Append taskSpan and buttonDiv to li
    li.appendChild(taskSpan);
    li.appendChild(buttonDiv);

    // Add task to General Task List
    document.getElementById('taskList').appendChild(li);

    // Clear input field
    taskInput.value = '';
}

function moveToPending(task) {
    // Append task to Pending List and remove from Task List
    document.getElementById('pendingList').appendChild(task);
    task.querySelector('.complete-btn').remove(); // Remove the complete button
}

function moveToCompleted(task) {
    // Remove the task from Pending List and add to Completed List
    document.getElementById('completedList').appendChild(task);
    task.querySelector('.complete-btn').remove(); // Remove the complete button (already removed in moveToPending)
}
