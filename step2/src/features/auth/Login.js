import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setCredentials } from './authSlice';
import { fetchUserData } from './authSlice'; // Import fetchUserData thunk
import { useLoginMutation } from './authApiSlice';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errMsg, setErrMsg] = useState('');

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [login, { isLoading }] = useLoginMutation();

    useEffect(() => {
        setErrMsg('');
    }, [email, password]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            console.log('Attempting login with email:', email);
            const loginData = await login({ email, password }).unwrap();
            console.log('Login successful. Full login data received:', loginData);

            // Set credentials after login
            dispatch(setCredentials({ ...loginData }));

            // Fetch user data using the token from login
            const accessToken = loginData.accessToken;
            if (accessToken) {
                await dispatch(fetchUserData(accessToken)).unwrap();
            }

            navigate('/menu'); // Navigate to the menu page after successful login

            setEmail('');
            setPassword('');
        } catch (err) {
            console.error('Login error:', err);
            if (!err.status) {
                setErrMsg('No Server Response');
            } else if (err.status === 400) {
                setErrMsg('Missing Email or Password');
            } else if (err.status === 401) {
                setErrMsg('Unauthorized');
            } else {
                setErrMsg(err.data?.message || 'Login Failed');
            }
        }
    };

    const handleEmailInput = (e) => setEmail(e.target.value);
    const handlePwdInput = (e) => setPassword(e.target.value);

    const content = isLoading ? (
        <div className="login-container">
            <h1>Loading...</h1>
        </div>
    ) : (
        <div className="login-container">
            <div className="login-box">
                <header className="login-header">
                    <h1>Customer Login</h1>
                </header>
                <main className="login-form">
                    {errMsg && <p className="error-message" aria-live="assertive">{errMsg}</p>}

                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="email">Email:</label>
                            <input
                                type="email"
                                id="email"
                                onChange={handleEmailInput}
                                value={email}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="password">Password:</label>
                            <input
                                type="password"
                                id="password"
                                onChange={handlePwdInput}
                                value={password}
                                required
                            />
                        </div>
                        <button type="submit" className="submit-button">Sign In</button>
                    </form>
                </main>
                <footer className="login-footer">
                    <p>
                        Don't have an account? <a href="/register">Register here</a>
                    </p>
                </footer>
            </div>
        </div>
    );

    return content;
};

export default Login;
