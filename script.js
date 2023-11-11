feather.replace()

document.querySelector('#troll').addEventListener('click', () => {
    window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", '_blank')
})

document.querySelector('#icone').addEventListener('click', () => {
    window.open("https://www.instagram.com/fk.raposito/", '_blank')
})

document.querySelector('#sol').addEventListener('click', () => {
    window.open("https://www.instagram.com/ana.freitas_8/", '_blank')
})

document.querySelector('#HTML').addEventListener('click', () => {
    window.open("https://pt.wikipedia.org/wiki/HTML", '_blank')
})

document.querySelector('#CSS').addEventListener('click', () => {
    window.open("https://pt.wikipedia.org/wiki/Cascading_Style_Sheets", '_blank')
})

document.querySelector('#JS').addEventListener('click', () => {
    window.open("https://pt.wikipedia.org/wiki/JavaScript", '_blank')
})

document.querySelector('#Pyt').addEventListener('click', () => {
    window.open("https://pt.wikipedia.org/wiki/Python", '_blank')
})

const titulos = ['Projec-TI 🎴', 'Projec-TI ☀️', 'Projec-TI 🌙']

const tempo = 1000

function mudar_emoji() {
    setTimeout(() => document.querySelector('title').textContent = titulos[0], tempo * 0)
    setTimeout(() => document.querySelector('title').textContent = titulos[1], tempo * 1)
    setTimeout(() => document.querySelector('title').textContent = titulos[2], tempo * 2)
}

mudar_emoji()

setInterval(mudar_emoji, tempo * 3)

const audio = new Audio('./gangan.mp3')
audio.loop = true

document.querySelector('#nub').addEventListener('mouseover', () => {
    
    audio.play()
})

document.querySelector('#nub').addEventListener('mouseout', () => {
    audio.pause()
    audio.currentTime = 0
})