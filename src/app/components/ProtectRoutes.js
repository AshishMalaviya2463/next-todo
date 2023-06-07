'use client'
import { redirect } from 'next/navigation'
import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'

const ProtectRoutes = ({ children }) => {

    const { authDetails } = useSelector(state => state)
    const [token, setToken] = useState(authDetails.token)

    useEffect(() => {
        setToken(authDetails.token)
    }, [])

    if (!token || token === null) {
        if (window.location.pathname.includes("/registration") || window.location.pathname.includes("/login")) {
            return children
        } else {
            redirect("/login")
        }
    } else {
        if (window.location.pathname.includes("/registration") || window.location.pathname.includes("/login")) {
            redirect("/todos")
        } else {
            return children
        }
    }
}

export default ProtectRoutes