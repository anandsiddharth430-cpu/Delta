const input = document.getElementById("urlInput");
const button = document.getElementById("processBtn");
const status = document.getElementById("status");
const result = document.getElementById("result");

button.addEventListener("click", () => {
  const url = input.value.trim();

  result.hidden = true;
  result.textContent = "";

  if (!url) {
    status.textContent = "Please paste a TeraBox link first.";
    return;
  }

  try {
    new URL(url);
  } catch {
    status.textContent = "Please enter a valid URL.";
    return;
  }

  status.textContent =
    "Link received. Secure API connection will be added through a backend.";
});
