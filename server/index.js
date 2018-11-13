const expres = require('express')
const app = expres()
const socket = require('socket.io')

server = app.listen(8080, () => {
  console.log('server is running on port 8080')
})

io = socket(server)

io.on('connection', (socket) => {
  console.log('socket.id', socket.id)
  socket.on('SEND_MESSAGE', (data) => {
    console.log(data)
  })
})
