    let rightSound = new Audio("./correct.mp3")
    let wrongSound = new Audio('./error.mp3');
let mathPrefix = "🧠 What is "

function spawnNewQuestion() {
    let addend1 = Math.round(Math.random() * 5);
    let addend2 = Math.round(Math.random() * 5);
    if(addend1 == 0) addend1+=3;
    if(addend2 == 0) addend2 = Math.round(Math.random() * 4);
    if(addend1 == 5 && addend2 == 5) addend2 = 1;
    if(times % 4 == 0) addend2 = 1; addend1 + 2
    answer = addend1 + addend2;
    result.textContent = mathPrefix + addend1.toString() + " + " + addend2.toString

}
function checkAnswer(answer) {
  const result = document.getElementById("result");
  if (answer === 5) {
    result.textContent = "🎉 Correct! Great job!";
    result.style.color = "green";
        setTimeout(() => {
        spawnNewQuestion()
    }, 700);
  } else {
    result.textContent = "❌ Oops! Try again.";
    result.style.color = "red";
    playWrongSound()

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
