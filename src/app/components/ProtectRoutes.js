'use client'
import { redirect } from 'next/navigation'
import { useState, useEffect } from 'react'

const ProtectRoutes = ({ children }) => {

    const [token, setToken] = useState(null)

    useEffect(() => {
        setToken(localStorage.getItem("token"))
    }, [])

    if (!token) {
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