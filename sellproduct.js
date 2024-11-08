// let productName = "";
// let description = "";
// let price = "";
// let image = null;
// let address = "";

// function handleSubmit(event) {
//   event.preventDefault();
//   productName = document.getElementById("productName").value;
//   description = document.getElementById("description").value;
//   price = document.getElementById("price").value;
//   image = document.getElementById("image").files[0];

//   if (!productName || !description || !price || !image) {
//     alert("Please fill all fields.");
//     return;
//   }

//   document.getElementById("address-popup").style.display = "flex"; // Show address popup
// }

// function handleAddressSubmit(event) {
//   event.preventDefault();
//   address = document.getElementById("address").value;

//   document.getElementById("address-popup").style.display = "none"; // Hide address popup
//   document.getElementById("confirmation-popup").style.display = "flex"; // Show confirmation popup

//   // Simulate adding the product
//   const newProduct = {
//     name: productName,
//     description,
//     price: `₹${price}`,
//     image: URL.createObjectURL(image)
//   };
//   onProductAdded(newProduct);

//   resetForm();
// }

// function onProductAdded(product) {
//   console.log("Product added:", product);
// }

// function resetForm() {
//   document.getElementById("sell-product-form").reset();
//   document.getElementById("address").value = "";
// }

// function closeConfirmationPopup() {
//   document.getElementById("confirmation-popup").style.display = "none"; // Hide confirmation popup
// }




// let productName = "";
// let description = "";
// let price = "";
// let image = null;
// let address = "";

// function handleSubmit(event) {
//   event.preventDefault();
//   productName = document.getElementById("productName").value;
//   description = document.getElementById("description").value;
//   price = document.getElementById("price").value;
//   image = document.getElementById("image").files[0];

//   if (!productName || !description || !price || !image) {
//     alert("Please fill all fields.");
//     return;
//   }

//   document.getElementById("address-popup").style.display = "flex"; // Show address popup
// }

// function handleAddressSubmit(event) {
//   event.preventDefault();
//   address = document.getElementById("address").value;

//   document.getElementById("address-popup").style.display = "none"; // Hide address popup
//   document.getElementById("confirmation-popup").style.display = "flex"; // Show confirmation popup

//   // Simulate adding the product
//   const newProduct = {
//     name: productName,
//     description,
//     price: `₹${price}`,
//     image: URL.createObjectURL(image)
//   };
//   onProductAdded(newProduct);

//   resetForm();
// }

// function onProductAdded(product) {
//   console.log("Product added:", product);
// }

// function resetForm() {
//   document.getElementById("sell-product-form").reset();
//   document.getElementById("address").value = "";
// }

// function closeConfirmationPopup() {
//   document.getElementById("confirmation-popup").style.display = "none"; // Hide confirmation popup
// }

// // Bind the form submit event
// document.getElementById("sell-product-form").addEventListener("submit", handleSubmit);






let productName = "";
let description = "";
let price = "";
let image = null;
let address = "";

function handleSubmit(event) {
  event.preventDefault();
  productName = document.getElementById("productName").value;
  description = document.getElementById("description").value;
  price = document.getElementById("price").value;
  image = document.getElementById("image").files[0];

  if (!productName || !description || !price || !image) {
    alert("Please fill all fields.");
    return;
  }

  document.getElementById("address-popup").style.display = "flex"; // Show address popup
}

function handleAddressSubmit(event) {
  event.preventDefault();
  address = document.getElementById("address").value;

  document.getElementById("address-popup").style.display = "none"; // Hide address popup
  document.getElementById("confirmation-popup").style.display = "flex"; // Show confirmation popup

  // Simulate adding the product
  const newProduct = {
    name: productName,
    description,
    price: `₹${price}`,
    image: URL.createObjectURL(image)
  };
  onProductAdded(newProduct);

  resetForm();
}

function onProductAdded(product) {
  console.log("Product added:", product);
}

function resetForm() {
  document.getElementById("sell-product-form").reset();
  document.getElementById("address").value = "";
}

function closeConfirmationPopup() {
  document.getElementById("confirmation-popup").style.display = "none"; // Hide confirmation popup
}
