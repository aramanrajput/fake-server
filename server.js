const data = require ("./database/db.json")

const jsonserver = require("json-server")
const server = jsonserver.create();
const router =jsonserver.router(data)
const middlewares=jsonserver.defaults()
const port = 8080


server.use(middlewares)
server.use(router)

server.listen(port)