const express = require('express')
const cors = require('cors')
const port = process.env.PORT || 5000
const app = express()
require('dotenv').config()
app.use(express.json())
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const uri = process.env.DB_URI;

app.use(cors({
    origin: ["http://localhost:5173"]
}))
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function run() {
    try {
        // Connect the client to the server	(optional starting in v4.7)
        await client.connect();
        // Send a ping to confirm a successful connection
        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
        const db = client.db("Heritage")
        const propertyCollection = db.collection('properties')
        const reviewCollection = db.collection('reviews')
        app.get('/properties', async (req, res) => {
            const properties = await propertyCollection.find().project({ "propertyDetails.price": 1, "propertyDetails.title": 1, "propertyDetails.location": 1, "propertyDetails.mainImage": 1, "propertySummary.status": 1, "propertySummary.type": 1 }).toArray()
            res.send(properties);
        })
        app.get('/properties/:id', async (req, res) => {
            const id = req.params.id
            const query = { _id: new ObjectId(id) }
            const result = await propertyCollection.findOne(query)
            res.send(result)
        })
        app.post('/add-property', async (req, res) => {
            const newData = req.body
            const result = await propertyCollection.insertOne(newData)
            res.status(200).send({ message: "Success" })
        })
        app.get('/properties/:id/reviews', async (req, res) => {
            const id = req.params.id
            console.log(id);
            try {
                const reviews = await reviewCollection.find({ propertyId: id }).toArray();
                res.send(reviews);
            } catch (error) {
                res.status(500).json({ message: 'Error fetching reviews' });
            }
        });
        app.post('/properties/:id/reviews', async (req, res) => {
            try {
                const { userId, userName, rating, text } = req.body
                const propertyID = req.params.id
                const cursor = {
                    userId,
                    userName,
                    rating,
                    text,
                    propertyId: propertyID
                }
                console.log(cursor);
                const newReview = await reviewCollection.insertOne(cursor)
                res.status(200).send(newReview)
                // res.status(200).send({ message: "Success!" })
            } catch (error) {
            }
        })

    } finally {
        // Ensures that the client will close when you finish/error
        // await client.close();
    }
}
run().catch(console.dir);


app.listen(port, () => {
    console.log(port);
})