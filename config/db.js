const mongoose = require("mongoose");
require("dotenv").config({ path: './config/.env' })


mongoose.connect(`mongodb+srv://${process.env.DB_USER_PASS}@cluster0.6leul.mongodb.net/test`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false

}
).then(() => console.log("connected to mongodb"))
    .catch((err) => console.log("Failed to connect to MongoDB", err));