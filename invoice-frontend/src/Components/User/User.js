import React from 'react'
import { Link } from "react-router-dom";
import './User.css';

export default function User() {
    return (
        <div className="userContainer" >
            <div className='userContentWrapper'>
                <div className='userCard'>
                    <h1 className="userCardText">Hello User</h1>
                    <div className='userArea'>
                        <form className='userForm'>
                            <div className='input-area'>
                                <div className='input-block userUsernameDiv'>
                                    <label className="userFormLabels"  htmlFor='username'>Username</label>
                                    <input
                                        disabled
                                        className="userFormInputs" 
                                        id='username'
                                        type='text'
                                        placeholder='Name of the user'
                                        // value={username}
                                        // onChange={(e) => setUsername(e.target.value)}
                                    />
                                </div>
                                <div className='input-block userAgeDiv'>
                                    <label className="userFormLabels" htmlFor='age'>Age</label>
                                    <input
                                        disabled
                                        className="userFormInputs" 
                                        id='text'
                                        type='text'
                                        placeholder='Age of the user'
                                        // value={password}
                                        // onChange={(e) => setPassword(e.target.value)}
                                    />
                                </div>
                                <div className='input-block userPassDiv'>
                                    <label className="userFormLabels" htmlFor='password'>Password</label>
                                    <input
                                        disabled
                                        className="userFormInputs" 
                                        id='text'
                                        type='text'
                                        placeholder='Password of the user'
                                        // value={password}
                                        // onChange={(e) => setPassword(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="userBtns">
                                <Link to="/list" >
                                        <button className='userButton checkBtn'>Check invoices list</button>
                                </Link>
                                <Link to="/user/edit">
                                        <button className='userButton editBtn'>Edit my profile</button>
                                </Link>
                            </div>
                            
                        </form>
                    </div>
                </div> 
            </div>
        </div>
    )
}
