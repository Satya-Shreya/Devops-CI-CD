// // Existing feedbacks array
// let feedbacks = [
//     { username: "Alice", feedback: "Great service and fast shipping!" },
//     { username: "Bob", feedback: "Product quality is excellent. Highly recommended." },
//     { username: "Carol", feedback: "Customer support was very helpful!" },
//     { username: "Dave", feedback: "Pickup process was smooth and easy." }
//   ];
  
//   // Function to toggle feedback modal
//   function toggleFeedbackModal() {
//     // Remove existing modal if present
//     closePopup();
  
//     const feedbackModal = document.createElement('div');
//     feedbackModal.classList.add('feedback-modal');
//     feedbackModal.innerHTML = `
//       <div class="feedback-content">
//         <h2>Customer Feedback</h2>
//         <div id="feedback-list">
//           ${feedbacks.map(feedback => `
//             <div class="feedback-item">
//               <strong>${feedback.username}:</strong> ${feedback.feedback}
//             </div>
//           `).join('')}
//         </div>
//         <form onsubmit="submitFeedback(event)">
//           <input type="text" id="username" placeholder="Your Name" required>
//           <textarea id="feedback" placeholder="Share your feedback here..." required></textarea>
//           <button type="submit">Submit Feedback</button>
//           <button type="button" onclick="closePopup()">Close</button>
//         </form>
//       </div>
//     `;
//     document.body.appendChild(feedbackModal);
//   }
  
//   // Function to submit feedback
//   function submitFeedback(event) {
//     event.preventDefault();
//     const username = document.getElementById("username").value;
//     const feedbackText = document.getElementById("feedback").value;
  
//     // Add new feedback to the feedbacks array
//     feedbacks.push({ username, feedback: feedbackText });
  
//     // Re-render feedback list with the new feedback
//     const feedbackList = document.getElementById("feedback-list");
//     feedbackList.innerHTML = feedbacks.map(feedback => `
//       <div class="feedback-item">
//         <strong>${feedback.username}:</strong> ${feedback.feedback}
//       </div>
//     `).join('');
  
//     // Clear input fields
//     document.getElementById("username").value = '';
//     document.getElementById("feedback").value = '';
//   }
  
//   // Function to close any open popup
//   function closePopup() {
//     const popup = document.querySelector('.popup, .feedback-modal, .map-popup');
//     if (popup) popup.remove();
//   }
  

//   // Function to toggle store pickup map popup
// function toggleMap() {
//     // Remove any existing popup before creating a new one
//     closePopup();
  
//     // Create the map popup container
//     const mapPopup = document.createElement('div');
//     mapPopup.classList.add('map-popup');
//     mapPopup.innerHTML = `
//       <div class="popup-content">
//         <h2>Store Location</h2>
//         <iframe class="gmap_iframe" width="100%" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=33-16-24 prabhu nilayam &amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
//         <button onclick="closePopup()">Close</button>
//       </div>
//     `;
    
//     document.body.appendChild(mapPopup);
//   }
  
//   // Function to close any open popup
//   function closePopup() {
//     const popup = document.querySelector('.popup, .feedback-modal, .map-popup');
//     if (popup) popup.remove();
//   }
  



//   // contact.js

// function showShippingReturns() {
//     // Get address from session storage
//     const address = sessionStorage.getItem('shippingAddress');
//     document.getElementById('shippingAddress').innerText = address || "Address not provided";

//     // Get cart items from session storage (assuming you've stored them in the cart.js file when checking out)
//     const cartItems = JSON.parse(sessionStorage.getItem('cartItems') || "[]");
//     const cartItemsList = document.getElementById('cartItemsList');
//     cartItemsList.innerHTML = ""; // Clear previous items

//     cartItems.forEach(item => {
//         const listItem = document.createElement('li');
//         listItem.innerHTML = `<strong>${item.name}</strong> - Quantity: ${item.quantity} - Price: $${item.price}`;
//         cartItemsList.appendChild(listItem);
//     });

//     // Show the Shipping & Returns section
//     document.getElementById('shippingReturnsContent').style.display = 'block';
// }
















// Sample feedbacks array
// let feedbacks = [
//     { username: "Alice", feedback: "Great service and fast shipping!" },
//     { username: "Bob", feedback: "Product quality is excellent. Highly recommended." },
//     { username: "Carol", feedback: "Customer support was very helpful!" },
//     { username: "Dave", feedback: "Pickup process was smooth and easy." }
// ];

// // Function to show Shipping & Returns information
// function showShippingReturns() {
//     // Debugging - Confirm the function is called
//     console.log("showShippingReturns called");

//     // Retrieve the shipping address from session storage
//     const address = sessionStorage.getItem('shippingAddress');
//     document.getElementById('shippingAddress').innerText = address || "Address not provided";

//     // Retrieve cart items from session storage (assuming JSON format)
//     const cartItems = JSON.parse(sessionStorage.getItem('cartItems') || "[]");
//     const cartItemsList = document.getElementById('cartItemsList');
//     cartItemsList.innerHTML = ""; // Clear any existing items

//     // Populate the cart items list
//     cartItems.forEach(item => {
//         const listItem = document.createElement('li');
//         listItem.innerHTML = `<strong>${item.name}</strong> - Quantity: ${item.quantity} - Price: $${item.price}`;
//         cartItemsList.appendChild(listItem);
//     });

//     // Display the Shipping & Returns section
//     document.getElementById('shippingReturnsContent').style.display = 'block';
// }

// // Feedback Modal Function
// function toggleFeedbackModal() {
//     closePopup();

//     const feedbackModal = document.createElement('div');
//     feedbackModal.classList.add('feedback-modal');
//     feedbackModal.innerHTML = `
//       <div class="feedback-content">
//         <h2>Customer Feedback</h2>
//         <div id="feedback-list">
//           ${feedbacks.map(feedback => `
//             <div class="feedback-item">
//               <strong>${feedback.username}:</strong> ${feedback.feedback}
//             </div>
//           `).join('')}
//         </div>
//         <form onsubmit="submitFeedback(event)">
//           <input type="text" id="username" placeholder="Your Name" required>
//           <textarea id="feedback" placeholder="Share your feedback here..." required></textarea>
//           <button type="submit">Submit Feedback</button>
//           <button type="button" onclick="closePopup()">Close</button>
//         </form>
//       </div>
//     `;
//     document.body.appendChild(feedbackModal);
// }

// // Submit Feedback Function
// function submitFeedback(event) {
//     event.preventDefault();
//     const username = document.getElementById("username").value;
//     const feedbackText = document.getElementById("feedback").value;

//     feedbacks.push({ username, feedback: feedbackText });

//     const feedbackList = document.getElementById("feedback-list");
//     feedbackList.innerHTML = feedbacks.map(feedback => `
//       <div class="feedback-item">
//         <strong>${feedback.username}:</strong> ${feedback.feedback}
//       </div>
//     `).join('');

//     document.getElementById("username").value = '';
//     document.getElementById("feedback").value = '';
// }

// // Close any open popup
// function closePopup() {
//     const popup = document.querySelector('.popup, .feedback-modal, .map-popup');
//     if (popup) popup.remove();
// }

// // Toggle store pickup map
// function toggleMap() {
//     closePopup();

//     const mapPopup = document.createElement('div');
//     mapPopup.classList.add('map-popup');
//     mapPopup.innerHTML = `
//       <div class="popup-content">
//         <h2>Store Location</h2>
//         <iframe class="gmap_iframe" width="100%" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=33-16-24 prabhu nilayam &amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
//         <button onclick="closePopup()">Close</button>
//       </div>
//     `;
//     document.body.appendChild(mapPopup);
// }

















// Sample feedbacks array
// let feedbacks = [
//     { username: "Alice", feedback: "Great service and fast shipping!" },
//     { username: "Bob", feedback: "Product quality is excellent. Highly recommended." },
//     { username: "Carol", feedback: "Customer support was very helpful!" },
//     { username: "Dave", feedback: "Pickup process was smooth and easy." }
// ];

// // Function to show Shipping & Returns information
// function showShippingReturns() {
//     // Debugging - Confirm the function is called
//     console.log("showShippingReturns called");

//     // Retrieve the shipping address from session storage
//     const address = sessionStorage.getItem('shippingAddress');
//     document.getElementById('shippingAddress').innerText = address || "Address not provided";

//     // Retrieve cart items from session storage (assuming JSON format)
//     const cartItems = JSON.parse(sessionStorage.getItem('cartItems') || "[]");
//     const cartItemsList = document.getElementById('cartItemsList');
//     cartItemsList.innerHTML = ""; // Clear any existing items

//     // Populate the cart items list only if there are items in the cart
//     if (cartItems.length > 0) {
//         cartItems.forEach(item => {
//             const listItem = document.createElement('li');
//             listItem.innerHTML = `<strong>${item.name}</strong> - Quantity: ${item.quantity} - Price: $${item.price}`;
//             cartItemsList.appendChild(listItem);
//         });
//     } else {
//         const emptyMessage = document.createElement('li');
//         emptyMessage.innerText = "No items in the cart.";
//         cartItemsList.appendChild(emptyMessage);
//     }

//     // Display the Shipping & Returns section
//     document.getElementById('shippingReturnsContent').style.display = 'block';
// }

// // Feedback Modal Function
// function toggleFeedbackModal() {
//     closePopup();

//     const feedbackModal = document.createElement('div');
//     feedbackModal.classList.add('feedback-modal');
//     feedbackModal.innerHTML = `
//       <div class="feedback-content">
//         <h2>Customer Feedback</h2>
//         <div id="feedback-list">
//           ${feedbacks.map(feedback => `
//             <div class="feedback-item">
//               <strong>${feedback.username}:</strong> ${feedback.feedback}
//             </div>
//           `).join('')}
//         </div>
//         <form onsubmit="submitFeedback(event)">
//           <input type="text" id="username" placeholder="Your Name" required>
//           <textarea id="feedback" placeholder="Share your feedback here..." required></textarea>
//           <button type="submit">Submit Feedback</button>
//           <button type="button" onclick="closePopup()">Close</button>
//         </form>
//       </div>
//     `;
//     document.body.appendChild(feedbackModal);
// }

// // Submit Feedback Function
// function submitFeedback(event) {
//     event.preventDefault();
//     const username = document.getElementById("username").value;
//     const feedbackText = document.getElementById("feedback").value;

//     feedbacks.push({ username, feedback: feedbackText });

//     const feedbackList = document.getElementById("feedback-list");
//     feedbackList.innerHTML = feedbacks.map(feedback => `
//       <div class="feedback-item">
//         <strong>${feedback.username}:</strong> ${feedback.feedback}
//       </div>
//     `).join('');

//     document.getElementById("username").value = '';
//     document.getElementById("feedback").value = '';
// }

// // Close any open popup
// function closePopup() {
//     const popup = document.querySelector('.popup, .feedback-modal, .map-popup');
//     if (popup) popup.remove();
// }

// // Toggle store pickup map
// function toggleMap() {
//     closePopup();

//     const mapPopup = document.createElement('div');
//     mapPopup.classList.add('map-popup');
//     mapPopup.innerHTML = `
//       <div class="popup-content">
//         <h2>Store Location</h2>
//         <iframe class="gmap_iframe" width="100%" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=33-16-24 prabhu nilayam &amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
//         <button onclick="closePopup()">Close</button>
//       </div>
//     `;
//     document.body.appendChild(mapPopup);
// }


// // JavaScript for handling popup visibility
// document.querySelector('.service.shipping-returns').addEventListener('click', function() {
//     document.querySelector('.popup').style.display = 'flex';
//   });
  
//   // Close the popup when clicking the close button
//   document.querySelector('.close-button').addEventListener('click', function() {
//     document.querySelector('.popup').style.display = 'none';
//   });
  







let feedbacks = [
  { username: "Alice", feedback: "Great service and fast shipping!" },
  { username: "Bob", feedback: "Product quality is excellent. Highly recommended." },
  { username: "Carol", feedback: "Customer support was very helpful!" },
  { username: "Dave", feedback: "Pickup process was smooth and easy." }
];

function showShippingReturns() {
  const address = sessionStorage.getItem('shippingAddress');
  const cartItems = JSON.parse(sessionStorage.getItem('cartItems') || "[]");

  const popupContent = `
    <div class="popup-content">
      <h2>Your Shipping Details</h2>
      <p><strong>Shipping Address:</strong> ${address || "Address not provided"}</p>
      <h3>Items in Your Order:</h3>
      <ul>
        ${cartItems.length > 0
          ? cartItems.map(item => `<li><strong>${item.name}</strong> - Quantity: ${item.quantity} - Price: $${item.price}</li>`).join('')
          : "<li>No items in the cart.</li>"
        }
      </ul>
      <button class="close-button" onclick="closePopup()">Close</button>
    </div>
  `;
  openPopup(popupContent);
}

function toggleFeedbackModal() {
  const feedbackContent = `
    <div class="popup-content">
      <h2>Customer Feedback</h2>
      <div id="feedback-list">
        ${feedbacks.map(feedback => `<div><strong>${feedback.username}:</strong> ${feedback.feedback}</div>`).join('')}
      </div>
      <br><br>
      <form onsubmit="submitFeedback(event)">
        <input type="text" id="username" placeholder="Your Name" required><br><br>
        <textarea id="feedback" placeholder="Share your feedback here..." required></textarea><br><br>
        <button type="submit" class="sub">Submit Feedback</button>
      </form><br>
      <button class="close-button" onclick="closePopup()">Close</button>
    </div>
  `;
  openPopup(feedbackContent);
}

function toggleMap() {
  const mapContent = `
    <div class="popup-content">
      <h2>Store Location</h2>
      <iframe class="gmap_iframe" width="100%" height="300px" frameborder="0" src="https://maps.google.com/maps?width=600&height=400&hl=en&q=33-16-24 prabhu nilayam&t=&z=14&ie=UTF8&iwloc=B&output=embed"></iframe>
      <button class="close-button" onclick="closePopup()">Close</button>
    </div>
  `;
  openPopup(mapContent);
}

function toggleSupportPopup() {
  const supportContent = `
    <div class="popup-content">
      <h2>Contact Support</h2>
      <p>Need help? Call us at 9247503220 for support.</p>
      <button class="close-button" onclick="closePopup()">Close</button>
    </div>
  `;
  openPopup(supportContent);
}

function openPopup(content) {
  const popupContainer = document.getElementById('popupContainer');
  popupContainer.classList.add('popup-container');
  popupContainer.innerHTML = content;
}

function closePopup() {
  const popupContainer = document.getElementById('popupContainer');
  popupContainer.classList.remove('popup-container');
  popupContainer.innerHTML = '';
}

function submitFeedback(event) {
  event.preventDefault();
  const username = document.getElementById("username").value;
  const feedbackText = document.getElementById("feedback").value;

  feedbacks.push({ username, feedback: feedbackText });
  document.getElementById("feedback-list").innerHTML = feedbacks.map(feedback => `<div><strong>${feedback.username}:</strong> ${feedback.feedback}</div>`).join('');

  document.getElementById("username").value = '';
  document.getElementById("feedback").value = '';
}
