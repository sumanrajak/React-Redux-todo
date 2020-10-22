import React from 'react'
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';
import {connect} from "react-redux";
import {addTodo} from './Actions'
import './App.css';



const Add = (props) => {
    return (
        <div>
             <form onSubmit={(event)=>{
                 event.preventDefault();
                 let input = event.target.uinput.value;
                props.dispatch(addTodo(input));
                event.target.uinput.value="";
             }} noValidate >
  
        <TextField id="outlined-basic" label="add todo" variant="outlined"  name='uinput'/>
        <Button variant="contained" onClick={()=>{
            console.log("hi")
        }}  color="primary"  type="submit">
        Add
        </Button>
        </form>
        </div>
    )
}

export default connect()(Add)
