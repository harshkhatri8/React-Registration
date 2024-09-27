
import { Link } from "react-router-dom";
import { toast } from "react-hot-toast";
function Navbar(props){
    let isLoggedIn = props.isLoggedIn
    let setIsLoggedIn = props.setIsLoggedIn
    return(
        <div className="w-[60vw] mx-auto mt-[20px] items-center">
    
            <div className="flex justify-between items-center">
                <div className="text-[1.5rem]">
                    <Link to="/">
                        StudyNotion
                        </Link>
                </div>
                <ul className="flex justify-between items-center gap-x-6 ">
                    <li className="ml-[8px]">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="ml-[8px]">
                        <Link to="/">About</Link>
                    </li>
                    <li className="ml-[8px]">
                        <Link to="/">Contacts</Link>
                    </li>
                </ul>

                <div className="flex justify-between items-center gap-x-4  ">
                   {
                    !isLoggedIn &&
                   
                        <Link to="/login">
                                <button  className="bg-gray-900 ml-[8px] py-[8px] px-[12px] rounded border border-gray-600 ">
                                 Log in
                                </button>
                            </Link>
                    
                    }
                   {
                    !isLoggedIn &&
                    
                         <Link to="/signup">
                                <button   className="bg-gray-900 ml-[8px] py-[8px] px-[12px] rounded border border-gray-600 ">
                                    Sign up
                                </button>
                            </Link>
                   }
                   {
                    isLoggedIn &&
                    
                         <Link to="/">
                                <button 
                                 onClick={()=>{setIsLoggedIn(false) 
                               toast.success("Logged Out")
                              }}
                              className="bg-gray-900 ml-[8px] py-[8px] px-[12px] rounded border border-gray-600 ">
                                Logout
                            </button>
                        </Link>
                 
                   }
                   {
                    isLoggedIn &&
                    
                         <Link to="/dashboard">
                            <button  className="bg-gray-900 ml-[8px] py-[8px] px-[12px] rounded border border-gray-600 ">
                                DashBoard
                                </button>
                                </Link>
                    
                   } 
                </div>
            </div>

             

            
        </div>
    )
}
export default Navbar;