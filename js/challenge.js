counter = document.querySelector('#counter')
let minus = document.querySelector('#minus')
let plus = document.querySelector('#plus')
let heart = document.querySelector('#heart')
let pause = document.querySelector('#pause')
let commentForm = document.querySelector('#comment-form')
let commentInput = document.querySelector('#comment-input')
let likesList = document.querySelector('.likes')

let counterEvent = () => {
    setInterval(() => {
        counter.textContent = parseInt(counter.textContent) + 1
    }, 1000)
}

document.addEventListener('DOMContentLoaded', () => {
    counterEvent()
})