const form = document.getElementById("contact-form");
const gallery = document.getElementById("activity-gallery");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const scriptURL = "https://script.google.com/macros/s/AKfycbyfMX4TtsSUnlbkF46vPdrLi2GZlJCuqqYgiD3nd3UZsruQigIPB9_m9WHrS7OI2o7s/exec";
  const formData = new FormData(form);

  try {
    await fetch(scriptURL, { method: "POST", body: formData });

    // Hide form
    form.style.display = "none";

    // Show only image + text
    gallery.style.display = "block";

  } catch (error) {
    console.error("Error!", error.message);
    alert("⚠️ Network error! Please try again.");
  }
});
