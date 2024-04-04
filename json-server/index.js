const jsonServer = require('json-server')
const CEServer = jsonServer.create()
const middleware = jsonServer.defaults()
const router = jsonServer.router('db.json')
const PORT = 3000 || process.env.PORT

var pathToModule = require.resolve('json-server');
console.log(pathToModule);


CEServer.use(middleware)
CEServer.use(router)

CEServer.listen(PORT,()=>{
  console.log(`server started at port ${PORT}`);
})