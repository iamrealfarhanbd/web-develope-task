// 1. Load data from LocalStorage or use Initial Data
const INITIAL_DATA = [
    { id: 1, title: "Fix homepage bug", completed: false },
    { id: 2, title: "Update pricing page", completed: true },
    { id: 3, title: "Add Stripe webhook", completed: false },
    { id: 4, title: "Write documentation", completed: false }
];

let tasks;
const savedData = localStorage.getItem('ec-tasks');

console.group('App Initialization');

try {
    // Check if data exists AND isn't the string "[object Object]"
    if (savedData && savedData !== "[object Object]") {
        tasks = JSON.parse(savedData);
        console.log('%c STATUS: Loaded from LocalStorage ', 'background: #222; color: #bada55; padding: 2px 5px;');
    } else {
        throw new Error("No valid saved data found");
    }
} catch (e) {
    // If parsing fails or data is corrupt, fallback to initial data [cite: 19]
    tasks = [...INITIAL_DATA];
    console.log('%c STATUS: Using Brief Starting Data ', 'background: #222; color: #ffcc00; padding: 2px 5px;');
    // Clear the "junk" so it doesn't error again
    localStorage.removeItem('ec-tasks');
}

console.table(tasks);
console.groupEnd();

let currentFilter = 'all';

console.log('Initializing App');
console.log('Loaded tasks count:', tasks.length);

// DOM Elements
const taskList = document.getElementById('task-list');
const taskInput = document.getElementById('task-input');
const addBtn = document.getElementById('add-btn');
const totalSpan = document.getElementById('total-tasks');
const completedSpan = document.getElementById('completed-tasks');
const filterBtns = document.querySelectorAll('.filter-btn');

// 2. Save function 
function saveToStorage() {
    console.log('Syncing state to LocalStorage');
    localStorage.setItem('ec-tasks', JSON.stringify(tasks));
}

function render() {
    // debugger; // Uncomment to inspect DOM state before clear
    taskList.innerHTML = '';
    
    // Filter logic
    const filteredTasks = tasks.filter(t => {
        if (currentFilter === 'completed') return t.completed;
        if (currentFilter === 'pending') return !t.completed;
        return true;
    });

    console.log(`Rendering View: [${currentFilter}] - Showing ${filteredTasks.length} tasks`);

    filteredTasks.forEach(task => {
        const li = document.createElement('li');
        li.innerHTML = `
            <input type="checkbox" ${task.completed ? 'checked' : ''} 
                   onchange="toggleTask(${task.id})" aria-label="Toggle completion">
            <span class="${task.completed ? 'completed-text' : ''}">${task.title}</span>
        `;
        taskList.appendChild(li);
    });

    // Update Stats 
    const completedCount = tasks.filter(t => t.completed).length;
    totalSpan.innerText = `Total: ${tasks.length}`;
    completedSpan.innerText = `Completed: ${completedCount}`;
}

// Add Task
function addTask() {
    const title = taskInput.value.trim();
    if (title) {
        const newTask = { id: Date.now(), title, completed: false };
        tasks.push(newTask);
        
        console.log('Task added successfully:', newTask);
        
        taskInput.value = '';
        saveToStorage(); 
        render();
    } else {
        console.warn('Attempted to add task with empty title - ignoring.');
    }
}

// Toggle Completed 
window.toggleTask = (id) => {
    // debugger; // Inspect task state before toggle
    tasks = tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t);
    
    const updatedTask = tasks.find(t => t.id === id);
    console.log(`Task ID ${id} status changed to:`, updatedTask.completed ? 'Completed' : 'Pending');
    
    saveToStorage(); 
    render();
};

// Event Listeners 
addBtn.addEventListener('click', addTask);
taskInput.addEventListener('keypress', (e) => { 
    if (e.key === 'Enter') {
        console.log('Enter key detected in input.');
        addTask(); 
    }
});

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentFilter = btn.dataset.filter;
        
        console.log('Filter switched to:', currentFilter);
        render();
    });
});

// Initial Render
render();