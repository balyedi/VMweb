var screen = document.getElementById("screen")
screen.style.width = `${screensize["width"]}px`
screen.style.height = `${screensize["height"]}px`
screen.style.color = "white"
var printChar = function(char) { // Printing a char from console
	registers.ax.low = char.charCodeAt(0)
	interrupt(16)
}