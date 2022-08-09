const express = require('express')
const { v4: uuidv4 } = require('uuid');
const app = express()

app.use(express.json())

app.listen(8080, () => {
  console.log('Server ready on port 8080!')
})

app.get('/', (req,res) => {
  res.json({'msg':'Hello from Express!'})
})

const tasks = {}

app.delete('/tasks', (req,res) => {
  const id = req.query.id
  if(id && tasks[id]){
    delete tasks[id]
    res.json({'msg':'The task was successfully deleted!'})
  }else{
    res.status(400).json({'msg':'Task not found!'})
  }
})

app.get('/tasks', (req,res) => {
  res.json({'tasks':Object.values(tasks)})
})

app.get('/tasks/:id', (req,res) => {
  const id = req.params.id
  if (id && tasks[id]){
    res.json({'tasks':tasks[req.params.id]})
  }else{
    res.status(400).json({'msg':'Task not found!'})
  }
})

app.post('/tasks', (req,res) => {
  const task = req.body
  const taskID = uuidv4()
  task.id = taskID
  tasks[taskID] = task
  res.json({'msg':'The task was successfully added.'})
})

app.put('/tasks', (req,res) => {
  const id = req.query.id
  if (id && tasks[id]){
    const task = req.body
    task.id = id
    tasks[id] = task
    res.json({'msg':'The task was successfully updated!'})
  }else{
    res.status(400).json({'msg':'Task not found!'})
  }
})