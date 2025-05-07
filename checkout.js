document
  .getElementById("checkout-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Order placed successfully! Thank you for shopping with Shoplane 💖");
    window.location.href = "index.html"; // Redirect to homepage
  });
