require("dotenv").config();
const express = require("express");
const massive = require("massive");
const authController = require("./authController");
const session = require("express-session")

const app = express();

const {SERVER_PORT, CONNECTION_STRING, SESSION_SECRET} = process.env;

app.use(session({
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 1000 * 60 * 60 * 48},
    secret: SESSION_SECRET
}))

massive({
    connectionString: CONNECTION_STRING,
    ssl: {rejectUnauthorized: false}
}).then((db) => {
    app.set("db", db);
    console.log("DB Connected")
})

app.use(express.json())

app.get('/api/user/', authController.getUser)
app.post('/api/register/', authController.register)
app.post('/api/login', authController.login)
app.get('/api/logout/', authController.logout)

app.listen(SERVER_PORT, () => {
    console.log(`Bro, is it working? ${SERVER_PORT}`)
})