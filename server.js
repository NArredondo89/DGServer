////imports/////
const express = require("express");
const cors = require("cors");
const routes = require("./Routes");

const app = express();
const port = process.env.PORT || 4000;
// app.listen(process.env.PORT || 4000);

////Middlewear/////
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));

/// API routes////////////
////Course and park Routes////
app.use("/api/v1/course", routes.course);
app.use("/api/v1/layout", routes.layout);
app.use("/api/v1/hole", routes.hole);
app.use("/api/v1/route", routes.route);

////Events and Review Routes///////
app.use("/api/v1/event", routes.event);
app.use("/api/v1/review", routes.review);

app.use("/api/v1/auth", routes.auth);
app.use("/api/v1/user", routes.user);

app.listen(port, () => console.log(`Server is running on port ${port}`));
