import React from 'react'
import SideBar from './SideBar'
import OpenConvo from './OpenConvo'
import { useConversations } from '../contexts/ConversationProvider'


export default function DashBoard({Id}) {
  const {Conversations}=useConversations()
  
  return (
    <div className='d-flex' style={{height:'100vh'}}>
    <SideBar Id={Id} />
    
    {Conversations.length!==0&&<OpenConvo />}
    
    
    </div>
  )
}
