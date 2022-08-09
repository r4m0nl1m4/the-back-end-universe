const http = require('http')
const { v4: uuidv4 } = require('uuid')

const server = http.createServer((req, res) => {
  switch(req.url) {
		case '/task':
			res.writeHead(200,{'Content-Type':'text/json'})
			res.write(JSON.stringify({'msg':'Task Done','path':req.url}))
			res.end()
			break
		default:
			res.writeHead(404,{'Content-Type':'text/json'})
			res.write(JSON.stringify({'msg':'Path not found','path':req.url}))
			res.end()
	}
})

server.listen(8080, () => {
    console.log('Server ready on port 8080!')
})