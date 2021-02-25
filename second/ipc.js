const electron = require("electron")
const ipc = electron.ipcRenderer

let asyncBtn = document.getElementById("asyncBtn")
asyncBtn.addEventListener('click', function() {
    console.log('async message 1')
    ipc.send('async-message')
    console.log('async message 2')
})

let syncBtn = document.getElementById("syncBtn")
syncBtn.addEventListener('click', function() {
    console.log('sync message 1')
    const reply = ipc.sendSync('sync-message')
    console.log(reply)
})

ipc.on('async-reply', function(event, arg) {
    console.log(arg)
})