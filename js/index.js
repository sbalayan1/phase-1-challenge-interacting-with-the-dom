const counter = document.getElementById('counter')
const pause = document.getElementById('pause')
const heart = document.getElementById('heart')
const plus = document.getElementById('plus')
const minus = document.getElementById('minus')
const submit = document.getElementById('comment-form')
const likesObj = {}
let timer = startTimer(counter)

pause.addEventListener('click', handleTimer)
plus.addEventListener('click', (e) => {handleClick(e)})
minus.addEventListener('click', (e) => {handleClick(e)})
heart.addEventListener('click', (e) => {handleClick(e)})
submit.addEventListener('submit', (e) => {handleSubmit(e)})



function startTimer(ctrElem) {
    return setInterval(() => ctrElem.textContent = parseInt(ctrElem.textContent, 10)+ 1, 1000)
}

function handleTimer() {
    if (pause.innerText === "pause") return handlePause()
    if (pause.innerText === "resume") return handleResume()
}

function handlePause() {
    clearInterval(timer)
    pause.textContent = "resume"
    minus.disabled = true
    heart.disabled = true
    plus.disabled = true
}

function handleResume () {
    timer = startTimer(counter)
    pause.textContent = "pause"
    minus.disabled = false
    heart.disabled = false
    plus.disabled = false
}

function handleLikes() {
    const likesList = document.querySelector('.likes')
    const likedNum = counter.textContent
    if (likedNum in likesObj) {
        likesObj[likedNum] += 1
        const likedElem = likesList.querySelector(`[id="${likedNum}"]`)
        likedElem.textContent = `${likedNum} was liked ${likesObj[likedNum]} times`
        
    } else {
        likesObj[likedNum] = 1
        const li = document.createElement('li')
        li.id = likedNum
        li.name = likedNum
        li.textContent = `${likedNum} was liked ${likesObj[likedNum]} times`
        likesList.append(li)
    }
}

function handleClick(e) {
    if (e.target.id === "plus") counter.textContent = parseInt(counter.textContent, 10) + 1
    if (e.target.id === "minus") counter.textContent = parseInt(counter.textContent, 10) - 1
    if (e.target.id === "heart") handleLikes()
}

function handleSubmit(e) {
    e.preventDefault()
    console.log('submitted')
    const cmtContainer = document.getElementById('list')
    const li = document.createElement('li')
    li.textContent =  e.target.comment.value
    cmtContainer.append(li)
}

