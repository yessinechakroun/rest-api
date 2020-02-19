const express = require("express")
const bodyParser = require('body-parser') 
const {MongoClient , ObjectID}=require('mongodb')
const assert = require ('assert')
const cors = require('cors')


const app = express()
app.use(bodyParser.json())
app.use(cors())

const Mongo_url = "mongodb://localhost:27017"
const DataBase = 'ContactDB'

MongoClient.connect(Mongo_url, { useUnifiedTopology: true }, (err, Yessine) => {
    assert.equal(err, null, 'Connection Failed')

    const db = Yessine.db(DataBase)

    app.get('/Contacts',(req,res)=>{
        db.collection('ContactList').find().toArray((err,data)=>{
            if(err) res.send(err) 
            else res.send(data)
        })
    })

    app.post('/add_Contact',(req,res)=> {
        let newContact = req.body 
        db.collection('ContactList').insertOne(newContact,(err,data)=> {
            if(err) res.send(err)
            else res.send(data)
        })
    })

    app.put('/edit_Contact/:id',(req,res)=> {
        let id= ObjectID(req.params.id)
        let UpdatedContact = req.body
        db.collection('ContactList').findOneAndUpdate({_id:id},{$set:{...UpdatedContact}},(err,data)=>{
            if(err) res.send(err)
            else res.send(data)
        })
        
    })

    app.patch('/patch_Contact/:id', (req, res)=> {
        var updateObject = req.body; // {last_name : "smith", age: 44}
        var id = req.params.id;
        db.collection('ContactList').update({_id  : ObjectId(id)}, {$set: updateObject},(err,data)=> {
            if(err) res.send(err)
            else res.send(data)
        });
    });


    app.delete('/delete_Contact/:id',(req,res)=> {
        let id= ObjectID(req.params.id)
        db.collection('ContactList').findOneAndDelete({_id:id},(err,data)=> {
            if(err) res.send(err)
            else res.send(data)
        })
    })

})



app.listen(3008,(err)=> {
    if(err) console.log('Erreur Starting')
    else console.log("Server Starting ")
})

