import { Link, Navigate } from "react-router-dom";
import { AuthContextU } from "../context/auth.contex";

function HomePage() {
    const {isAuthenticated} = AuthContextU();
    return(
        <div>
            {
                isAuthenticated ?
                (
                    <Navigate to="/application" replace/>
                ):(
                    <>
                        
            {/* Hero Section */}
            <div className="container mx-auto px-6 py-20">
                <div className="text-center max-w-4xl mx-auto">
                    <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                        Showcase Your
                        <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"> Digital Creations</span>
                    </h1>
                    
                    <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed">
                        The perfect platform to display your apps, websites, and digital projects. 
                        Share your work with the world and build your developer portfolio.
                    </p>
                    
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <Link 
                            to="/register"
                            className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-lg font-semibold rounded-full hover:from-purple-700 hover:to-pink-700 transform hover:scale-105 transition-all duration-300 shadow-2xl"
                        >
                            Start Creating Now
                        </Link>
                        <Link 
                            to="/explore"
                            className="px-8 py-4 border-2 border-white text-white text-lg font-semibold rounded-full hover:bg-white hover:text-purple-900 transition-all duration-300"
                        >
                            Explore Projects
                        </Link>
                    </div>
                </div>
            </div>

            {/* Features Section */}
            <div className="container mx-auto px-6 py-20">
                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 text-center hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2">
                        <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
                            </svg>
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-4">Easy Upload</h3>
                        <p className="text-gray-300">
                            Simply add your project title, description, and link. Your creation is ready to share in seconds.
                        </p>
                    </div>

                    <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 text-center hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2">
                        <div className="w-16 h-16 bg-pink-600 rounded-full flex items-center justify-center mx-auto mb-6">
                            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                            </svg>
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-4">Showcase Portfolio</h3>
                        <p className="text-gray-300">
                            Build an impressive portfolio that showcases all your apps, websites, and digital projects in one place.
                        </p>
                    </div>

                    <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 text-center hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2">
                        <div className="w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6">
                            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-4">Connect & Share</h3>
                        <p className="text-gray-300">
                            Connect with other creators, share your work, and get discovered by potential collaborators.
                        </p>
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className="container mx-auto px-6 py-20">
                <div className="bg-gradient-to-r from-purple-800/30 to-pink-800/30 backdrop-blur-lg rounded-3xl p-12 text-center max-w-4xl mx-auto border border-white/20">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Ready to Share Your Work?
                    </h2>
                    <p className="text-xl text-gray-300 mb-8">
                        Join thousands of creators who trust Mi Page to showcase their digital projects.
                    </p>
                    <Link 
                        to="/register"
                        className="inline-block px-10 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xl font-bold rounded-full hover:from-purple-700 hover:to-pink-700 transform hover:scale-105 transition-all duration-300 shadow-2xl"
                    >
                        Get Started Free
                    </Link>
                </div>
            </div>

            {/* Footer */}
            <footer className="border-t border-white/20 py-12">
                <div className="container mx-auto px-6 text-center">
                    <div className="text-2xl font-bold text-white mb-4">Solo Projects</div>
                    <p className="text-gray-400">
                        The ultimate platform for showcasing your digital creations
                    </p>
                </div>
            </footer>
                    </>
                )
            }
        </div>
    )
}

export default HomePage;