import { createContext, useContext, useState } from "react";
import { createApplicationRequest, deleteApplicationRequest, editApplicationRequest, getApplicationRequest, getApplicationsRequest } from "../api/application";

//
// On here is the context for our CRUD
//

// Creates the context
export const ApplicationContextC =createContext();
// Use the context created
export const ApplicationContextU = ()=>{
    const context = useContext(ApplicationContextC);
    if(!context){
        throw new Error("The context has not been created ")
    }
    return context;
}

// Provider component to wrap the app and supply state/actions

export const ApplicationProvider = ({children})=>{
    const [application,setApplication] = useState([]);
    const [errors,setErrors] = useState([]);
    const [message,setMessage] = useState(null);
    // // Fetch all applications
    const getApplications  = async ()=>{
        try {
            const res = await getApplicationsRequest();
            setApplication(res.data)
        } catch (error) {
            if(Array.isArray(error.response.data)){
                setErrors(error.response.data)
            }else{
                setErrors([error.response.data])
            }
        }
    }
    // create new data
    const createApplication = async (data)=>{
        try {
            const res = await createApplicationRequest(data)
            setApplication(res.data)
            setMessage("Created succefully")
        } catch (error) {
            setErrors(error.response.data)
        }
    }
    // Edit the data
    const editApplication = async (id,data)=>{
        try {
            await editApplicationRequest(id,data)
        } catch (error) {
            setErrors(error.response.data)
        }
    }
    //Delete the data
    const deleteApplication = async (id)=>{
        try {
            const res = await deleteApplicationRequest(id)
            if(res.status === 200) 
                return setApplication(application.filter((application) => application._id !== id))
                
        } catch (error) {
           setErrors(error.response.data)
        }
    }
    //  Get a single application by ID
    const getApplication = async (id)=>{
        try {
            const res =  await getApplicationRequest(id);
            return res.data;
        } catch (error) {
            setErrors(error.response.data)
        }
    }
    // Reset all state when logging out
    const handleLogout = ()=>{
        setApplication([]);
        setErrors([]);
        setMessage(null);
    }

    return(
        <ApplicationContextC.Provider
            value={{
                getApplications,
                createApplication,
                deleteApplication,
                getApplication,
                editApplication,
                handleLogout,
                application,
                message,
                errors
        }}>
            {children}
        </ApplicationContextC.Provider>
    )
}
 