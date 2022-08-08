const http = require('http')

const server = http.createServer((req, res) => {
    console.log(req.url)
    res.writeHead(200,{'Content-Type': "text/json"})
    res.write(JSON.stringify({ msg: "Hello World!!"}))
    res.end()
})

server.listen(8080, () => {
    console.log('Server ready on port 8080!')
})