let previous = document.querySelector("#previous")
let next = document.querySelector("#next")
let audio = document.querySelector("#audio")
let img = document.querySelector("#image")
let pause = document.querySelector("#pause")
let valume = document.querySelector("input")
let rangeSlider = document.querySelector("#rangeSlider")
let i = 0;
let songArray = [
    "mp3-songs/song-1.mp3",
    "mp3-songs/song-3.mp3",
    "mp3-songs/song-4.mp3"
]

let imageArray = [
    "images/along-img.jpg",
    "images/alone-girl.jpg",
    "images/doll-img.jpg"
]

next.addEventListener("click", () => {
    i++;
    if (i > songArray.length)
        i = 0;
    img.setAttribute("src", imageArray[i])
    audio.setAttribute("src", songArray[i])
    pause.setAttribute("src", "images/pause.png")
    audio.play();
})

previous.addEventListener("click", () => {
    i--;
    if (i < 0)
        i = songArray.length - 1;
    img.setAttribute("src", imageArray[i])
    audio.setAttribute("src", songArray[i])
    pause.setAttribute("src", "images/pause.png")
    audio.play();
})

let num = 1;
pause.addEventListener("click", () => {
    if (num === 0) {
        audio.pause()
        pause.setAttribute("src", "images/play.png")
        num = 1;
    }
    else {
        audio.play()
        pause.setAttribute("src", "images/pause.png")
        num = 0;
    }

})
const valumeRange = (e) => {
    audio.volume = e.target.value
}

valume.addEventListener("input", valumeRange)


// let duration = audio.duration
// let currentTime = audio.currentTime

setInterval(() => {
    rangeSlider.value = audio.currentTime * 100 / audio.duration
}, 1000)


rangeSlider.addEventListener("change", function () {
    audio.currentTime = rangeSlider.value / 100 * audio.duration
})
