const dotenv = require("dotenv")
dotenv.config()
const mongodb = require("mongodb")

mongodb.connect('mongodb+srv://kzhccric:2FQHi2IPGWdllW21@cluster0.v6byg.mongodb.net/kzhcCric?retryWrites=true&w=majority', { useUnifiedTopology: true }, function (err, client) {
const express = require("express")
const app = express()
const client = require("./db.js")
const db = client.db()

app.get("/", async (req, res) => {
  try {
    const news = await db.collection("news").find({ author: "tajbir" }).toArray()
    if (news.length) {
      res.json(news)
    } else {
      res.json("You do not currently have any dogs in your pets collection.")
    }
  } catch (err) {
    console.log(err)
    res.json("Try again later.")
  }
})
  app.listen(process.env.PORT || 3000)
})
