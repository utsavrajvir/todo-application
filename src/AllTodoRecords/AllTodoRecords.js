import React, { useEffect } from "react"
import {
    EuiFlexItem,
    EuiHorizontalRule,
    EuiText,
    EuiPanel,
    EuiSpacer,
} from "@elastic/eui"
import "../style.css"
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
                <TodoAddEdit />
            </EuiFlexItem>

            <EuiSpacer />

            <EuiFlexItem className="panelStyle">

                <EuiFlexItem className="allPanel">
                    <EuiText>All Tasks</EuiText>
                    
                    <EuiPanel className="paddingM">
                        <AllTodosList />
                    </EuiPanel>

                </EuiFlexItem>

                <EuiFlexItem className="allPanel" >
                    <EuiText>Active Tasks</EuiText>

                    <EuiPanel className="paddingM">
                        <ActiveTodosList />
                    </EuiPanel>

                </EuiFlexItem>

                <EuiFlexItem className="allPanel" >
                    <EuiText>Completed Tasks</EuiText>

                    <EuiPanel className="paddingM">
                        <CompletedTodosList />
                    </EuiPanel>

                </EuiFlexItem>
            </EuiFlexItem>

        </EuiFlexItem>
    )
}