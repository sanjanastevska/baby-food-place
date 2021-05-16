import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../actions/userActions';


export function Login(props) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();

    const redirect = props.location.search
        ? props.location.search.split('=')[1]
        : '/';

    const userLogin = useSelector(state => state.userLogin);
    const { userInfo } = userLogin;

    const submitHandler = e => {
        e.preventDefault();
        dispatch(login(email, password));
    };

    useEffect(() => {
        if (userInfo) {
            props.history.push(redirect);
        }
    }, [props.history, redirect, userInfo]);

    return (
        <div>
            <p className="start-main-page">Log In</p>
            <div className="row">
                <div className="col-1">
                    <p className="headerOne"><span className="orangeText">Welcome to </span>Baby's</p>
                    <p className="some-text">
                        All the Lorem Ipsum generators on the Internet tend to repeat<br />
                    predefined chunks as necessary, making this the first true generator on <br />
                    the Internet. It uses a dictionary of over 200 Latin words, combined with <br />
                    a handful of model sentence structures, to generate Lorem Ipsum which <br />
                    looks reasonable. The generated Lorem Ipsum is therefore always free <br />
                    from repetition, injected humour, or non-characteristic words etc.
                </p>
                </div>
                <div className="col-2">
                    <form onSubmit={submitHandler}>
                        <div>
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                placeholder="user@domain.com"
                                required
                                onChange={e => setEmail(e.target.value)}
                            />
                        </div>
                        <div>
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                id="password"
                                placeholder="*****"
                                required
                                onChange={e => setPassword(e.target.value)}
                            />
                        </div>
                        <br />
                        <div>
                            <label />
                            <button className="primary" type="submit">LOG IN</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
