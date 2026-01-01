const jokes = [
  "Is your name Google? Because you’ve got everything I’ve been searching for.",
  "I'm writing an article on the finer things in life, and I was wondering if I could interview you",
  "You must be French, because Eiffel for you!",
  "Do you believe in love at first sight, or should I walk by again?",
  "Are you a bank loan? Because you’ve got my interest!",
"If you were a triangle, you’d be an acute one",
" Do you have a name, or can I call you mine?"
];

let shuffledJokes = [];
let currentIndex = 0;

// shuffle function
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// call once at start
shuffledJokes = shuffle([...jokes]);

function generateJoke() {
  const bubble = document.getElementById("bubble");
  const btn = document.getElementById("jokeBtn");

  bubble.style.opacity = 0;

  setTimeout(() => {
    // get the next joke
    const joke = shuffledJokes[currentIndex];
    bubble.innerText = joke;
    bubble.style.opacity = 1;

    // move to next
    currentIndex++;

    // reshuffle when we reach the end
    if (currentIndex >= shuffledJokes.length) {
      shuffledJokes = shuffle([...jokes]);
      currentIndex = 0;
    }

    // change button text after first click
    if (btn.innerText !== "Another one!") {
      btn.innerText = "Another one!";
    }

  }, 200);
}
