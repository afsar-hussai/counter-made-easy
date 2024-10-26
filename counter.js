let count = 0;

let display = document.getElementById("display");
display.textContent = count;
let increament = document.querySelector(".increament");
let decreament = document.querySelector(".decreament");
let toggleBtn = document.getElementById("toggleBtn");
let body = document.body;
let currentMode = "light-mode";

toggleBtn.addEventListener('click', () => {
    let newMode = currentMode === "dark-mode" ? "light-mode" : "dark-mode";
    body.className = newMode;
    currentMode = newMode;
})

increament.addEventListener('click', () => {
    count++;
    display.textContent = count;

})
decreament.addEventListener('click', () => {
    if (count > 0|| count<=-1) {
        count--;
        display.textContent = count;
    }
    else {
        let inputConfirm = confirm('Do You Want to Get Negative values')
        if (inputConfirm) {
            count--;
            display.textContent = count;

        }
    }


})