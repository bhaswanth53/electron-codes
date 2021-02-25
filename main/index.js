console.log('From index.js')

const { BrowserWindow } = require('electron').remote;
const path = require("path")
const url = require("url")

let button = document.getElementById('winBtn')
button.addEventListener('click', function() {
    let winThree = new BrowserWindow({
        webPreferences: {
            nodeIntegration: true,
            enableRemoteModule: true
        }
    })
    winThree.loadURL(url.format({
        pathname: path.join(__dirname, "sub.html"),
        protocol: 'file',
        slashes: true
    }))

    winThree.webContents.openDevTools()
    winThree.on("closed", () => {
        winThree = null
    })
})