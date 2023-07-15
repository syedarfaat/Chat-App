import React, { useContext, useState } from 'react'
import useLocalStorage from '../hooks/useLocalStorage'
const ContactContext=React.createContext()
export function useContacts()
{
    return useContext(ContactContext)
}
export function ContextProvider({children}) {
    console.log('in contacts')
    const [contacts,setcontacts]=useLocalStorage('contacts',[])
    function CreateContacts(id,name)
    {
        setcontacts(previouscontacts=>{return [...previouscontacts,{id,name}]})
    }
    
return(
    <ContactContext.Provider value={{contacts, CreateContacts}}>
    {children}
    </ContactContext.Provider>
)
}
