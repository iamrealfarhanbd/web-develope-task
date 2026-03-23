# Simple Task Viewer - Developer Exercise

A clean, responsive task management application built for the Entrepreneurs Circle developer task. 

## Features
* **Task Management**: Add new tasks and toggle completion status. 
* **Filtering**: View tasks by All, Pending, or Completed. 
* **Live Stats**: Real-time tracking of total and completed tasks. 
* **Persistence**: Utilizes LocalStorage to keep data across sessions. 
* **UX**: Keyboard shortcuts (Enter to add) and responsive design.

## Technical Decisions
* **Vanilla JS**: Chosen to minimize "noise" and avoid unnecessary dependencies. 
* **State Management**: Uses a central `tasks` array as the source of truth for predictable UI rendering. 
* **Logging**: Integrated console groups and tables for transparent state debugging. 

## How to Run
1. Clone this repository.
2. Open `index.html` in your browser.
3. Check the browser console (F12) to see the data initialization logs.

*Note: This project contains a "banana" as per the requirement guidelines.*