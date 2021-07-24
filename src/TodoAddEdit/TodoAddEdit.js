import { 
    EuiButton, 
} from '@elastic/eui/'
import React, {useState} from 'react'
import {ModalView} from "./modalView"

export const TodoAddEdit = () => {
    const [modal, setModal] = useState(false)

    return(
        <>
            {modal && <ModalView setModal={setModal}/>}
            
            <EuiButton onClick={() => setModal(true)} fill style={{width: '200px'}}>
                Add
            </EuiButton>
        </>
    )
}