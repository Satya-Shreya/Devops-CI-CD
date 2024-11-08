
// function deleteCartItem(itemId) {
//     fetch('delete_cart_item.php', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ item_id: itemId })
//     })
//     .then(response => response.json())
//     .then(data => {
//         if (data.success) {
//             alert('Item deleted successfully!');
//             window.location.reload(); // Refresh to update cart display
//         } else {
//             alert('Error deleting item');
//         }
//     })
//     .catch(error => console.error('Error:', error));
// }



// function deleteCartItem(itemId) {
//     fetch('delete_cart_item.php', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ item_id: itemId })
//     })
//     .then(response => response.json())
//     .then(data => {
//         if (data.success) {
//             alert('Item deleted successfully!');
//             window.location.reload(); // Refresh to update cart display
//         } else {
//             alert('Error deleting item');
//         }
//     })
//     .catch(error => console.error('Error:', error));
// }




// function deleteCartItem(itemId) {
//     fetch('delete_cart_item.php', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ item_id: itemId })
//     })
//     .then(response => response.json())
//     .then(data => {
//         if (data.success) {
//             alert('Item deleted successfully!');
//             window.location.reload(); // Refresh to update cart display
//         } else {
//             alert(data.message || 'Error deleting item');
//         }
//     })
//     .catch(error => console.error('Error:', error));
// }






function deleteCartItem(itemId) {
    fetch('delete_cart_item.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ itemId: itemId })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            location.reload(); // Reload the cart page to reflect changes
        } else {
            alert('Failed to delete item');
        }
    });
}

function handleCheckout() {
    fetch('checkout.php', {
        method: 'POST'
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert('Checkout successful!');
            location.reload(); // Reload to clear cart
        } else {
            alert('Checkout failed');
        }
    });
}









// cart.js

// function showCheckoutPopup() {
//     // Calculate the total amount
//     const total = calculateTotalAmount();
//     document.getElementById('totalAmount').innerText = total;

//     // Show the popup
//     document.getElementById('checkoutPopup').style.display = 'block';
// }

// function closeCheckoutPopup() {
//     document.getElementById('checkoutPopup').style.display = 'none';
// }

// function calculateTotalAmount() {
//     let total = 0;
//     // Assuming each item row has a 'data-price' and 'data-quantity' attributes
//     document.querySelectorAll('.cart-item').forEach(item => {
//         const price = parseFloat(item.getAttribute('data-price'));
//         const quantity = parseInt(item.getAttribute('data-quantity'));
//         total += price * quantity;
//     });
//     return total.toFixed(2);
// }

// function proceedToShipping() {
//     const address = document.getElementById('address').value;
//     if (address.trim() === "") {
//         alert("Please enter your address.");
//         return;
//     }
    
//     // Store address in session storage for the contact page
//     sessionStorage.setItem('shippingAddress', address);

//     // Redirect to contactus.php's Shipping & Returns section
//     window.location.href = 'contactus.php#shipping-returns';
// }











// cart.js

// function showCheckoutPopup() {
//     const total = calculateTotalAmount();
//     document.getElementById('totalAmount').innerText = total;
//     document.getElementById('checkoutPopup').style.display = 'block';
// }

// function closeCheckoutPopup() {
//     document.getElementById('checkoutPopup').style.display = 'none';
// }

// function calculateTotalAmount() {
//     let total = 0;
//     document.querySelectorAll('.cart-item').forEach(item => {
//         const price = parseFloat(item.getAttribute('data-price'));
//         const quantity = parseInt(item.getAttribute('data-quantity'));
//         total += price * quantity;
//     });
//     return total.toFixed(2);
// }

// function proceedToShipping() {
//     const address = document.getElementById('address').value;
//     const email = document.getElementById('email').value;

//     if (address.trim() === "" || email.trim() === "") {
//         alert("Please enter both your address and email.");
//         return;
//     }

//     // Send address and email to server for processing
//     function finalizeCheckout() {
//         const address = document.getElementById('address').value;
//         const email = document.getElementById('email').value;
    
//         if (!address.trim() || !email.trim()) {
//             alert("Please enter both your address and email.");
//             return;
//         }
    
//         // Send data to the PHP file for checkout and email sending
//         fetch('send_email.php', {
//             method: 'POST',
//             headers: { 'Content-Type': 'application/json' },
//             body: JSON.stringify({ address, email })
//         })
//         .then(response => response.json())
//         .then(data => {
//             if (data.success) {
//                 alert('Order processed and email sent!');
//             } else {
//                 alert('There was an issue with checkout or email.');
//             }
//         });
//     }
// }














function showCheckoutPopup() {
    const total = calculateTotalAmount();
    document.getElementById('totalAmount').innerText = total;
    document.getElementById('checkoutPopup').style.display = 'block';
}

function closeCheckoutPopup() {
    document.getElementById('checkoutPopup').style.display = 'none';
}

function calculateTotalAmount() {
    let total = 0;
    document.querySelectorAll('.cart-item').forEach(item => {
        const price = parseFloat(item.getAttribute('data-price'));
        const quantity = parseInt(item.getAttribute('data-quantity'));
        total += price * quantity;
    });
    return total.toFixed(2);
}

// function proceedToShipping() {
//     const address = document.getElementById('address').value;
//     const email = document.getElementById('email').value;

//     if (address.trim() === "" || email.trim() === "") {
//         alert("Please enter both your address and email.");
//         return;
//     }

//     // Send data to the PHP file for checkout and email sending
//     fetch('send_email.php', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ address, email })
//     })
//     .then(response => response.json())
//     .then(data => {
//         if (data.success) {
//             alert('Order processed and email sent!');
//             closeCheckoutPopup();
//         } else {
//             alert(data.message || 'There was an issue with checkout or email.');
//         }
//     })
//     .catch(error => {
//         console.error('Error:', error);
//         alert('An error occurred while processing your order.');
//     });
// }


// function proceedToShipping() {
//     const address = document.getElementById('address').value;
//     const email = document.getElementById('email').value;

//     if (address.trim() === "" || email.trim() === "") {
//         alert("Please enter both your address and email.");
//         return;
//     }

//     // Send data to the PHP file for checkout and email sending
//     fetch('send_email.php', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ address, email })
//     })
//     .then(response => response.json())
//     .then(data => {
//         if (data.success) {
//             alert('Order processed and email sent! Your cart has been cleared.');
//             closeCheckoutPopup();
//             // Optionally, you can refresh the page to reflect cart changes
//             window.location.reload();
//         } else {
//             alert(data.message || 'There was an issue with checkout or email.');
//         }
//     })
//     .catch(error => {
//         console.error('Error:', error);
//         alert('An error occurred while processing your order.');
//     });
// }





function proceedToShipping() {
    const address = document.getElementById('address').value;
    const email = document.getElementById('email').value;

    if (address.trim() === "" || email.trim() === "") {
        alert("Please enter both your address and email.");
        return;
    }

    // Send data to the PHP file for checkout and email sending
    fetch('send_email.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ address, email })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert('Order processed and email sent!');

            // Hide cart items
            document.querySelectorAll('.cart-item').forEach(item => {
                item.style.display = 'none'; // Hide the cart items
            });

            // Optionally, display a message indicating the cart is cleared
            const message = document.createElement('p');
            message.innerText = 'Your cart has been cleared.';
            message.style.textAlign = 'center'; // Center align the message
            document.body.insertBefore(message, document.getElementById('checkoutPopup'));

            closeCheckoutPopup();
        } else {
            alert(data.message || 'There was an issue with checkout or email.');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('An error occurred while processing your order.');
    });
}