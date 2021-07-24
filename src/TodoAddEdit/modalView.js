import React, {useEffect, useState} from "react"
import {useDispatch, useSelector} from "react-redux"
import * as types from "../reduxStore/types/todoList"
import { 
    EuiButton, 
    EuiOverlayMask,
    EuiModal,
    EuiModalBody,
    EuiModalFooter,
    EuiModalHeader,
    EuiModalHeaderTitle,
    EuiText,
    EuiFieldText,
    EuiTextArea,
    htmlIdGenerator,
    EuiFormRow
} from '@elastic/eui/'
import {isEmpty} from 'lodash'

export const ModalView = (props) => {
    const {todo} = props
    const [titleValue, setTitleValue] = useState('')
    const [descriptionValue, setDescriptionValue] = useState('')
    // const todoListReducer = useSelector(state => state.TodoList.todoList)
    const todoListReducer = useSelector(state => state.TodoList.todoList)
    const editTodoReducer = useSelector(state => state.TodoList.editTodo)
    const dispatch = useDispatch()

    useEffect(() => {
        if(!isEmpty(editTodoReducer)){
            setTitleValue(editTodoReducer.title)
            setDescriptionValue(editTodoReducer.description)
        }
    }, [editTodoReducer])

    const closeModal = () => {
        dispatch({
            type: types.SET_EDIT_TODO,
            payload: {
                editTodo: {}
            }
        })
        dispatch({
            type: types.SET_TODO_MODAL,
            payload: {
                todoModal: false
            }
        })
        setTitleValue('')
        setDescriptionValue('')
    }

    const onChangeTtile = (e) => {
        setTitleValue(e.target.value)
    }

    const onChangeDescription = (e) => {
        setDescriptionValue(e.target.value)
    }

    const onSubmit = () => {
        if(titleValue.trim() && descriptionValue.trim() && isEmpty(editTodoReducer)){
            dispatch({
                type: types.SET_TODO_LIST,
                payload: {
                    todoList: [...todoListReducer, {id: htmlIdGenerator()(), title: titleValue, description: descriptionValue, status: 'all'}]
                }
            })
            closeModal()
        }else if(titleValue.trim() && descriptionValue.trim() && !isEmpty(editTodoReducer)){
            let list = [...todoListReducer]
            let index = list.findIndex(todo => todo.id == editTodoReducer.id)
            list[index] = {...editTodoReducer, title: titleValue, description: descriptionValue}
            dispatch({
                type: types.SET_TODO_LIST,
                payload: {
                    todoList: list
                }
            })
            closeModal()
        }
    }

    return(
        <EuiModal onClose={closeModal}>
            <EuiModalHeader>
            <EuiModalHeaderTitle>
                <EuiText><h2>Modal title</h2></EuiText>
            </EuiModalHeaderTitle>
            </EuiModalHeader>

            <EuiModalBody>
                <EuiFormRow label="Title">
                    <EuiFieldText 
                        value={titleValue}
                        onChange={(e) => onChangeTtile(e)}
                    />
                </EuiFormRow>

                <EuiFormRow label="Description">
                    <EuiTextArea 
                        value={descriptionValue}
                        onChange={(e) => onChangeDescription(e)}
                    />
                </EuiFormRow>
            </EuiModalBody>

            <EuiModalFooter>
                <EuiButton onClick={closeModal} fill>
                    Close
                </EuiButton>
                <EuiButton onClick={onSubmit} type='submit' fill>
                    save
                </EuiButton>
            </EuiModalFooter>
        </EuiModal>
    )
}