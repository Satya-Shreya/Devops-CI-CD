// const steps = document.querySelectorAll('.form-step');
// const sidebarSteps = document.querySelectorAll('.step');
// const prevButton = document.getElementById('prevButton');
// const nextButton = document.getElementById('nextButton');
// const submitButton = document.getElementById('submitButton');
// let currentStep = 1;
// const formData = {
//   name: '',
//   phone: '',
//   email: '',
//   password: '',
//   confirmPassword: '',
// };

// // Function to show the current step
// function showStep(step) {
//   steps.forEach((element) => {
//     element.style.display = 'none'; // Hide all steps
//   });
//   steps[step - 1].style.display = 'block'; // Show the current step

//   sidebarSteps.forEach((element) => {
//     element.classList.remove('active');
//   });
//   sidebarSteps[step - 1].classList.add('active'); // Highlight current step

//   prevButton.style.display = step === 1 ? 'none' : 'block'; // Show/hide Previous button
//   nextButton.style.display = step === 4 ? 'none' : 'block'; // Show/hide Next button
//   submitButton.style.display = step === 4 ? 'block' : 'none'; // Show/hide Submit button
// }

// // Function to handle input changes
// function handleChange(event) {
//   formData[event.target.name] = event.target.value;
// }

// // Function to validate password
// function validatePassword(password) {
//   return (
//     password.length >= 8 &&
//     /[a-zA-Z]/.test(password) &&
//     /\d/.test(password) &&
//     /[!@#$%^&*]/.test(password)
//   );
// }

// // Event listeners for the buttons
// nextButton.addEventListener('click', () => {
//   if (currentStep < 4) {
//     currentStep++;
//     showStep(currentStep);
//   }
// });

// prevButton.addEventListener('click', () => {
//   if (currentStep > 1) {
//     currentStep--;
//     showStep(currentStep);
//   }
// });

// // Add event listeners to inputs for handling changes
// document.querySelectorAll('.input').forEach(input => {
//   input.addEventListener('input', handleChange);
// });

// // Handle form submission
// document.getElementById('signup-form').addEventListener('submit', (event) => {
//   event.preventDefault(); // Prevent form from submitting normally

//   const { password, confirmPassword } = formData;

//   if (!validatePassword(password)) {
//     alert("Password must contain at least 8 characters, including letters, numbers, and special characters.");
//   } else if (password !== confirmPassword) {
//     alert("Passwords do not match.");
//   } else {
//     alert("Signup successful!");
//   }
// });

// // Show the initial step
// showStep(currentStep);





// const steps = document.querySelectorAll('.form-step');
// const sidebarSteps = document.querySelectorAll('.step');
// const prevButton = document.getElementById('prevButton');
// const nextButton = document.getElementById('nextButton');
// const submitButton = document.getElementById('submitButton');
// let currentStep = 1;
// const formData = {
//   name: '',
//   phone: '',
//   email: '',
//   password: '',
//   confirmPassword: '',
// };

// // Function to show the current step
// function showStep(step) {
//   steps.forEach((element) => {
//     element.style.display = 'none'; // Hide all steps
//   });
//   steps[step - 1].style.display = 'block'; // Show the current step

//   sidebarSteps.forEach((element) => {
//     element.classList.remove('active');
//   });
//   sidebarSteps[step - 1].classList.add('active'); // Highlight current step

//   prevButton.style.display = step === 1 ? 'none' : 'block'; // Show/hide Previous button
//   nextButton.style.display = step === 4 ? 'none' : 'block'; // Show/hide Next button
//   submitButton.style.display = step === 4 ? 'block' : 'none'; // Show/hide Submit button
// }

// // Function to handle input changes
// function handleChange(event) {
//   formData[event.target.name] = event.target.value;
// }

// // Function to validate password
// function validatePassword(password) {
//   return (
//     password.length >= 8 &&
//     /[a-zA-Z]/.test(password) &&
//     /\d/.test(password) &&
//     /[!@#$%^&*]/.test(password)
//   );
// }

// // Event listeners for the buttons
// nextButton.addEventListener('click', () => {
//   if (currentStep < 4) {
//     currentStep++;
//     showStep(currentStep);
//   }
// });

// prevButton.addEventListener('click', () => {
//   if (currentStep > 1) {
//     currentStep--;
//     showStep(currentStep);
//   }
// });

// // Add event listeners to inputs for handling changes
// document.querySelectorAll('.input').forEach(input => {
//   input.addEventListener('input', handleChange);
// });

// // Handle form submission
// document.getElementById('signup-form').addEventListener('submit', (event) => {
//   event.preventDefault(); // Prevent form from submitting normally

//   const { password, confirmPassword } = formData;

//   if (!validatePassword(password)) {
//     alert("Password must contain at least 8 characters, including letters, numbers, and special characters.");
//   } else if (password !== confirmPassword) {
//     alert("Passwords do not match.");
//   } else {
//     alert("Signup successful!");
//     // You can add further actions here, like redirecting or displaying a success message
//   }
// });

// // Show the initial step
// showStep(currentStep);




// const steps = document.querySelectorAll('.form-step');
// const prevButton = document.getElementById('prevButton');
// const nextButton = document.getElementById('nextButton');
// const submitButton = document.getElementById('submitButton');
// let currentStep = 1; // Starting at step 1
// const formData = {
//   name: '',
//   phone: '',
//   email: '',
//   password: '',
//   confirmPassword: '',
// };

// // Function to show the current step
// function showStep(step) {
//   steps.forEach((element) => {
//     element.style.display = 'none'; // Hide all steps
//   });
//   steps[step - 1].style.display = 'block'; // Show the current step

//   prevButton.style.display = step === 1 ? 'none' : 'block'; // Show/hide Previous button
//   nextButton.style.display = step === 4 ? 'none' : 'block'; // Show/hide Next button
//   submitButton.style.display = step === 4 ? 'block' : 'none'; // Show/hide Submit button
// }

// // Function to handle input changes
// function handleChange(event) {
//   formData[event.target.name] = event.target.value;
// }

// // Function to validate password
// function validatePassword(password) {
//   return (
//     password.length >= 8 &&
//     /[a-zA-Z]/.test(password) &&
//     /\d/.test(password) &&
//     /[!@#$%^&*]/.test(password)
//   );
// }

// // Event listeners for the buttons
// nextButton.addEventListener('click', () => {
//   if (currentStep < 4) {
//     currentStep++;
//     showStep(currentStep);
//   }
// });

// prevButton.addEventListener('click', () => {
//   if (currentStep > 1) {
//     currentStep--;
//     showStep(currentStep);
//   }
// });

// // Add event listeners to inputs for handling changes
// document.querySelectorAll('.input').forEach(input => {
//   input.addEventListener('input', handleChange);
// });

// // Handle form submission
// submitButton.addEventListener('click', (event) => {
//   event.preventDefault(); // Prevent form from submitting normally

//   const { password, confirmPassword } = formData;

//   if (!validatePassword(password)) {
//     alert("Password must contain at least 8 characters, including letters, numbers, and special characters.");
//   } else if (password !== confirmPassword) {
//     alert("Passwords do not match.");
//   } else {
//     alert("Signup successful!");
//     // Here you might want to send formData to your server or do something else.
//     console.log(formData); // Log form data for debugging
//     // Optionally, redirect or update the UI based on success
//   }
// });

// // Show the initial step
// showStep(currentStep);





// const steps = document.querySelectorAll('.form-step');
// const prevButton = document.getElementById('prevButton');
// const nextButton1 = document.getElementById('nextButton1');
// const nextButton2 = document.getElementById('nextButton2');
// const nextButton3 = document.getElementById('nextButton3');
// const submitButton = document.getElementById('submitButton');
// let currentStep = 1;
// const formData = {
//   name: '',
//   phone: '',
//   email: '',
//   password: '',
//   confirmPassword: '',
// };

// // Function to show the current step
// function showStep(step) {
//   steps.forEach((element) => {
//     element.style.display = 'none'; // Hide all steps
//   });
//   steps[step - 1].style.display = 'block'; // Show the current step

//   prevButton.style.display = step === 1 ? 'none' : 'block'; // Show/hide Previous button
//   submitButton.style.display = step === 4 ? 'block' : 'none'; // Show/hide Submit button
// }

// // Function to handle input changes
// function handleChange(event) {
//   formData[event.target.name] = event.target.value;
// }

// // Function to validate password
// function validatePassword(password) {
//   return (
//     password.length >= 8 &&
//     /[a-zA-Z]/.test(password) &&
//     /\d/.test(password) &&
//     /[!@#$%^&*]/.test(password)
//   );
// }

// // Event listeners for the buttons
// nextButton1.addEventListener('click', () => {
//   currentStep++;
//   showStep(currentStep);
// });

// nextButton2.addEventListener('click', () => {
//   currentStep++;
//   showStep(currentStep);
// });

// nextButton3.addEventListener('click', () => {
//   currentStep++;
//   showStep(currentStep);
// });

// prevButton.addEventListener('click', () => {
//   if (currentStep > 1) {
//     currentStep--;
//     showStep(currentStep);
//   }
// });

// // Add event listeners to inputs for handling changes
// document.querySelectorAll('.input').forEach(input => {
//   input.addEventListener('input', handleChange);
// });

// // Handle form submission
// submitButton.addEventListener('click', (event) => {
//   event.preventDefault(); // Prevent form from submitting normally

//   const { password, confirmPassword } = formData;

//   if (!validatePassword(password)) {
//     alert("Password must contain at least 8 characters, including letters, numbers, and special characters.");
//   } else if (password !== confirmPassword) {
//     alert("Passwords do not match.");
//   } else {
//     alert("Signup successful!");
//     console.log(formData); // Log form data for debugging
//   }
// });

// // Show the initial step
// showStep(currentStep);




// const steps = document.querySelectorAll('.form-step');
// const prevButton = document.getElementById('prevButton');
// const nextButton1 = document.getElementById('nextButton1');
// const nextButton2 = document.getElementById('nextButton2');
// const nextButton3 = document.getElementById('nextButton3');
// const submitButton = document.getElementById('submitButton');
// let currentStep = 1;
// const formData = {
//   name: '',
//   phone: '',
//   email: '',
//   password: '',
//   confirmPassword: '',
// };

// // Function to show the current step
// function showStep(step) {
//   steps.forEach((element) => {
//     element.style.display = 'none'; // Hide all steps
//   });
//   steps[step - 1].style.display = 'block'; // Show the current step

//   prevButton.style.display = step === 1 ? 'none' : 'block'; // Show/hide Previous button
//   submitButton.style.display = step === 4 ? 'block' : 'none'; // Show/hide Submit button
// }

// // Function to handle input changes
// function handleChange(event) {
//   formData[event.target.name] = event.target.value;
// }

// // Function to validate password
// function validatePassword(password) {
//   return (
//     password.length >= 8 &&
//     /[a-zA-Z]/.test(password) &&
//     /\d/.test(password) &&
//     /[!@#$%^&*]/.test(password)
//   );
// }

// // Event listeners for the buttons
// nextButton1.addEventListener('click', () => {
//   currentStep++;
//   showStep(currentStep);
// });

// nextButton2.addEventListener('click', () => {
//   currentStep++;
//   showStep(currentStep);
// });

// nextButton3.addEventListener('click', () => {
//   currentStep++;
//   showStep(currentStep);
// });

// prevButton.addEventListener('click', () => {
//   if (currentStep > 1) {
//     currentStep--;
//     showStep(currentStep);
//   }
// });

// // Add event listeners to inputs for handling changes
// document.querySelectorAll('.input').forEach(input => {
//   input.addEventListener('input', handleChange);
// });

// // Handle form submission
// submitButton.addEventListener('click', (event) => {
//   event.preventDefault(); // Prevent form from submitting normally

//   const { password, confirmPassword } = formData;

//   if (!validatePassword(password)) {
//     alert("Password must contain at least 8 characters, including letters, numbers, and special characters.");
//   } else if (password !== confirmPassword) {
//     alert("Passwords do not match.");
//   } else {
//     alert("Signup successful!");
//     console.log(formData); // Log form data for debugging
//   }
// });

// // Show the initial step
// showStep(currentStep);





// const steps = document.querySelectorAll('.form-step');
// const prevButton = document.getElementById('prevButton');
// const nextButton1 = document.getElementById('nextButton1');
// const nextButton2 = document.getElementById('nextButton2');
// const nextButton3 = document.getElementById('nextButton3');
// const submitButton = document.getElementById('submitButton');
// let currentStep = 1;
// const formData = {
//   name: '',
//   phone: '',
//   email: '',
//   password: '',
//   confirmPassword: '',
// };

// // Function to show the current step
// function showStep(step) {
//   steps.forEach((element) => {
//     element.style.display = 'none'; // Hide all steps
//   });
//   steps[step - 1].style.display = 'block'; // Show the current step

//   prevButton.style.display = step === 1 ? 'none' : 'block'; // Show/hide Previous button
//   submitButton.style.display = step === 4 ? 'block' : 'none'; // Show/hide Submit button
// }

// // Function to handle input changes
// function handleChange(event) {
//   formData[event.target.name] = event.target.value;
// }

// // Function to validate password
// function validatePassword(password) {
//   return (
//     password.length >= 8 &&
//     /[a-zA-Z]/.test(password) &&
//     /\d/.test(password) &&
//     /[!@#$%^&*]/.test(password)
//   );
// }

// // Event listeners for the buttons
// nextButton1.addEventListener('click', () => {
//   console.log("Next Button 1 clicked");
//   currentStep++;
//   showStep(currentStep);
// });

// nextButton2.addEventListener('click', () => {
//   console.log("Next Button 2 clicked");
//   currentStep++;
//   showStep(currentStep);
// });

// nextButton3.addEventListener('click', () => {
//   console.log("Next Button 3 clicked");
//   currentStep++;
//   showStep(currentStep);
// });

// prevButton.addEventListener('click', () => {
//   if (currentStep > 1) {
//     currentStep--;
//     showStep(currentStep);
//   }
// });

// // Add event listeners to inputs for handling changes
// document.querySelectorAll('.input').forEach(input => {
//   input.addEventListener('input', handleChange);
// });

// // Handle form submission
// submitButton.addEventListener('click', (event) => {
//   event.preventDefault(); // Prevent form from submitting normally

//   const { password, confirmPassword } = formData;

//   if (!validatePassword(password)) {
//     alert("Password must contain at least 8 characters, including letters, numbers, and special characters.");
//   } else if (password !== confirmPassword) {
//     alert("Passwords do not match.");
//   } else {
//     alert("Signup successful!");
//     console.log(formData); // Log form data for debugging
//   }
// });

// // Show the initial step
// showStep(currentStep);




// const steps = document.querySelectorAll('.form-step');
// const prevButton1 = document.getElementById('prevButton1');
// const nextButton1 = document.getElementById('nextButton1');
// const nextButton2 = document.getElementById('nextButton2');
// const nextButton3 = document.getElementById('nextButton3');
// const submitButton = document.getElementById('submitButton');

// let currentStep = 1;
// const formData = {
//   name: '',
//   phone: '',
//   email: '',
//   password: '',
//   confirmPassword: '',
// };

// // Function to show the current step
// function showStep(step) {
//   steps.forEach((element) => {
//     element.style.display = 'none'; // Hide all steps
//   });
//   steps[step - 1].style.display = 'block'; // Show the current step

//   prevButton1.style.display = step === 1 ? 'none' : 'block'; // Show/hide Previous button
//   submitButton.style.display = step === 4 ? 'block' : 'none'; // Show/hide Submit button
// }

// // Event listeners for the buttons
// nextButton1.addEventListener('click', () => {
//   console.log("Next Button 1 clicked");
//   currentStep++;
//   showStep(currentStep);
// });

// nextButton2.addEventListener('click', () => {
//   console.log("Next Button 2 clicked");
//   currentStep++;
//   showStep(currentStep);
// });

// nextButton3.addEventListener('click', () => {
//   console.log("Next Button 3 clicked");
//   currentStep++;
//   showStep(currentStep);
// });

// prevButton1.addEventListener('click', () => {
//   if (currentStep > 1) {
//     currentStep--;
//     showStep(currentStep);
//   }
// });



document.addEventListener('DOMContentLoaded', () => {
  const signupForm = document.getElementById('signup-form');
  
  // Add an event listener for form submission
  signupForm.addEventListener('submit', function (event) {
      // Prevent default form submission to validate
      event.preventDefault();
      
      // Validate form fields before submitting
      const name = signupForm.name.value.trim();
      const phone = signupForm.phone.value.trim();
      const email = signupForm.email.value.trim();
      const password = signupForm.password.value.trim();
      const confirmPassword = signupForm.confirmPassword.value.trim();

      const errors = [];
      
      // Basic client-side validation
      if (!name) {
          errors.push("Name is required.");
      }

      if (!phone || !/^\d{10}$/.test(phone)) {
          errors.push("Phone number must be 10 digits.");
      }

      if (!email || !/\S+@\S+\.\S+/.test(email)) {
          errors.push("Valid email is required.");
      }

      // Password validation
      if (!password) {
          errors.push("Password is required.");
      } else {
          const passwordRequirements = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
          if (!passwordRequirements.test(password)) {
              errors.push("Password must be at least 8 characters long, contain at least one uppercase letter, one digit, and one special character.");
          }
      }

      if (password !== confirmPassword) {
          errors.push("Passwords do not match.");
      }

      // If there are errors, display them and do not submit
      if (errors.length > 0) {
          alert(errors.join("\n"));
          return;
      }

      // If no errors, submit the form
      signupForm.submit();
  });
});
