// function handleFocus(input) {
//     const inputDiv = document.getElementById(`${input}-div`);
//     inputDiv.classList.add('focus');
//   }
  
//   function handleBlur(input) {
//     const inputElement = document.getElementById(input);
//     const inputDiv = document.getElementById(`${input}-div`);
//     if (inputElement.value === "") {
//       inputDiv.classList.remove('focus');
//     }
//   }
  
//   function handleSubmit(event) {
//     event.preventDefault();
    
//     const username = document.getElementById("username").value;
//     const password = document.getElementById("password").value;
  
//     if (!username || !password) {
//       alert("All fields are required");
//       return;
//     }
  
//     if (password.length < 8) {
//       alert("Invalid details: Password must be at least 8 characters long");
//       return;
//     }
  
//     alert("Login Successful");

//   }
  
//   function handleForgotPassword(event) {
//     event.preventDefault();
//     alert("Verification code is sent to email");
//   }
  


// //final
function handleFocus(input) {
  const inputDiv = document.getElementById(`${input}-div`);
  inputDiv.classList.add('focus');
}

function handleBlur(input) {
  const inputElement = document.getElementById(input);
  const inputDiv = document.getElementById(`${input}-div`);
  if (inputElement.value === "") {
      inputDiv.classList.remove('focus');
  }
}

function handleSubmit(event) {
  event.preventDefault();
  
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (!username || !password) {
      alert("All fields are required");
      return;
  }

  if (password.length < 8) {
      alert("Invalid details: Password must be at least 8 characters long");
      return;
  }

  alert("Login Successful");
  // Redirect or perform login logic here
}

function handleForgotPassword(event) {
  event.preventDefault();
  alert("Verification code is sent to email");
}












// function handleFocus(input) {
//   const inputDiv = document.getElementById(`${input}-div`);
//   inputDiv.classList.add('focus');
// }

// function handleBlur(input) {
//   const inputElement = document.getElementById(input);
//   const inputDiv = document.getElementById(`${input}-div`);
//   if (inputElement.value === "") {
//       inputDiv.classList.remove('focus');
//   }
// }

// function handleSubmit(event) {
//   event.preventDefault();
  
//   const username = document.getElementById("username").value;
//   const password = document.getElementById("password").value;

//   if (!username || !password) {
//       alert("All fields are required");
//       return;
//   }

//   if (password.length < 8) {
//       alert("Invalid details: Password must be at least 8 characters long");
//       return;
//   }

//   alert("Login Successful");
//   // Redirect or perform login logic here
// }

// // Function to show the Forgot Password modal
// function handleForgotPassword(event) {
//   event.preventDefault();
//   document.getElementById("forgot-password-modal").style.display = "block";
// }

// // Function to close the Forgot Password modal
// function closeModal() {
//   document.getElementById("forgot-password-modal").style.display = "none";
//   document.getElementById("response-message").textContent = ""; // Clear any previous messages
// }

// // Function to send the reset PIN via AJAX
// function sendResetPin() {
//   const email = document.getElementById("forgot-email").value;

//   if (!email) {
//       document.getElementById("response-message").textContent = "Please enter your email address.";
//       return;
//   }

//   // Create an AJAX request to send the email for reset PIN
//   const xhr = new XMLHttpRequest();
//   xhr.open("POST", "send_pin.php", true);
//   xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
//   xhr.onreadystatechange = function() {
//       if (xhr.readyState === 4 && xhr.status === 200) {
//           const response = JSON.parse(xhr.responseText);
//           if (response.success) {
//               document.getElementById("response-message").style.color = "green";
//               document.getElementById("response-message").textContent = "A reset PIN has been sent to your email.";
//           } else {
//               document.getElementById("response-message").style.color = "red";
//               document.getElementById("response-message").textContent = "Error: " + response.message;
//           }
//       }
//   };
//   xhr.send("email=" + encodeURIComponent(email));
// }





// function handleFocus(input) {
//   const inputDiv = document.getElementById(`${input}-div`);
//   inputDiv.classList.add('focus');
// }

// function handleBlur(input) {
//   const inputElement = document.getElementById(input);
//   const inputDiv = document.getElementById(`${input}-div`);
//   if (inputElement.value === "") {
//       inputDiv.classList.remove('focus');
//   }
// }

// // Function to show the Forgot Password modal
// function handleForgotPassword(event) {
//   event.preventDefault();
//   document.getElementById("forgot-password-modal").style.display = "block";
// }

// // Function to close the Forgot Password modal
// function closeModal() {
//   document.getElementById("forgot-password-modal").style.display = "none";
//   document.getElementById("response-message").textContent = ""; // Clear any previous messages
// }

// // Function to send the reset PIN via AJAX
// function sendResetPin(event) {
//   event.preventDefault();
  
//   const email = document.getElementById("forgot-email").value;
  
//   if (!email) {
//       document.getElementById("response-message").textContent = "Please enter your email address.";
//       return;
//   }

//   // Send the email to the server to process the reset request
//   const xhr = new XMLHttpRequest();
//   xhr.open("POST", "send_pin.php", true);
//   xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
//   xhr.onreadystatechange = function() {
//       if (xhr.readyState === 4 && xhr.status === 200) {
//           const response = JSON.parse(xhr.responseText);
//           const responseMessage = document.getElementById("response-message");
//           if (response.success) {
//               responseMessage.style.color = "green";
//               responseMessage.textContent = "A reset PIN has been sent to your email.";
//           } else {
//               responseMessage.style.color = "red";
//               responseMessage.textContent = "Error: " + response.message;
//           }
//       }
//   };
//   xhr.send("email=" + encodeURIComponent(email));
// }




// function handleFocus(input) {
//   const inputDiv = document.getElementById(`${input}-div`);
//   inputDiv.classList.add('focus');
// }

// function handleBlur(input) {
//   const inputElement = document.getElementById(input);
//   const inputDiv = document.getElementById(`${input}-div`);
//   if (inputElement.value === "") {
//       inputDiv.classList.remove('focus');
//   }
// }

// // Function to show the Forgot Password modal
// function handleForgotPassword(event) {
//   event.preventDefault();
//   document.getElementById("forgot-password-modal").style.display = "block";
// }

// // Function to close the Forgot Password modal
// function closeModal() {
//   document.getElementById("forgot-password-modal").style.display = "none";
//   document.getElementById("response-message").textContent = ""; // Clear any previous messages
// }

// // Function to send the reset PIN via AJAX
// function sendResetPin(event) {
//   event.preventDefault(); // Prevent the form from submitting traditionally

//   const email = document.getElementById("forgot-email").value;

//   if (!email) {
//       document.getElementById("response-message").textContent = "Please enter your email address.";
//       return;
//   }

//   // Send the email to the server to process the reset request
//   const xhr = new XMLHttpRequest();
//   xhr.open("POST", "send_pin.php", true);
//   xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
//   xhr.onreadystatechange = function() {
//       if (xhr.readyState === 4 && xhr.status === 200) {
//           const response = JSON.parse(xhr.responseText);
//           const responseMessage = document.getElementById("response-message");
//           if (response.success) {
//               responseMessage.style.color = "green";
//               responseMessage.textContent = "A reset PIN has been sent to your email.";
//           } else {
//               responseMessage.style.color = "red";
//               responseMessage.textContent = "Error: " + response.message;
//           }
//       }
//   };
//   xhr.send("email=" + encodeURIComponent(email));
// }










// document.getElementById("forgotPasswordButton").addEventListener("click", showEmailInputDiv);

// function showEmailInputDiv() {
//     const emailDiv = document.getElementById("emailDiv");
//     if (emailDiv) {
//         emailDiv.style.display = "block";
//         console.log("Email input div is now visible.");
//     } else {
//         console.error("Element with ID 'emailDiv' not found.");
//     }
// }

// function handleFocus(input) {
//   const inputDiv = document.getElementById(`${input}-div`);
//   inputDiv.classList.add('focus');
// }

// function handleBlur(input) {
//   const inputElement = document.getElementById(input);
//   const inputDiv = document.getElementById(`${input}-div`);
//   if (inputElement.value === "") {
//       inputDiv.classList.remove('focus');
//   }
// }

// // Function to show the Forgot Password modal
// function handleForgotPassword(event) {
//   event.preventDefault();
//   console.log("Forgot Password link clicked");  // Debug log
//   document.getElementById("forgot-password-modal").style.display = "block";
// }

// // Function to close the Forgot Password modal
// function closeModal() {
//   console.log("Closing Forgot Password modal");  // Debug log
//   document.getElementById("forgot-password-modal").style.display = "none";
//   document.getElementById("response-message").textContent = ""; // Clear any previous messages
// }
// function sendVerificationCode() {
//   const email = document.getElementById("email").value;
//   if (email) {
//       // Code to send verification (AJAX call or form submission)
//       console.log("Verification code sent to: " + email);
//   } else {
//       alert("Please enter your email address.");
//   }
// }


// // Function to send the reset PIN via AJAX
// function sendResetPin(event) {
//   event.preventDefault(); // Prevent the form from submitting traditionally
//   console.log("Send PIN function triggered");  // Debug log

//   const email = document.getElementById("forgot-email").value;

//   if (!email) {
//       document.getElementById("response-message").textContent = "Please enter your email address.";
//       console.log("No email provided");  // Debug log
//       return;
//   }

//   // Debug log to show what email is being sent
//   console.log("Sending reset PIN to email:", email);

//   // Send the email to the server to process the reset request
//   const xhr = new XMLHttpRequest();
//   xhr.open("POST", "send_pin.php", true);
//   xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
//   xhr.onreadystatechange = function() {
//       if (xhr.readyState === 4 && xhr.status === 200) {
//           const response = JSON.parse(xhr.responseText);
//           const responseMessage = document.getElementById("response-message");
//           if (response.success) {
//               responseMessage.style.color = "green";
//               responseMessage.textContent = "A reset PIN has been sent to your email.";
//           } else {
//               responseMessage.style.color = "red";
//               responseMessage.textContent = "Error: " + response.message;
//           }
//       }
//   };
//   xhr.send("email=" + encodeURIComponent(email));
// }
















// document.addEventListener("DOMContentLoaded", function() {
//   const forgotPasswordButton = document.getElementById("forgotPasswordButton");
//   forgotPasswordButton.addEventListener("click", handleForgotPassword);
// });

// function handleForgotPassword(event) {
//   event.preventDefault();
  
//   // Hide the password field and the login button
//   document.getElementById("password-div").style.display = "none";
  
//   // Show the email input field for forgot password
//   const emailDiv = document.getElementById("emailDiv");
//   emailDiv.style.display = "block";
//   console.log("Forgot Password: Enter email to receive verification code.");
// }

// function sendVerificationCode() {
//   const email = document.getElementById("forgot-email").value;
//   if (email) {
//       // Code to send verification (AJAX call or form submission)
//       console.log("Verification code sent to: " + email);
//       alert("A verification code has been sent to your email: " + email);
//   } else {
//       alert("Please enter your email address.");
//   }
// }

// function handleFocus(input) {
// const inputDiv = document.getElementById(`${input}-div`);
// inputDiv.classList.add('focus');
// }

// function handleBlur(input) {
// const inputElement = document.getElementById(input);
// const inputDiv = document.getElementById(`${input}-div`);
// if (inputElement.value === "") {
//     inputDiv.classList.remove('focus');
// }
// }




// document.addEventListener("DOMContentLoaded", function() {
//   const forgotPasswordButton = document.getElementById("forgotPasswordButton");
//   forgotPasswordButton.addEventListener("click", handleForgotPassword);
// });

// function handleForgotPassword(event) {
//   event.preventDefault();
  
//   // Hide the password field and login button
//   document.getElementById("password-div").style.display = "none";
  
//   // Show the email input field for forgot password
//   const emailDiv = document.getElementById("emailDiv");
//   emailDiv.style.display = "block";
//   console.log("Forgot Password: Enter email to receive verification code.");
// }

// function sendVerificationCode() {
//   const email = document.getElementById("forgot-email").value;
//   if (email) {
//       // Create a new XMLHttpRequest to send the email to the server
//       const xhr = new XMLHttpRequest();
//       xhr.open("POST", "send_pin.php", true);
//       xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
      
//       // Handle the server response
//       xhr.onreadystatechange = function() {
//           if (xhr.readyState === 4 && xhr.status === 200) {
//               const response = JSON.parse(xhr.responseText);
//               if (response.success) {
//                   alert("A verification code has been sent to your email.");
//               } else {
//                   alert("Error: " + response.message);
//               }
//           }
//       };
      
//       // Send the email data to the server
//       xhr.send("email=" + encodeURIComponent(email));
//   } else {
//       alert("Please enter your email address.");
//   }
// }

// function handleFocus(input) {
// const inputDiv = document.getElementById(`${input}-div`);
// inputDiv.classList.add('focus');
// }

// function handleBlur(input) {
// const inputElement = document.getElementById(input);
// const inputDiv = document.getElementById(`${input}-div`);
// if (inputElement.value === "") {
//     inputDiv.classList.remove('focus');
// }
// }
















// document.addEventListener("DOMContentLoaded", function() {
//   const forgotPasswordButton = document.getElementById("forgotPasswordButton");
//   forgotPasswordButton.addEventListener("click", handleForgotPassword);
// });

// function handleForgotPassword(event) {
//   event.preventDefault();
  
//   // Hide the password field and login button
//   document.getElementById("password-div").style.display = "none";
  
//   // Show the email input field for forgot password
//   const emailDiv = document.getElementById("emailDiv");
//   emailDiv.style.display = "block";
//   console.log("Forgot Password: Enter email to receive verification code.");
// }

// function sendVerificationCode() {
//   const email = document.getElementById("forgot-email").value;
//   if (email) {
//       // Create a new XMLHttpRequest to send the email to the server
//       const xhr = new XMLHttpRequest();
//       xhr.open("POST", "send_pin.php", true);
//       xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
      
//       // Handle the server response
//       xhr.onreadystatechange = function() {
//           if (xhr.readyState === 4 && xhr.status === 200) {
//               const response = JSON.parse(xhr.responseText);
//               if (response.success) {
//                   alert("A verification code has been sent to your email.");
//               } else {
//                   alert("Error: " + response.message);
//               }
//           }
//       };
      
//       // Send the email data to the server
//       xhr.send("email=" + encodeURIComponent(email));
//   } else {
//       alert("Please enter your email address.");
//   }
// }

// function handleFocus(input) {
//   const inputDiv = document.getElementById(`${input}-div`);
//   inputDiv.classList.add('focus');
// }

// function handleBlur(input) {
//   const inputElement = document.getElementById(input);
//   const inputDiv = document.getElementById(`${input}-div`);
//   if (inputElement.value === "") {
//     inputDiv.classList.remove('focus');
//   }
// }
























// document.addEventListener("DOMContentLoaded", function() {
//   const forgotPasswordButton = document.getElementById("forgotPasswordButton");

//   // Alert to confirm script is loaded
//   alert("JavaScript Loaded!");

//   forgotPasswordButton.addEventListener("click", handleForgotPassword);
// });

// function handleForgotPassword(event) {
//   event.preventDefault();  // Prevent form submission if it's inside a form
//   alert("Forgot Password button clicked");

//   // Hide the password field and login button
//   document.getElementById("password-div").style.display = "none";
  
//   // Show the email input field for forgot password
//   const emailDiv = document.getElementById("emailDiv");
//   emailDiv.style.display = "block";

//   alert("Forgot Password flow: Email input is now visible.");
// }

// function sendVerificationCode() {
//   const email = document.getElementById("forgot-email").value;
//   if (email) {
//     alert("Sending verification code to: " + email);

//     // Create a new XMLHttpRequest to send the email to the server
//     const xhr = new XMLHttpRequest();
//     xhr.open("POST", "send_pin.php", true);
//     xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    
//     // Handle the server response
//     xhr.onreadystatechange = function() {
//         if (xhr.readyState === 4 && xhr.status === 200) {
//             const response = JSON.parse(xhr.responseText);
//             alert("Server Response: " + JSON.stringify(response)); // Log response for debugging
//             if (response.success) {
//                 alert("A verification code has been sent to your email.");
//             } else {
//                 alert("Error: " + response.message);
//             }
//         }
//     };
    
//     // Send the email data to the server
//     xhr.send("email=" + encodeURIComponent(email));
//   } else {
//       alert("Please enter your email address.");
//   }
// }

// function handleFocus(input) {
//   const inputDiv = document.getElementById(`${input}-div`);
//   inputDiv.classList.add('focus');
// }

// function handleBlur(input) {
//   const inputElement = document.getElementById(input);
//   const inputDiv = document.getElementById(`${input}-div`);
//   if (inputElement.value === "") {
//     inputDiv.classList.remove('focus');
//   }
// }
