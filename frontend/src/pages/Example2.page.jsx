function ExamplePages() {
    const fillData = [
  {
    "title": "Portfolio Website",
    "description": "A personal portfolio website showcasing my projects, skills, and resume, built using HTML, CSS, and JavaScript.",
    "link": "https://yourportfolio.com"
  },
  {
    "title": "E-commerce Store",
    "description": "An online store built with React and Firebase, featuring a shopping cart, user authentication, and real-time database updates.",
    "link": "https://myecommercestore.com"
  },
  {
    "title": "Blog Platform",
    "description": "A full-stack blog platform using Node.js, Express, and MongoDB where users can register, write, and comment on posts.",
    "link": "https://myblogplatform.com"
  },
  {
    "title": "Task Manager App",
    "description": "A productivity web app to manage daily tasks and deadlines, using Vue.js and a RESTful API.",
    "link": "https://mytaskmanager.com"
  }
];

    return(
        <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {fillData.map((data,i) => 
                <> 
                <div key={i} className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 shadow-xl hover:bg-white/15 transition-all duration-300 transform hover:-translate-y-2 group">
                        <header className="flex items-start justify-between mb-4">
                            <div className="flex-1 min-w-0">
                                <h1 className="text-xl font-bold text-white mb-2 truncate group-hover:text-purple-300 transition-colors duration-300">
                                    {data.title}
                                </h1>
                            </div>
                            
                            <div className="flex items-center gap-2 ml-4">
                                <a
                                    to='/'
                                    className="p-2 bg-blue-600/30 hover:bg-blue-600/50 text-blue-300 hover:text-blue-200 rounded-lg transition-all duration-300 transform hover:scale-110"
                                    title="Edit Project"
                                >
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                    </svg>
                                </a>
                                
                                <button 
                                    className="p-2 bg-red-600/30 hover:bg-red-600/50 text-red-300 hover:text-red-200 rounded-lg transition-all duration-300 transform hover:scale-110"
                                    title="Delete Project"
                                >
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                    </svg>
                                </button>
                            </div>
                        </header>

                        <div className="space-y-4">
                            <p className="text-gray-300 leading-relaxed line-clamp-3">
                                {data.description}
                            </p>
                            
                            <div className="flex items-center justify-between pt-4 border-t border-white/10">
                                <a 
                                    href='/'
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600/30 to-pink-600/30 hover:from-purple-600/50 hover:to-pink-600/50 text-purple-300 hover:text-purple-200 rounded-lg transition-all duration-300 transform hover:scale-105 border border-purple-500/30"
                                >
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                    </svg>
                                    View Project
                                </a>
                                
                                <div className="flex items-center gap-2 text-sm text-gray-400">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.102m0 0l4-4a4 4 0 105.656-5.656l-4 4a4 4 0 01-5.656 0z" />
                                    </svg>
                                    <span className="truncate max-w-32" title={data.link}>
                                        {new URL(data.link).hostname}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div> 
                </>
            )}
            </div>      
        </div>
    )    
}

export default ExamplePages;