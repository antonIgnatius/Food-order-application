function placeOrder() {
    if (selectedItems.length === 0) {
        alert('Your cart is empty!');
        return;
    }
    // Here you would typically send the order to your backend server
    console.log('Order placed:', JSON.stringify(selectedItems)); // Simulate placing the order

    // Store the order in local storage (for simplicity)
    const orders = JSON.parse(localStorage.getItem('orders')) || [];
    orders.push(selectedItems);
    localStorage.setItem('orders', JSON.stringify(orders));

    // Clear the selected items and update the order summary
    selectedItems = [];
    updateOrderSummary();
    alert('Order placed successfully!');
}
