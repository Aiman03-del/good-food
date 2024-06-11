// add to cart
document.addEventListener("DOMContentLoaded", function () {
  window.addToCart = function (button) {
    var item = button.closest(".popular-item");
    var name = item.getAttribute("data-name");
    var price = item.getAttribute("data-price");
    var rating = item.getAttribute("data-rating");
    var image = item.getAttribute("data-image");

    var cartItem = {
      name: name,
      price: price,
      rating: rating,
      image: image,
    };

    var cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(cartItem);
    localStorage.setItem("cart", JSON.stringify(cart));

    alert(name + " has been added to your cart.");
  };
});

// product
document.querySelector(".see-more").addEventListener("click", function () {
  const extraItems = document.querySelector(".extra-items");
  if (extraItems.style.display === "none" || extraItems.style.display === "") {
    extraItems.style.display = "flex";
    this.textContent = "See Less Products";
  } else {
    extraItems.style.display = "none";
    this.textContent = "See More Products";
  }
});
//Subscription message
function validateEmail(email) {
  var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

function subscribe() {
  var emailInput = document.getElementById("emailInput").value;
  var successMessage = document.getElementById("successMessage");
  var errorMessage = document.getElementById("errorMessage");
  var emptyMessage = document.getElementById("emptyMessage");

  successMessage.style.display = "none";
  errorMessage.style.display = "none";
  emptyMessage.style.display = "none";

  if (emailInput === "") {
    emptyMessage.style.display = "block";
  } else if (!validateEmail(emailInput)) {
    errorMessage.style.display = "block";
  } else {
    successMessage.style.display = "block";
  }
}
