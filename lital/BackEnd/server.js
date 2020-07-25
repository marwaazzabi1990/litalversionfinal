const express = require("express");
const bodyParser = require("body-parser");
const port = 2000;
const app = express();
const cookieParser = require("cookie-parser");
const multer = require("multer");
const path = require("path");
// make the cors allow only our port to access to font end 3000
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header("Access-Control-Allow-Credentials", true);
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );

  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
  next();
});
// body parser for json form all data recived
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());

// connexion au server
app.listen(port, (err) => {
  if (err) {
    console.log("Error when running the server");
  } else {
    console.log(`Server running on port ${port}`);
  }
});

//importing route product
var product = require("./app/Routes/ProductRouter.js");
var user = require("./app/Routes/UserRouter.js");
var history = require("./app/Routes/HistoryRouter");
var AuthController = require("./app/authentification/AuthController");

// Use routers
app.use("/lital/product", product);
app.use("/lital/user", user);
app.use("/lital/history", history);
app.use("/api/auth", AuthController);

//upload image
app.use(express.static("./public"));

app.get("/", (req, res) => res.send("index"));
// Set The Storage Engine
const storage = multer.diskStorage({
  destination: "./public",
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

// Check File Type
function checkFileType(file, cb) {
  // Allowed ext
  const filetypes = /jpeg|jpg|png|gif/;
  // Check ext
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  // Check mime
  const mimetype = filetypes.test(file.mimetype);

  if (mimetype && extname) {
    return cb(null, true);
  } else {
    cb("Error: Images Only!");
  }
}

// Init Upload
const upload = multer({
  storage: storage,
  limits: { fileSize: 3000000 },
  fileFilter: function (req, file, cb) {
    checkFileType(file, cb);
  },
}).single("file");

app.post("/image", (req, res) => {
  upload(req, res, (err) => {
    console.log("immage", req.file);
    if (err) {
      res.send({ msg: err });
    } else {
      if (req.file == undefined) {
        res.send({ msg: "Error: No File Selected!" });
      } else {
        if (req.file) res.send(req.file.filename);
        else res.send("file undifind");
      }
    }
  });
});
