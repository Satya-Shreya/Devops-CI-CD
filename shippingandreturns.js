// // Sample data for shipped items
// const shippedItems = [
//     {
//       image: 'path/to/image1.jpg', // Replace with actual image path
//       name: 'Product 1',
//       price: '₹100'
//     },
//     {
//       image: 'path/to/image2.jpg', // Replace with actual image path
//       name: 'Product 2',
//       price: '₹200'
//     },
//     // Add more items as needed
//   ];
  
//   // Function to render shipped items
//   function renderShippedItems(items) {
//     const noItemsMessage = document.getElementById('no-items-message');
//     const shippedItemsGrid = document.getElementById('shipped-items-grid');
  
//     if (items.length === 0) {
//       noItemsMessage.style.display = 'block';
//       shippedItemsGrid.style.display = 'none';
//     } else {
//       noItemsMessage.style.display = 'none';
//       shippedItemsGrid.style.display = 'grid'; // Show the grid layout
  
//       items.forEach((item) => {
//         const itemDiv = document.createElement('div');
//         itemDiv.className = 'shipped-item';
  
//         const itemImage = document.createElement('img');
//         itemImage.src = item.image;
//         itemImage.alt = item.name;
//         itemImage.className = 'shipped-item-image';
  
//         const itemName = document.createElement('h5');
//         itemName.innerText = item.name;
  
//         const itemPrice = document.createElement('p');
//         itemPrice.innerText = `Price: ${item.price}`;
  
//         itemDiv.appendChild(itemImage);
//         itemDiv.appendChild(itemName);
//         itemDiv.appendChild(itemPrice);
//         shippedItemsGrid.appendChild(itemDiv);
//       });
//     }
//   }
  
//   // Initial render
//   renderShippedItems(shippedItems);
  






// Sample data for shipped items
// const shippedItems = [
//   {
//     image: 'path/to/image1.jpg', // Replace with actual image path
//     name: 'Product 1',
//     price: '₹100'
//   },
//   {
//     image: 'path/to/image2.jpg', // Replace with actual image path
//     name: 'Product 2',
//     price: '₹200'
//   },
//   // Add more items as needed
// ];

// // Function to render shipped items
// function renderShippedItems(items) {
//   const noItemsMessage = document.getElementById('no-items-message');
//   const shippedItemsGrid = document.getElementById('shipped-items-grid');

//   if (items.length === 0) {
//     noItemsMessage.style.display = 'block';
//     shippedItemsGrid.style.display = 'none';
//   } else {
//     noItemsMessage.style.display = 'none';
//     shippedItemsGrid.style.display = 'grid'; // Show the grid layout

//     items.forEach((item) => {
//       const itemDiv = document.createElement('div');
//       itemDiv.className = 'shipped-item';

//       const itemImage = document.createElement('img');
//       itemImage.src = item.image;
//       itemImage.alt = item.name;
//       itemImage.className = 'shipped-item-image';

//       const itemName = document.createElement('h5');
//       itemName.innerText = item.name;

//       const itemPrice = document.createElement('p');
//       itemPrice.innerText = `Price: ${item.price}`;

//       itemDiv.appendChild(itemImage);
//       itemDiv.appendChild(itemName);
//       itemDiv.appendChild(itemPrice);
//       shippedItemsGrid.appendChild(itemDiv);
//     });
//   }
// }

// // Initial render
// renderShippedItems(shippedItems);






// Sample data for shipped items
const shippedItems = [
  {
    image: 'path/to/image1.jpg', // Replace with actual image path
    name: 'Product 1',
    price: '₹100'
  },
  {
    image: 'path/to/image2.jpg', // Replace with actual image path
    name: 'Product 2',
    price: '₹200'
  },
  // Add more items as needed
];

// Function to render shipped items
function renderShippedItems(items) {
  const noItemsMessage = document.getElementById('no-items-message');
  const shippedItemsGrid = document.getElementById('shipped-items-grid');

  if (items.length === 0) {
      noItemsMessage.style.display = 'block';
      shippedItemsGrid.style.display = 'none';
  } else {
      noItemsMessage.style.display = 'none';
      shippedItemsGrid.style.display = 'grid'; // Show the grid layout

      items.forEach((item) => {
          const itemDiv = document.createElement('div');
          itemDiv.className = 'shipped-item';

          const itemImage = document.createElement('img');
          itemImage.src = item.image;
          itemImage.alt = item.name;
          itemImage.className = 'shipped-item-image';

          const itemName = document.createElement('h5');
          itemName.innerText = item.name;

          const itemPrice = document.createElement('p');
          itemPrice.innerText = `Price: ${item.price}`;

          itemDiv.appendChild(itemImage);
          itemDiv.appendChild(itemName);
          itemDiv.appendChild(itemPrice);
          shippedItemsGrid.appendChild(itemDiv);
      });
  }
}

// Initial render
renderShippedItems(shippedItems);
