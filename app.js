const count = document.querySelector(".tasbeeh__counter")
const title = document.querySelector(".tasbeeh__title")
const display = document.querySelector(".tasbeeh__display")
const onButton = document.querySelector(".tasbeeh__on")
let offset = 0

function inc() {
    offset = offset + 1
    count.innerHTML = offset
    if (offset < 33) {
        title.innerHTML = "Subhanallah"
    } else if (offset < 66) {
        title.innerHTML = "Alhamdulillah"
    } else if (offset < 99) {
        title.innerHTML = "Allohu Akbar"
    } else {
        offset = 0
    }
}

function reset() {
    offset = 0
    count.innerHTML = offset
}
onButton.addEventListener('click', () => {
    if (display.style.backgroundColor === 'rgb(0, 255, 255)') {
        display.style.backgroundColor = '';
    } else {
        display.style.backgroundColor = '#00ffff'
    }
});
