```js
function boostNow() {
  const username = document.getElementById("username").value.trim();
  const packageType = document.getElementById("package").value;
  const result = document.getElementById("result");

  if (!username) {
    alert("Please enter your TikTok username");
    return;
  }

  // Fake delay simulation
  result.style.color = "#ff77b7";
  result.textContent = `🚀 Boosting packageType for @{username}... Please wait!`;

  setTimeout(() => {
    result.style.color = "#00ffae";
    result.textContent = `✅ Successfully boosted packageType for @{username}! Enjoy your viral growth!`;
  }, 3000);
}
```
