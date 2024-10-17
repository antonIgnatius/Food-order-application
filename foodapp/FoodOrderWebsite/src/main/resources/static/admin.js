// Sample credentials (you can change this as needed)
const adminCredentials = {
    username: "admin",
    password: "password"
};

// Array to hold the current orders
let currentOrders = [];

// Function to handle admin login
document.getElementById("adminLoginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form from submitting

    const username = document.getElementById("adminUsername").value;
    const password = document.getElementById("adminPassword").value;

    // Check credentials
    if (username === adminCredentials.username && password === adminCredentials.password) {
        document.getElementById("loginMessage").innerText = "Login successful!";
        document.getElementById("login-section").style.display = "none"; // Hide login section
        document.getElementById("order-section").style.display = "block"; // Show order section
        fetchCurrentOrders(); // Start fetching current orders
        setInterval(fetchCurrentOrders, 5000); // Fetch new orders every 5 seconds
    } else {
        document.getElementById("loginMessage").innerText = "Invalid credentials. Please try again.";
    }
});

// Function to fetch current orders (simulated for demo)
function fetchCurrentOrders() {
    // Simulating fetching new orders from a backend service
    const newOrders = [
        { id: 1, name: "Chicken Skewers", price: 6.99 },
        { id: 2, name: "Biryani of Hyderabadi", price: 9.99 },
        { id: 3, name: "Salami Pizza", price: 8.99 }
    ];

    // Check for new orders
    if (JSON.stringify(currentOrders) !== JSON.stringify(newOrders)) {
        currentOrders = newOrders; // Update the current orders
        updateOrderList(); // Update the displayed order list
        playNotificationSound(); // Play notification sound
    }
}

// Function to update the order list display
function updateOrderList() {
    const orderListContainer = document.getElementById('order-list');
    orderListContainer.innerHTML = ''; // Clear previous orders

    // Display each order
    currentOrders.forEach(order => {
        const orderDiv = document.createElement('div');
        orderDiv.innerHTML = `Order ID: ${order.id} - ${order.name} - $${order.price.toFixed(2)}`;
        orderListContainer.appendChild(orderDiv);
    });
}

// Function to play notification sound
function playNotificationSound() {
    const sound = new Audio('assets/sounds/ding-126626.mp3'); // Path to your sound file
    sound.play();
}

// Function to cancel order (implement this if needed)
document.getElementById("cancelOrder").addEventListener("click", function() {
    if (currentOrders.length > 0) {
        alert("Cancel order functionality not implemented yet."); // Placeholder for actual logic
    } else {
        alert("No orders to cancel.");
    }
});
