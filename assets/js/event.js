var imageElement = document.getElementById('garland')

var imagePaths = ['./assets/event/garland/1.png', './assets/event/garland/2.png', './assets/event/garland/3.png', './assets/event/garland/4.png']

var currentIndex = 0

function changeImage() {
	imageElement.src = imagePaths[currentIndex]

	currentIndex = (currentIndex + 1) % imagePaths.length
}

setInterval(changeImage, 1000)
