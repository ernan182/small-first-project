import { AuthContextU } from "./context/auth.contex";
import { Navigate,Outlet } from "react-router-dom";


//
// This component protects private routes.
// Only authenticated users can access them.
//

function ProtectedRoute() {
    const {isAuthenticated,loading} = AuthContextU();
    if(loading) return <h1>Loading</h1>
    if(!loading && !isAuthenticated) return <Navigate to='/' replace/>
    return <Outlet to='/add-project'/>
    
}
export default ProtectedRoute;