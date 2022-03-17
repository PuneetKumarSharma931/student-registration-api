
const express = require('express');

const router = new express.Router();

const Student = require('../models/students');

router.post('/students', async (req,res)=>{

    const student = new Student(req.body);

    try{

        const createStudent = await student.save();
        res.status(201).send(createStudent);

    }catch(e){

        res.status(400).send(e);
    }

});

router.get('/students', async (req,res)=>{

    try{

        const studentsData = await Student.find();

        if(studentsData.length<1) {

            res.status(404).send("There is no data present in the server!");
        }
        else {

            res.status(200).send(studentsData);

        }

    }catch(e){

        res.status(500).send("Internal Server Error!");
    } 
});

router.get('/students/:name', async (req, res)=>{

    try{

        const _name = req.params.name;

        const studentData = await Student.find({Name: _name});

        if(studentData.length<1) {

            res.status(404).send('The Data did not exist!');
        }
        else{

            res.status(200).send(studentData);

        }

    }catch(e) {

        res.status(500).send("Internal Server Error!");
    }
});

router.patch('/students/:name', async (req, res)=>{

    try{

        const _name = req.params.name;

        const updatedStudentData = await Student.findOneAndUpdate({Name: _name}, req.body, {

            new: true
        });

        if(!updatedStudentData) {

            res.status(404).send("Data Does not exist in the server!");

        }
        else{
            
            res.status(200).send(updatedStudentData);
        }

    }catch(e){

        res.status(500).send("Internal Server Error!");

    }
});

router.delete('/students/:name', async (req, res)=>{

    try{

        const deletedStudentData = await Student.findOneAndDelete({Name: req.params.name});

        if(!deletedStudentData) {

            res.status(404).send("Data Does not exist in the server!");
        }
        else {
            
            res.status(200).send(deletedStudentData);
        }

    }catch(e){

        res.status(500).send("Internal Server Error!");
    }
});

module.exports = router;

