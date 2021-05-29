import React, { useEffect, useState } from 'react';
import { getUser, updateUser } from '../actions/userActions';
import { useDispatch, useSelector } from 'react-redux';


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

    const userLogin = useSelector(state => state.userLogin);
    const { userInfo } = userLogin;
    const getUserDetails = useSelector(state => state.getUser);
    const { user } = getUserDetails;

    // const handleLogout = () => {
    //     dispatch(logout());
    //     props.history.push("/signin");
    // dispatch(update({ userId: userInfo._id, email, name, password }))
    //   }

    const dispatch = useDispatch();
    const submitHandler = e => {
        e.preventDefault();
        if (password !== repeatPassword) {
            alert('Passwords do not match!')
        }
        dispatch(updateUser({
            userId: user._id,
            firstName, lastName, email, password, birthday, avatar
        }));
    };

    useEffect(() => {
        // if user is null
        if (!user) {
            dispatch(getUser(userInfo._id));
        }
        setFirstName(firstName);
        setLastName(lastName);
        setEmail(email);
        setFirstName(firstName);
        setPassword(password);
        setRepeatPassword(repeatPassword);
        setBirthday(birthday);
        setAvatar(avatar);

    }, [dispatch, userInfo._id, user]);  //koga user od null preminuva vo objekt useEfekt uste ednas ranuva

    return (
        <div className="my-profile">
            <div className="start-wrapper">
                <p className="my-profile-text">My Profile</p>
                <hr />
            </div>
            <form className="profile-container" onSubmit={submitHandler}>
                <div className="profile-image-wrapper">
                    <img className="avatar" src="images/profile2.jpg" alt="avatar"></img>
                    <button className="change-avatar-btn">CHANGE AVATAR</button>
                </div>
                <div className="content">
                    <div className="content-left">
                        <div>
                            <label htmlFor="firstName">First Name</label>
                            <input
                                type="text"
                                id="firstName"
                                placeholder="First Name"
                                required
                                value={firstName}
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
                                value={email}
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
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                            />
                        </div>
                        <br />
                        <div>
                            <label />
                            <button className="save-btn" type="submit">SAVE</button>
                        </div>
                    </div>
                    <div className="content-right">
                        <div>
                            <label htmlFor="lastName">Last Name</label>
                            <input
                                type="text"
                                id="lastName"
                                placeholder="Last Name"
                                required
                                value={lastName}
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
                                value={birthday}
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
                                value={repeatPassword}
                                onChange={e => setRepeatPassword(e.target.value)}
                            />
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}
