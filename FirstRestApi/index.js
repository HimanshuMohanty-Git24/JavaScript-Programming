const express = require('express');
const users = require("./MOCK_DATA.json");
const fs = require("fs");
const app = express()
const port = 3000

//middleware
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use((req,res,next)=>{
    fs.appendFile(
        "log.txt",
        `\n${Date.now()}:${req.ip} ${req.method}: ${req.path}`, 
        (err) => {
            if (err) throw err;
        }
    )
    next();
})

app.get("/users",(req,res)=>{
    const html =`
        <ul>
            ${users.map(user => `<li>${user.first_name} ${user.last_name}</li>`).join("")}
        <ul>
    `;
    res.send(html);
})

app.get("/users/:id",(req,res)=>{
    const id = Number(req.params.id);
    const user = users.find(user => user.id === id);
    res.send(`
        <h1>${user.first_name} ${user.last_name}</h1>
        <p>${user.email}</p>
    `)
} )


//Rest Api
app.get('/api/users', (req, res) => {
  return res.json(users);
})

app.post('/api/users', (req, res) => {
    console.log(req.body);
    const user = {
        id: users.length + 1,
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        job_title: req.body.job_title,
    }
    users.push(user);
    fs.writeFile('./MOCK_DATA.json', JSON.stringify(users), 'utf-8', (err) => {
        if (err) throw err;
    })
    return res.json(user);
} )

/**
 * Diffrence between put and patch
 * Put: Update all the fields
 * Patch: Update only the fields that are provided
 */
app.route('/api/users/:id')
    .get((req, res) => {
        const id = Number(req.params.id);
        const user = users.find(user => user.id === id);
        return res.json(user);
    })
    .put((req, res) => {
        const id = Number(req.params.id);
        const user = users.find(user => user.id === id);
        user.first_name = req.body.first_name;
        user.last_name = req.body.last_name;
        user.email = req.body.email;
        user.job_title = req.body.job_title;

        fs.writeFile('./MOCK_DATA.json', JSON.stringify(users), 'utf-8', (err) => {
            if (err) throw err;
        })
        return res.json(user);
    })
    .patch((req, res) => {
        const id = Number(req.params.id);
        const user = users.find(user => user.id === id);
        if (req.body.first_name) user.first_name = req.body.first_name;
        if (req.body.last_name) user.last_name = req.body.last_name;
        if (req.body.email) user.email = req.body.email;
        if (req.body.job_title) user.job_title = req.body.job_title;

        fs.writeFile('./MOCK_DATA.json', JSON.stringify(users), 'utf-8', (err) => {
            if (err) throw err;
        })
        return res.json(user);
    } )
    .delete((req, res) => {
        const id = Number(req.params.id);
        const user = users.find(user => user.id === id);
        users.splice(users.indexOf(user), 1);

        fs.writeFile('./MOCK_DATA.json', JSON.stringify(users), 'utf-8', (err) => {
            if (err) throw err;
        })

        return res.json(user);
    });






//Server Start
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})