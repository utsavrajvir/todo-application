import React from "react"
import {useSelector} from "react-redux"
import {Task} from "../Task"
import {EuiSpacer} from "@elastic/eui"

export const ActiveTodosList = () => {
    const todoListReducer = useSelector(state => state.TodoList.todoList)
    
    return(
        <>
          {
            todoListReducer.map((todo, index) => (
                <>
                    {todo.status == 'active' && (
                        <>
                            <Task todo={todo} index={index}/>
                            <EuiSpacer />
                        </>
                    )}
                </>
            ))
          }  
        </>
    )
}