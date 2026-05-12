const mongoose=require("mongoose");


const studentSchema=mongoose.Schema({
    name:String,
    rollno:String
})
const courseSchema=mongoose.Schema({
    coursename:String,
    courseCode:String
})

const studentModel=mongoose.model("students",studentSchema);
const courseModel=mongoose.model("course",courseSchema);

module.exports={
    studentModel,
    courseModel
}