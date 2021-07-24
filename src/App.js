import React, {useState} from 'react'
import {
  EuiFlexGroup,
  EuiFlexItem,
  EuiSideNav,
  EuiText,
  EuiSpacer
} from "@elastic/eui"
import {AllTodoRecords} from "./AllTodoRecords"
import "./style.css"

const App = () => {
  const [selectedTab, setSelectedTab] = useState('all')

    const sideNav = [
      {
        name: '',
        id: 0,
        items: [
          {
              id: 'all',
              name: 'All',
              onClick: () => setSelectedTab('all'),
              isSelected: selectedTab === 'all'
          },
          {
              id: 'active',
              name: 'Active',
              onClick: () => setSelectedTab('active'),
              isSelected: selectedTab === 'active'
          },
          {
              id: 'completed',
              name: 'Completed',
              onClick: () => setSelectedTab('completed'),
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
              return 'Active'
          case 'completed':
              return 'Completed'
      }
    }

  return(
    <>
      <EuiFlexItem className="headingStyle">
        <EuiText><h3> Todo App </h3></EuiText>
      </EuiFlexItem>

      <EuiSpacer />

      <EuiFlexGroup style={{ display: 'flex', flexDirection: 'row'}}>
        <EuiFlexItem grow={2}>
          <EuiSideNav style={{ padding: '0px 15px 15px' }} items={sideNav}/>
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
