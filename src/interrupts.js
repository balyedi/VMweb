var interrupt = function(int) {
	switch(int) {
		case 16:
			if(registers.ax.high == 14) {
				screen.innerHTML = `${screen.innerHTML}${String.fromCharCode(registers.ax.low)}`
			} else {
				printnotice("Notice: interrupt 10h(16) is called but isn't set to teletype mode(mov ah, 0x0e)")
			}
			break
		default:
			printlog("%cError: Unknown Interrupt Code","color: red")
	}
}