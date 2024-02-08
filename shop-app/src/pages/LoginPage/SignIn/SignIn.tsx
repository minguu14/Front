import Form from "../../../components/Form/Form"
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "../../../firebase";
import { useAppDispatch } from "../../../hooks/redux";
import { setUser } from "../../../store/user/useSlice";


const SignIn = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const [firebaseError, setFirebaseError] = useState("");
    
    const handleLogin = (email: string, password: string) => {
        const auth = getAuth(app);
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            dispatch(
                setUser({
                    email: userCredential.user.email,
                    token: userCredential.user.refreshToken,
                    id: userCredential.user.uid,
                })
            )
            navigate("/");
        })
        .catch((error) => {
            return error && setFirebaseError("이메일 또는 비밀번호가 잘못되었습니다.");
        });
    }

  return (
    <Form
        title={"로그인"}
        getDataForm={handleLogin}
        firebaseError={firebaseError}
    />
  )
}

export default SignIn