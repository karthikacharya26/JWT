const express = require("express");
const connectDB = require("./config/db");
const userRouter = require("./routes/user.route");
const auth = require("./middlewares/auth.middleware");

const app = express();
app.use(express.json());

app.use("/user", userRouter);

app.get('/cart',auth, (req, res)=>{
    res.send('cart data here... ')
})

app.get("/", (req, res) => {
  res.status(200).send("Server working fine");
});

app.listen(8080, async () => {
  try {
    await connectDB();
    console.log(`server started on port 8080 and DB connnected`);
  } catch (error) {
    console.log(error);
  }
});
