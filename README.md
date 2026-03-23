# Simple Task Viewer - Developer Exercise

A clean, responsive task management application built for the **Entrepreneurs Circle** developer task.

**Live Demo:** [https://iamrealfarhanbd.github.io/web-develope-task/](https://iamrealfarhanbd.github.io/web-develope-task/)

## 🚀 Overview
This project is a lightweight task manager designed to demonstrate clean code structure, state management, and clear communication. It allows users to manage a list of tasks starting from a specific data set.

## ✨ Features
* **Task Management**: Add new tasks and toggle completion status.
* **Filtering**: View tasks by **All**, **Pending**, or **Completed**.
* **Live Stats**: Real-time tracking of total tasks and completed task counts.
* **Persistence (Bonus)**: Utilizes `localStorage` to ensure your tasks persist after a page refresh.
* **Enhanced UX**: Includes keyboard shortcuts (Enter to add) and a modern, responsive layout.

## 🛠️ Technical Decisions
* **Vanilla JS**: I chose to avoid heavy frameworks to keep the project simple and dependency-free, focusing on pure logic and readability.
* **State Management**: Uses a central `tasks` array as the "source of truth." Any state change triggers a re-render to ensure the UI stays in sync.
* **Error Handling**: Implemented a robust `try-catch` block during initialization to handle potential `localStorage` corruption and ensure the "Starting Data" always loads correctly.
* **Self-Testing & Logging**: Integrated `console.group` and `console.table` traces. This allows me to see the data flow and state changes in the browser console (F12).

## 📖 How to Run
1. **Clone** this repository to your local machine.
2. **Open** `index.html` in any modern web browser.
3. **Open Developer Tools** (F12) to view the initialization logs and data structure.

## 💡 Future Improvements
If given more time, I would:
* Add a **Delete** function to remove specific tasks.
* Implement a **"Clear Completed"** utility.
* Add a confirmation modal for bulk actions.

*Note: This project includes the word "banana" as per the exercise guidelines.*