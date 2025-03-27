document.addEventListener("DOMContentLoaded", loadTasks);
document.getElementById("task-form").addEventListener("submit", addTask);

function loadTasks() {
    fetch("http://localhost:9000/")
        .then(response => response.json())
        .then(tasks => {
            const taskList = document.getElementById("task-list");
            taskList.innerHTML = "";
            tasks.forEach(task => {
                taskList.innerHTML += `
                    <tr>
                        <td>${task.id}</td>
                        <td>${task.title}</td>
                        <td>${task.description}</td>
                        <td>${task.status}</td>
                        <td>
                            <button class="btn btn-success" onclick="updateTask(${task.id}, 'concluída')">Concluir</button>
                            <button class="btn btn-warning" onclick="updateTask(${task.id}, 'pendente')">Reabrir</button>
                            <button class="btn btn-danger" onclick="deleteTask(${task.id})">Excluir</button>
                        </td>
                    </tr>
                `;
            });
        });
}

function addTask(event) {
    event.preventDefault();
    const title = document.getElementById("title").value;
    const description = document.getElementById("description").value;
    fetch("http://localhost:9000/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, description })
    }).then(() => {
        loadTasks();
        document.getElementById("task-form").reset();
    });
}

function updateTask(id, status) {
    fetch(`http://localhost:9000/`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, status })
    }).then(() => loadTasks());
}

function deleteTask(id) {
    fetch(`http://localhost:9000/`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id })
    }).then(() => loadTasks());
}
