import React, {useEffect} from 'react'
import {
  EuiFlexGroup,
  EuiFlexItem,
  EuiSideNav,
  EuiText,
  EuiSpacer
} from "@elastic/eui"
import {AllTodoRecords} from "./AllTodoRecords"
import {ActiveTodoRecords} from "./ActiveTodoRecords"
import {CompletedTodoRecords} from "./CompletedTodoRecords"
import {ModalView} from "./TodoAddEdit/modalView"
import {useSelector, useDispatch} from 'react-redux'
import * as types from "./reduxStore/types/todoList"
import "./style.css"

const App = () => {
  // const [selectedTab, setSelectedTab] = useState('all')
  const todoModal = useSelector(state => state.TodoList.todoModal)
  const selectedTab = useSelector(state => state.TodoList.selectedTab)
  const dispatch = useDispatch()
  
  useEffect(() => {
    if(localStorage.getItem('todoData')){
      let list = JSON.parse(localStorage.getItem('todoData'))
      dispatch({
        type: types.SET_TODO_LIST,
        payload: {
            todoList: list
        }
    })
    }
  }, [])

  const onChangeTab = (id) => {
    dispatch({
      type: types.SET_SELECTED_TAB,
      payload: {
        selectedTab: id
      }
    })
  }

  const sideNav = [
    {
      name: '',
      id: 0,
      items: [
        {
            id: 'all',
            name: 'All',
            onClick: () => onChangeTab('all'),
            isSelected: selectedTab === 'all'
        },
        {
            id: 'active',
            name: 'Active',
            onClick: () => onChangeTab('active'),
            isSelected: selectedTab === 'active'
        },
        {
            id: 'completed',
            name: 'Completed',
            onClick: () => onChangeTab('completed'),
            isSelected: selectedTab === 'contacts'
        }
      ],
    },
  ];

  const selectedComponent = () => {
    switch(selectedTab){
        case 'all':
            return <AllTodoRecords />
        case 'active':
            return <ActiveTodoRecords />
        case 'completed':
            return <CompletedTodoRecords />
    }
  }

  return(
    <>
      {todoModal && <ModalView />}
      <EuiFlexItem className="headingStyle">
        <EuiText><h3> Todo App </h3></EuiText>
      </EuiFlexItem>

      <EuiSpacer />

      <EuiFlexGroup direction="row">
        <EuiFlexItem grow={2}>
          <EuiSideNav className="navigationStyle" items={sideNav}/>
        </EuiFlexItem>
        
        <div style={{backgroundColor: '#D3DAE6', width: '1.1px', margin: '0px 10px'}}></div>

        <EuiFlexItem grow={8}>
          {selectedComponent()}
        </EuiFlexItem>
      </EuiFlexGroup>
    </>
  )
} 

export default App;
