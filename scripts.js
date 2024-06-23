function updateDateTime() {
    const now = new Date();
    const datetimeElement = document.getElementById('datetime');
    datetimeElement.textContent = `Current Date and Time: ${now.toLocaleString()}`;
}

// Update the date and time every second
setInterval(updateDateTime, 1000);
updateDateTime();
