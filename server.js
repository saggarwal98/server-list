const express = require('express')
const app=express()

const todos = ["one task", "two task"]


app.use(express.urlencoded({extended:true}))
app.use(express.json())



app.get('/', (req, res) => res.send(`
<form method="post" action="/addtodo">
  <input name="newtodo">
  <type="submit">
</form>
 <ul>
  <li>
  ${todos.join('</li><li>')}
  </li>
 </ul>
`))

app.get('/addtodo', (req, res) => {
  todos.push(req.query['newtodo'])
  res.redirect('/') 
})

app.post('/addtodo',(req,res)=>{
    todos.push(req.body['newtodo'])
    res.redirect('/')
})
const PORT=process.env.port||3333
app.listen(PORT, () => console.log(`
Server started on http://localhost:${port}
`))
