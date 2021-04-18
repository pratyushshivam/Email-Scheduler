import express from 'express'
const app = express()
import mongoose from 'mongoose'
const port = process.env.PORT || 8080
import TableDataDB from './tabledata.js'
import Pusher from 'pusher'
import cors from 'cors'
app.use(cors())

// app config 
const pusher = new Pusher({
    appId: "1190223",
    key: "d4c784aa53b549dacef0",
    secret: "9aeff17bac1e6a2898fe",
    cluster: "ap2",
    useTLS: true
});



// middleware 
app.use(express.json())

// DB 
const connection_url = 'mongodb+srv://admin:8tUWJgPtdld0Z3CY@cluster0.hvear.mongodb.net/mayadatadb?retryWrites=true&w=majority'
mongoose.connect(connection_url, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
})


const db = mongoose.connection

db.once('open', () => {
    console.log("Database connected!")
    const dataCollection = db.collection('tablecontents')
    const changeStream = dataCollection.watch();
    changeStream.on('change', (change) => {
        console.log("A change occured", change)

    })
})





// ????


// api routes 


app.get('/v1/data', (req, res) => {
    // res.setHeader("Access-Control-Allow-Origin", "*")
    // res.setHeader("Access-Control-Allow-Credentials", "true");
    // res.setHeader("Access-Control-Max-Age", "1800");
    // res.setHeader("Access-Control-Allow-Headers", "content-type");
    // res.setHeader("Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, PATCH, OPTIONS");
    res.status(200).send([{
        "name": "Il Brigante",
        "rating": "5.0",
        "match": "87",
        "cuisine": "Italian",
        "imageUrl": "/image-0.png"
    }, {
        "name": "Giardino Doro Ristorante",
        "rating": "5.0",
        "match": "87",
        "cuisine": "Italian",
        "imageUrl": "/image-1.png"
    }])
})


app.get("/api/v1/table/sync", (req, res) => {
    TableDataDB.find((err, data) => {
        if (err) {
            res.status(500).send(err)
        }
        else {
            res.status(200).send(data) // for get / downloading data we set 200 status code and it represents OKAY
        }
    })
})

app.post('/api/v1/data', (req, res) => {
    const dbData = req.body
    TableDataDB.create(dbData, (err, data) => {
        if (err) {
            res.status(500).send(err) // internal server errpr
        }
        else {
            res.status(201).send(data)
        }
    })

})





// listen 
app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
})


// mayadatadb
// 8tUWJgPtdld0Z3CY
// mongodb + srv://admin:<password>@cluster0.hvear.mongodb.net/myFirstDatabase?retryWrites=true&w=majority



//real time database feature is missing in mongodb so i am using pusher to get real time