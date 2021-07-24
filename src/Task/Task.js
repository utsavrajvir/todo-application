import { 
    EuiPanel, 
    EuiText, 
    EuiSpacer, 
    EuiCheckbox, 
    htmlIdGenerator, 
    EuiFlexItem, 
    EuiFormRow,
    EuiIcon
} from '@elastic/eui'
import React, { useState } from 'react'
import "../style.css"
import {useSelector, useDispatch} from "react-redux"
import * as types from "../reduxStore/types/todoList"

export const Task = (props) => {
    const {todo, index} = props
    const [checked, setChecked] = useState(false)
    const todoListReducer = useSelector(state => state.TodoList.todoList)
    const selectedTab = useSelector(state => state.TodoList.selectedTab)
    const dispatch = useDispatch()

    const onChange = (e) => {
        if(e.target.checked){
            setChecked(e.target.checked)
            let list = [...todoListReducer]
            list[index] = {...todo, status: todo.status == 'active' ? 'completed' : 'active'}
            dispatch({
                type: types.SET_TODO_LIST,
                payload: {
                    todoList: list
                }
            })
            localStorage.setItem('todoData', JSON.stringify(list))
        }
    }

    const onEdit = () => {
        dispatch({
            type: types.SET_EDIT_TODO,
            payload: {
                editTodo: todo
            }
        })
        dispatch({
            type: types.SET_TODO_MODAL,
            payload: {
                todoModal: true
            }
        })
    }

    const onDelete = () => {
        let list = [...todoListReducer]
        list.splice(index, 1)
        dispatch({
            type: types.SET_TODO_LIST,
            payload: {
                todoList: list
            }
        })
        localStorage.setItem('todoData', list)
    }

    return (
        <EuiPanel className="row marginRightM">

            {
               todo.status != 'completed' && selectedTab == 'all' && (
                <EuiFlexItem style={{width: '10%'}}>
                    <EuiCheckbox
                        id={htmlIdGenerator()()}
                        label=""
                        checked={checked}
                        onChange={(e) => onChange(e)}
                    />
                </EuiFlexItem>
               )
            }
            
            <EuiFlexItem grow={8}>
                <EuiFormRow label="Title">
                    <EuiText>
                        {todo.title}
                    </EuiText>
                </EuiFormRow>
                
                <EuiSpacer />

                <EuiFormRow label="Description">
                    <EuiText>
                        {todo.description}
                    </EuiText>
                </EuiFormRow>
            </EuiFlexItem>

            {
                todo.status != 'completed' && (
                    <EuiFlexItem style={{flexDirection: 'column', alignItems: 'space-around'}} grow={2}>
                        <EuiFlexItem>
                            <EuiIcon 
                                style={{cursor: 'pointer'}}
                                type='pencil' 
                                onClick={onEdit}
                            />
                        </EuiFlexItem>

                        <EuiSpacer />

                        <EuiFlexItem>
                            <EuiIcon 
                                type="trash" 
                                style={{cursor: 'pointer'}}
                                onClick={onDelete}
                            />
                        </EuiFlexItem>
                    </EuiFlexItem>
                )
            }
            
        </EuiPanel>
    )
}