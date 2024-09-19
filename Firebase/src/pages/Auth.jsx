import React from 'react'
import '../styles/pages/Auth.css'
import { useState } from 'react'
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, getAuth, signInWithPopup } from 'firebase/auth'
import { app } from '../firebase' // Adjust the import path as necessary
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { GoogleAuthProvider } from "firebase/auth";

const provider = new GoogleAuthProvider();

const auth = getAuth(app);

const Auth = () => {

    const [signUp, setSignUp] = useState(true)
    const [authData, setAuthData] = useState({ email: '', password: '' })


    const onChangeFunc = (e) => {
        setAuthData({ ...authData, [e.target.name]: e.target.value })
    }

    const authFunc = async () => {

        if (signUp) {
            try {
                const data = await createUserWithEmailAndPassword(auth, authData.email, authData.password)
                const user = data.user;
                if (user) {
                    window.location = "/dashboard"
                }

            } catch (error) {
                toast.error(error.message)
            }

        } else {
            try {
                const data = await signInWithEmailAndPassword(auth, authData.email, authData.password)
                const user = data.user;
                if (user) {
                    window.location = "/dashboard"
                }
            }
            catch (error) {
                toast.error(error.message)
            }
        }
    }

    const googleLogin = async () => {
        try {
            const data = await signInWithPopup(auth, provider)
            const credential = GoogleAuthProvider.credentialFromResult(data);
            const token = credential.accessToken;
            const user = data.user;

            if (user) {
                window.location = "/auth"
            }

        } catch (error) {
            const credential = GoogleAuthProvider.credentialFromError(error);
            toast.error(error.message)
        }
    }

    return (
        <div className="auth">
            <div className="auth-container">
                <h2>{signUp ? "REGISTER" : "LOGIN"}</h2>
                <input name="email" value={authData.email} onChange={onChangeFunc} type="email" placeholder="Email" />
                <input name="password" value={authData.password} onChange={onChangeFunc} type="password" placeholder="Password" />
                <div onClick={googleLogin} className="auth-container-google">Google ile Giriş Yap</div>
                <p onClick={() => setSignUp(!signUp)}>{signUp ? "Daha önceden kayıt oldunuz mu?" : "Kayıt olmak mı istiyorsun ?"}</p>
                <div onClick={authFunc} className="auth-container-button">{signUp ? "Register" : "Login"}</div>
            </div>
        </div>
    )
}

export default Auth
