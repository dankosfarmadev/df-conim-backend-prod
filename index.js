const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mysql = require('mysql');
const cors = require('cors');
// const postgre = require('pg');
const { Pool } = require('pg')
const PORT = process.env.PORT || 3001;

// const pgp = require('pg-promise')

// const cn = {
//   host:'localhost',
//   port: 5432,
//   database: 'df',
//   user: 'postgres',
//   password: 'Junior00'
// }
// const db = pgp(cn);

// db.one('select * from df_test').then(result=>{
//   console.log('hasil')
// })


// didalam scripts
// "backend": "nodemon ./index.js",
 
// parse application/json
app.use(bodyParser.json());

// user cors()
app.use(cors());

 
// //create database connection
// const conn = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: '',
//   database: 'employees'
// });


// //create database connection
// const conn = new Pool({
//   user:'postgres',
//   host:'localhost',
//   database:'df',
//   password: 'Junior00',
//   port: 5432
// })

// // Production lama
// // create database connection Heroku Postgres
// const conn = new Pool({
//   user:'rrzfiejogdkdwx',
//   host:'ec2-54-83-137-206.compute-1.amazonaws.com',
//   database:'d1q7dno61bc5l7',
//   password: '704d4554e66350d5e620380bd9389defaebb92e23e8aba0045141e863455262d',
//   port: 5432,
//   native: true,
//   ssl: {
//     rejectUnauthorized: false
//   }
// })

// // Production baru
// // create database connection Heroku Postgres
// const conn = new Pool({
//   user:'kfbmhzlpgtnsye',
//   host:'ec2-3-231-112-124.compute-1.amazonaws.com',
//   database:'dff62l154mvrms',
//   password: '658aa96d1e6ca638e8fed40670e85581113e0c98b9a373c40fb94004dd26e59a',
//   port: 5432,
//   native: true,
//   ssl: {
//     rejectUnauthorized: false
//   }
// })

// Production baru v3
// create database connection Heroku Postgres
// const conn = new Pool({
//   user:'zgqdfsiiytqtju',
//   host:'ec2-34-233-242-44.compute-1.amazonaws.com',
//   database:'d4oa55lhc0qmr2',
//   password: '2c67fc7b9195279f51e0f29f9215bcc66f61500895cba7509907b22336de2caf',
//   port: 5432,
//   native: true,
//   ssl: {
//     rejectUnauthorized: false
//   }
// })

// Production baru v4 18 apr 2024
// create database connection Heroku Postgres
const conn = new Pool({
  user:'ddmqupliqueuaw',
  host:'ec2-52-20-78-241.compute-1.amazonaws.com',
  database:'dspsuhumsg20k',
  password: 'bf74b60a1e47a77021c33816ac9e7f886496492753f93cb8a4b832a202b0004f',
  port: 5432,
  native: true,
  ssl: {
    rejectUnauthorized: false
  }
})

//connect to database
conn.connect((err) =>{
  if(err) throw err;
  console.log('Mysql Connecteds...');
});

app.get('/', (req, res) => {
  res.send('Connectedss! '+PORT)
});


app.get('/helloworld', (req, res) => {
  res.send('Hello World!')
});


//api query
app.post('/api/query',(req, res) => {
    let sql = req.body.query;
    console.log('request_custom :', req)
    console.log('query : ', sql)
    let query = conn.query(sql, (err, results) => {
      if(err) throw err;
      res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
    });
  });
 
//Server listening
app.listen(PORT,() =>{
  console.log('Server started on NEW port ...'+PORT);
});
