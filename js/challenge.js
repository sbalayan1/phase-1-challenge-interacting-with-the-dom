let counter = document.querySelector('#counter')
let minus = document.querySelector('#minus')
let plus = document.querySelector('#plus')
let heart = document.querySelector('#heart')
let intervalButton = document.querySelector('#pause')
let commentForm = document.querySelector('#comment-form')
let commentInput = document.querySelector('#comment-input')
let likesList = document.querySelector('.likes')
let counterEvent = setInterval(() => {counter.textContent = parseInt(counter.textContent) + 1}, 1000)



let controlInterval = () => {
    if (intervalButton.textContent === ' pause ') {
        console.log('paused')
        clearInterval(counterEvent)
        intervalButton.textContent = ' resume '
        removeListeners()
    } else if (intervalButton.textContent === ' resume ') {
        console.log('resumed')
        counterEvent = setInterval(() => {counter.textContent = parseInt(counter.textContent) + 1}, 1000)
        intervalButton.textContent = ' pause '
        addListeners()
    }
}

let addListeners = () => {
    minus.addEventListener('click', () => {counter.textContent = parseInt(counter.textContent) - 1})
    plus.addEventListener('click', () => {counter.textContent = parseInt(counter.textContent) + 1})
    heart.addEventListener('click', () => {})
    minus.disabled = false
    plus.disabled = false
    heart.disabled = false
}

let removeListeners = () => {
    minus.removeEventListener('click', () => {})
    plus.removeEventListener('click', () => {})
    heart.removeEventListener('click', () => {})
    minus.disabled = true
    plus.disabled = true
    heart.disabled = true
}

document.addEventListener('DOMContentLoaded', () => {
    counterEvent
    intervalButton.addEventListener('click', controlInterval)
    addListeners()
})