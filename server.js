const data = require("./database/db.json")

const jsonserver = require("json-server")
const server = jsonserver.create();
const router =jsonserver.router(data)
const middlewares=jsonserver.defaults()
const port = process.env.PORT || 5000


server.use(middlewares)
server.use(router)

server.listen(port)