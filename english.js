const words = [
  {
    word: "apple",
    image: "images/apple.png",
    sentence: "I ate a juicy red apple."
  },
  {
    word: "dog",
    image: "images/dog.png",
    sentence: "The dog barked happily."
  },
  {
    word: "sun",
    image: "images/sun.png",
    sentence: "The sun is bright today."
  },
  {
    word: "fan",
    image: "images/fan.png",
    sentence: "The fan keeps me cool."
  },
  {
    word: "cat",
    image: "images/cat.png",
    sentence: "The cat is sleeping on the mat."
  },
  {
    word: "bed",
    image: "images/bed.png",
    sentence: "I sleep in my cozy bed at night."
  }
];

let currentIndex = 0;

function displayWord() {
  const entry = words[currentIndex];
  document.getElementById("word").textContent = entry.word;
  document.getElementById("image").src = entry.image;
  document.getElementById("image").alt = entry.word;
  document.getElementById("sentence").textContent = entry.sentence;
}

function nextWord() {
  currentIndex = (currentIndex + 1) % words.length;
  displayWord();
}

function goBack() {
  window.location.href = "index.html";
}

// Show the first word on page load
window.onload = displayWord;
