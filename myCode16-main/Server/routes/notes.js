const express = require("express");
const router = express.Router();
const Note = require("../models/Note"); 
const fetchUser = require("../middleware/fetchUser");
const {body, validationResult} = require("express-validator");


//Route1: Add a note using POST ("api/notes/addnote"). Login Require--
router.post("/addnote", fetchUser,[
    body("title", "Enter a vaild Title").isLength({min: 3}),
    body("description", "Description must be 5 or more Charater").isLength({min: 5}),
], async(req, res) => {
    
    try {
        const {title, description} = req.body;
        //----if there is error then they show the error----
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({error: errors.array() });
        }
        const note = new Note({
            title, description, user: req.user.id
        })
        const saveNote = await note.save();
        res.json(saveNote)
        console.log( saveNote, "Note can be Created Successfully")

    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
    })


//Route2: Fetch All Notes from (Own User Notes) using GET ("api/notes/fetchallnotes"). Login Require--
router.get("/fetchallnotes", fetchUser, async(req, res) => {
    try {
        const note = await Note.find({user: req.user.id})
        res.json(note)
        console.log( note, "Note can be Fetch Successfully")
    } catch (error) {
        console.error(error.message);
        return res.status(500).send("Internal Server Error");
    }
})

//Route4: Delete Notes from (Own User Notes) using DELETE ("api/notes/deletenote/:id"). Login Require--
router.delete("/deletenote/:id", fetchUser, async(req, res) => {
    try {
        const note = await Note.findByIdAndDelete(req.params.id)
        res.status(200).json( {msg: "Note Deleted SuccessFully", note})
        console.log( note, "Note Deleted Successfully")  
    } catch (error) {
        console.error(error.message);
        return res.status(500).send("Internal Server Error");
    }
})

//Route5: Delete Notes from (Own User Notes) using DELETE ("api/notes/deletenote/:id"). Login Require--
//Route5: Delete Notes from (Own User Notes) using DELETE ("api/notes/deletenote/:id"). Login Require--
router.delete("/deletenote", fetchUser, async(req, res) => {
    try {
        const note = await Note.deleteMany({user: req.user.id})
        res.status(200).json( {msg: "All Note Deleted SuccessFully"});
        console.log( note, "All Note Deleted Successfully")   
    } catch (error) {
        console.error(error.message);
        return res.status(500).send("Internal Server Error");
    }
})

module.exports = router;


