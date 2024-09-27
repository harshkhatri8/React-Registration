import { useState } from "react";
import toast from "react-hot-toast";
import { AiOutlineEye,AiOutlineEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";

function LogInForm({setIsLoggedIn}){
    const navigate = useNavigate()
    const [showPass,setShowPass] = useState(false)
    const [ formData,setFormData] = useState({email:"",password:""})
    function changeHandler(event){
        setFormData((prev)=>(
            {
                ...prev,
                [event.target.name]: event.target.value
            }
        ))
    }


    function onSubmitHandler(event){
        event.preventDefault()
        setIsLoggedIn(true)
        toast.success("sign In Successfully")
        navigate("/dashboard")
    }
    return(
        <form className="flex flex-col w-full gap-y-4 gap-x-6" onSubmit={onSubmitHandler}>
            <label className="w-full mt-[15px]" >
                <p className="text-gray-300 mb-1 leading-[1.375rem]">Email Address <sup className="  text-pink-800">*</sup></p>

                <input
                 className="w-full bg-gray-900 rounded-[0.5rem] text-gray-300 p-[12px]  shadow-gray-200/55"
                type="text" 
                name="email" 
                value={formData.email}
                onChange={changeHandler}
                placeholder="Enter Email ID"
                required ></input>
            </label>
            <label className="w-full relative">
                <p className="text-gray-300 mb-1 leading-[1.375rem]">password <sup className=" text-pink-800">*</sup></p>

                <input
                className="w-full bg-gray-900 rounded-[0.5rem] text-gray-300 p-[12px]  shadow-gray-200"
                type={!showPass?("password"):("text")}
                value={formData.password}
                name="password" 
                onChange={changeHandler}
                placeholder="Enter password"
                required ></input>
                <span className="white absolute right-3 top-[38px] cursor-pointer text-[1.5rem]" onClick={()=>{setShowPass((prev)=>!prev)}}>
                    {showPass?(<AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF"/>):
                    (<AiOutlineEye  fontSize={24} fill="#AFB2BF"/>)}
                </span>
                <Link to="#">
                    <p className="text-blue-300 text-xs m max-w-max ml-auto mt-1 ">Forget password</p>
                </Link>
            </label>
            <button className="text-center text-black bg-yellow-400 rounded-[8px] font-medium px-[12px] py-[8px] mb-[15px]" >sign in</button>

        </form>
    )
}
export default LogInForm;