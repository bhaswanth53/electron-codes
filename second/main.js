const electron = require("electron")
const path = require("path")
const url = require("url")

const app = electron.app
const BrowserWindow = electron.BrowserWindow
const ipc = electron.ipcMain
const dialog = electron.dialog

let win

var createWindow = function() {
    win = new BrowserWindow({
        show: false,
        webPreferences: {
            nodeIntegration: true,
            enableRemoteModule: true
        }
    })
    win.loadURL(url.format({
        pathname: path.join(__dirname, "ipc.html"),
        protocol: 'file',
        slashes: true
    }))

    win.webContents.openDevTools()
    win.on("closed", () => {
        win = null
    })

    win.once('ready-to-show', function() {
        win.show()
    })
}

ipc.on('async-message', function(event) {
    // dialog.showErrorBox('An Error Box', 'Demo of an error message')
    event.sender.send('async-reply', 'Main process opened the error dialog')
})

ipc.on('sync-message', function(event) {
    event.returnValue = 'sync-reply'
}) 

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