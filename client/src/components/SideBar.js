import React, { useState } from 'react'
import ContactsTab from './ContactsTab'
import ConversationsTab from './ConversationsTab'
import {Button, Modal, Nav,Tab, TabContainer, TabContent, TabPane } from 'react-bootstrap'
import ConversationsModal from './ConversationsModal'
import ContactsModal from './ContactModal'
const CONVERSATIONS_KEY='conversations-key'
const CONTACTS_KEY='contacts-key'
export default function SideBar({Id}) {
    const [activeKey,setActiveKey]=useState(CONVERSATIONS_KEY)
    const [modalOpen,setModel]=useState(false)
    const ContactsOpen=activeKey===CONTACTS_KEY
    
  return (
<div style={{width:'250px'}} className='d-flex flex-column'>
    <TabContainer activeKey={activeKey} onSelect={setActiveKey}>
    <Nav variant='tabs' className='justify-content-center'>
    <Nav.Item>
    <Nav.Link eventKey={CONVERSATIONS_KEY}>Conversations</Nav.Link>
    </Nav.Item>
    <Nav.Item>
    <Nav.Link eventKey={CONTACTS_KEY}>Contacts</Nav.Link>
    </Nav.Item>
    
    </Nav>
    <TabContent className='border-end overflow-auto flex-grow-1'>
        <TabPane eventKey={CONVERSATIONS_KEY}>
            <ConversationsTab />
        </TabPane>
        <TabPane eventKey={CONTACTS_KEY}>
            <ContactsTab />
        </TabPane>
        
    </TabContent>
    <div className=' p-2 border-end border-top small'>
    <span className='text-muted'>Your Id:{Id}</span>
    </div>
    <Button className='rounded-0 border-end bg-primary' onClick={()=>setModel(true)}>
    New {ContactsOpen?'Contact':'Converstation'}</Button>
    </TabContainer>
    <Modal show={modalOpen} onHide={()=>setModel(false)}>
    {ContactsOpen?<ContactsModal setModal={setModel}/>:<ConversationsModal setModel={setModel}/>}
    </Modal>
</div>
  )
}
