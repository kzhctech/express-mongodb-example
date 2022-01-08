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

module.exports = app
