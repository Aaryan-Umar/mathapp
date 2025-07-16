function checkAnswer(answer) {
  const result = document.getElementById("result");
  if (answer === 5) {
    result.textContent = "🎉 Correct! Great job!";
    result.style.color = "green";
  } else {
    result.textContent = "❌ Oops! Try again.";
    result.style.color = "red";
  }
}

function goBack() {
  window.location.href = "index.html";
}
