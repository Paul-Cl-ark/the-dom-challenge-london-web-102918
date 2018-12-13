let counter = document.querySelector('#counter')
const plus = document.getElementById('+')
const minus = document.getElementById('-')
const heart = document.getElementById('<3')
const pause = document.getElementById('pause')
const formEl = document.getElementById('comment-form')
const comments = document.getElementById('list')
const likes = document.getElementsByClassName('likes')[0]

let isPaused = false
let interval = setInterval(count, 2000)
let likeCount = 0

function count () {
  if (!isPaused) {
    counter.innerText++
  }
}

function decrement () {
  if (!isPaused) {
    counter.innerText--
  }
}

function increment () {
  if (!isPaused) {
    counter.innerText++
  }
}

function pauseCounter () {
  if (!isPaused) {
    isPaused = true
    heart.disabled = true
    plus.disabled = true
    minus.disabled = true
    pause.innerText = 'resume'
  } else {
    isPaused = false
    heart.disabled = false
    plus.disabled = false
    minus.disabled = false
    pause.innerText = 'pause'
  }
}

function likeSecond () {
  let second = counter.innerText
  let like = document.createElement('li')
  like.innerText = `${second} - liked ${likeCount} times because ${second} is so cool.`
  likes.appendChild(like)
  likeCount++
}

function addComment (text) {
  let newComment = document.createElement('p')
  newComment.innerText = text
  comments.append(newComment)
}

minus.addEventListener('click', decrement)
plus.addEventListener('click', increment)
pause.addEventListener('click', pauseCounter)
heart.addEventListener('click', likeSecond)
formEl.addEventListener('submit', function(event) {
  event.preventDefault()
  let input = document.getElementById('new-comment')
  addComment(input.value)
  input.value = ''
})
