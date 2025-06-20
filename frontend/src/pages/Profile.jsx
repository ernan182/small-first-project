import { AuthContextU } from "../context/auth.contex";
import { useEffect } from "react";
import {Link} from 'react-router-dom';
function Profile(){
    const {profile,user} = AuthContextU();
    useEffect(()=>{
        profile();
    },[])
    return(
       // Profile Page Component with modern styling
        <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 py-8 px-4">
            <div className="max-w-4xl mx-auto">
                {/* Profile Header Card */}
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 p-8 mb-8 shadow-2xl">
                    <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
                        {/* Profile Picture Section */}
                        <div className="flex-shrink-0">
                            {user?.profile_picture ? (
                                <img 
                                    src={user.profile_picture}
                                    alt="Profile Picture"
                                    className="w-32 h-32 rounded-full object-cover ring-4 ring-purple-400 shadow-xl hover:ring-pink-400 transition-all duration-300 transform hover:scale-105"
                                />
                            ) : (
                                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center ring-4 ring-purple-400 shadow-xl">
                                    <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                                    </svg>
                                </div>
                            )}
                        </div>

                        {/* Profile Info Section */}
                        <div className="flex-1 text-center md:text-left">
                            <h1 className="text-4xl font-bold bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent mb-2">
                                {user.username}
                            </h1>
                            <p className="text-gray-300 text-lg mb-6">Mi Page Creator</p>
                            
                            {/* Profile Details */}
                            <div className="space-y-3">
                                <div className="flex items-center justify-center md:justify-start space-x-3">
                                    <svg className="w-5 h-5 text-purple-400" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                                    </svg>
                                    <p className="text-white font-medium">{user.email}</p>
                                </div>
                                
                                {user.name && (
                                    <div className="flex items-center justify-center md:justify-start space-x-3">
                                        <svg className="w-5 h-5 text-purple-400" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 5.9c1.16 0 2.1.94 2.1 2.1s-.94 2.1-2.1 2.1S9.9 9.16 9.9 8s.94-2.1 2.1-2.1m0 9c2.97 0 6.1 1.46 6.1 2.1v1.1H5.9V17c0-.64 3.13-2.1 6.1-2.1M12 4C9.79 4 8 5.79 8 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 9c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4z"/>
                                        </svg>
                                        <p className="text-white font-medium">{user.name}</p>
                                    </div>
                                )}
                                
                                {user.phonenumber && (
                                    <div className="flex items-center justify-center md:justify-start space-x-3">
                                        <svg className="w-5 h-5 text-purple-400" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                                        </svg>
                                        <p className="text-white font-medium">{user.phonenumber}</p>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Edit Button */}
                        <div className="flex-shrink-0">
                            <button className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-full hover:from-purple-700 hover:to-pink-700 transform hover:scale-105 transition-all duration-300 shadow-lg flex items-center space-x-2">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/>
                                </svg>
                                <span><Link to='/profile_'>Edit Profile</Link></span>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-white/10 backdrop-blur-lg rounded-xl border border-white/20 p-6 text-center shadow-xl">
                        <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                            </svg>
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-2">0</h3>
                        <p className="text-gray-300">Projects Created</p>
                    </div>

                    <div className="bg-white/10 backdrop-blur-lg rounded-xl border border-white/20 p-6 text-center shadow-xl">
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                            </svg>
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-2">0</h3>
                        <p className="text-gray-300">Profile Views</p>
                    </div>

                    <div className="bg-white/10 backdrop-blur-lg rounded-xl border border-white/20 p-6 text-center shadow-xl">
                        <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3z"/>
                            </svg>
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-2">0</h3>
                        <p className="text-gray-300">Likes Received</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile;