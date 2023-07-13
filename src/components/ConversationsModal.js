import React,{useRef, useState} from 'react'
import { Button, Form, Modal, ModalBody, ModalHeader } from 'react-bootstrap'
import { useContacts } from '../contexts/ContextProvider'
import { useConversations } from '../contexts/ConversationProvider'

export default function ConversationsModal({setModel}) {
  const {contacts}=useContacts()
  const {createConversation}=useConversations()
  const [SelectedContacts,setSelectedContacts]=useState([])
  const handleSubmit=(event)=>{
    event.preventDefault()
    createConversation(SelectedContacts)
    setModel(false)
    
  }
  const handleChange=(contactId)=>{

      if(SelectedContacts.includes(contactId))
      {
        setSelectedContacts(previousContacts=>previousContacts.filter(contact=>contact!==contactId))
      }
      else{
        setSelectedContacts(previousContacts=>[...previousContacts,contactId])
      }
    }
   
  
  return (
    <>
    <ModalHeader>
    <label >Select Contacts</label>
    </ModalHeader>
    <ModalBody>
    <Form onSubmit={handleSubmit}>
    <Form.Group className='mb-3'>
        {contacts.map(contact=>(
          <Form.Check 
          type='checkbox'
          label={contact.name}
          key={contact.id}
          onChange={()=>handleChange(contact.id)}
          value={SelectedContacts.includes(contact.id)}
          />
        ))}
    </Form.Group>
    
    <Button type='submit'>Submit</Button>
    </Form>
    </ModalBody>
    </>
  )
}
