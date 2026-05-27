let inputs = document.querySelectorAll(".in");

let calculateBtn = document.querySelector("#cal");
let refreshBtn = document.querySelector("#ref");

let totalDisplay = document.querySelector("#tot");

calculateBtn.addEventListener("click", () => {
  let prices = [135000, 48000, 68000];

  let total = 0;

  inputs.forEach((input, index) => {
    let quantity = Number(input.value);

    total += quantity * prices[index];
  });

  totalDisplay.innerText = "₹ " + total;
});

refreshBtn.addEventListener("click", () => {
  inputs.forEach((input) => {
    input.value = "";
  });

  totalDisplay.innerText = "";
});
