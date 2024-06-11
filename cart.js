document.addEventListener("DOMContentLoaded", function () {
  function showCart() {
    var cart = JSON.parse(localStorage.getItem("cart")) || [];
    var cartContainer = document.getElementById("cartContainer");

    if (!cartContainer) {
      console.error("cartContainer not found");
      return;
    }

    cartContainer.innerHTML = "";

    if (cart.length === 0) {
      cartContainer.innerHTML = "<p>Your cart is empty.</p>";
    } else {
      cart.forEach(function (item, index) {
        var cartItem = document.createElement("div");
        cartItem.classList.add("cart-item");
        cartItem.innerHTML = `
            <img src="${item.image}" alt="${item.name}" />
            <div class="cart-item-info">
              <h3>${item.name}</h3>
              <p>Price: $${item.price}</p>
              <p>Rating: ${item.rating}</p>
              <button class="remove-button" onclick="removeFromCart(${index})">Remove</button>
            </div>
          `;
        cartContainer.appendChild(cartItem);
      });
    }
  }

  window.removeFromCart = function (index) {
    var cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    showCart();
  };

  showCart();
});
