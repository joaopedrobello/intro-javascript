const minus = document.getElementById('minus')
const plus = document.getElementById('plus')
const CURRENT_NUMBER = document.getElementById('counter')

let count = 0

function decrement() {
    count--
    CURRENT_NUMBER.innerHTML = count
    color()
}

function increment() {
    count++
    CURRENT_NUMBER.innerHTML = count
    color()
}

function color() {
    if (count < 0) CURRENT_NUMBER.style.color = "#ff0000";

    else CURRENT_NUMBER.style.color = "#000000"
}

minus.addEventListener("click", decrement, false)
plus.addEventListener("click", increment, false)

