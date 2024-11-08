// const cartItems = [];
// const shippedItems = [];
// let products = [];
// let isAuthenticated = false;
// let user = null;

// function fetchProducts() {
//     fetch('products.json')
//         .then(response => response.json())
//         .then(data => {
//             products = data;
//             render();
//         });
// }

// function handleAddToCart(product) {
//     if (!cartItems.find(item => item.id === product.id)) {
//         cartItems.push(product);
//     }
// }

// function handleLogout() {
//     isAuthenticated = false;
//     user = null;
//     render();
// }

// function render() {
//     const app = document.getElementById('app');
//     app.innerHTML = `
//         <nav>
//             <ul>
//                 <li><a href="#home">Home</a></li>
//                 <li><a href="#products">Products (${cartItems.length})</a></li>
//                 <li><a href="#sell">Sell</a></li>
//                 <li><a href="#login">Login</a></li>
//                 <li><a href="#signup">Signup</a></li>
//                 <li><a href="#contact-us">Contact Us</a></li>
//             </ul>
//         </nav>
//         <div>
//             ${renderRoute(window.location.hash)}
//         </div>
//     `;
// }

// function renderRoute(route) {
//     switch (route) {
//         case '#products':
//             return renderProducts();
//         case '#sell':
//             return isAuthenticated ? renderSell() : 'Please log in to sell.';
//         case '#login':
//             return renderLogin();
//         case '#signup':
//             return renderSignup();
//         case '#contact-us':
//             return renderContactUs();
//         default:
//             return renderHome();
//     }
// }

// function renderHome() {
//     return '<h1>Welcome to My Store</h1>';
// }

// function renderProducts() {
//     return `
//         <h1>Products</h1>
//         <ul>
//             ${products.map(product => `
//                 <li>
//                     ${product.name}
//                     <button onclick="handleAddToCart(${JSON.stringify(product)})">Add to Cart</button>
//                 </li>
//             `).join('')}
//         </ul>
//     `;
// }

// function renderLogin() {
//     return `<h1>Login Page</h1>`;
// }

// function renderSignup() {
//     return `<h1>Signup Page</h1>`;
// }

// function renderContactUs() {
//     return `<h1>Contact Us</h1>`;
// }

// // Fetch products and initialize the app
// fetchProducts();





// function navigateTo(page) {
//     const content = document.getElementById("content");

//     // Determine which HTML file to load based on the page
//     let htmlFile = `${page}.html`;
//     let jsFile = `${page}.js`;

//     // Fetch the HTML content for the specified page
//     fetch(htmlFile)
//         .then(response => response.text())
//         .then(html => {
//             content.innerHTML = html;  // Insert HTML content into #content
//             loadScript(jsFile);        // Load the corresponding JavaScript
//         })
//         .catch(error => {
//             content.innerHTML = `<p>Sorry, the ${page} page is not available.</p>`;
//             console.error("Error loading page:", error);
//         });
// }

// // Load the JavaScript file dynamically for the specified page
// function loadScript(jsFile) {
//     const oldScript = document.querySelector(`#${jsFile}`);
//     if (oldScript) oldScript.remove();  // Remove existing script if already loaded

//     const script = document.createElement("script");
//     script.src = jsFile;
//     script.id = jsFile;
//     document.body.appendChild(script);  // Add the script to the body
// }

// // Initial load to Home page
// document.addEventListener("DOMContentLoaded", () => {
//     navigateTo('home');
// });



document.addEventListener("DOMContentLoaded", () => {
    // Load the navbar
    const navbar = document.getElementById("navbar");
    fetch('navbar.html') // Adjust path if needed
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(data => {
            navbar.innerHTML = data;
            loadHomePage();
        })
        .catch(error => {
            console.error('Error loading navbar:', error);
            navbar.innerHTML = '<p>Error loading navbar.</p>';
        });

    // Function to load home.html
    function loadHomePage() {
        const content = document.getElementById("content");
        fetch('home.html') // Adjust path if needed
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.text();
            })
            .then(data => {
                content.innerHTML = data;
            })
            .catch(error => {
                console.error('Error loading home.html:', error);
                content.innerHTML = '<p>Error loading home page.</p>';
            });
    }
});
