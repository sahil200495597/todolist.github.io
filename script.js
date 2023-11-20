// JavaScript variables
var todoInput = document.getElementById('todoInput');
var todoList = document.getElementById('todoList');

// Function to add a new to-do
function addTodo() {
    var todoText = todoInput.value.trim();

    if (todoText !== '') {
        var listItem = document.createElement('li');
        var checkbox = document.createElement('input');
        var todoTextElement = document.createElement('span');
        var deleteButton = document.createElement('button');

        checkbox.type = 'checkbox';
        checkbox.className = 'checkbox';
        checkbox.addEventListener('change', toggleTodo);

        todoTextElement.textContent = todoText;

        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', deleteTodo);

        listItem.appendChild(checkbox);
        listItem.appendChild(todoTextElement);
        listItem.appendChild(deleteButton);

        todoList.appendChild(listItem);

        // Clear the input field after adding a to-do
        todoInput.value = '';
    }
}

// Function to toggle the completion status of a to-do
function toggleTodo() {
    var listItem = this.parentNode;

    if (this.checked) {
        listItem.classList.add('completed');
    } else {
        listItem.classList.remove('completed');
    }

    // Move completed item to the bottom
    todoList.appendChild(listItem);
}

// Function to delete a to-do
function deleteTodo() {
    var listItem = this.parentNode;
    playDingSound()
    listItem.remove();
}

// Function to play a built-in 'ding' sound
function playDingSound() {
    var audio = new Audio('ding.mp3'); 
    audio.play();
}

// Function to add a to-do
function addTodo() {
    var todoInput = document.querySelector('#todoInput');
    var todoText = todoInput.value;

    if (todoText.trim() !== '') {
        var listItem = document.createElement('li');

        // Generate a random color
        var randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);

        // Apply the random background color
        listItem.style.backgroundColor = randomColor;

        listItem.innerHTML = `
            <input type="checkbox" class="checkbox" onchange="toggleTodo.call(this)">
            <span>${todoText}</span>
            <button onclick="deleteTodo.call(this)">Delete</button>
        `;
        
        todoList.appendChild(listItem);

        // Clear the input field
        todoInput.value = '';
    }
}
