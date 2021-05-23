import React, { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';


export function Profile() {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');
    const [birthday, setBirthday] = useState('');
    const [avatar, setAvatar] = useState('');
    // const redirect = props.location.search
    // ? props.location.search.split('=')[1]
    // : '/';

    // const userRegister = useSelector(state => state.userRegister);
    // const { userInfo } = userRegister;

    // const dispatch = useDispatch();
    // const submitHandler = e => {
    //     e.preventDefault();   //when clicked on the button the form will not be refreshed
    //     if (password !== repeatPassword) {
    //         alert('Passwords do not match!');
    //     }
    //     dispatch(register(firstName, lastName, email, password, birthday));
    // };

    // useEffect(() => {
    //     if(userInfo) {
    //         props.history.push(redirect);
    //     }
    // }, [props.history, redirect, userInfo]);

    return (
        <div className="my-profile">
            <div className="start-wrapper">
                <p className="my-profile-text">My Profile</p>
                <hr/>
            </div>
            <div className="profile-container"> 
                <div className="profile-image-wrapper">
                    <img src="images/profile2.jpg" alt="avatar"></img>
                    <button className="change-avatar-btn">CHANGE AVATAR</button>
                </div>
                <div className="col-2-2">
                    <form className="form">
                        <div>
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
                                <button className="save-btn" type="submit">SAVE</button>
                            </div>
                        </div>
                        <div>
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
