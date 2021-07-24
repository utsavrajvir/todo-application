import React, {useState} from "react"
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

export const ModalView = (props) => {
    const {setModal} = props
    const [titleValue, setTitleValue] = useState('')
    const [descriptionValue, setDescriptionValue] = useState('')
    // const todoListReducer = useSelector(state => state.TodoList.todoList)
    const todoListReducer = useSelector(state => state.TodoList.todoList)
    const dispatch = useDispatch()

    const closeModal = () => {
        setModal(false)
    }

    const onChangeTtile = (e) => {
        setTitleValue(e.target.value)
    }

    const onChangeDescription = (e) => {
        setDescriptionValue(e.target.value)
    }

    const onSubmit = () => {
        if(titleValue.trim() && descriptionValue.trim()){
            dispatch({
                type: types.SET_TODO_LIST,
                payload: {
                    todoList: [...todoListReducer, {id: htmlIdGenerator()(), title: titleValue, description: descriptionValue, status: 'all'}]
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