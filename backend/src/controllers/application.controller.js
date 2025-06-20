import Application from '../models/application.model.js'

//
// Heres the controller of a simple CRUD 
//
export const getApplications = async (req,res)=>{
   try {
        const foundApplication = await Application.find({user: req.user.id});
        if(foundApplication.length === 0) return res.status(403).json("Applications not found");
        res.json(foundApplication);
   } catch (error) {
        res.status(400).json(error)
   }
}
export const getApplication = async (req,res)=>{
    try{
        const foundApplication = await Application.findOne({_id :req.params.id,user: req.user.id})
        if(!foundApplication) return res.status(400).json("Applications not found")
        res.json(foundApplication)  
    }catch(error){
        res.status(400).json(error)
    }
}
export const createApplication = async (req,res)=>{
    const {title,description,link} = req.body;
    try {
        const newApplication = new Application({
            title,
            description,
            link, 
            user: req.user.id
        })
        const saveApplication = await newApplication.save();
        res.json(saveApplication)
    } catch (error) {
        res.status(400).json(error)
    }

}
export const updateApplication = async (req,res)=>{
    const foundApplication = await Application.findByIdAndUpdate(req.params.id,req.body,{new:true})
    if(!foundApplication) return res.status(400).json("Application not found")
    res.json(foundApplication)
}
export const deleteApplication = async (req,res)=>{
    const foundApplication = await Application.findOneAndDelete({_id: req.params.id, user:req.user.id})
    if(!foundApplication) return res.status(400).json("Application not found")
    res.sendStatus(200)
}