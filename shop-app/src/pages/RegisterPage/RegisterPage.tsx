import { Link } from "react-router-dom"
import SignUp from "./SignUp/SignUp"


const RegisterPage = () => {
  return (
    <div className="page">
      <div className="form_container">
        <h1>회원가입</h1>
        <SignUp/>
        <p>
          이미 가입하셨나요? <Link to={"/login"}>로그인</Link>
        </p>
      </div>
    </div>
  )
}

export default RegisterPage