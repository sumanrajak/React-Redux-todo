import React from 'react'
import './App.css';


function Rejstr(props) {
    return (
        <div className='rejs'>
             <h1>rejs</h1>
             <div className="body">
            <form >
                <label >USERNAME</label>
                <input type ="text "></input>
                <label>PASSWORD</label>

                <input type ="text "></input>
                <label>type of account</label>

                <input type ="text "></input>
                <label>EMAIL</label>

                <input type ="text "></input>
                <button > upload pic</button>

                <button type ="submit"> SUBMIT</button>
                <button type ="submit"> back to login</button>

                

            </form></div>
        </div>
    )
}



export default Rejstr

