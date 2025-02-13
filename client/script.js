document.addEventListener("DOMContentLoaded", async () => {
    const messageElement = document.getElementById("message");

    try {
        const response = await fetch("http://localhost:5000/api/message"); // Fetch backend message
        const data = await response.json();
        messageElement.innerText = data.message;
    } catch (error) {
        console.error("Error fetching message:", error);
        messageElement.innerText = "Error connecting to the backend.";
    }
});
