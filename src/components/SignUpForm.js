import { useState } from "react"
import toast from "react-hot-toast";
import { AiOutlineEye,AiOutlineEyeInvisible } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

function SignUpForm({setIsLoggedIn}){
    const [formData,setFormData] = useState(
        {firstName:"",
        lastName:"",
        email:"",
        password:"",
        confirmPassword:""}
    )
    const [showPass,setShowPass] = useState(false)
    const [showConPass,setShowConPass] = useState(false)
    function changeHandler( event){
        console.log(event.target.value);
        setFormData((prev)=>(
            {
                ...prev,
                [event.target.name]: event.target.value
            }
        ))
    }

    const navigate = useNavigate()
    function submitHandler(e){
        e.preventDefault()
        if(formData.password != formData.confirmPassword){
            toast.error("password and confirm password are different")
            return;
        }
        setIsLoggedIn(true)
        toast.success("Account created  ")
        navigate("/dashboard")
    }

    const [accountType,setAccountType] = useState("student")
    return(
        <div className="flex flex-col w-full gap-y-4 gap-x-6 ">


            <div className="flex bg-gray-900 p-1 gap-x-1 my-6 rounded-full max-w-max">
                <button  
                className={`${accountType ==="student"?"bg-black text-white ":"text-gray-400 bg-transparent"} py-2 px-5 rounded-full transition-all duration-400`}
                onClick={()=>setAccountType("student")}>
                    Student
                </button>
                <button 
                   className={`${accountType ==="instructor"?"bg-black text-white ":"text-gray-400 bg-transparent"} py-2 px-5 rounded-full transition-all duration-400`}
            
                onClick={()=>setAccountType("instructor")}>
                    Instructor
                </button>
            </div>
            <form onSubmit={submitHandler}>
                    <div className="mt-[20px] flex gap-x-6">
                        <label className="w-full">
                            <p className="text-gray-300 mb-1 leading-[1.375rem]">Enter First Name <sup className="  text-pink-800">*</sup></p>
                            <input
                              className="w-full bg-gray-900 rounded-[0.5rem] text-gray-300 p-[12px]  shadow-gray-200/55"  type="text"
                            name="firstName"
                            value={formData.firstName}
                            required
                            onChange={changeHandler}
                            placeholder="Enter Your First Name"/>
                        </label>
                        <label className="w-full">
                            <p  className="text-gray-300 mb-1 leading-[1.375rem]">Enter Last Name <sup className="  text-pink-800">*</sup></p>
                            <input
                              className="w-full bg-gray-900 rounded-[0.5rem] text-gray-300 p-[12px]  shadow-gray-200/55" type="text"
                            name="lastName"
                            value={formData.lastName}
                            required
                            onChange={changeHandler}
                            placeholder="Enter Your Last Name"/>
                        </label>
                    </div>
                    <label className=" w-full">
                    <p  className="mt-[25px] text-gray-300 mb-1 leading-[1.375rem] ">Email Address <sup className="  text-pink-800">*</sup></p>

                    <input
                      className="w-full bg-gray-900 rounded-[0.5rem] text-gray-300 p-[12px]  shadow-gray-200/55"
                    type="email" 
                    value={formData.email}
                    name="email" 
                    onChange={changeHandler}
                    placeholder="Enter Email ID"
                    required ></input>

                  
                </label>
                <div  className="mt-[20px] flex gap-x-6">
                    <label className="w-full relative">
                        <p  className="text-gray-300 mb-1 leading-[1.375rem]">Password <sup className="  text-pink-800">*</sup></p>

                        <input
                          className="w-full bg-gray-900 rounded-[0.5rem] text-gray-300 p-[12px]  shadow-gray-200/55"
                        type={!showPass?("password"):("text")}
                        value={formData.password}
                        name="password" 
                        onChange={changeHandler}
                        placeholder="Enter password"
                        required ></input>
                        <span
                         className="white absolute right-3 top-[38px] cursor-pointer text-[1.5rem]"
                        onClick={()=>{setShowPass((prev)=>!prev)}}>
                            {showPass?(<AiOutlineEyeInvisible  fontSize={24} fill="#AFB2BF"/>):(<AiOutlineEye  fontSize={24} fill="#AFB2BF"/>)}
                        </span>
                       
                    </label>
                    <label className=" w-full relative">
                        <p  className="text-gray-300 mb-1 leading-[1.375rem]">Confirm Password <sup className="  text-pink-800">*</sup></p>

                        <input
                          className="w-full bg-gray-900 rounded-[0.5rem] text-gray-300 p-[12px]  shadow-gray-200/55"
                        type={!showConPass?("password"):("text")}
                        value={formData.confirmPassword}
                        name="confirmPassword" 
                        onChange={changeHandler}
                        placeholder="Confirm password"
                        required ></input>
                        <span 
                         className="white absolute right-3 top-[38px] cursor-pointer text-[1.5rem]"
                        onClick={()=>{setShowConPass((prev)=>!prev)}}>
                            {showConPass?(<AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF"/>):(<AiOutlineEye fontSize={24} fill="#AFB2BF"/>)}
                        </span>
                       
                    </label>
                </div>
                <button  className="w-full text-center text-black bg-yellow-400 rounded-[8px] font-medium px-[12px] py-[8px] mt-[20px] mb-[12px]">Create Account</button>
                    
            </form>
        </div>
    )
}
export default SignUpForm