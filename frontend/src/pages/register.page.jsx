import { useForm } from 'react-hook-form'
import { AuthContextU } from '../context/auth.contex';
import { useEffect } from 'react';
import {useNavigate} from "react-router-dom"
function RegisterPage() {
    const {register,handleSubmit, formState: {errors}} = useForm();
    const {signUp,errors : errorRegister,isAuthenticated} = AuthContextU();
    const navigate = useNavigate()
    const submit = async (data)=>{
        await signUp(data)
    }
    useEffect(()=>{
        if(isAuthenticated) return navigate('/application')
    },[isAuthenticated])
    return(
        <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center p-6">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 w-full max-w-md border border-white/20 shadow-2xl">
                <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold text-white mb-2">Create Account</h2>
                    <p className="text-gray-300">Join Mi Page and showcase your projects</p>
                </div>

                <form onSubmit={handleSubmit(submit)} className="space-y-6">
                    {/* Error Messages */}
                    {errorRegister.length > 0 && (
                        <div className="space-y-2">
                            {errorRegister.map((error, i) => (
                                <div 
                                    key={i} 
                                    className="bg-red-500/20 border border-red-500/50 text-red-200 px-4 py-3 rounded-lg backdrop-blur-sm"
                                >
                                    {error}
                                </div>
                            ))}
                        </div>
                    )}

                    <div>
                        <input 
                            type="text" 
                            {...register("username", {required: true})} 
                            placeholder="Username"
                            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent backdrop-blur-sm transition-all duration-300"
                        />
                        {errors.username && (
                            <p className="text-red-300 text-sm mt-2 flex items-center">
                                <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                                </svg>
                                Username is required
                            </p>
                        )}
                    </div>

                    <div>
                        <input 
                            type="email" 
                            {...register("email", {required: true})} 
                            placeholder="Email"
                            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent backdrop-blur-sm transition-all duration-300"
                        />
                        {errors.email && (
                            <p className="text-red-300 text-sm mt-2 flex items-center">
                                <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                                </svg>
                                Email is required
                            </p>
                        )}
                    </div>

                    <div>
                        <input 
                            type="password" 
                            {...register("password", {required: true})} 
                            placeholder="Password"
                            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent backdrop-blur-sm transition-all duration-300"
                        />
                        {errors.password && (
                            <p className="text-red-300 text-sm mt-2 flex items-center">
                                <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                                </svg>
                                Password is required
                            </p>
                        )}
                    </div>

                    <button 
                        type="submit"
                        className="w-full py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-transparent transform hover:scale-105 transition-all duration-300 shadow-lg"
                    >
                        Create Account
                    </button>
                </form>

                <div className="mt-6 text-center">
                    <p className="text-gray-300">
                        Already have an account?{' '}
                        <a href="/login" className="text-purple-400 hover:text-purple-300 font-semibold transition-colors duration-300">
                            Sign in here
                        </a>
                    </p>
                </div>
            </div>
        </div>
    )
}
export default RegisterPage;