document.addEventListener("DOMContentLoaded", function () {
    const chatLog = document.getElementById("chat-log");
    const userInput = document.getElementById("user-input");
    const sendButton = document.getElementById("send-button");

    // Function to add a message to the chat log
    function addMessage(className, message) {
        const messageDiv = document.createElement("div");
        messageDiv.classList.add(className);
        messageDiv.innerText = message;
        chatLog.appendChild(messageDiv);
        chatLog.scrollTop = chatLog.scrollHeight; // Auto-scroll to the latest message
    }

    // Function to handle user input and chatbot responses
    function handleUserInput() {
        const userMessage = userInput.value;
        if (userMessage.trim() === "") return;

        addMessage("user-message", You: ${userMessage});
        userInput.value = ""; // Clear user input field

        // Send user input to the server for chatbot response
        fetch("/get_response", {
            method: "POST",
            body: JSON.stringify({ user_input: userMessage }),
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((response) => response.text())
            .then((data) => {
                addMessage("chatbot-message", Chatbot: ${data});
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    }

    // Event listener for the send button
    sendButton.addEventListener("click", handleUserInput);

    // Event listener for pressing Enter key
    userInput.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            event.preventDefault(); // Prevent the default form submission
            handleUserInput();
        }
    });
});