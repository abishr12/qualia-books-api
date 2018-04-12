const rp = require("request-promise");


module.exports = {
    searchGoogleBooks: (isbn) => {
        let answer = []
        const bookRequest = {
            uri: `https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}`,
            json: true
        }
        
        rp(bookRequest, function (error, response, body) {
            
            console.log(body.items)
        })

        
        
    }

}



