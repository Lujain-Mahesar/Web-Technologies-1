document.addEventListener('DOMContentLoaded', () => {
    const taskList = document.getElementById('taskList');
    const taskForm = document.getElementById('taskForm');
    let taskCounter = 5; 

   
    function attachDeleteListener(button) {
        button.addEventListener('click', function() {
            this.closest('.task-box').remove();
        });
    }

    
    const existingButtons = document.querySelectorAll('.btn-delete');
    existingButtons.forEach(btn => attachDeleteListener(btn));

    
    function renderTask(title, status, date) {
        taskCounter++;
        const taskDiv = document.createElement('div');
        taskDiv.className = 'task-box';
        
        taskDiv.innerHTML = `
            <div class="task-left">
                <h4>Task #${taskCounter}: ${title}</h4>
                <p>Status: ${status}</p>
            </div>
            <div class="task-right">
                <span class="due-date">due date: ${date || '2026-03-26'}</span>
                <button class="btn-delete">Delete</button>
            </div>
        `;

        attachDeleteListener(taskDiv.querySelector('.btn-delete'));
        taskList.appendChild(taskDiv);
    }

   
    taskForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const titleVal = document.getElementById('taskTitle').value.trim();
        const statusVal = document.getElementById('taskStatus').value;
        const dateVal = document.getElementById('taskDate').value;
        const error = document.getElementById('errorMsg');

        if (titleVal === "") {
            error.textContent = "Task title is required.";
        } else {
            error.textContent = "";
            renderTask(titleVal, statusVal, dateVal);
            taskForm.reset();
        }
    });

    document.getElementById('clearBtn').addEventListener('click', () => {
        taskForm.reset();
        document.getElementById('errorMsg').textContent = "";
    });
});