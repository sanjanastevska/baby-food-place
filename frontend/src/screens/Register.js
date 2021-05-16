import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../actions/userActions';

export function Register() {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');
    const [birthday, setBirthday] = useState('');

    // const redirect = props.location.search
    // ? props.location.search.split('=')[1]
    // : '/';

    // const userRegister = useSelector(state => state.userRegister);
    // const { userInfo } = userRegister;

    const dispatch = useDispatch();
    const submitHandler = e => {
        e.preventDefault();   //when clicked on the button the form will not be refreshed
        if (password !== repeatPassword) {
            alert('Passwords do not match!');
        }
        dispatch(register(firstName, lastName, email, password, birthday));
    };

    // useEffect(() => {
    //     if(userInfo) {
    //         props.history.push(redirect);
    //     }
    // }, [props.history, redirect, userInfo]);

    return (
        <div>
            <p className="start-main-page">Create Account</p>
            <div className="row-2">
                <div className="col-2-1">
                    <p className="headerOne"><span className="orangeText">Create your </span><br />account</p>
                    <p className="diff-width">
                        All the Lorem Ipsum generators on the <br />
                        Internet tend to repeat predefined chunks <br />
                        as necessary, making this the first true <br />
                        generator on the Internet. It uses a <br />
                        dictionary of over 200 Latin words,<br />
                        combined with a handful of model <br />
                        sentence structures, to generate Lorem <br />
                        Ipsum which looks reasonable.
                    </p>
                </div>
                <div className="col-2-2">
                    <form className="form" onSubmit={submitHandler}>
                        <div className="form-1" >
                            <div>
                                <label htmlFor="firstName">First Name</label>
                                <input
                                    type="text"
                                    id="firstName"
                                    placeholder="First Name"
                                    required
                                    onChange={e => setFirstName(e.target.value)}
                                />
                            </div>
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
                                <button className="register-btn1" type="submit">CREATE ACCOUNT</button>
                            </div>
                        </div>
                        <div className="form-1">
                            <div>
                                <label htmlFor="lastName">Last Name</label>
                                <input
                                    type="text"
                                    id="lastName"
                                    placeholder="Last Name"
                                    required
                                    onChange={e => setLastName(e.target.value)}
                                />
                            </div>
                            <div>
                                <label htmlFor="birthday">Birthday</label>
                                <input
                                    type="date"
                                    id="birthday"
                                    placeholder="mm/dd/yyyy"
                                    required
                                    onChange={e => setBirthday(e.target.value)}
                                />
                            </div>
                            <div>
                                <label htmlFor="repeatPassword">Repeat Password</label>
                                <input
                                    type="password"
                                    id="repeatPassword"
                                    placeholder="*****"
                                    required
                                    onChange={e => setRepeatPassword(e.target.value)}
                                />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
