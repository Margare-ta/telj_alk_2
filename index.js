import express from "express";
import sql from "mysql2";
import cors from 'cors';

const app= express();
app.use(cors());
app.use(express.json());

const gyumgyum =sql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database:'gyümik',
}).promise();

app.get('/GYUMOLCSOK', async(req, res)=>{
    const temp = await gyumgyum.query("SELECT id, nev, ar, megjegyzés FROM tipusok")
    const rows= temp[0];
    const fields=temp[1];
    res.send(rows);
})

app.post("/GYUMOLCSOK", async(req,res)=>{
    let newdata=[req.body.nev,req.body.ar,req.body.megjegyzés];
    const insert= await gyumgyum.query("INSERT INTO tipusok(nev, ar,megjegyzés) VALUES(?,?,?)",newdata);
    
});


app.listen(3000);