import React from "react"
import {
    EuiFlexItem,
    EuiHorizontalRule,
    EuiText,
    EuiPanel,
    EuiSpacer
} from "@elastic/eui"
import "../style.css"
import {Task} from "../Task"
import {TodoAddEdit} from "../TodoAddEdit"
import {useSelector} from "react-redux"
import {AllTodosList} from "./AllTodosList"
import {ActiveTodosList} from "./ActiveTodosList"
import {CompletedTodosList} from "./CompletedTodosList" 

export const AllTodoRecords = () => {
    const todoListReducer = useSelector(state => state.TodoList.todoList)

    return(
        <EuiFlexItem>

            <EuiFlexItem>
                <EuiText><h3> Todo App </h3></EuiText>
            </EuiFlexItem>

            <EuiSpacer />

            <EuiFlexItem>
                <TodoAddEdit />
            </EuiFlexItem>

            <EuiSpacer />

            <EuiFlexItem style={{justifyContent: 'space-between', flexDirection: 'row'}}>

                <EuiFlexItem style={{width: '33%'}}>
                    <EuiText>All Tasks</EuiText>
                    
                    <EuiPanel className="paddingM">
                        <AllTodosList />
                    </EuiPanel>

                </EuiFlexItem>

                <EuiFlexItem style={{width: '33%'}} >
                    <EuiText>Active Tasks</EuiText>

                    <EuiPanel className="paddingM">
                        <ActiveTodosList />
                    </EuiPanel>

                </EuiFlexItem>

                <EuiFlexItem style={{width: '33%'}} >
                    <EuiText>Completed Tasks</EuiText>

                    <EuiPanel className="paddingM">
                        <CompletedTodosList />
                    </EuiPanel>

                </EuiFlexItem>
            </EuiFlexItem>

        </EuiFlexItem>
    )
}