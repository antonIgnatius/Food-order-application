// Array to hold selected food items
let selectedItems = [];
let orders = []; // Array to hold all orders

// Function to fetch and display food items
async function fetchFoodItems() {
    const foodItems = [
        {
            name: "Chicken Skewers",
            description: "Delicious chicken skewers with sweet peppers and dill.",
            price: 6.99,
            image: "assets/images/chicken-skewers-with-slices-sweet-peppers-dill.jpg"
        },
        {
            name: "Biryani of Hyderabadi",
            description: "A traditional Hyderabadi biryani with rich flavors.",
            price: 9.99,
            image: "assets/images/Biryani_of_Hyderabadi.jpg"
        },
        {
            name: "Salami Pizza",
            description: "A delicious salami pizza topped with dried herbs.",
            price: 8.99,
            image: "assets/images/salami-pizza-topped-with-dried-herbs.jpg"
        }
    ];

    const foodItemsContainer = document.getElementById('food-items');

    foodItems.forEach(item => {
        const foodItemDiv = document.createElement('div');
        foodItemDiv.classList.add('food-item');
        foodItemDiv.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <h3>${item.name}</h3>
            <p>${item.description}</p>
            <p>Price: $${item.price.toFixed(2)}</p>
            <button class="button" onclick="orderItem('${item.name}', ${item.price})">Order Now</button>
        `;
        foodItemsContainer.appendChild(foodItemDiv);
    });
}

// Function to handle ordering an item
function orderItem(name, price) {
    // Add the ordered item to the selectedItems array
    selectedItems.push({ name, price });

    // Update the order summary display
    updateOrderSummary();
}

// Function to update order summary
function updateOrderSummary() {
    const orderSummaryContainer = document.getElementById('selected-items');
    orderSummaryContainer.innerHTML = ''; // Clear previous summary

    let total = 0;

    // Create and display each selected item in the order summary
    selectedItems.forEach((item, index) => {
        const itemDiv = document.createElement('div');
        itemDiv.innerHTML = `
            <p>${item.name} - $${item.price.toFixed(2)} 
            <button class="cancel-button" onclick="cancelSelectedItem(${index})">Cancel</button></p>
        `;
        orderSummaryContainer.appendChild(itemDiv);
        total += item.price; // Add price to total
    });

    // Display total amount
    const totalDiv = document.createElement('div');
    totalDiv.classList.add('total');
    totalDiv.innerHTML = `Total: $${total.toFixed(2)}`;
    orderSummaryContainer.appendChild(totalDiv);
}

// Function to cancel a selected item from the order summary
function cancelSelectedItem(index) {
    // Remove item from the array
    selectedItems.splice(index, 1);
    // Update summary after cancellation
    updateOrderSummary();
}

// Function to handle order placement
function placeOrder() {
    if (selectedItems.length === 0) {
        alert('Your cart is empty!');
        return;
    }
    // Save the order to the orders array
    orders.push([...selectedItems]); // Store a copy of the selected items

    // Here you would typically send the order to your backend server
    console.log('Order placed:', JSON.stringify(selectedItems)); // Simulate placing the order

    // Clear the selected items and update the order summary
    selectedItems = [];
    updateOrderSummary();
    alert('Order placed successfully!');
}

// Function to display orders on the admin page
function displayOrders() {
    const ordersContainer = document.getElementById('orders-list');
    ordersContainer.innerHTML = ''; // Clear previous orders

    if (orders.length === 0) {
        ordersContainer.innerHTML = '<p>No orders yet.</p>';
        return;
    }

    orders.forEach((order, orderIndex) => {
        const orderDiv = document.createElement('div');
        orderDiv.innerHTML = `<h4>Order ${orderIndex + 1}:</h4>`;
        order.forEach(item => {
            orderDiv.innerHTML += `<p>${item.name} - $${item.price.toFixed(2)}</p>`;
        });
        ordersContainer.appendChild(orderDiv);
    });
}

// Function to handle login form submission
document.getElementById("loginForm")?.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form from submitting

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Basic validation for admin login
    if (username === "admin" && password === "password") {
        document.getElementById("loginMessage").innerText = "Login successful!";
        // Redirect to admin page
        window.location.href = "admin.html";
    } else {
        document.getElementById("loginMessage").innerText = "Invalid credentials. Please try again.";
    }
});

// Function to handle contact form submission
document.getElementById("contactForm")?.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form from submitting

    const name = document.getElementById("contactName").value;
    const email = document.getElementById("contactEmail").value;
    const message = document.getElementById("contactMessage").value;

    // Simple validation (You can enhance this later)
    if (name && email && message) {
        document.getElementById("contactMessage").innerText = "Thank you for contacting us, " + name + "! We will get back to you soon.";
        document.getElementById("contactForm").reset(); // Clear the form
    } else {
        document.getElementById("contactMessage").innerText = "Please fill in all fields.";
    }
});

// Fetch food items on page load
window.onload = fetchFoodItems;

// Initialize Google Map
function initMap() {
    // Specify the location for Shollinganalur, Chennai
    const location = { lat: 12.8728, lng: 80.2170 };

    // Create a map centered at the specified location
    const map = new google.maps.Map(document.getElementById("googleMap"), {
        zoom: 15, // Zoom level
        center: location,
    });

    // Add a marker to the map
    const marker = new google.maps.Marker({
        position: location,
        map: map,
        title: "Our Location: Shollinganalur, Chennai",
    });
}
