import React, { useCallback, useEffect, useRef, useState } from 'react'
import { useConversations } from '../contexts/ConversationProvider'
import { Form, FormControl, InputGroup, Button } from 'react-bootstrap'



export default function OpenConvo() {
    const {currentConversation,sendMessage}=useConversations()
    const [text,changeText]=useState('')
    const setRef=useCallback(node=>{
      if(node){
        node.scrollIntoView({smooth:true})
      }
    },[])

  function handleSubmit(e){
      e.preventDefault()
      sendMessage(currentConversation.recipients.map(r=>r.id),text)
      changeText('')
     
    }
    
    
    
   
  return (
    <div className='d-flex flex-column flex-grow-1'>
     <div className='flex-grow-1 overflow-auto'> 
     <div className=' d-flex flex-column align-items-start justify-content-end px-3'>
     
          {currentConversation.messages.map((message,index)=>{
            const lastMessage=currentConversation.messages.length-1===index
            return(
           <div 
           key={index}
           className={`${message.fromMe?'align-self-end':''} my-1 d-flex flex-column`}
           ref={lastMessage?setRef:null}
           >

               <div className={`rounded px-2  py-1 ${message.fromMe ? 'bg-primary text-white' : 'border'}`}
               >{message.text}</div>
               <div className={`text-muted small ${message.fromMe ? 'text-end' : ''}`}>{message.fromMe?'You':message.senderName} </div>
           </div>
            )
            
          })}
          
     </div>
     </div>
    <Form onSubmit={handleSubmit} className='position:sticky'>
    <Form.Group className='m-2'>
    <InputGroup>
      <FormControl
      as='textarea'
      required
      value={text}
      onChange={(e)=>changeText(e.target.value)}
      style={{height:'75px', resize:'none'}}
      
      
      />
      <Button type='submit'>Send</Button>
      

    </InputGroup>
    </Form.Group>
    </Form>
  
    </div>
  )
}
