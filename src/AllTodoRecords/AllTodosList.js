import { EuiSpacer } from "@elastic/eui"
import React from "react"
import {useSelector} from "react-redux"
import {Task} from "../Task"

export const AllTodosList = () => {
    const todoListReducer = useSelector(state => state.TodoList.todoList)
    
    return(
        <>
          {
            todoListReducer.map((todo, index)=> (
                <>
                    {todo.status === 'all' && (
                        <>
                            <Task todo={todo} index={index}/>
                            <EuiSpacer />
                        </>
                    )
                        
                    }
                </>
            ))
          }  
        </>
    )
}