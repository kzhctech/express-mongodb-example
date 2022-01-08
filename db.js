const dotenv = require("dotenv")
dotenv.config()
const mongodb = require("mongodb")

mongodb.connect('mongodb+srv://kzhccric:2FQHi2IPGWdllW21@cluster0.v6byg.mongodb.net/kzhcCric?retryWrites=true&w=majority', { useUnifiedTopology: true }, function (err, client) {
  module.exports = client
  const app = require("./app.js")
  app.listen(process.env.PORT || 3000)
})
