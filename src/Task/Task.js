import { EuiPanel, EuiText, EuiSpacer } from '@elastic/eui'
import React from 'react'
import "../style.css"

export const Task = (props) => {
    const {todo} = props

    return (
        <EuiPanel>
            <EuiText>
                {todo.title}
            </EuiText>
            
            <EuiSpacer />

            <EuiText>
                {todo.description}
            </EuiText>

        </EuiPanel>
    )
}