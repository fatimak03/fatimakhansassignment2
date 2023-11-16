let workouts = [];

function addWorkout() {
    const name = document.getElementById('workout-name').value;
    const duration = document.getElementById('workout-duration').value;
    const date = document.getElementById('workout-date').value;

    const newWorkout = { name, duration, date };
    workouts.push(newWorkout);
    updateTable();
}

function editWorkout(index) {
    const workout = workouts[index];
    document.getElementById('workout-name').value = workout.name;
    document.getElementById('workout-duration').value = workout.duration;
    document.getElementById('workout-date').value = workout.date;

    document.getElementById('edit-index').value = index;
}

function updateWorkout() {
    const index = document.getElementById('edit-index').value;
    workouts[index] = {
        name: document.getElementById('workout-name').value,
        duration: document.getElementById('workout-duration').value,
        date: document.getElementById('workout-date').value
    };
    updateTable();
}

function deleteWorkout(index) {
    workouts.splice(index, 1);
    updateTable();
}

function updateTable() {
    const tableBody = document.getElementById('workout-table').getElementsByTagName('tbody')[0];
    tableBody.innerHTML = '';

    workouts.forEach((workout, index) => {
        let row = tableBody.insertRow();
        row.insertCell(0).innerHTML = workout.name;
        row.insertCell(1).innerHTML = workout.duration;
        row.insertCell(2).innerHTML = workout.date;
        let actionsCell = row.insertCell(3);
        actionsCell.innerHTML = `<button onclick="editWorkout(${index})">Edit</button> <button onclick="deleteWorkout(${index})">Delete</button>`;
    });
}

// Call this function on page load to initialize the table
document.addEventListener('DOMContentLoaded', updateTable);
