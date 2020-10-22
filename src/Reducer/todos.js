const Initial ={
    data:[],
};

const todos = (state=Initial, action)=>{
    switch(action.type){
        case "add_todo":
            return{...state,
            data:[...state.data,
                {
                    message: action.message,
                    id:action.id,
                },
            ],
            };
        case "del_todo":
            const todos =state.data.filter((todo)=> todo.id !== action.id);

            return{...state,
                data:todos,
            };
        default:
            return state;
    }
};

export default todos;