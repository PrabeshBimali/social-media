const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");


// REGISTER
router.post("/register", async (req, res)=>{
    try{
        // Hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);


        // Create new User
        const user = await new User({
            username: req.body.username,
            email: req.body.email,
            password: hashedPassword
        })


        // Save User and respond
        await user.save();
        res.status(200).json(user);
    }catch(err){
        console.log(error);
    }
});



// LOGIN
router.post("/login", async (req, res)=>{

    try{
        const user = await User.findOne({email: req.body.email});
        if(!user) res.status(404).json("User not found");

        const validPassword = await bcrypt.compare(req.body.password, user.password);
        if(!validPassword) res.status(400).json("Incorrect password");

        res.status(200).json(user);
    }
    catch(error){
        console.log(error);
    }
    
})


module.exports = router;