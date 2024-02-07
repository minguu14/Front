import { Link } from "react-router-dom"
import SignIn from "./SignIn/SignIn"

const LoginPage = () => {
  return (
    <div className="page">
      <div className="form_container">
        <h1>로그인</h1>
        <SignIn/>
        <p>
          회원이 아니신가요? <Link to={"/register"}>회원가입</Link>
        </p>
      </div>
    </div>
  )
}

export default LoginPage