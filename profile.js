const form = document.getElementById("profile-form");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const userData = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    address: document.getElementById("address").value,
  };

  localStorage.setItem("userProfile", JSON.stringify(userData));
  alert("Profile saved successfully!");
});

// Auto-fill if user already saved
window.onload = function () {
  const saved = JSON.parse(localStorage.getItem("userProfile"));
  if (saved) {
    document.getElementById("name").value = saved.name;
    document.getElementById("email").value = saved.email;
    document.getElementById("address").value = saved.address;
  }
};
