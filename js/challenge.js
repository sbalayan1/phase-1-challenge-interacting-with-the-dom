counter = document.querySelector('#counter')
let minus = document.querySelector('#minus')
let plus = document.querySelector('#plus')
let heart = document.querySelector('#heart')
let pause = document.querySelector('#pause')
let commentForm = document.querySelector('#comment-form')
let commentInput = document.querySelector('#comment-input')
let commentList = document.querySelector('.comments')
let likesList = document.querySelector('.likes')

let controlInterval = () => {
    if (intervalButton.textContent === ' pause ') {
        clearInterval(counterEvent)
        intervalButton.textContent = ' resume '
        disableListeners()
    } else if (intervalButton.textContent === ' resume ') {
        counterEvent = setInterval(() => {counter.textContent = parseInt(counter.textContent) + 1}, 1000)
        intervalButton.textContent = ' pause '
        enableListeners()
    }
}

let addListeners = () => {
    minus.addEventListener('click', () => counter.textContent = parseInt(counter.textContent) - 1)
    plus.addEventListener('click', () => counter.textContent = parseInt(counter.textContent) + 1)
    heart.addEventListener('click', () => {    
        let target = parseInt(counter.textContent)
        let foundLi = document.getElementById(target)
        if (foundLi) {
            likedNumbers[target] ++
            foundLi.textContent = `You liked ${target} ${likedNumbers[target]} times`
        } else {
            likedNumbers[target] = 1
            let li = document.createElement('li')
            li.id = target
            li.textContent = `You liked ${target} ${likedNumbers[target]} time.`
            likesList.append(li)
        }
    })
}

let enableListeners = () => {
    minus.disabled = false
    plus.disabled = false
    heart.disabled = false
}

let disableListeners = () => {
    minus.disabled = true
    plus.disabled = true
    heart.disabled = true
}

let deleteComment = (e) => {
    e.target.parentElement.remove()
}

let submitComment = (e) => {
    e.preventDefault()
    let li = document.createElement('li')
    let button = document.createElement('button')
    li.textContent = commentInput.value
    button.textContent = 'X'
    button.addEventListener('click', deleteComment)
    li.append(button)
    commentList.append(li)
}

document.addEventListener('DOMContentLoaded', () => {
    intervalButton.addEventListener('click', controlInterval)
    commentForm.addEventListener('submit', submitComment)
    addListeners()
})