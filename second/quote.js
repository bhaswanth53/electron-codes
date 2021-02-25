const axios = require("axios")

let url = "https://freequote.herokuapp.com/"
let div = document.getElementById("quote")

setInterval(function() {
    axios.get(url)
        .then((response) => {
            div.innerHTML = response.data.quote
            console.log(response.data.quote)
        })
        .catch((error) => {
            console.log(error.response)
        })
}, 10000)