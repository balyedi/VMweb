/*var memcanvas = document.getElementById("memPaste")
var memctx = memcanvas.getContext("2d")*/
var changeMem = function() {
	let valueChangeMem = document.getElementById("memVal").value
	let valueLvlMem = Number(document.getElementById("memLvl").value)
	if(IsNumeric(valueChangeMem)) {
		memory[valueLvlMem] = valueChangeMem
	} else {
		memory[valueLvlMem] = valueChangeMem.charCodeAt(0)
	}
	printlog(memory)
}

var flushMem = function() {
	memory = ""
	memory = new Uint8Array(memorysize)
	printlog(memory)
}

var printMem = function() {
	memctx.font = "30px Arial"
	memctx.fillText(memory, 10, 50)
}