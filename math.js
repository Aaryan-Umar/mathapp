    let rightSound = new Audio("./correct.mp3")
    let wrongSound = new Audio('./error.mp3');
let mathPrefix = "🧠 What is "
let currentAns = 5;

function spawnNewQuestion() {
    let addend1 = Math.round(Math.random() * 5);
    let addend2 = Math.round(Math.random() * 5);
    if(addend1 == 0) addend1+=3;
    if(addend2 == 0) addend2 = Math.round(Math.random() * 4);
    if(addend1 == 5 && addend2 == 5) addend2 = 1;
    currentAns = addend1 + addend2;
    result.textContent = mathPrefix + addend1.toString() + " + " + addend2.toString + " ?";

}function press(num) {
  const input = document.getElementById("answerInput");
  input.value += num;
  submitAnswer(num);
}

function clearAnswer() {
  document.getElementById("answerInput").value = "";
  document.getElementById("result").textContent = "";
}

function submitAnswer(answer) {
  //const answer = parseInt(document.getElementById("answerInput").value);
  const result = document.getElementById("result");

  if (answer == currentAns) {
    result.textContent = "🎉 Correct! You're awesome!";
    result.style.color = "green";
    playRightSound()
       setTimeout(() => {
        spawnNewQuestion();
        clearAnswer();
    }, 700);
  } else {
    result.textContent = "❌ Try again, you can do it!";
    result.style.color = "red";
    playWrongSound();
  }
}


function playRightSound() {
    rightSound.play();
}
function playWrongSound() {

// Play the sound
wrongSound.play();

}

function goBack() {
  window.location.href = "index.html";
}
