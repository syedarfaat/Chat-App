import React, { useEffect, useState } from 'react'

export default function useLocalStorage(key, initialValue) {
    const Localkey = 'chat-app-' + key;
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
            localStorage.setItem(Localkey, JSON.stringify(value))
        }, [Localkey, value]
    )
    return (
        [value, setvalue])
}