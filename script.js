// Smooth Scrolling Functionality
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

// Form Validation Functionality
document.querySelector("form").addEventListener("submit", function (event) {
  var isValid = true;

  // Check if name field is empty
  if (!this.name.value.trim()) {
    isValid = false;
    alert("Please enter your name.");
  }

  // Check if email field is empty
  if (!this.email.value.trim()) {
    isValid = false;
    alert("Please enter your email.");
  }

  // Check if message field is empty
  if (!this.message.value.trim()) {
    isValid = false;
    alert("Please enter your message.");
  }

  // Prevent form submission if validation fails
  if (!isValid) {
    event.preventDefault();
  }
});

// Modal Window Functionality
var modal = document.getElementById("modal");
var modalImg = document.querySelector(".modal-img");

function openModal(src) {
  modal.style.display = "block";
  modalImg.src = src;
}

// Get the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};