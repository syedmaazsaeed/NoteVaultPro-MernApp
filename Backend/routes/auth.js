const express = require("express");
const User = require("../models/User");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
var jwt = require("jsonwebtoken");
const JWT_SECRET = "Hackingi$mypa$$ion";
var fetchuser = require("../middleware/fetchuser");

// hits the post request
// 1st Endpoint
// ROUTE 1 :  create a User using: POST "/api/auth/createuser" . No Login Required

router.post(
  "/createuser",
  [
    body("name", "Enter a valid name").isLength({ min: 3 }),
    // body("username").isLength({ min: 1 }).withMessage("Username is required."),

    body("email", "Enter a valid email").isEmail(),
    body("password", "Password must be atleast 5 characters").isLength({
      min: 5,
    }),
  ],
  async (req, res) => {
    let success = false;
    // If there are errors, return Bad request and the errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ success, errors: errors.array() });
    }

    try {
      // check whether the user with this email exists already
      let user = await User.findOne({ email: req.body.email });
      // console.log(user);
      if (user) {
        return res.status(400).json({
          success,
          error: "Sorry a user with this email already exists",
        });
      }
      const salt = await bcrypt.genSalt(10);
      const secPass = await bcrypt.hash(req.body.password, salt);
      // await ko apply is la kia kuin ka ya promise return karta ha ..
      // Create a new user
      user = await User.create({
        name: req.body.name,
        // username: req.body.username,
        email: req.body.email,
        password: secPass,
        // city: req.body.city,
        // phone_number: req.body.phone_number,
      });
      //   .then((user) => res.json(user))
      //   .catch(err=>{console.log(err)
      //   res.json({error: "Please Enter the Unique Value for email and username"
      // , message:err.message})})

      // console.log(req.body);
      // const user = User(req.body);
      // user.save();

      const data = {
        user: {
          id: user.id,
        },
      };
      const authtoken = jwt.sign(data, JWT_SECRET);
      success = true;

      // res.json(user);
      // use ES6
      success = true;
      res.json({ success, authtoken });
    } catch (error) {
      // catch errors
      console.error(error.message);
      res.status(500).send("Internal Server Error");
    }
  }
);
// 2nd Endpoint
// ROUTE 2:  Authenticate a  User using : POST "/api/auth/login" .No login required

router.post(
  "/login",
  [
    body("email", "Enter a valid email").isEmail(),
    body("password", "Password can't be empty").exists(),
  ],
  async (req, res) => {
    let success = false;
    // If there are errors, return Bad request and the errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;
    try {
      let user = await User.findOne({ email });
      if (!user) {
        success = false;
        return res
          .status(400)
          .json({ error: "Please put it correct credentials" });
      }
      const passwordCompare = await bcrypt.compare(password, user.password);
      if (!passwordCompare) {
        success = false;
        return res
          .status(400)
          .json({ success, error: "Please put it correct credentials" });
      }
      const data = {
        user: {
          id: user.id,
        },
      };
      const authtoken = jwt.sign(data, JWT_SECRET);
      success = true;
      res.json({ success, authtoken });
    } catch (error) {
      // catch errors
      console.error(error.message);
      res.status(500).send("Internal Server Error");
    }
  }
);

// ROUTE 3:Get logged in  User Details using : POST "/api/auth/getuser" . login required
router.post("/getuser", fetchuser, async (req, res) => {
  try {
    userId = req.user.id;
    const user = await User.findById(userId).select("-password");
    res.send(user);
  } catch (error) {
    // catch errors
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;

// JWT NPM .. JSON  WEB TOKEN : way to verify the user ..JSON is the special type of Token ..
//  a method to verify a user without the user having to repeatedly send their user ID and password. Once I have created or authenticated a user, I will provide them with a token. The next time someone tries to access a protected route on my website or my Express server, they will send this token. This way, I can verify whether the user is the same person I initially authenticated.

//JWT : CLIENT or  SERVER KA mid ma aik secure communication  karna facilitate karwata ha JWT authentication .

// JSON web token (JWT), pronounced "jot", is an open standard (RFC 7519) that defines a compact and self-contained way for securely transmitting information between parties as a JSON object

// middleware in  nodejs:
//Middleware is used in Node.js by creating functions or modules that follow a specific pattern. These functions typically take three arguments: req (the request object), res (the response object), and next (a callback function)
// Middleware functions are functions that have access to the request object ( req ), the response object ( res ), and the next middleware function in the application's request-response cycle. The next middleware function is commonly denoted by a variable named next .
// middleware aik function ha node js jo ka call kia jae ga jab bhi apka login required waly routes han un pr koe bhi request aye gi to..
