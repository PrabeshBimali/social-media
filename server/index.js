const express = require("express"),
    app = express(),
    mongoose = require("mongoose"),
    dotenv = require("dotenv"),
    morgan = require("morgan"),
    helmet = require("helmet"),
    userRoute = require("./routes/users"),
    authRoute = require("./routes/auth"),
    postRoute = require("./routes/posts");

dotenv.config();
mongoose.connect(process.env.DB_CONNECTION, 
    {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true}, ()=>{
    console.log("Conneted to the Database....")
});

app.use(express.json());
app.use(helmet());
app.use(morgan("common"));
app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/posts", postRoute);


app.listen(process.env.PORT, ()=>{
    console.log(`Server is running at port ${process.env.PORT} ...`);
})
