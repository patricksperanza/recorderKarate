let hotCrossBuns = new Audio('/audio/hotCrossBuns.mp3')
const play = document.querySelector('.play')
play.addEventListener('click', playAudio)

function playAudio(){
    hotCrossBuns.play()
    console.log('play')
}