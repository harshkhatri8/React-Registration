import Template from "./Template";
import formImage from "./sssss.jpg"
function SignUp({setIsLoggedIn}){
    return(
        <Template
        title="Welcome Back"
        desc1 = "Build skills for today, tommorow, and beyond"
        desc2 = "Education to future-proof your career"
        image = {formImage}
        formType="signup"
        setIsLoggedIn={setIsLoggedIn}
        />
    )
}
export default SignUp;