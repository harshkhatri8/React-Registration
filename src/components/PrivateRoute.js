import { useNavigate } from "react-router-dom";
import Login from "./Login";
function PrivateRoute({isLoggedIn,children}){
    const Navigate = useNavigate()
    if(isLoggedIn)
        {
            return children;
        }
        else{
            return (
                <Login></Login>
            )
        }
    
}
export default PrivateRoute;