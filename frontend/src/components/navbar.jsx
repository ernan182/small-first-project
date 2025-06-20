import { AuthContextU } from "../context/auth.contex";
import { ApplicationContextU } from "../context/application.context";
import {Link} from 'react-router-dom';
import Logo from  '/logo.svg';

//
// Navigation bar component
// Shows different options depending on whether the user is authenticated
//

function Navbar() {
    const {isAuthenticated, user,logout} = AuthContextU();
    const {handleLogout: resetData} = ApplicationContextU();
    
    const handleLogout = async ()=>{
        await logout(),await resetData()
    } 
    return(
        <navbar className="bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 backdrop-blur-lg border-b border-white/20 sticky top-0 z-50">
            <ul className="flex items-center justify-between max-w-7xl mx-auto px-6 py-4">
                {
                    isAuthenticated ?
                    (<>
                        <li className="flex items-center">
                            <Link to="/application">
                                <img src={Logo} alt="Logo img 😼" 
                                className="h-10 w-10 rounded-full ring-2 ring-purple-400 shadow-lg hover:ring-pink-400 transition-all duration-300 transform hover:scale-110"/> 
                            </Link>
                        </li>
                        
                        <li className="flex items-center space-x-2 text-white">
                            <span className="text-gray-300">Welcome</span>
                            <p className="font-semibold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent text-lg">
                                {user.username}
                            </p>
                        </li>

                        <li className="flex items-center space-x-4">
                            <Link 
                                to="/profile"
                                className="flex items-center space-x-2 px-4 py-2 bg-white/10 text-white font-semibold rounded-full hover:bg-white/20 transition-all duration-300 border border-white/20"
                            >
                                {user?.profile_picture ? (
                                    <img 
                                        src={user.profile_picture}
                                        alt="Profile" 
                                        className="w-6 h-6 rounded-full object-cover"
                                    />
                                ) : (
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                                    </svg>
                                )}
                                <span>Profile</span>
                            </Link>
                            <button 
                                onClick={handleLogout}
                                className="px-6 py-2 border-2 border-white/30 text-white font-semibold rounded-full hover:bg-white hover:text-purple-900 transition-all duration-300"
                            >
                                Logout
                            </button>
                        </li>
                    </>) :
                    (<>
                        <li className="flex items-center space-x-3">
                            <Link to='/'>
                                <img 
                                src={Logo} 
                                alt="Logo img 😼" 
                                className="h-10 w-10 rounded-full ring-2 ring-purple-400 shadow-lg hover:ring-pink-400 transition-all duration-300 transform hover:scale-110" 
                                />
                            </Link>
                            <span className="text-2xl font-bold bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent hover:from-purple-300 hover:to-pink-300 transition-all duration-300">
                                Solo Projects
                            </span>
                        </li>
                        <li className="flex items-center space-x-4">
                            <Link 
                                to="/register"
                                className="px-6 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-full hover:from-purple-700 hover:to-pink-700 transform hover:scale-105 transition-all duration-300 shadow-lg"
                            >
                                Sign up
                            </Link>
                            <Link 
                                to="/login"
                                className="px-6 py-2 border-2 border-white/30 text-white font-semibold rounded-full hover:bg-white hover:text-purple-900 transition-all duration-300"
                            >
                                Sign in
                            </Link>
                        </li>
                    </>)
                }
            </ul>
        </navbar>
    )
}

export default Navbar;