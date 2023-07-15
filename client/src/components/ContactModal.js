import React, { useRef } from 'react'
import { Modal,Form, Button } from 'react-bootstrap'
import {useContacts} from '../contexts/ContextProvider'

export default function ContactsModal({setModal}) {
    const ContactId=useRef()
    const Name=useRef()
    const {CreateContacts}=useContacts()
    const HandleSumit=(event)=>{
        event.preventDefault()
        CreateContacts(ContactId.current.value, Name.current.value)
        setModal(false)
    }
  return (
    <>
    <Modal.Header closeButton>Create Contact</Modal.Header>
    <Modal.Body>
    <Form onSubmit={HandleSumit}>
        <Form.Group className='mb-3'>
            <Form.Label>Contact Id:</Form.Label>
            <Form.Control type='text' ref={ContactId} required></Form.Control>
        </Form.Group>
        <Form.Group className='mb-3'>
             <Form.Label>Name:</Form.Label>
             <Form.Control type='text' ref={Name} required></Form.Control>
        </Form.Group>
        <Button type='submit' className='me-2'>Create</Button>  
    </Form>
    </Modal.Body>
    </>
  )
}
