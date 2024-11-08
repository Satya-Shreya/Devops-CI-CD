// let cartCount = 0; // Set the initial cart count
// let user = null; // Initial state for user (null if not logged in)

// document.addEventListener('DOMContentLoaded', () => {
//   updateCartCount();
//   updateUserMenu();
// });

// function updateCartCount() {
//   document.getElementById('cart-count').textContent = cartCount;
// }

// function updateUserMenu() {
//   const userMenu = document.getElementById('user-menu');
//   const loginLink = document.getElementById('login-link');
  
//   if (user) {
//     userMenu.classList.remove('d-none');
//     loginLink.classList.add('d-none');
//     document.getElementById('user-name').textContent = user.name;
//     document.getElementById('user-email').textContent = user.email;
//   } else {
//     userMenu.classList.add('d-none');
//     loginLink.classList.remove('d-none');
//   }
// }

// function onLogout() {
//   user = null; // Reset the user information
//   alert("You have successfully logged out.");
//   updateUserMenu();
// }

// // Example function to simulate login (replace with actual login logic)
// function loginUser(name, email) {
//   user = { name, email };
//   updateUserMenu();
// }




// let cartCount = 0; // Set the initial cart count
// let user = null; // Initial state for user (null if not logged in)

// document.addEventListener('DOMContentLoaded', () => {
//   updateCartCount();
//   updateUserMenu();
// });

// function updateCartCount() {
//   document.getElementById('cart-count').textContent = cartCount;
// }

// function updateUserMenu() {
//   const userMenu = document.getElementById('user-menu');
//   const loginLink = document.getElementById('login-link');
//   const logoutLink = document.getElementById('logout-link');

//   if (user) {
//     userMenu.textContent = `Welcome, ${user}`;
//     loginLink.style.display = 'none'; // Hide login
//     logoutLink.style.display = 'block'; // Show logout
//   } else {
//     userMenu.textContent = 'Welcome, Guest';
//     loginLink.style.display = 'block'; // Show login
//     logoutLink.style.display = 'none'; // Hide logout
//   }
// }

// function login(username) {
//   user = username; // Set user
//   updateUserMenu(); // Refresh user menu
// }

// function logout() {
//   user = null; // Clear user
//   updateUserMenu(); // Refresh user menu
// }



let cartCount = 0; // Set the initial cart count
let user = null; // Initial state for user (null if not logged in)

document.addEventListener('DOMContentLoaded', () => {
  updateCartCount();
  updateUserMenu();

  // Set up navigation links
  document.getElementById('home-link').addEventListener('click', () => navigateTo('home'));
  document.getElementById('products-link').addEventListener('click', () => navigateTo('products'));
  document.getElementById('sell-link').addEventListener('click', () => navigateTo('sellproduct'));
  document.getElementById('contactus-link').addEventListener('click', () => navigateTo('contactus'));
  document.getElementById('aboutus-link').addEventListener('click', () => navigateTo('aboutus'));
  document.getElementById('cart-link').addEventListener('click', () => navigateTo('cart'));
  document.getElementById('login-link').addEventListener('click', loginPrompt);
  document.getElementById('logout-link').addEventListener('click', logout);
});

function updateCartCount() {
  document.getElementById('cart-count').textContent = cartCount;
}

function updateUserMenu() {
  const userMenu = document.getElementById('user-menu');
  const loginLink = document.getElementById('login-link');
  const logoutLink = document.getElementById('logout-link');

  if (user) {
    userMenu.textContent = `Welcome, ${user}`;
    loginLink.style.display = 'none'; // Hide login
    logoutLink.style.display = 'block'; // Show logout
  } else {
    userMenu.textContent = 'Welcome, Guest';
    loginLink.style.display = 'block'; // Show login
    logoutLink.style.display = 'none'; // Hide logout
  }
}

function loginPrompt() {
  const username = prompt("Enter your username:");
  if (username) {
    login(username);
  }
}

function login(username) {
  user = username; // Set user
  updateUserMenu(); // Refresh user menu
  navigateToHome(); // Redirect to home.php on successful login
}

function logout() {
  user = null; // Clear user
  updateUserMenu(); // Refresh user menu
  navigateTo('home'); // Redirect to home after logout
}

function navigateTo(page) {
  const content = document.getElementById('content');

  let htmlFile = `${page}.html`;
  let jsFile = `${page}.js`;

  // Fetch and load the HTML content
  fetch(htmlFile)
    .then(response => response.text())
    .then(html => {
      content.innerHTML = html;
      loadScript(jsFile);
    })
    .catch(error => {
      content.innerHTML = `<p>Sorry, the ${page} page is not available.</p>`;
      console.error("Error loading page:", error);
    });
}

function navigateToHome() {
  window.location.href = 'home.html'; // Redirect to home.php
}

function loadScript(jsFile) {
  const oldScript = document.getElementById('page-script');
  if (oldScript) oldScript.remove();

  const script = document.createElement('script');
  script.src = jsFile;
  script.id = 'page-script';
  document.body.appendChild(script);
}

