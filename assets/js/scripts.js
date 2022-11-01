function timeout(time) {
  return new Promise(resolve => setTimeout(resolve, time * 1000));
}

document.addEventListener("DOMContentLoaded", async e => {
  const refs = {
    home: document.querySelector(".home"),
    welcome: document.querySelector(".welcome"),
    step1: document.querySelector(".welcome .step-1"),
    step2: document.querySelector(".welcome .step-2"),
    nav: document.querySelector(".home nav"),
    cta: document.querySelector(".call-to-action"),
    cards: document.querySelectorAll(".card"),
    modal: document.querySelector(".card-modal"),
  }

  refs.modal.addEventListener("click", () => refs.modal.classList.remove("open"));

  // // STEP 1
  // refs.step1.classList.add("fade-in");
  // await timeout(3);
  // refs.step1.classList.remove("fade-in");
  // refs.step1.classList.add("fade-out-long");
  // await timeout(4);
  //
  // // STEP 2
  // refs.step2.classList.add("fade-in-long");
  // await timeout(4);
  // refs.step2.classList.remove("fade-in-long");
  // refs.step2.classList.add("fade-out-long");
  // await timeout(4);

  // HOME
  refs.welcome.classList.add("hidden");
  refs.home.classList.remove("hidden");

  refs.nav.classList.add("slide-bottom");
  await timeout(0.8);
  refs.cta.classList.add("slide-right");

  await timeout(0.5);

  for (let i = 0; i < refs.cards.length; i++) {
    refs.cards[i].addEventListener("click", () => refs.modal.classList.add("open"));
    await timeout((300 * (i + 1)) / 1000);
    refs.cards[i].classList.add("slide-left");
  }
});
