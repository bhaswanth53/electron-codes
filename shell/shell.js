const openBtn = document.getElementById("openBtn")
const shell = require("electron").shell

openBtn.addEventListener("click", function(event) {
    // shell.showItemInFolder('/home/bhaswanth/Bhaswanth/F/Technologies/Electron/demo/demo.txt')
    shell.openExternal("file://" + '/home/bhaswanth/Bhaswanth/F/Technologies/Electron/demo/okay.txt')
})