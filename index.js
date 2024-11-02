function updateDateTime() {
    const now = new Date();

    // Format date
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const currentDate = now.toLocaleDateString(undefined, options);

    // Format time
    const currentTime = now.toLocaleTimeString();

    // Display date and time
    document.getElementById('date').textContent = currentDate;
    document.getElementById('time').textContent = currentTime;
}

// Update date and time immediately, and every second
updateDateTime();
setInterval(updateDateTime, 1000);