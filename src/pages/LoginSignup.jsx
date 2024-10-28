import React, { useState } from 'react';
import './CSS/LoginSignup.css';

const LoginSignup = () => {
    const [isLogin, setIsLogin] = useState(false);
    const [formData, setFormData] = useState({ username: '', email: '', password: '' });
    const [message, setMessage] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const url = isLogin ? '/api/login' : '/api/signup';
        try {
            const response = await fetch(`http://localhost:5000${url}`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });
            const data = await response.json();
            if (response.ok) {
                setMessage(isLogin ? data.message : 'Sign-up successful. Please log in.');
                if (!isLogin) setIsLogin(true);
            } else {
                setMessage(data.message);
            }
        } catch (error) {
            setMessage('Error connecting to the server');
        }
    };

    return (
        <div className='loginsignup'>
            <div className='loginsignup-container'>
                <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
                <div className='loginsignup-fields'>
                    {!isLogin && (
                        <input
                            type='text'
                            name='username'
                            placeholder='Your Name'
                            value={formData.username}
                            onChange={handleChange}
                        />
                    )}
                    <input
                        type='email'
                        name='email'
                        placeholder='Email Address'
                        value={formData.email}
                        onChange={handleChange}
                    />
                    <input
                        type='password'
                        name='password'
                        placeholder='Password'
                        value={formData.password}
                        onChange={handleChange}
                    />
                </div>
                <button onClick={handleSubmit}>Continue</button>
                <p className='loginsignup-login'>
                    {isLogin ? 'Need an account?' : 'Already have an account?'}{' '}
                    <span onClick={() => setIsLogin(!isLogin)}>
                        {isLogin ? 'Sign Up here' : 'Login here'}
                    </span>
                </p>
                {message && <p className='loginsignup-message'>{message}</p>}
                {!isLogin && (
                    <div className='loginsignup-agree'>
                        <input type='checkbox' name='' id='' />
                        <p>By continuing, I agree to the terms of use & privacy policy</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default LoginSignup;
