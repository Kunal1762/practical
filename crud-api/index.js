const express=require("express");
const {studentModel,courseModel}=require("./models")
const app=express();
app.use(express.json());
const PORT=3000;


app.post("/signup",async (req,res)=>{
    const studentname=req.body.studname;
    const rollno=req.body.rollno;

    const ifexists=await studentModel.findOne({
        name:studentname,
        rollno:rollno
    })
    if(ifexists){
        res.status(404).json({
            message:"Student already exists"
        })
        return;
    }
    const newstud=await studentModel.create({
        name:studentname,
        rollno:rollno
    })
    res.json({
        id:newstud._id,
        name:newstud.name,
        rollno:newstud.rollno
    })
    

})
app.put("/update", async (req,res)=>{
    const id=req.body.id;
    const newroll=req.body.roll;
    
    const exists=await studentModel.findOne({
        _id:id
    })
    if(!exists){
        res.status(404).json({
            message:"Student doesnt exists"
        })
        return;
    }
    const updated=await studentModel.findByIdAndUpdate(
        id,
        {
            rollno:newroll
        },
        {new:true}
    )
    res.json({
        id:updated._id,
        updatedrollno: updated.rollno
    })
})
app.get("/find",async(req,res)=>{
    const name=req.body.name;

    const exists=await studentModel.findOne({
        name:name
    })
    if(!exists){
        res.json({
            message:"user not found"
        })
        return;
    }
    res.json({
        name:exists.name,
        rollno:exists.rollno
    })
})
app.delete("/remove", async(req,res)=>{
    const name=req.body.name;

    const exists=await studentModel.findOne({
        name:name
    })
    if(!exists){
        res.json({
            message:"user not found"
        })
        return;
    }
    await studentModel.deleteOne({
        name:name
    })
    res.json({
        message:"deleted"
    })
})

app.listen(PORT,()=>{
    console.log(`Server Running`);
})