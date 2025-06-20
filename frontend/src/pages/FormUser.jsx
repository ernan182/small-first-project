import { useEffect } from 'react';
import {AuthContextU} from '../context/auth.contex';
import {useForm} from 'react-hook-form';
function FormUser() {
    const {updateProfile,profile,user,errors} = AuthContextU();
    const {register,handleSubmit,setValue} = useForm();
    useEffect(()=>{
        profile();
    },[])

    useEffect(()=>{
        if(user){
            setValue('username',user.username)
            setValue('email',user.email)
            setValue('name',user.name)
            setValue('phonenumber',user.phonenumber)
        }
    },[user])
    const submit = async (data)=>{
        const formData = new FormData();
        
        // Append all text fields
        formData.append('username', data.username || '');
        formData.append('email', data.email || '');
        formData.append('password', data.password || '');
        formData.append('name', data.name || '');
        formData.append('phonenumber', data.phonenumber || '');
        
        // Append file if it exists
        if (data.profile_picture && data.profile_picture instanceof File) {
            formData.append('image', data.profile_picture);
        }
        await updateProfile(formData)
    }
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900 py-12 px-4 sm:px-6 lg:px-8">
            {/* Error Messages */}
            {
                errors.length > 0 && (
                    <div className="mb-6 space-y-2">
                        {errors.map((error) => (
                            <div className="bg-red-500/20 border border-red-500/50 text-red-200 px-4 py-3 rounded-lg backdrop-blur-sm">
                                {error}
                            </div>
                        ))}
                    </div>
                )
            }
            <div className="max-w-2xl mx-auto">
                {/* Header Section */}
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-bold bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent mb-2">
                        Edit Profile
                    </h1>
                    <p className="text-gray-300">
                        Update your profile information and showcase your identity
                    </p>
                </div>

                {/* Profile Card */}
                <div className="backdrop-blur-md bg-white/10 rounded-2xl border border-white/20 p-8 shadow-2xl">
                    {/* Current Profile Picture Display */}
                    <div className="flex flex-col items-center mb-8">
                        <div className="relative group">
                            <img 
                                src={user.profile_picture} 
                                alt="Current profile" 
                                className="h-32 w-32 rounded-full object-cover ring-4 ring-purple-400 group-hover:ring-purple-300 transition-all duration-300"
                            />
                            <div className="absolute inset-0 rounded-full bg-black/20 group-hover:bg-black/10 transition-all duration-300"></div>
                        </div>
                        <p className="text-gray-300 text-sm mt-3">Current Profile Picture</p>
                    </div>

                    {/* Profile Form */}
                    <form onSubmit={handleSubmit(submit)} className="space-y-6">
                        {/* Username Field */}
                        <div>
                            <label htmlFor="username" className="block text-sm font-medium text-gray-200 mb-2">
                                Username
                            </label>
                            <div className="relative">
                                <input 
                                    type="text" 
                                    {...register('username')} 
                                    placeholder="Enter your username"
                                    className="w-full px-4 py-3 backdrop-blur-md bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all duration-300"
                                />
                            </div>
                        </div>

                        {/* Email Field */}
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-200 mb-2">
                                Email Address
                            </label>
                            <div className="relative">
                                <input 
                                    type="email" 
                                    {...register('email')} 
                                    placeholder="Enter your email"
                                    className="w-full px-4 py-3 backdrop-blur-md bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all duration-300"
                                />
                            </div>
                        </div>

                        {/* Password Field */}
                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-200 mb-2">
                                New Password
                            </label>
                            <div className="relative">
                                <input 
                                    type="password" 
                                    {...register('password')} 
                                    placeholder="Enter new password (leave blank to keep current)"
                                    className="w-full px-4 py-3 backdrop-blur-md bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all duration-300"
                                />
                            </div>
                            <p className="text-gray-400 text-xs mt-1">Leave blank to keep your current password</p>
                        </div>

                        {/* Full Name Field */}
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-200 mb-2">
                                Full Name
                            </label>
                            <div className="relative">
                                <input 
                                    type="text" 
                                    {...register('name')} 
                                    placeholder="Enter your full name"
                                    className="w-full px-4 py-3 backdrop-blur-md bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all duration-300"
                                />
                            </div>
                        </div>

                        {/* Phone Number Field */}
                        <div>
                            <label htmlFor="phonenumber" className="block text-sm font-medium text-gray-200 mb-2">
                                Phone Number
                            </label>
                            <div className="relative">
                                <input 
                                    type="tel" 
                                    {...register('phonenumber')} 
                                    placeholder="Enter your phone number"
                                    className="w-full px-4 py-3 backdrop-blur-md bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all duration-300"
                                />
                            </div>
                        </div>

                        {/* Profile Picture Upload */}
                        <div>
                            <label className="block text-sm font-medium text-gray-200 mb-2">
                                Update Profile Picture
                            </label>
                            <div className="relative">
                                <input
                                    type="file"
                                    accept="image/*"
                                    onChange={(e) => {
                                        setValue('profile_picture', e.target.files[0]);
                                        // Show selected file name
                                        const fileName = e.target.files[0]?.name || '';
                                        const fileLabel = document.querySelector('#file-label-text');
                                        if (fileName && fileLabel) {
                                            fileLabel.textContent = `Selected: ${fileName}`;
                                            fileLabel.classList.add('text-green-300');
                                            fileLabel.classList.remove('text-gray-300');
                                        }
                                    }}
                                    className="hidden"
                                    id="profile-upload"
                                />
                                <label 
                                    htmlFor="profile-upload"
                                    className="w-full px-4 py-3 backdrop-blur-md bg-white/10 border-white/20 rounded-xl text-gray-300 hover:text-white cursor-pointer transition-all duration-300 hover:bg-white/20 border-2 border-dashed hover:border-purple-400 flex items-center justify-center space-x-2"
                                >
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                    <span id="file-label-text">Choose New Profile Picture</span>
                                </label>
                            </div>
                            <p className="text-gray-400 text-xs mt-1">Supported formats: JPG, PNG, GIF (Max 5MB)</p>
                        </div>

                        {/* Submit Button */}
                        <div className="pt-4">
                            <button 
                                type="submit"
                                className="w-full py-3 px-6 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-transparent"
                            >
                                Update Profile
                            </button>
                        </div>
                    </form>

                    {/* Help Section */}
                    <div className="mt-8 p-4 backdrop-blur-md bg-white/5 rounded-xl border border-white/10">
                        <h3 className="text-lg font-semibold text-white mb-2">Profile Tips</h3>
                        <ul className="text-gray-300 text-sm space-y-1">
                            <li>• Use a clear, professional profile picture</li>
                            <li>• Choose a unique username that represents you</li>
                            <li>• Keep your contact information up to date</li>
                            <li>• Use a strong password to keep your account secure</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FormUser;