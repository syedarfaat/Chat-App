import React, { useEffect, useState } from 'react'

const PREFIX = 'chat-app-'
export default function useLocalStorage(key, initialValue) {
    const Localkey = PREFIX + key;

    const [value, setvalue] = useState(() => {
        const storedvalue = localStorage.getItem(Localkey)
        if (storedvalue != null) return JSON.parse(storedvalue)
        if (typeof initialValue === 'function') return initialValue()
        else {
            return initialValue
        }

    });
    useEffect(
        () => {
            console.log(Localkey)
            localStorage.setItem(Localkey, JSON.stringify(value))
        }, [Localkey, value]
    )
    return [value, setvalue]
}