import { useEffect } from "react";
import { AuthContextU } from "../context/auth.contex";
import { ApplicationContextU } from "../context/application.context";
import CardApplication from "../components/card.application";
import { Link } from "react-router-dom";
function ProjectHome() {
    const {message} = AuthContextU();
    const {getApplications,application} = ApplicationContextU();
    useEffect(()=>{
           const getApps = async ()=>{
             await getApplications();
           }
           getApps();
    },[])
    const hasApplication = Array.isArray(application) && application.length > 0;
    return(
        hasApplication?( <>
            <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 p-6">
                <div className="max-w-6xl mx-auto">
                    {/* Message Display */}
                    {message && (
                        <div className="mb-6 bg-green-500/20 border border-green-500/50 text-green-200 px-6 py-4 rounded-lg backdrop-blur-sm">
                            {message}
                        </div>
                    )}

                    {/* Dashboard Header */}
                    <div className="mb-8">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                            <div>
                                <h1 className="text-4xl font-bold text-white mb-2">
                                    Your Projects
                                </h1>
                                <p className="text-gray-300 text-lg">
                                    Manage and showcase your digital creations
                                </p>
                            </div>
                            
                            <div className="flex items-center gap-4">
                                <span className="px-4 py-2 bg-white/10 text-white rounded-full backdrop-blur-sm border border-white/20">
                                    {application.length} {application.length === 1 ? 'Project' : 'Projects'}
                                </span>
                                <a 
                                    href="/add-project"
                                    className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-full hover:from-purple-700 hover:to-pink-700 transform hover:scale-105 transition-all duration-300 shadow-lg"
                                >
                                    Add New Project
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Projects Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {
                            application.map((app) => (
                                <CardApplication key={app._id} app={app}/>
                            ))
                        }
                    </div>
                </div>
            </div>
        </>):(<>
            <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 p-6">
                <div className="max-w-6xl mx-auto">
                    {/* Message Display */}
                    {message && (
                        <div className="mb-6 bg-green-500/20 border border-green-500/50 text-green-200 px-6 py-4 rounded-lg backdrop-blur-sm">
                            {message}
                        </div>
                    )}

                    {/* Empty State */}
                    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
                        <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-12 max-w-2xl border border-white/20 shadow-2xl">
                            <div className="w-24 h-24 bg-purple-600/30 rounded-full flex items-center justify-center mx-auto mb-8">
                                <svg className="w-12 h-12 text-purple-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                                </svg>
                            </div>
                            
                            <h1 className="text-4xl font-bold text-white mb-4">
                                Ready to Share Your First Project?
                            </h1>
                            
                            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                                You don't have any projects yet. Start building your portfolio by adding your first application, website, or digital creation.
                            </p>
                            
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <a 
                                    href="/add-project"
                                    className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-lg font-semibold rounded-full hover:from-purple-700 hover:to-pink-700 transform hover:scale-105 transition-all duration-300 shadow-lg"
                                >
                                    Add Your First Project
                                </a>
                                <Link
                                    to='/explore'
                                    className="px-8 py-4 border-2 border-white/30 text-white text-lg font-semibold rounded-full hover:bg-white hover:text-purple-900 transition-all duration-300"
                                >
                                    Explore Examples
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>)
    )
}
export default ProjectHome;