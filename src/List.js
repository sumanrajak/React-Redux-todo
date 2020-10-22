import React from 'react'
import {connect} from "react-redux";
import {delTodo} from './Actions'
import { Button } from '@material-ui/core';
import './App.css';



function List(props) {
    return (
        <div className="list">
           {props.todos.map((todo,index)=>(
               <div className="items">{todo.message} <Button onClick={()=>{ props.dispatch(delTodo(todo.id))}} variant="contained"  color="secondary"  type="submit">
            DELT
            </Button></div>
    ))} 
        </div>
    )
}

const mapState=(state)=>({
    todos: state.todos.data
})

export default connect(mapState)(List);
