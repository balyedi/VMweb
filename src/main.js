function IsNumeric(val) { return Number(val)==val; }
function printnotice(text) {
	console.log(`%c${text}`,"color: #21dbb9")
}
//const screen = document.getElementById("screen")
const memorysize = 5000000 // In bytes
waitingforkeypress = false
const printlog = console.log
var memory = new Uint8Array(memorysize) // Memory Define
const bit = 16
const screensize = {
	"width":600,
	"height":600
}
var codesrc = "../web/Hello World" // Code source for run
// Defining the registers
let registers = new Array()
registers["ax"] = {"high":0,"low":0}
registers["dx"] = {"high":0,"low":0}
registers["cx"] = {"high":0,"low":0}
registers["bx"] = {"high":0,"low":0}
// ------------------
printlog("%cVMweb","font-size: 23px;color: yellow") // Logo to console
printlog(memory) // Memory to console
printlog(registers) // Registers to console