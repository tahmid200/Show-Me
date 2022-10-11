const data = require("./data.ts");

const express = require('express');
const app = express();
const cors = require('cors');
const pool = require('./db.ts');


app.use(cors({
    origin: '*'
}));
app.use(express.json());

//routing

//adding data to table
const unauthorizedText = 'Please provide a correct email and password.'
const expectedEmail = 'tahmid@gmail.com';
const expectedPassword = '12345';
app.post('/show_me_users', async (req,res) => {
    if (req.body?.email === expectedEmail && req.body.password === expectedPassword) {
        return res.send({message: 'Successfully logged in'});
    }
    return res.status(401).send({message: unauthorizedText});
})
app.post('/show_me_products', async (req,res) => {
    const {searchText, type} = req.body;
    
    return res.json({data: data.filter((p) => {
        if (searchText && !p.name.toLowerCase().includes(searchText.toLowerCase())) {
            return false;
        }
        if (type && p.type !== type) {
            return false;
        }
        return true;
    })});
})


//get all users

app.get('/show_me_users',async (req, res) => {
    try {
        const allUser = await pool.query('SELECT * FROM show_me_users');
        res.json(allUser.rows);
    } catch (error){
        console.error(error.message);
    }
    
})



app.listen(3001, () => {
    console.log("Server started on port 3001");
});
