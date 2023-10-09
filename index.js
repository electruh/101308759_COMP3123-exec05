// Allanis Sumaya - 101308759

const express = require('express');
const app = express();
const router = express.Router();

const fs = require('fs');


const homeHTML = '<h1>Welcome to ExpressJs Tutorial</h1>';


// http://localhost:8081/home
router.get('/home', (req, res) => {
    res.send(homeHTML);
});


const userData = require('./user.json');

// http://localhost:8081/profile
router.get('/profile', (req, res) => {
    res.json(userData);
});


// http://localhost:8081/login?username=bret&password=bret@123
router.get('/login', (req, res) => {
    const { username, password } = req.query;

    if (!username || !password) {
        res.status(400).json({
            status: false,
            message: "Username and password are required",
        });
        return;
    }


    if (username === userData.username && password === userData.password) {
        res.json({
            status: true,
            message: "User is valid",
        });
    } else {
        res.json({
            status: false,
            message: "Username or password is invalid",
        });
    }
});


http://localhost:8081/logout/user
    router.get('/logout/:username', (req, res) => {
        const { username } = req.params;
        res.send(`<b>${username} successfully logged out.</b>`);
    });

app.use('/', router);

app.listen(process.env.PORT || 8081, () => {
    console.log('Web Server is listening at port ' + (process.env.PORT || 8081));
});
