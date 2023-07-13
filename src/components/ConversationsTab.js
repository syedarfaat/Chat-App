import React from 'react'
import { useConversations } from '../contexts/ConversationProvider'
import { ListGroup, ListGroupItem } from 'react-bootstrap'


export default function ConversationsTab() {
  const {formattedConvs,setSelectedConversation}=useConversations()
  

  return (
    <ListGroup>{formattedConvs.map((conversation,index)=>(
      <ListGroupItem key={index} action active={conversation.selected} onClick={()=>setSelectedConversation(index)}>{conversation.recipients.map(recipient=>recipient.name).join(', ')}</ListGroupItem>))}</ListGroup>
    )
}
