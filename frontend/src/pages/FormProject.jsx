import { useForm } from "react-hook-form";
import { ApplicationContextU } from "../context/application.context";
import { useEffect } from "react";
import  {useNavigate, useParams} from "react-router-dom"
function FormProject() {
    const {register,handleSubmit,setValue} = useForm();
    const {createApplication,errors,getApplication, editApplication} = ApplicationContextU();
    const param = useParams();
    const navigate = useNavigate();
    useEffect(()=>{
        const loadData = async () => {
            if(param.id){
            const res = await getApplication(param.id);
            setValue("title",res.title);
            setValue("description",res.description);
            setValue("link",res.link);
            }
        }
        loadData();
    },[]);

    const submit = (data)=>{
        if(param.id){
            editApplication(param.id,data)
            navigate('/application');
        }else{
            createApplication(data)
            navigate('/application');
        }
    }
    return(
        <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 p-6">
            <div className="max-w-2xl mx-auto">
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 shadow-2xl">
                    <div className="text-center mb-8">
                        <h2 className="text-3xl font-bold text-white mb-2">Add New Project</h2>
                        <p className="text-gray-300">Share your latest creation with the world</p>
                    </div>

                    <form onSubmit={handleSubmit(submit)} className="space-y-6">
                        {/* Error Messages */}
                        {errors.length > 0 && (
                            <div className="space-y-2">
                                {errors.map((error, i) => (
                                    <div 
                                        key={i} 
                                        className="bg-red-500/20 border border-red-500/50 text-red-200 px-4 py-3 rounded-lg backdrop-blur-sm flex items-center"
                                    >
                                        <svg className="w-5 h-5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                                        </svg>
                                        {error}
                                    </div>
                                ))}
                            </div>
                        )}

                        <div className="space-y-6">
                            {/* Title Field */}
                            <div>
                                <label className="block text-white font-semibold mb-2">
                                    Project Title
                                </label>
                                <input 
                                    type="text" 
                                    {...register("title", {required: true})} 
                                    placeholder="My Awesome App"
                                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent backdrop-blur-sm transition-all duration-300"
                                />
                                <p className="text-gray-400 text-sm mt-1">
                                    Give your project a catchy, descriptive name
                                </p>
                            </div>

                            {/* Description Field */}
                            <div>
                                <label className="block text-white font-semibold mb-2">
                                    Description
                                </label>
                                <textarea 
                                    {...register("description", {required: true})} 
                                    placeholder="Describe what your project does, the technologies used, and what makes it special..."
                                    rows="4"
                                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent backdrop-blur-sm transition-all duration-300 resize-none"
                                />
                                <p className="text-gray-400 text-sm mt-1">
                                    Explain what your project does and what technologies you used
                                </p>
                            </div>

                            {/* Link Field */}
                            <div>
                                <label className="block text-white font-semibold mb-2">
                                    Project Link
                                </label>
                                <div className="relative">
                                    <input 
                                        type="url" 
                                        {...register("link", {required: true})} 
                                        placeholder="https://your-project.com"
                                        className="w-full px-4 py-3 pl-10 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent backdrop-blur-sm transition-all duration-300"
                                    />
                                    <svg className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.102m0 0l4-4a4 4 0 105.656-5.656l-4 4a4 4 0 01-5.656 0z" />
                                    </svg>
                                </div>
                                <p className="text-gray-400 text-sm mt-1">
                                    Live demo, GitHub repository, or project homepage
                                </p>
                            </div>
                        </div>

                        {/* Submit Button */}
                        <div className="pt-4">
                            <button 
                                type="submit"
                                className="w-full py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-lg font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-transparent transform hover:scale-105 transition-all duration-300 shadow-lg"
                            >
                                Add Project to Portfolio
                            </button>
                        </div>
                    </form>

                    {/* Tips Section */}
                    <div className="mt-8 pt-6 border-t border-white/20">
                        <h3 className="text-white font-semibold mb-3 flex items-center">
                            <svg className="w-5 h-5 mr-2 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            Tips for Great Projects
                        </h3>
                        <ul className="text-gray-300 text-sm space-y-1">
                            <li>• Use a clear, descriptive title that explains what your project does</li>
                            <li>• Include technologies used and key features in your description</li>
                            <li>• Make sure your link works and showcases your project properly</li>
                            <li>• Add screenshots or demos to make your project more appealing</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FormProject;