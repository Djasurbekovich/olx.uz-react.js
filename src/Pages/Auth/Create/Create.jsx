import React from 'react';
import '../Auth.scss';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { auth, provider } from '../../../Firebase/firebaseconfig';

const Create = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleAuthWithGoogle = () => {
        auth.signInWithPopup(provider)
            .then(res => {
                if(res.user.email){
                    dispatch({email: res.user.email, type: 'SEND_EMAIL'})
                    authWithGoogle(res)
                    navigate('/')
                }
            })
    }
            
    const authWithGoogle = (res) => {
        fetch('https://api.escuelajs.co/api/v1/users/', {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({
                name: res.user.multiFactor.user.displayName,
                email: res.user.multiFactor.user.email,
                password: 7777777,
                avatar: res.user.multiFactor.user.photoURL
            })
        }).then(res => res.json()).then(data => {
            console.log(data);
        })
    }
    return (
        <div>
            <form className='auth__form-input'>
                <input className='auth__input' type="text" placeholder='Your name' />
                <input className='auth__input' type="email" required placeholder='Your email' />
                <input className='auth__input' type="password" required placeholder='Your password' minLength={8} />
                <input className='auth__input' type="url" required placeholder='Your avatar' />
                <button className='auth__btn' type='submit'>Create account</button>
            </form>
            <div className='auth__line-box'>
                <div className='auth__line'></div>
                <p className='auth__or'>or</p>
                <div className='auth__line'></div>
            </div>
            <div className='auth__SM'>
                <button onClick={handleAuthWithGoogle} className='auth__btn-google'>Sign in with Google</button>
            </div>
        </div>
    );
}

export default Create;