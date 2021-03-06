const http = require('http')
const app = require('./app')
const logger = require('./utils/logger')
const config = require('./utils/config')

const server = http.createServer(app)

const PORT = process.env.PORT || 3003
server.listen(config.PORT, () => {
    console.log(`Server running on PORT ${config.PORT}`);
})

