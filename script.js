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

// shuffle function
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// initialize shuffled arrays
shuffledJokes = shuffle([...jokes]);
shuffledImages = shuffle([...images]);

function generateJoke() {
  const bubble = document.getElementById("bubble");
  const jamun = document.getElementById("jamun");
  const btn = document.getElementById("jokeBtn");

  // bubble pop effect
  bubble.classList.remove("pop");
  void bubble.offsetWidth; // reflow to restart animation
  bubble.classList.add("pop");

  bubble.style.opacity = 0;

  setTimeout(() => {
    // get next joke
    const joke = shuffledJokes[currentJokeIndex];
    bubble.innerText = joke;
    bubble.style.opacity = 1;

    // advance joke index and reshuffle if needed
    currentJokeIndex++;
    if (currentJokeIndex >= shuffledJokes.length) {
      shuffledJokes = shuffle([...jokes]);
      currentJokeIndex = 0;
    }

    // get next jamun image
    const imgSrc = shuffledImages[currentImageIndex];
    jamun.src = imgSrc;

    // advance image index and reshuffle if needed
    currentImageIndex++;
    if (currentImageIndex >= shuffledImages.length) {
      shuffledImages = shuffle([...images]);
      currentImageIndex = 0;
    }

    // jamun wiggle
    jamun.classList.add("wiggle");
    setTimeout(() => jamun.classList.remove("wiggle"), 400);

    // change button text after first click
    if (btn.innerText !== "Another one!") {
      btn.innerText = "Another one!";
    }
  }, 200);
}

// attach to button click
document.getElementById("jokeBtn").addEventListener("click", generateJoke);