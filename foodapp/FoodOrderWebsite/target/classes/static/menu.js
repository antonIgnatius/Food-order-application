const vegItems = [
    {
        name: "Paneer Butter Masala",
        description: "A rich and creamy paneer dish with butter and spices.",
        price: 7.99,
        image: "assets/images/paneer-butter-masala.jpg" // Your custom image
    },
    {
        name: "Veg Biryani",
        description: "Fragrant rice with fresh vegetables and aromatic spices.",
        price: 6.49,
        image: "assets/images/veg-biryani.jpg" // Your custom image
    }
];

const nonVegItems = [
    {
        name: "Chicken Biryani",
        description: "Authentic chicken biryani with flavorful spices.",
        price: 9.99,
        image: "assets/images/chicken-biryani.jpg" // Your custom image
    },
    {
        name: "Grilled Fish",
        description: "Freshly grilled fish served with lemon and herbs.",
        price: 11.99,
        image: "assets/images/grilled-fish.jpg" // Your custom image
    }
];

function displayFoodItems(items, containerId) {
    const container = document.getElementById(containerId);
    items.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.classList.add('food-item');
        itemDiv.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <h3>${item.name}</h3>
            <p>${item.description}</p>
            <p>Price: $${item.price.toFixed(2)}</p>
            <button class="button" onclick="addToCart('${item.name}')">Order Now</button>
        `;
        container.appendChild(itemDiv);
    });
}

function addToCart(itemName) {
    alert(`You have added ${itemName} to your cart!`);
}

window.onload = function() {
    displayFoodItems(vegItems, 'veg-items');
    displayFoodItems(nonVegItems, 'nonveg-items');
};
