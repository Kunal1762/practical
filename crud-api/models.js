const mongoose=require("mongoose");

mongoose.connect("mongodb://kunalbari098_db_user:NKGFcWrIJoDaFYS8@ac-8sp0xzu-shard-00-00.dzohzzf.mongodb.net:27017,ac-8sp0xzu-shard-00-01.dzohzzf.mongodb.net:27017,ac-8sp0xzu-shard-00-02.dzohzzf.mongodb.net:27017/stud?ssl=true&replicaSet=atlas-10wi2h-shard-0&authSource=admin&appName=Cluster0");

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