const bookingForm = document.getElementById("booking-form");
const bookingMessage = document.getElementById("booking-message");

bookingForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("customer-name").value.trim();
  const service = document.getElementById("service-type").value;
  const date = document.getElementById("booking-date").value;

  if (!name || !service || !date) {
    bookingMessage.textContent = "Please complete all the required fields.";
    return;
  }

  bookingMessage.textContent =
    `Thank you, ${name}! Your ${service} request for ${date} has been recorded in this demo.`;

  bookingForm.reset();
});

// Set the earliest selectable booking date to today.
const bookingDate = document.getElementById("booking-date");

const today = new Date();
const year = today.getFullYear();
const month = String(today.getMonth() + 1).padStart(2, "0");
const day = String(today.getDate()).padStart(2, "0");

bookingDate.min = `${year}-${month}-${day}`;

// Smooth navigation for links within the page.
document.querySelectorAll('a[href^="#"]').forEach(function (link) {
  link.addEventListener("click", function (event) {
    const targetId = link.getAttribute("href");
    const target = document.querySelector(targetId);

    if (target) {
      event.preventDefault();
      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  });
});