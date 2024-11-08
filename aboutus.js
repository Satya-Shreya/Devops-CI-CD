document.addEventListener("DOMContentLoaded", function () {
    const textElement = document.getElementById("about-text");
    const fullText = `Welcome to Thrift Heaven!
  
  At Thrift Heaven, we believe in the power of sustainability and the joy of discovery. Our mission is to provide a vibrant platform where individuals can buy and sell gently used products, allowing them to give their items a second life while finding unique treasures at affordable prices.
  
  Our Story
  Founded in 2024, Thrift Heaven started as a small community initiative aimed at promoting sustainability and reducing waste. We saw a need for a space where people could come together to buy, sell, and trade pre-loved items, and thus, our thrift store was born. Since then, 
  we have grown into a thriving marketplace that connects sellers and buyers from all walks of life.
  
  Why Choose Us?
  Sustainable Shopping: Every purchase you make contributes to a more sustainable future. By choosing second-hand products, you're helping to reduce waste and minimize the environmental impact of consumerism.
  
  Support Local Sellers: When you shop with us, you're supporting local sellers and artisans. We empower individuals to sell their products, creating a vibrant community of creators and shoppers.
  
  Affordable Prices: We believe that quality shouldn't come at a high price. Our products are priced fairly, making it easy for everyone to find what they need without breaking the bank.
  
  Get in Touch
  We love hearing from our customers! If you have any questions, suggestions, or just want to say hi, feel free to contact us (details are mentioned on our Contact Us page).`;
  
    const lines = fullText.split("\n");
    let lineIndex = 0;
  
    const interval = setInterval(() => {
      if (lineIndex < lines.length) {
        textElement.innerText += (textElement.innerText ? "\n" : "") + lines[lineIndex];
        lineIndex++;
      } else {
        clearInterval(interval);
      }
    }, 1000); // Adjust speed of text reveal here
  });
  
  function handleImageLoad() {
    document.querySelector(".new-image").classList.add("loaded");
    document.querySelector(".cutting-image").classList.add("loaded");
  }
  