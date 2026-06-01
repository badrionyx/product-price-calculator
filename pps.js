let prices = [135000, 48000, 68000];

let names = [
    "iPhone 16 Pro",
    "Canon EOS R5",
    "Lenovo Legion"
];

let inputs = document.querySelectorAll(".in");

let calculateBtn = document.querySelector("#cal");
let refreshBtn = document.querySelector("#ref");

let totalDisplay = document.querySelector("#tot");
let receiptBox = document.querySelector("#receiptBox");

calculateBtn.addEventListener("click", () => {

    let total = 0;
    let receipt = "";

    inputs.forEach((input, index) => {

        let quantity = Number(input.value) || 0;

        let subtotal = quantity * prices[index];

        if (quantity > 0) {

            receipt += `
            <div class="item">
                ${names[index]}
                <span class="qty">x${quantity}</span>
                ₹${subtotal.toLocaleString("en-IN")}
            </div>
            `;
        }

        total += subtotal;
    });

    receipt += "<hr>";

    receipt += `
    <div class="grand-total">
        Total : ₹${total.toLocaleString("en-IN")}
    </div>
    `;

    receiptBox.innerHTML = receipt;

    totalDisplay.innerText =
        "₹ " + total.toLocaleString("en-IN");
});

refreshBtn.addEventListener("click", () => {

    inputs.forEach((input) => {
        input.value = "";
    });

    totalDisplay.innerText = "";
    receiptBox.innerHTML = "";
});