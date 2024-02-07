import { useNavigate } from "react-router-dom"
import Form from "../../../components/Form/Form"
import { useState } from "react";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { app } from "../../../firebase";
import { useAppDispatch } from "../../../hooks/redux";
import { setUser } from "../../../store/userSlice/useSlice";


const SignUp = () => {
    const navigate = useNavigate();
    const [firebaseError, setFirebaseError] = useState("");
    const dispatch = useAppDispatch();
    const handleSignupAndLogin = (email: string, password: string) => {
        const auth = getAuth(app);
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            dispatch(setUser({
                email: userCredential.user.email,
                token: userCredential.user.refreshToken,
                id: userCredential.user.uid,
            }))
            navigate("/");
        })
        .catch((error) => {
            return error && setFirebaseError("이메일 또는 비밀번호가 잘못되었습니다.");
        });
    }
  return (
    <Form
        title={"가입하기"}
        getDataForm={handleSignupAndLogin}
        firebaseError={firebaseError}
    />
  )
}

export default SignUp