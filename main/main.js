const electron = require("electron")
const path = require("path")
const url = require("url")

console.log('From main.js')

const app = electron.app
const BrowserWindow = electron.BrowserWindow

let win

var createWindow = function() {
    win = new BrowserWindow({
        webPreferences: {
            nodeIntegration: true,
            enableRemoteModule: true
        }
    })
    win.loadURL(url.format({
        pathname: path.join(__dirname, "main.html"),
        protocol: 'file',
        slashes: true
    }))

    win.webContents.openDevTools()
    win.on("closed", () => {
        win = null
    })
}

app.on('ready', createWindow)

/**
 * For MAC OC
 */
app.on('window-all-closed', () => {
    if(process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', () => {
    if(win === null) {
        createWindow()
    }
})