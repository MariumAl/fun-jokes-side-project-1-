const jokes = [
  "Is your name Google? Because you’ve got everything I’ve been searching for.",
  "I'm writing an article on the finer things in life, and I was wondering if I could interview you",
  "You must be French, because Eiffel for you!",
  "Do you believe in love at first sight, or should I walk by again?",
  "Are you a bank loan? Because you’ve got my interest!",
  "If you were a triangle, you’d be an acute one",
  "Do you have a name, or can I call you mine?"
];

const images = ["images1.png", "images2.png", "images3.png", "images4.png"]; 


let shuffledJokes = [];
let currentJokeIndex = 0;

let shuffledImages = [];
let currentImageIndex = 0;

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}


shuffledJokes = shuffle([...jokes]);
shuffledImages = shuffle([...images]);

function generateJoke() {
  const bubble = document.getElementById("bubble");
  const jamun = document.getElementById("jamun");
  const btn = document.getElementById("jokeBtn");

  bubble.classList.remove("pop");
  void bubble.offsetWidth; 
  bubble.classList.add("pop");

  bubble.style.opacity = 0;

  setTimeout(() => {
    const joke = shuffledJokes[currentJokeIndex];
    bubble.innerText = joke;
    bubble.style.opacity = 1;

    currentJokeIndex++;
    if (currentJokeIndex >= shuffledJokes.length) {
      shuffledJokes = shuffle([...jokes]);
      currentJokeIndex = 0;
    }

    const imgSrc = shuffledImages[currentImageIndex];
    jamun.src = imgSrc;

    currentImageIndex++;
    if (currentImageIndex >= shuffledImages.length) {
      shuffledImages = shuffle([...images]);
      currentImageIndex = 0;
    }

    jamun.classList.add("wiggle");
    setTimeout(() => jamun.classList.remove("wiggle"), 400);

    if (btn.innerText !== "Another one!") {
      btn.innerText = "Another one!";
    }
  }, 200);
}

document.getElementById("jokeBtn").addEventListener("click", generateJoke);
