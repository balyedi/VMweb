const biospath = "../web/bios"
const programpath = "../web/Hello%20World"
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
/*bios = new Array();
var xhr = new XMLHttpRequest();
xhr.open("GET", biospath, false);
xhr.overrideMimeType("application/x-binary; charset=ISO-8859-1");
xhr.send();*/
bios.bios = ""
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
while(waitingforkeypress) {
	document.addEventListener('keydown', function(event) {
		const key = event.key // "a", "1", "Shift", etc.
	});
}
var screen = document.getElementById("screen")
screen.style.width = `${screensize["width"]}px`
screen.style.height = `${screensize["height"]}px`
screen.style.color = "white"
var printChar = function(char) { // Printing a char from console
	registers.ax.low = char.charCodeAt(0)
	interrupt(16)
}
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
var onTwo = false
var skipped = false
var onInstruction = true
var xhr = new XMLHttpRequest();
xhr.open("GET", programpath, false);
xhr.overrideMimeType("application/x-binary; charset=ISO-8859-1");
xhr.send();
var result0 = xhr.responseText;
printlog([...result0])
printlog(result0.charCodeAt(1))
var i;
var result = `${bios.bios}${result0}`
for (i = 0; i < result.length;) {
	if(onInstruction) {
	switch(result[i].charCodeAt(0)) {
		/*case 205:
			interrupt(result[i+1].charCodeAt(0))
			onTwo = true
			skipped = true
			break
		// Dummy "case"s for some reasons... 
		case 16:
			break
		// --------------------------------
		case 31:*/

		case 1:
			printnotice("Instruction 1")
			break
		case 2:
			printnotice("Instruction 2")
			break
		case 3:
			printnotice("Instruction 3")
			break
		case 4:
			printnotice("Instruction 4")
			break
		case 5:
			printnotice("Instruction 5")
			break
		case 6:
			printnotice("Instruction 6")
			break
		case 7:
			printnotice("Instruction 7")
			break
		case 8:
			printnotice("Instruction 8")
			break
		case 9:
			printnotice("Instruction 9")
			break
		case 10:
			printnotice("Instruction 10")
			break
		case 11:
			printnotice("Instruction 11")
			break
		case 12:
			printnotice("Instruction 12")
			break
		case 13:
			printnotice("Instruction 13")
			break
		case 14:
			printnotice("Instruction 14")
			break
		case 15:
			printnotice("Instruction 15")
			break
		case 16:
			printnotice("Instruction 16")
			break
		case 17:
			printnotice("Instruction 17")
			break
		case 18:
			printnotice("Instruction 18")
			break
		case 19:
			printnotice("Instruction 19")
			break
		case 20:
			printnotice("Instruction 20")
			break
		case 21:
			printnotice("Instruction 21")
			break
		case 22:
			printnotice("Instruction 22")
			break
		case 23:
			printnotice("Instruction 23")
			break
		case 24:
			printnotice("Instruction 24")
			break
		case 25:
			printnotice("Instruction 25")
			break
		case 26:
			printnotice("Instruction 26")
			break
		case 27:
			printnotice("Instruction 27")
			break
		case 28:
			printnotice("Instruction 28")
			break
		case 29:
			printnotice("Instruction 29")
			break
		case 30:
			printnotice("Instruction 30")
			break
		case 31:
			printnotice("Instruction 31")
			break
		case 32:
			printnotice("Instruction 32")
			break
		case 33:
			printnotice("Instruction 33")
			break
		case 34:
			printnotice("Instruction 34")
			break
		case 35:
			printnotice("Instruction 35")
			break
		case 36:
			printnotice("Instruction 36")
			break
		case 37:
			printnotice("Instruction 37")
			break
		case 38:
			printnotice("Instruction 38")
			break
		case 39:
			printnotice("Instruction 39")
			break
		case 40:
			printnotice("Instruction 40")
			break
		case 41:
			printnotice("Instruction 41")
			break
		case 42:
			printnotice("Instruction 42")
			break
		case 43:
			printnotice("Instruction 43")
			break
		case 44:
			printnotice("Instruction 44")
			break
		case 45:
			printnotice("Instruction 45")
			break
		case 46:
			printnotice("Instruction 46")
			break
		case 47:
			printnotice("Instruction 47")
			break
		case 48:
			printnotice("Instruction 48")
			break
		case 49:
			printnotice("Instruction 49")
			break
		case 50:
			printnotice("Instruction 50")
			break
		case 51:
			printnotice("Instruction 51")
			break
		case 52:
			printnotice("Instruction 52")
			break
		case 53:
			printnotice("Instruction 53")
			break
		case 54:
			printnotice("Instruction 54")
			break
		case 55:
			printnotice("Instruction 55")
			break
		case 56:
			printnotice("Instruction 56")
			break
		case 57:
			printnotice("Instruction 57")
			break
		case 58:
			printnotice("Instruction 58")
			break
		case 59:
			printnotice("Instruction 59")
			break
		case 60:
			printnotice("Instruction 60")
			break
		case 61:
			printnotice("Instruction 61")
			break
		case 62:
			printnotice("Instruction 62")
			break
		case 63:
			printnotice("Instruction 63")
			break
		case 64:
			printnotice("Instruction 64")
			break
		case 65:
			printnotice("Instruction 65")
			break
		case 66:
			printnotice("Instruction 66")
			break
		case 67:
			printnotice("Instruction 67")
			break
		case 68:
			printnotice("Instruction 68")
			break
		case 69:
			printnotice("Instruction 69")
			break
		case 70:
			printnotice("Instruction 70")
			break
		case 71:
			printnotice("Instruction 71")
			break
		case 72:
			printnotice("Instruction 72")
			break
		case 73:
			printnotice("Instruction 73")
			break
		case 74:
			printnotice("Instruction 74")
			break
		case 75:
			printnotice("Instruction 75")
			break
		case 76:
			printnotice("Instruction 76")
			break
		case 77:
			printnotice("Instruction 77")
			break
		case 78:
			printnotice("Instruction 78")
			break
		case 79:
			printnotice("Instruction 79")
			break
		case 80:
			printnotice("Instruction 80")
			break
		case 81:
			printnotice("Instruction 81")
			break
		case 82:
			printnotice("Instruction 82")
			break
		case 83:
			printnotice("Instruction 83")
			break
		case 84:
			printnotice("Instruction 84")
			break
		case 85:
			printnotice("Instruction 85")
			break
		case 86:
			printnotice("Instruction 86")
			break
		case 87:
			printnotice("Instruction 87")
			break
		case 88:
			printnotice("Instruction 88")
			break
		case 89:
			printnotice("Instruction 89")
			break
		case 90:
			printnotice("Instruction 90")
			break
		case 91:
			printnotice("Instruction 91")
			break
		case 92:
			printnotice("Instruction 92")
			break
		case 93:
			printnotice("Instruction 93")
			break
		case 94:
			printnotice("Instruction 94")
			break
		case 95:
			printnotice("Instruction 95")
			break
		case 96:
			printnotice("Instruction 96")
			break
		case 97:
			printnotice("Instruction 97")
			break
		case 98:
			printnotice("Instruction 98")
			break
		case 99:
			printnotice("Instruction 99")
			break
		case 100:
			printnotice("Instruction 100")
			break
		case 101:
			printnotice("Instruction 101")
			break
		case 102:
			printnotice("Instruction 102")
			break
		case 103:
			printnotice("Instruction 103")
			break
		case 104:
			printnotice("Instruction 104")
			break
		case 105:
			printnotice("Instruction 105")
			break
		case 106:
			printnotice("Instruction 106")
			break
		case 107:
			printnotice("Instruction 107")
			break
		case 108:
			printnotice("Instruction 108")
			break
		case 109:
			printnotice("Instruction 109")
			break
		case 110:
			printnotice("Instruction 110")
			break
		case 111:
			printnotice("Instruction 111")
			break
		case 112:
			printnotice("Instruction 112")
			break
		case 113:
			printnotice("Instruction 113")
			break
		case 114:
			printnotice("Instruction 114")
			break
		case 115:
			printnotice("Instruction 115")
			break
		case 116:
			printnotice("Instruction 116")
			break
		case 117:
			printnotice("Instruction 117")
			break
		case 118:
			printnotice("Instruction 118")
			break
		case 119:
			printnotice("Instruction 119")
			break
		case 120:
			printnotice("Instruction 120")
			break
		case 121:
			printnotice("Instruction 121")
			break
		case 122:
			printnotice("Instruction 122")
			break
		case 123:
			printnotice("Instruction 123")
			break
		case 124:
			printnotice("Instruction 124")
			break
		case 125:
			printnotice("Instruction 125")
			break
		case 126:
			printnotice("Instruction 126")
			break
		case 127:
			printnotice("Instruction 127")
			break
		case 128:
			printnotice("Instruction 128")
			break
		case 129:
			printnotice("Instruction 129")
			break
		case 130:
			printnotice("Instruction 130")
			break
		case 131:
			printnotice("Instruction 131")
			break
		case 132:
			printnotice("Instruction 132")
			break
		case 133:
			printnotice("Instruction 133")
			break
		case 134:
			printnotice("Instruction 134")
			break
		case 135:
			printnotice("Instruction 135")
			break
		case 136:
			printnotice("Instruction 136")
			break
		case 137:
			printnotice("Instruction 137")
			break
		case 138:
			printnotice("Instruction 138")
			break
		case 139:
			printnotice("Instruction 139")
			break
		case 140:
			printnotice("Instruction 140")
			break
		case 141:
			printnotice("Instruction 141")
			break
		case 142:
			printnotice("Instruction 142")
			break
		case 143:
			printnotice("Instruction 143")
			break
		case 144:
			printnotice("Instruction 144")
			break
		case 145:
			printnotice("Instruction 145")
			break
		case 146:
			printnotice("Instruction 146")
			break
		case 147:
			printnotice("Instruction 147")
			break
		case 148:
			printnotice("Instruction 148")
			break
		case 149:
			printnotice("Instruction 149")
			break
		case 150:
			printnotice("Instruction 150")
			break
		case 151:
			printnotice("Instruction 151")
			break
		case 152:
			printnotice("Instruction 152")
			break
		case 153:
			printnotice("Instruction 153")
			break
		case 154:
			printnotice("Instruction 154")
			break
		case 155:
			printnotice("Instruction 155")
			break
		case 156:
			printnotice("Instruction 156")
			break
		case 157:
			printnotice("Instruction 157")
			break
		case 158:
			printnotice("Instruction 158")
			break
		case 159:
			printnotice("Instruction 159")
			break
		case 160:
			printnotice("Instruction 160")
			break
		case 161:
			printnotice("Instruction 161")
			break
		case 162:
			printnotice("Instruction 162")
			break
		case 163:
			printnotice("Instruction 163")
			break
		case 164:
			printnotice("Instruction 164")
			break
		case 165:
			printnotice("Instruction 165")
			break
		case 166:
			printnotice("Instruction 166")
			break
		case 167:
			printnotice("Instruction 167")
			break
		case 168:
			printnotice("Instruction 168")
			break
		case 169:
			printnotice("Instruction 169")
			break
		case 170:
			printnotice("Instruction 170")
			break
		case 171:
			printnotice("Instruction 171")
			break
		case 172:
			printnotice("Instruction 172")
			break
		case 173:
			printnotice("Instruction 173")
			break
		case 174:
			printnotice("Instruction 174")
			break
		case 175:
			printnotice("Instruction 175")
			break
		case 176: // Move to al (ax -> low)
			printnotice("Instruction 176\nInfo: mov ah, {value}")
			registers.ax.low = result[i+1].charCodeAt(0)
			break
		case 177:
			printnotice("Instruction 177")
			break
		case 178:
			printnotice("Instruction 178")
			break
		case 179:
			printnotice("Instruction 179")
			break
		case 180: // Move to ah (ax -> high)
			registers.ax.high = result[i+1].charCodeAt(0)
			printnotice("Instruction 180")
			break
		case 181:
			printnotice("Instruction 181")
			break
		case 182:
			printnotice("Instruction 182")
			break
		case 183:
			printnotice("Instruction 183")
			break
		case 184:
			printnotice("Instruction 184")
			break
		case 185:
			printnotice("Instruction 185")
			break
		case 186:
			printnotice("Instruction 186")
			break
		case 187:
			printnotice("Instruction 187")
			break
		case 188:
			printnotice("Instruction 188")
			break
		case 189:
			printnotice("Instruction 189")
			break
		case 190:
			printnotice("Instruction 190")
			break
		case 191:
			printnotice("Instruction 191")
			break
		case 192:
			printnotice("Instruction 192")
			break
		case 193:
			printnotice("Instruction 193")
			break
		case 194:
			printnotice("Instruction 194")
			break
		case 195:
			printnotice("Instruction 195")
			break
		case 196:
			printnotice("Instruction 196")
			break
		case 197:
			printnotice("Instruction 197")
			break
		case 198:
			printnotice("Instruction 198")
			break
		case 199:
			printnotice("Instruction 199")
			break
		case 200:
			printnotice("Instruction 200")
			break
		case 201:
			printnotice("Instruction 201")
			break
		case 202:
			printnotice("Instruction 202")
			break
		case 203:
			printnotice("Instruction 203")
			break
		case 204:
			printnotice("Instruction 204")
			break
		case 205: // INTERRUPT (int)
			printnotice("Instruction 205")
			interrupt(result[i+1].charCodeAt(0))
			onTwo = true
			skipped = true
			break
		case 206:
			printnotice("Instruction 206")
			break
		case 207:
			printnotice("Instruction 207")
			break
		case 208:
			printnotice("Instruction 208")
			break
		case 209:
			printnotice("Instruction 209")
			break
		case 210:
			printnotice("Instruction 210")
			break
		case 211:
			printnotice("Instruction 211")
			break
		case 212:
			printnotice("Instruction 212")
			break
		case 213:
			printnotice("Instruction 213")
			break
		case 214:
			printnotice("Instruction 214")
			break
		case 215:
			printnotice("Instruction 215")
			break
		case 216:
			printnotice("Instruction 216")
			break
		case 217:
			printnotice("Instruction 217")
			break
		case 218:
			printnotice("Instruction 218")
			break
		case 219:
			printnotice("Instruction 219")
			break
		case 220:
			printnotice("Instruction 220")
			break
		case 221:
			printnotice("Instruction 221")
			break
		case 222:
			printnotice("Instruction 222")
			break
		case 223:
			printnotice("Instruction 223")
			break
		case 224:
			printnotice("Instruction 224")
			break
		case 225:
			printnotice("Instruction 225")
			break
		case 226:
			printnotice("Instruction 226")
			break
		case 227:
			printnotice("Instruction 227")
			break
		case 228:
			printnotice("Instruction 228")
			break
		case 229:
			printnotice("Instruction 229")
			break
		case 230:
			printnotice("Instruction 230")
			break
		case 231:
			printnotice("Instruction 231")
			break
		case 232:
			printnotice("Instruction 232")
			break
		case 233:
			printnotice("Instruction 233")
			break
		case 234:
			printnotice("Instruction 234")
			break
		case 235:
			printnotice("Instruction 235")
			break
		case 236:
			printnotice("Instruction 236")
			break
		case 237:
			printnotice("Instruction 237")
			break
		case 238:
			printnotice("Instruction 238")
			break
		case 239:
			printnotice("Instruction 239")
			break
		case 240:
			printnotice("Instruction 240")
			break
		case 241:
			printnotice("Instruction 241")
			break
		case 242:
			printnotice("Instruction 242")
			break
		case 243:
			printnotice("Instruction 243")
			break
		case 244:
			printnotice("Instruction 244")
			break
		case 245:
			printnotice("Instruction 245")
			break
		case 246:
			printnotice("Instruction 246")
			break
		case 247:
			printnotice("Instruction 247")
			break
		case 248:
			printnotice("Instruction 248")
			break
		case 249:
			printnotice("Instruction 249")
			break
		case 250:
			printnotice("Instruction 250")
			break
		case 251:
			printnotice("Instruction 251")
			break
		case 252:
			printnotice("Instruction 252")
			break
		case 253:
			printnotice("Instruction 253")
			break
		case 254:
			printnotice("Instruction 254")
			break
		case 255:
			printnotice("Instruction 255")
			break
		default:
			//if(onTwo == false) {
			//printlog(result[i].charCodeAt(0))
			//onTwo = true
			//}
			printlog("%cError: Undefined Value\nInfo:\ni:"+i+"\nCode:"+result[i].charCodeAt(0)+"\nCharacter equivalent of code:"+result[i],"color: red")
	}
	}
	i++
}
/*$.get("../web/Hello World", function(data) {
	printlog([...data])
	printlog(data.charCodeAt(10))
});*/
// Console stuff (Things you didn't need)
function printText(text) {
	for (var i = 0; i < text.length; i++) {
		printChar(text.charAt(i));
	}
}
