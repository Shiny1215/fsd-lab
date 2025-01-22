class TaskManager {
    constructor() {
        this.tasks = [];
    }
    addTask(taskName, priority, dueDate, status = 'in-progress') {
        this.tasks.push({ taskName, priority, dueDate, status });
    }
    deleteTask(taskName) {
        this.tasks = this.tasks.filter(task => task.taskName !== taskName);
    }
    updateTask(taskName, updates) {
        const task = this.tasks.find(task => task.taskName === taskName);
        if (task) {
            Object.assign(task, updates);
        }
    }
    sortByPriority() {
        this.tasks.sort((a, b) => a.priority - b.priority);
    }
    sortByDueDate() {
        this.tasks.sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate));
    }
    filterByStatus(status) {
        return this.tasks.filter(task => task.status === status);
    }
    displayTasks() {
        this.tasks.forEach(task => {
            const color = new Date(task.dueDate) < new Date() ? 'red' : 'green';
            console.log(`%c${task.taskName} - Due: ${task.dueDate}`, `color: ${color}`);
        });
    }
}
const manager = new TaskManager();
manager.addTask('Task 1', 1, '2025-01-22', 'in-progress');
manager.addTask('Task 2', 2, '2025-01-25', 'completed');
manager.displayTasks();
