    let rightSound = new Audio("./correct.mp3")
    let wrongSound = new Audio('./error.mp3');



function checkAnswer(answer) {
  const result = document.getElementById("result");
  if (answer === 5) {
    result.textContent = "🎉 Correct! Great job!";
    result.style.color = "green";
  } else {
    result.textContent = "❌ Oops! Try again.";
    result.style.color = "red";
    playWrongSound()
    setTimeout(() => {
        
    }, 700);
  }
}
function playRightSound() {
    rightSound.play()
}
function playWrongSound() {

// Play the sound
wrongSound.play();

}

function goBack() {
  window.location.href = "index.html";
}
