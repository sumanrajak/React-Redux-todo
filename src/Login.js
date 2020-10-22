import React from 'react'
import './App.css';


function Login() {
    return (
        <div className='login'>
            <h1>LOGIN</h1>
            <div className="body">

                <form >
                    <label >USERNAME</label>
                    <input type ="text "></input>
                    <label>PASSWORD</label>

                    <input type ="text "></input>
                    <button type ="submit"> login</button>
                    <button type ="submit"> regstr</button>

                    

                </form>
            </div>
        </div>
    )
}

export default Login
