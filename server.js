////imports/////
const express = require("express");
const cors = require("cors");
const routes = require("./Routes")





app.listen(process.env.PORT || 4000);
const app = express();


////Middlewear/////
app.use(cors());
app.use(express.urlencoded({extended:false}));
app.use(express.json());


// /middleware - API routes
app.use("/api/v1/hole", routes.hole);
app.use("/api/v1/course", routes.course);
app.use("/api/v1/layout", routes.layout);
app.use("/api/v1/auth", routes.auth);
app.use("/api/v1/user", routes.user);

// connection
app.listen(port, () => console.log(`Server is running on port ${port}`));


