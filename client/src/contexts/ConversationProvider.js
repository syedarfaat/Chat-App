import React, { createContext, useContext, useState } from 'react'
import useLocalStorage from '../hooks/useLocalStorage'
import { useContacts } from './ContextProvider'
const ConversationsContext = React.createContext()

export function useConversations() {
    return useContext(ConversationsContext)
}
export function ConversationProvider({ children,id }) {
    console.log('in conversations')
    const [Conversations, setConversations] = useLocalStorage('conversations', [])
    const[selectedConversation,setSelectedConversation]=useState(0)
    const { contacts } = useContacts()

    function createConversation(recipients) {
        setConversations(prevConversations => { 
            return [...prevConversations, { recipients, messages:[] }] })
    }

    
    function addMessage({selectedRecipients,text,sender})
    {
        
        setConversations(prevConversations=>
            { 
                let madeChange=false;
                const newMessage={sender,text}
            const newConversation=prevConversations.map(conversation=>{
            if (checkEquality(conversation.recipients,selectedRecipients))
            {

                madeChange=true;
        
              return{...conversation,messages:[...conversation.messages,newMessage]}
              
              
            }
            return conversation
            
      })
      if(madeChange)
      {
        return newConversation

      }else
      {
        return [...prevConversations,{selectedRecipients,messages:[newMessage]}]
      

    }})}
    function checkEquality(currR,conR)
    {
        if(currR.length !==conR.length)return false
        currR.sort()
        conR.sort()
        return currR.every((element,index)=>{
            return element===conR[index]
        })
    }

    function sendMessage(selectedRecipients,text){
        addMessage({selectedRecipients,text,sender: id})
        

    }

    const formattedConvs = Conversations.map((conversation,index) => {
       const recipients=conversation.recipients.map(recipient=>{
          const contact= contacts.find(contact=>{
              return contact.id===recipient
            })
            const name=(contact&&contact.name)||recipient
            return {id:recipient,name}

            
        })
        const messages=conversation.messages.map(message=>{
            const contact= contacts.find(contact=>{
                return contact.id===message.sender
              })
              
              const SenderName=(contact&&contact.name)||message.sender
              const fromMe=message.sender===id
               return {...message,SenderName,fromMe}
        })

            const selected=selectedConversation===index
            return {...conversation,messages, recipients,selected}
        })
        const value={
            Conversations:Conversations,
            createConversation:createConversation,
            formattedConvs:formattedConvs,
            currentConversation:formattedConvs[selectedConversation],
            setSelectedConversation:setSelectedConversation,
            sendMessage:sendMessage
        }
        
    
    return (
        <ConversationsContext.Provider value = {value}> { children } 
            </ConversationsContext.Provider>
    )
}