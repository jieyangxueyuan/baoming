var monk = require('monk')
var db = monk('localhost:27017/monk-demo')
var products = db.get('products')

const Koa = require('koa')
const Router = require('koa-router')
var app = new Koa()
let home = new Router()
const koaBody = require('koa-body')
app.use(koaBody())

home.get('/products', async ( ctx )=>{
let p = await products.find({})
console.log(p)
ctx.body = p
})

home.post('/products', async ( ctx )=>{
const p = ctx.request.body
await products.insert({name: p.name, price: p.price })
console.log(p.price)
ctx.body = 'ok'
})

home.put('/products', async ( ctx )=>{
  const p = ctx.request.body
  await products.insert({name: p.name, price: p.price })
  console.log(p)
  ctx.body = 'ok'
})

home.delete('/products/:name', async ( ctx )=>{
console.log(ctx.params.name)

ctx.body = 'del ok'
})


app.use(home.routes())
app.use(home.allowedMethods())

app.listen(3000, () => {
console.log('[demo] route-use-middleware is starting at port 3000')
})