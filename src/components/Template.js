import SignUpForm from "./SignUpForm";
import LogInForm from "./LogInForm";
import bgImage from "./bg.jpg"
import { FcGoogle } from "react-icons/fc";
function Template(props){
    return(
        <div className="w-[60vw] mx-auto items-center flex justify-between h-screen mt-[-100px]">

            <div className="w-5/12">
                <h1 className="text-[1.875rem] font-semibold leading-[2.375rem]">{props.title}</h1>
                <p className="text-[1.125rem] leading-[1.625rem] mt-4">
                    <span className="text-richblack-100 ">{props.desc1}</span><br/>
                    <span className="text-blue-100 italic">{props.desc2}</span>
                </p>
                {
                    props.formType ==="signup"?
                    (<SignUpForm setIsLoggedIn={props.setIsLoggedIn}/>):
                    (<LogInForm setIsLoggedIn={props.setIsLoggedIn}/>)
                }
                <div className="flex flex-row w-full items-center  gap-x-2">
                    <div className="w-full h-[1px] bg-gray-700 "></div>
                    <p className="font-medium text-gray-500">OR</p>
                    <div className="w-full h-[1px] bg-gray-700 "></div>
                </div>
                <button className="w-full flex items-center justify-center rounded-[8px] font-medium text-gray-500 border border-gray-500 px-[12px] py-[8px] gap-x-2 mt-6">
                    <FcGoogle/>
                    <p>SignUp With Google</p>
                    </button>
            </div>

            <div  className="w-5/12 relative items-center">
                <img src={bgImage}
                width={558}
                height={504}></img>
                <img 
                className="absolute  -top-2  right-4"
                src={props.image}
                width={558}
                height={504}></img>
            </div>


        </div>

    )
}
export default Template;