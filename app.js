const dotenv = require("dotenv")
dotenv.config()
let http = require("http")

let ourApp = http.createServer(function(req, res) {
    if (req.url == "/") {
        res.end("Hello, and welcome to our home page.")
    }

    else if (req.url == "/about") {
        res.end("Thank you for the interest in our company.")
    }
    else {
        res.write("We can not find the page you are looking for.")
        res.end() 
    }

})

ourApp.listen(process.env.PORT)