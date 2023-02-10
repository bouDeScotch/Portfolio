// Making "hacker" effect on BOUDESCOTCH
const usedChars = "abcdefghijklmnopqrstuvwxyz0123456789/&%$£@!#*()[]{}";

document.querySelector("h1").onmouseover = event => {
  const startingText = event.target.dataset.value;

  const iterationsPerLetter = 5;
  const frameDuration = 750 / startingText.length / iterationsPerLetter;

  let iterations = 0;
  const interval = setInterval(() => {
  event.target.innerText = startingText.split("")
    .map((letter, index) => {
      if(index < iterations + 2) {
        return startingText[index].toUpperCase();
      }

      return usedChars[Math.floor(Math.random() * usedChars.length)]
    })
    .join("").toUpperCase();

    iterations += 1 / iterationsPerLetter;
    if (iterations >= startingText.length) {
      clearInterval(interval)
    }
  }, frameDuration);
}
