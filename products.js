const products = [
    {
        "name": "Jacket",
        "description": "Women's brown jacket perfect for winters",
        "price": "₹800",
        "image": "/images/jacket1.png"
      },
      {
        "name": "Jeans",
        "description": "Women's blue jeans",
        "price": "₹900",
        "image": "/images/jeans1.png"
      },
      {
        "name": "Denim Jacket",
        "description": "Men's denim jacket",
        "price": "₹1000",
        "image": "/images/mendenim.png"
      },
      {
        "name": "Hoodie",
        "description": "Men's cream hoodie",
        "price": "₹600",
        "image": "/images/menhoodie.webp"
      },
      {
        "name": "Jeans",
        "description": "Men's blue jeans",
        "price": "₹1000",
        "image": "/images/menjeans.jpg"
      },
      {
        "name": "T-Shirt",
        "description": "Men's printed t-shirt",
        "price": "₹500",
        "image": "/images/messhirt.webp"
      },
      {
        "name": "Women's hoodie",
        "description": "Women's cream hoodie",
        "price": "₹600",
        "image": "/images/womenhoodie.avif"
      },
      {
        "name": "T-Shirt",
        "description": "Men's Limited edition t-shirt",
        "price": "₹400",
        
        "image": "/images/menshirt2.webp"
      },
      {
        "name": "Pullover",
        "description": "Women's Must-have item",
        "price": "₹750",
        "image": "/images/sweater.png"
      },
      {
        "name": "Lavender Pullover",
        "description": "Popular choice by many women",
        "price": "₹900",
        "image": "/images/sweater2.png"
      },
      {
        "name": "Women's hoodie",
        "description": "Women's cute printed hoodie-Best seller",
        "price": "₹650",
        "image": "/images/womenhoodie2.jpg"
      },
      {
        "name": "Hoodie",
        "description": "Men's lavendar hoodie-Customer favorite",
        "price": "₹700",
        "image": "/images/menhoodie2.webp"
      }
  ];
  
  let filteredProducts = products;
  const productGrid = document.getElementById("product-grid");
  
  function displayProducts(productsList) {
    productGrid.innerHTML = "";
    if (productsList.length > 0) {
      productsList.forEach((product, index) => {
        const productCard = document.createElement("div");
        productCard.className = "product-card";
  
        productCard.innerHTML = `
          <img src="${product.image}" alt="${product.name}" class="product-image" onclick="openPopup('${product.image}')">
          <div class="product-info">
            <h5 class="product-name">${product.name}</h5>
            <p class="product-description">${product.description}</p>
            <p class="product-price">${product.price}</p>
            <button class="btn-add-to-cart" onclick="addToCart(${index})">Add to Cart</button>
          </div>
        `;
  
        productGrid.appendChild(productCard);
      });
    } else {
      productGrid.innerHTML = `<p class="no-results">No products found</p>`;
    }
  }
  
  function handleSearchChange() {
    const searchTerm = document.getElementById("search-input").value.toLowerCase();
    filteredProducts = products.filter(product => product.name.toLowerCase().includes(searchTerm));
    displayProducts(filteredProducts);
  }
  
  function openPopup(imageSrc) {
    const popup = document.getElementById("image-popup");
    const popupImage = document.getElementById("popup-image");
    popupImage.src = imageSrc;
    popup.style.display = "flex";
  }
  
  function closePopup() {
    const popup = document.getElementById("image-popup");
    popup.style.display = "none";
  }
  
  function addToCart(index) {
    alert(`${filteredProducts[index].name} has been added to the cart!`);
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    displayProducts(products);
  });
  