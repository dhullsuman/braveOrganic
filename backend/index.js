const express = require("express");
const dotenv = require("dotenv");
const connection = require("./config/db");
const productRoutes = require("./routes/product.routes");
const userRoutes = require("./routes/user.routes");
dotenv.config();
const cors = require("cors");
const cartRoute = require("./routes/cart.routes");
const orderRoute = require("./routes/Order.routes");
const wishlistRoute = require("./routes/wishlist.routes");
const PORT = process.env.PORT || 9000;
const app = express();
app.use(express.json());
app.use(cors());

//connect productRoutes
app.use("/products", productRoutes);

//connect userRoutes
app.use("/user", userRoutes);

//connect cartRoutes
app.use("/cart", cartRoute);

//connect orderRoutes
app.use("/order", orderRoute);

//connect wishlistRoutes
app.use("/wishlist", wishlistRoute);

app.listen(PORT, async () => {
  try {
    await connection;
    console.log("listening on port " + PORT);
  } catch (err) {
    console.log("listening error on port " + PORT);
  }
});
