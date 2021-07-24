import { 
    EuiButton, 
} from '@elastic/eui/'
import React from 'react'
import * as types from "../reduxStore/types/todoList"
import {useDispatch} from 'react-redux'

export const TodoAddEdit = () => {
    const dispatch = useDispatch() 

    return(
        <>
            <EuiButton onClick={() => {
                dispatch({
                    type: types.SET_TODO_MODAL,
                    payload: {
                        todoModal: true
                    }
                })
            }} fill style={{width: '200px'}}>
                Add
            </EuiButton>
        </>
    )
}