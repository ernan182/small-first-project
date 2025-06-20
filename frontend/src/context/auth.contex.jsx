import { createContext, useContext, useEffect, useState } from "react";
import { loginRequest, logoutRequest, profileRequest, profileUpdateRequest, registerRequest, validateRequest } from "../api/authUser";
import Cookies from "js-cookie";

//
// On here is the context for our User
//

// Create context
export const AuthContextC = createContext();

// Custom hook to consume the context
export const AuthContextU = ()=>{
    const context = useContext(AuthContextC);
    if(!context){
        throw new Error("The context has not been created")
    }
    return context;
}

// Provider component
export const AuthProvider = ({children})=>{
    const [user,setUser] = useState(null);
    const [isAuthenticated,setIsAuthenticated] = useState(false);
    const [errors,setErrors]= useState([]);
    const [message,setMessage] = useState(null)
    const [loading ,setLoading] = useState(true);

    // Sign up new user

    const  signUp = async (user)=>{
        try{
            const res = await registerRequest(user);
            setUser(res.data)
            setIsAuthenticated(true)
            setMessage("User created suseccfuly")
        }catch(err){
            if(Array.isArray(err.response.data)){
                setErrors(err.response.data)
            }else{
                setErrors([err.response.data])
            }
            console.log(err)
        }
    }
    // Sign in existing user
    const signIn  = async (user)=>{
        try {
            const res = await loginRequest(user)
            setUser(res.data)
            setIsAuthenticated(true)
            setMessage("Welcome "+res.data.username+ "😼😼😼")
        } catch (error) {
            if(Array.isArray(error.response.data)){
                setErrors(error.response.data)
            }else{
                setErrors([error.response.data])
            }
        }
    }
    // Validate session from token
    useEffect(() => {
        const checkLogin = async () => {
            const token = Cookies.get('token');
            if(!token){
                setUser(null);
                setIsAuthenticated(false);
                setLoading(false);
                return;
            }
            try {
                const res = await validateRequest();
                if(!res || !res.data){
                    setUser(null);
                    setIsAuthenticated(false);
                    setLoading(false);
                    return;
                }
                setUser(res.data);
                setIsAuthenticated(true);
                setLoading(false);
            } catch (error) {
                setUser(null);
                setIsAuthenticated(false);
                setLoading(false);
                
            }
        };
        checkLogin();
    },[]);
    // Auto-clear errors after 10 seconds
    useEffect(() => {
        const Interval = setInterval(()=>{
            setErrors([])
        },10000);
        return () => clearInterval(Interval);
    },[errors]);

    // Logout user
    const logout = async ()=>{
        try{
            await logoutRequest();
            setIsAuthenticated(false);
            setUser(null);
            localStorage.clear();
        }catch(err){
            console.log(err);
        }
    }
    // Fetch user profile
    const profile = async ()=>{
        try {
            const res = await profileRequest();
            setUser(res.data);
        } catch (error) {
            setErrors(error.response.data);
        }
    }
     // Update user profile
    const updateProfile = async (data)=>{
        try{
            const res = await profileUpdateRequest(data);
            setUser(res.data);
            setLoading(false);
        }catch(error){
            setErrors(error.response.data);
        }
    }
    return(
        <AuthContextC.Provider
            value={{
                signUp,
                signIn,
                logout,
                profile,
                updateProfile,
                user,
                isAuthenticated,
                errors,
                message,
                loading,
            }}
        >
            {children}
        </AuthContextC.Provider>
    )
}