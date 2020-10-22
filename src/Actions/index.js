const add_todo='add_todo'

 export const addTodo =(message)=>(
{    type: add_todo,
    message,
    id: Math.random(),
})

  const del_todo='del_todo'

 export const delTodo =(id)=>(
{    type: del_todo,
    id,
})