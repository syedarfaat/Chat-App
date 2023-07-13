import React from 'react'
import SideBar from './SideBar'
import OpenConvo from './OpenConvo'
import { useConversations } from '../contexts/ConversationProvider'


export default function DashBoard({Id}) {
  const {selectedConversation}=useConversations()
  
  return (
    <div className='d-flex' style={{height:'100vh'}}>
    <SideBar Id={Id} />
    
  {selectedConversation!==null&&<OpenConvo />}
    
    
    </div>
  )
}
