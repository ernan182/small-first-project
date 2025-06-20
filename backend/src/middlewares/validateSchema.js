//
// ON here we are validating the data req if is valid 
// is gonna save the data if is not its gonna send a message
//
const validateSchema = (schema) => (req,res,next)=>{
    try {
        schema.parse(req.body);
        next();
    } catch (error) {
        //showing all the inputs erros 😼😼😼😼
        res.status(400).json(error.errors.map(error => error.message));
        console.log(error)
    }
}

export default validateSchema;