import { 
    EuiButton, 
} from '@elastic/eui/'
import React, {useState} from 'react'
import {ModalView} from "./modalView"
import {useSelector, useDispatch} from 'react-redux'
import * as types from "../reduxStore/types/todoList"

export const TodoAddEdit = () => {
    const todoModal = useSelector(state => state.TodoList.todoModal)
    const dispatch = useDispatch() 

    return(
        <>
            {todoModal && <ModalView />}
            
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