
const fs = require('fs')

const fastify = require("fastify")()

const { coinCount } = require('./p3-module')

fastify.get("/", (request, reply) => {
    reply
 const server = http.createServer((req,res)=>{
    fs.readFile(`${__dirname}/index.html`,(err, data)=>{
        if(err){console.log(err)
            res.statusCode=500
            res.setHeader('Content-Type','application/html')
            res.end("Error")
        }else{
            res.statusCode=200;
            console.log("URL:",req.url)
            res.setHeader('Content-Type','application/html')
            res.write(data)
            res.end()
        }})
    })
        server.listen(port,hostname,()=>{
        console.log(`Server running at http://${hostname}:${port}/`)
       })
})

fastify.get("/coin", (request, reply) => {
    const {denom = 0, count = 0} = request.query
    const coinValue = coinCount(request.query)

    reply
      .code(200)
      .header("Content-Type", "application/json; charset=utf-8")
      .send(`<h2>Value of ${count} of ${denom} is ${coinValue}</h2><br /><a href="/">Home</a>`)
  })


  fastify.get("/coins", (request, reply) => {
    switch (option) {
        case 0:
          result = 0;
          break;
        case 1:
          result = coinCount({ denom: 5, count: 3 }, { denom: 10, count: 2 })
          break;
        case 2:
           result = coinCount(...coins);
          break;
        case 3:
          result = coinCount(coins);
          break;
      }
      coinValue = coinCount()
    reply
      .code(200)
      .header("Content-Type", "application/json; charset=utf-8")
      .send(`<h2>Option ${option} value is ${coinValue}</h2><br /><a href="/">Home</a>`)
  });


 const listenIP = "localhost"
 const listenPort = 8080;
 fastify.listen(listenPort, listenIP, (err, address) => {
  if (err) {
    console.log(err)
    process.exit(1)
  }
  console.log(`Server listening on ${address}`)
 })
 
 