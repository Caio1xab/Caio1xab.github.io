//NAVBAR HAMBURGER
const mobileBtn = document.querySelector(".mobile-menu-btn");
let mobileMenu = document.querySelector(".mobile-menu");

mobileBtn.addEventListener("click", function () {
  mobileMenu.classList.toggle("hidden");
});

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const myNewText = ["Front-end developer", "Freelancer"];
const mytext = document.querySelector(".myText");
let sleepTime = 100;

let currentTextIndex = 0;

const writeMyText = async () => {
  while (true) {
    let curWord = myNewText[currentTextIndex];

    for (let i = 0; i < curWord.length; i++) {
      mytext.innerText = curWord.substring(0, i + 1);
      await sleep(sleepTime);
    }
    await sleep(sleepTime * 10);

    for (let i = curWord.length; i > 0; i--) {
      mytext.innerText = curWord.substring(0, i - 1);
      await sleep(sleepTime);
    }
    await sleep(sleepTime * 20);

    if (currentTextIndex === myNewText.length - 1) {
      currentTextIndex = 0;
    } else {
      currentTextIndex++;
    }
  }
};

writeMyText();
